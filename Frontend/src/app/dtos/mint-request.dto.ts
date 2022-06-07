export class MintRequestDto {
  constructor(public address: string, public URI: string, public signature: string) {}
}
