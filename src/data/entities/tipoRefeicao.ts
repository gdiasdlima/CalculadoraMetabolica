import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tipo_refeicao')
export class TipoConquista {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string  
}