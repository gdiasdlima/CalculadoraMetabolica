import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tipo_exercicio')
export class TipoExercicio {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  met: number
}