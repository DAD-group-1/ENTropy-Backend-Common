import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

/**
 * CREATE
 */
export class CreateNotificationDto {
  @ApiProperty({ description: 'The id of the user to notify' })
  user_id: number;

  @ApiProperty({ description: 'The title of the notification' })
  title: string;

  @ApiProperty({ description: 'The message of the notification' })
  message: string;
}

/**
 * BASE RESPONSE (notification entity shape)
 */
export class NotificationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  read_at: Date;
}

/**
 * GET ONE / GET MANY RESPONSE DTO
 */
export class GetNotificationResponseDto extends NotificationResponseDto {}

/**
 * DELETE RESPONSE DTO
 */
export class DeleteNotificationResponseDto {}

/**
 * UPDATE
 */
export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
