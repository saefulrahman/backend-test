import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import { Rent } from '../rent/rent.entity';
import { Book } from '../book/book.entity';

@Entity('rent_details')
export class RentDetail {
  @PrimaryGeneratedColumn()
  id: number;

  //   @ManyToOne(() => Rent, (id: Rent) => id)
  //   @JoinColumn()
  //   rent: Rent;

  @Column()
  id_rent: number;

  //   @ManyToOne(() => Book, (code: Book) => code)
  //   @JoinColumn()
  //   book: Book;

  @Column({
    length: 7,
  })
  code_book: string;

  @Column()
  qty: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
