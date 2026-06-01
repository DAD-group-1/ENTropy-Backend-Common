import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

type DbType = DataSourceOptions['type'];

/**
 * Creates a dynamic database module for NestJS using TypeORM and configuration from environment variables.
 * This module can be imported into the main application module to set up the database connection.
 *
 * @returns {DynamicModule} A dynamic module configured for TypeORM with PostgreSQL.
 */
export const createDatabaseModule = (): DynamicModule =>
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: configService.get<DbType>('DB_TYPE', 'postgres'),
      host: configService.get<string>('DB_HOST', 'localhost'),
      port: configService.get<number>('DB_PORT', 5432),
      username: configService.get<string>('DB_USER', 'postgres'),
      password: configService.get<string>('DB_PASSWORD', 'postgres'),
      database: configService.get<string>('DB_NAME'),
      autoLoadEntities: true,
      synchronize: false,
    } as DataSourceOptions),
  });

/**
 * Creates a TypeORM DataSource instance using configuration from environment variables.
 * This can be used for running migrations or other database operations outside the NestJS application context.
 *
 * @returns {DataSource} A configured DataSource instance for PostgreSQL.
 */
export const createDatabase = (): DataSource =>
  new DataSource({
    type: (process.env.DB_TYPE || 'postgres') as DbType,
    host: process.env.DB_HOST_CLI || 'localhost',
    port: parseInt(process.env.DB_PORT_CLI || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'entropy_users_db',
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
  } as DataSourceOptions);
