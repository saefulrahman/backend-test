import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('members')
export class Member {
  @Column({
    primary: true,
    length: 4,
  })
  code: string;

  @Column({
    length: 30,
  })
  name: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
