import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AtividadeFisica } from './atividadeFisica'
import { Objetivo } from './objetivo'

@Entity('pessoa')
export class Pessoa {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    cpf: string

    @Column()
    sexo: string

    @Column()
    data_nascimento: Date

    @OneToOne(() => AtividadeFisica)
    @JoinColumn({ name: 'id_atividade_fisica' })
    atividade_fisica: AtividadeFisica;

    @OneToOne(() => Objetivo)
    @JoinColumn({ name: 'id_objetivo' })
    objetivo: Objetivo;

    @Column()
    litros_agua: number

    @Column()
    peso_inicial: number

    @Column()
    peso_atual: number

    @Column()
    altura: number

}