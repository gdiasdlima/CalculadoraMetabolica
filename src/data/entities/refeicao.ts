import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import alimentos from '../../main/routes/alimentos';
import { Alimento } from './alimento';
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

  @ManyToOne(() => Alimento)
  @JoinColumn({name : 'id_alimento'})
  alimento: Alimento;
  
  @Column()
  kcal: number  

  @Column()
  carb: number  

  @Column()
  proteina: number  

  @Column()
  gordura: number  

  @Column()
  gramas: number  

  @Column()
  data_refeicao: Date  
}