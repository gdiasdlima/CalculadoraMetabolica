import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('atividade_fisica')
export class AtividadeFisicaModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  tipo_atividade: string  
}