import { WinstonModule } from 'nest-winston';
import { LoggerService } from '@nestjs/common';
import winston from 'winston';
import { SeqTransport } from '@datalust/winston-seq';

/**
 * Creates a Winston logger configured for NestJS applications.
 * The logger writes logs to files and optionally to the console based on the environment.
 * @param service The name of the service to include in log metadata. e.g., 'user-service'.
 * @param level The minimum log level to log (e.g., 'info', 'error', 'debug').
 * @returns A LoggerService instance that can be used in NestJS applications.
 */
export const createWinstonLogger = (
  service: string,
  level: string,
): LoggerService =>
  WinstonModule.createLogger({
    level: level,
    format: winston.format.json(),
    defaultMeta: { service: service },
    transports: [
      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      new winston.transports.File({ filename: 'error.log', level: 'error' }),

      // - Write all logs with importance level of `info` or higher to `combined.log`
      //   (i.e., fatal, error, warn, and info, but not trace)
      new winston.transports.File({ filename: 'combined.log' }),

      // - Write all logs to the console as well
      ...(process.env.ENVIRONMENT == 'DEV'
        ? [new winston.transports.Console({ format: winston.format.cli() })]
        : []),

      new SeqTransport({
        serverUrl: `${process.env.SEQ_HOST_PROTOCOL}://${process.env.SEQ_HOST || 'localhost'}:${process.env.SEQ_PORT || '5341'}`,
        apiKey: process.env.SEQ_API_KEY || undefined,
        onError: (e) => console.error('Seq transport error:', e),
        handleExceptions: true,
        handleRejections: true,
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json(),
        ),
      }),
    ],
  });
