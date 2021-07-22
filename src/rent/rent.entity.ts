import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

import { Member } from '../member/member.entity';

@Entity('rents')
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToOne(() => Member)
  // @JoinColumn()
  // member: string;

  @Column({
    length: 4,
  })
  code_member: string;

  @Column()
  borrow_date: Date;

  @Column({
    default: null,
  })
  return_date: Date;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
