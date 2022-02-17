import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly user_id: string;

  @Column()
  public readonly type: string;

  @Column('int')
  public readonly amount: number;
}
