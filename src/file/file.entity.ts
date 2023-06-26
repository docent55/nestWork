import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  filename: string;

  @Column()
  filePath: string;

  @Column()
  originalname: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;
}
