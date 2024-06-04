import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Role } from '@domain/enum';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  public id: number;

  @Column({ length: 255, type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'varchar' })
  public email: string;

  @Column({ length: 15, type: 'varchar' })
  public phone: string;

  @Column({ default: Role.COMMON, type: 'varchar' })
  public role: Role;

  @CreateDateColumn({ name: 'createdAt', type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', nullable: true, type: 'timestamp' })
  public updatedAt: Date | null;

  @Column({ name: 'finishedAt', nullable: true, type: 'timestamp' })
  public finishedAt: Date | null;

  public constructor(
    id: number,
    password: string,
    name: string,
    email: string,
    phone: string,
    role: Role,
    createdAt: Date,
    updatedAt: Date,
    finishedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.finishedAt = finishedAt;
  }
}
