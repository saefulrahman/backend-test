import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('books')
export class BookEntity {
  @Column({
    primary: true,
    length: 7,
  })
  code: string;

  @Column({
    length: 60,
  })
  title: string;

  @Column({
    length: 30,
  })
  author: string;

  @Column()
  stock: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
