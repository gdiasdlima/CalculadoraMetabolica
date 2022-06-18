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
    data_nascimento: Date

    @Column()
    sexo: string

    @OneToOne(() => AtividadeFisica)
    @JoinColumn({ name: 'id_atividade_fisica' })
    atividadeFisica: AtividadeFisica;

    @OneToOne(() => Objetivo)
    @JoinColumn({ name: 'id_objetivo' })
    objetivo: Objetivo;

    @Column()
    peso_inicial: number

    @Column()
    peso_atual: number

    @Column()
    peso_objetivo: number

    @Column()
    altura: number

    @Column()
    circunferencia: number
}