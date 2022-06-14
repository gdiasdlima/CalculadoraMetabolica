import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';
import { TipoRefeicao } from './tipoRefeicao';

@Entity('refeicao')
export class Refeicao {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @ManyToOne(() => TipoRefeicao)
  @JoinColumn({name : 'id_tipo_refeicao'})
  tipoRefeicao: TipoRefeicao;
  
  @Column()
  kcal: number  

  @Column()
  carb: number  

  @Column()
  proteina: number  

  @Column()
  gordura: number  

  @Column()
  data_refeicao: Date  
}