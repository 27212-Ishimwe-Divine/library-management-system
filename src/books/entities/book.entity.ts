
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Book {
  @PrimaryGeneratedColumn() 
  id!: number; 

  @Column() 
  title!: string;

  @Column()
  author!: string;
  @Column()
   publishedYear!: number;
   
  @Column({ default: true }) 
  isAvailable!: boolean;
}