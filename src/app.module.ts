import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallet/wallet.module';
import { connection } from './shared/typeorm/database/ormconfig';

@Module({
  imports: [WalletModule, connection],
  controllers: [],
  providers: [],
})
export class AppModule {}
