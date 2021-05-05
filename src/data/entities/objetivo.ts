import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('objetivo')
export class Objetivo {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  tipo_objetivo: string  
}