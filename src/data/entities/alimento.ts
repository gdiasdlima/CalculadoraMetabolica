import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('alimentos')
export class Alimento {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string  

  @Column()
  umidade: number

  @Column()
  kcal: number

  @Column()
  kj: number

  @Column()
  proteina: number

  @Column()
  lipideo: number

  @Column()
  colesterol: number

  @Column()
  carboidrato: number

  @Column()
  fibras: number

  @Column()
  cinzas: number

  @Column()
  calcio: number

  @Column()
  magnesio: number

  @Column()
  manganes: number

  @Column()
  fosforo: number

  @Column()
  ferro: number

  @Column()
  sodio: number

  @Column()
  potassio: number

  @Column()
  cobre: number

  @Column()
  zinco: number

  @Column()
  retinol: number

  @Column()
  re: number

  @Column()
  rae: number

  @Column()
  tiamina: number

  @Column()
  riboflavina: number

  @Column()
  piridoxina: number

  @Column()
  niacina: number

  @Column()
  vitaminac: number
}