import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TransactionType } from '../enum/TransactionType';

@Entity('transactions')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly user_id: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  public readonly type: string;

  @Column('int')
  public readonly amount: number;

  @CreateDateColumn()
  public readonly created_at: Date;
}
