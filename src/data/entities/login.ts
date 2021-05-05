import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';

@Entity('login')
export class Login {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @Column()
  email: string

  @Column()
  senha: string

  @Column()
  data_ultimo_acesso: Date
  
  @Column()
  data_alteracao: Date
  
  @Column()
  ativo: string
}