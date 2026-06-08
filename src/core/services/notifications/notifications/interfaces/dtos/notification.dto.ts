import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {PaginatedResponseDto} from '../../../../common';

/**
 * CREATE
 */
export class CreateNotificationDto {
  @ApiProperty({ description: 'ID of the user to notify' })
  user_id: number;

  @ApiProperty({ description: 'Title of the notification' })
  title: string;

  @ApiProperty({ description: 'Message content of the notification' })
  message: string;

  @ApiPropertyOptional({
    description: 'Target URL associated with the notification',
  })
  target_url?: string;
}

/**
 * UPDATE
 */
export class UpdateNotificationDto {
  @ApiPropertyOptional({ description: 'Title of the notification' })
  title?: string;

  @ApiPropertyOptional({ description: 'Message content of the notification' })
  message?: string;

  @ApiPropertyOptional({
    description: 'Target URL associated with the notification',
  })
  target_url?: string;

  @ApiPropertyOptional({
    description: 'Timestamp when the notification was read (null if unread)',
  })
  read_at?: Date;
}

/**
 * BASE RESPONSE (notification entity shape)
 */
export class NotificationResponseDto {
  @ApiProperty({ description: 'Unique identifier of the notification' })
  _id: number;

  @ApiProperty({ description: 'ID of the user who owns the notification' })
  user_id: number;

  @ApiProperty({ description: 'Title of the notification' })
  title: string;

  @ApiProperty({ description: 'Message content of the notification' })
  message: string;

  @ApiPropertyOptional({
    description: 'Target URL associated with the notification',
  })
  target_url?: string;

  @ApiPropertyOptional({
    description: 'Timestamp when the notification was read (null if unread)',
  })
  read_at?: Date;

  @ApiProperty({ description: 'Creation timestamp of the notification' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp of the notification' })
  updatedAt: Date;

  @ApiProperty({
    description: 'Internal version field (e.g. MongoDB document version)',
  })
  _v: number;
}

/**
 * GET ONE / GET MANY RESPONSE DTO
 */
export class GetNotificationResponseDto extends NotificationResponseDto {}

/**
 * LIST RESPONSE DTO
 */
export class GetNotificationListResponseDto extends PaginatedResponseDto(
  GetNotificationResponseDto,
) {}

/**
 * DELETE RESPONSE DTO
 */
export class DeleteNotificationResponseDto {}
