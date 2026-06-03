import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, RmqOptions, Transport } from '@nestjs/microservices';
import { DynamicModule } from '@nestjs/common';

export function createRabbitMQConfig(
  configService: ConfigService,
  queue: string,
): RmqOptions {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
      queue,
      queueOptions: {
        durable: true,
      },
      noAck: false,
      prefetchCount: 20,
    },
  };
}

export const createRMQClientModule = (
  name: string,
  queue: string,
): DynamicModule =>
  ClientsModule.registerAsync([
    {
      name: name,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        transport: Transport.RMQ,
        options: {
          urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
          queue: queue,
          queueOptions: {
            durable: true,
          },
        },
      }),
      inject: [ConfigService],
    },
  ]);

export const usersServiceRMQClientModuleName = 'USERS_SERVICE_RMQ';
export const usersServiceRMQName = 'users_queue';

export const attendancesServiceRMQClientModuleName = 'ATTENDANCES_SERVICE_RMQ';
export const attendancesServiceRMQName = 'attendances_queue';

export const billingServiceRMQClientModuleName = 'BILLING_SERVICE_RMQ';
export const billingServiceRMQName = 'billing_queue';

export const coursesServiceRMQClientModuleName = 'COURSES_SERVICE_RMQ';
export const coursesServiceRMQName = 'courses_queue';

export const enrollmentsServiceRMQClientModuleName = 'ENROLLMENTS_SERVICE_RMQ';
export const enrollmentsServiceRMQName = 'enrollments_queue';

export const infrastructuresServiceRMQClientModuleName =
  'INFRASTRUCTURES_SERVICE_RMQ';
export const infrastructuresServiceRMQName = 'infrastructures_queue';

export const schedulesServiceRMQClientModuleName = 'SCHEDULES_SERVICE_RMQ';
export const schedulesServiceRMQName = 'schedules_queue';
