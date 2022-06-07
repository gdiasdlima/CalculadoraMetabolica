import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';
import { TipoConquista } from './tipoConquista';

@Entity('conquista')
export class Conquista {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @ManyToOne(() => TipoConquista)
  @JoinColumn({name : 'id_tipo_conquista'})
  conquista: TipoConquista;
  
  @Column()
  active: string

}