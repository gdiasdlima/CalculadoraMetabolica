import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pessoa')
export class PessoaModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  telefone: string

  @Column()
  email: string

  @Column()
  litros_agua: number
  
  @Column()
  peso_inicial: number

  @Column()
  peso_atual: number
  
}