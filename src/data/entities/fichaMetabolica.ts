import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';

@Entity('ficha_metabolica')
export class FichaMetabolica {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @Column()
  tmb: number

  @Column()
  ndc: number

  @Column()
  imc: number

  @Column()
  proteina: number

  @Column()
  carboidrato: number
  
  @Column()
  gordura: number

  @Column()
  gasto_semanal: number

  @Column()
  percentual_gordura: number

  @Column()
  data_calculo: Date

  @Column()
  dias_objetivo: number
}