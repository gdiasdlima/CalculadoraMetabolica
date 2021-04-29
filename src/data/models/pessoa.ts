import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AtividadeFisicaModel } from './atividadeFisica'

@Entity('pessoa')
export class PessoaModel {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    cpf: string

    @Column()
    data_nascimento: Date

    @OneToOne(() => AtividadeFisicaModel)
    @JoinColumn()
    atividade_fisica: AtividadeFisicaModel;

    @Column()
    email: string

    @Column()
    litros_agua: number

    @Column()
    peso_inicial: number

    @Column()
    peso_atual: number

    @Column()
    altura: number

}