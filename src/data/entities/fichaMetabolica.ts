import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PessoaModel } from './pessoa';

@Entity('ficha_metabolica')
export class LoginModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => PessoaModel)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: PessoaModel;
  
  @Column()
  tmb: number

  @Column()
  ndc: number

  @Column()
  data_calculo: Date
}