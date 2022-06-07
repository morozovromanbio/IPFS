import { ApiProperty } from '@nestjs/swagger';

export class MintRequestDto {
  @ApiProperty({
    required: true,
    description: 'Address that will receive the tokens',
    example: '0xa1d0E5A80cbCD4e93e4D3595a93796188754a8CB',
    minLength: 42,
    maxLength: 42,
  })
  address: string;

  @ApiProperty({
    required: true,
    description: 'URI token to be minted',
    example: 'http://localhost:3000/metadate/1',
  })
  URI: string;

  @ApiProperty({
    required: true,
    description: 'Signature payload',
  })
  signature: string;
}
