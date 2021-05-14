import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';

@Entity('ficha_metabolica')
export class FichaMetabolica {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @Column()
  tmb: number

  @Column()
  ndc: number

  @Column()
  imc: number

  @Column()
  data_calculo: Date
}