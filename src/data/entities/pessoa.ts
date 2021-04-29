import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AtividadeFisicaModel } from './atividadeFisica'
import { objetivoModel } from './objetivo'

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
    sexo: string

    @Column()
    data_nascimento: Date

    @OneToOne(() => AtividadeFisicaModel)
    @JoinColumn({ name: 'id_atividade_fisica' })
    atividade_fisica: AtividadeFisicaModel;

    @OneToOne(() => objetivoModel)
    @JoinColumn({ name: 'id_objetivo' })
    objetivo: objetivoModel;

    @Column()
    litros_agua: number

    @Column()
    peso_inicial: number

    @Column()
    peso_atual: number

    @Column()
    altura: number

}