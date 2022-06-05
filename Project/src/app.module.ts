import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { BlockModule } from './block/block.module';
import { AccountModule } from './account/account.module';
import { WalletModule } from './wallet/wallet.module';
import { ContractModule } from './contract/contract.module';

@Module({
  imports: [
    MulterModule.register({
      dest: '../upload',
    }),
    SharedModule,
    BlockModule,
    AccountModule,
    WalletModule,
    ContractModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
