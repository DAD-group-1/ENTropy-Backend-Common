import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GlobalResponseDto } from '../../../../globalResponseDto';

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
 * UPDATE
 */
export class UpdateNotificationDto {
  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  read_at?: Date;
}

/**
 * BASE RESPONSE (notification entity shape)
 */
export class NotificationResponseDto {
  @ApiProperty()
  _id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  read_at: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  _v: number;
}

/**
 * GET ONE / GET MANY RESPONSE DTO
 */
export class GetNotificationResponseDto extends NotificationResponseDto {}

/**
 * DELETE RESPONSE DTO
 */
export class DeleteNotificationResponseDto {}
