import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PessoaModel } from './pessoa';

@Entity('login')
export class LoginModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => PessoaModel)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: PessoaModel;
  
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