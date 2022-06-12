import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';

@Entity('refeicao')
export class TipoConquista {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToMany(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
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