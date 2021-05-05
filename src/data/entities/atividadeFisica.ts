import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('atividade_fisica')
export class AtividadeFisica {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  tipo_atividade: string  
}