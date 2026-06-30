// src/books/dto/create-book.dto.ts
export class CreateBookDto {
  title!: string;          
  author!: string;         
  publishedYear!: number;  
  
  isAvailable?: boolean;  
} 
