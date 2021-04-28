import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('login')
export class LoginModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  telefone: string

  @Column()
  email: string

  @Column()
  senha: string

  @Column()
  data_ultimo_acesso: Date
  
  @Column()
  data_alteracao: Date
  
  @Column()
  ativo: string
}