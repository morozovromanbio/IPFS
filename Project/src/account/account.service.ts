import { Injectable } from '@nestjs/common';
import { ProviderService } from 'src/shared/service/provider/provider.service';
import { WalletService } from 'src/shared/service/wallet/wallet.service';

@Injectable()
export class AccountService {
  constructor(
    private providerService: ProviderService,
    private walletService: WalletService,
  ) {}

  async getServerAccountBalance() {
    const serverAddress = this.walletService.walletAddress();
    const serverWalletBalance = await this.providerService.getBalance(
      serverAddress,
    );
    return serverWalletBalance;
  }
}
