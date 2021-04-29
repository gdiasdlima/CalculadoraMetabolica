import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('objetivo')
export class objetivoModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  tipo_objetivo: string  
}