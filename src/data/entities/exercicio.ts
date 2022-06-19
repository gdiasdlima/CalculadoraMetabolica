import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  met: number
}