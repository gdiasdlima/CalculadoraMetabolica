import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Pessoa } from './pessoa';
import { TipoExercicio } from './tipoExercicio';

@Entity('exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Pessoa)
  @JoinColumn({name : 'id_pessoa'})
  pessoa: Pessoa;
  
  @ManyToOne(() => TipoExercicio)
  @JoinColumn({name : 'id_tipo_exercicio'})
  tipoExercicio: TipoExercicio;

  @Column()
  kcal_gastas: number  

  @Column()
  tempo: number  

  @Column()
  data_exercicio: Date  
}