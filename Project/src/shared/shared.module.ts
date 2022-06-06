import { Global, Module } from '@nestjs/common';
import { ProviderService } from './service/provider/provider.service';
import { WalletService } from './service/wallet/wallet.service';
import { SignerService } from './service/signer/signer.service';

@Global()
@Module({
  providers: [ProviderService, WalletService, SignerService],
  exports: [ProviderService, WalletService, SignerService],
})
export class SharedModule {}
