import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tipo_conquista')
export class TipoConquista {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome_conquista: string  

  @Column()
  desc_conquista: string  
}