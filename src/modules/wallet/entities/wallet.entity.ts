import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wallet')
export class Wallet {
  @PrimaryGeneratedColumn()
  public readonly id: string;

  @Column()
  public readonly user_id: string;

  @Column()
  public readonly type: string;

  @Column('int')
  public readonly amount: number;
}
