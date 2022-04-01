import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('alimento')
export class Alimento {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome_alimento: string  
}