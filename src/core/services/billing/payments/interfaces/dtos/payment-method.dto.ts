import { ApiProperty, PartialType} from '@nestjs/swagger';
import { PaginatedResponseDto } from '../../../../common/dtos/pagination.dto';

export class CreatePaymentMethodRequestDto {
  @ApiProperty({ description: 'The name of the payment method' })
  name: string;
}

export class UpdatePaymentMethodRequestDto extends PartialType(
  CreatePaymentMethodRequestDto,
) {}

export class PaymentMethodResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class PaymentMethodListResponseDto extends PaginatedResponseDto(
  PaymentMethodResponseDto,
) {}

export class DeletePaymentMethodRequestDto {
  @ApiProperty()
  id: number;
}

// Keep backward compatibility
export class CreatePaymentMethodDto extends CreatePaymentMethodRequestDto {}
export class UpdatePaymentMethodDto extends UpdatePaymentMethodRequestDto {}
