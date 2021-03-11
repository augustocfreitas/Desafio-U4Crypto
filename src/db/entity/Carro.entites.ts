import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ClientEntites } from "./Client.entites";
import { SharedProp } from "./sharedProp";

@Entity()
export class CarroEntites extends SharedProp {
  constructor(
    placaDoVeiculo: string,
    tipoDoVeiculo: string,
    marcaDoVeiculo?: string,
    modeloDoVeiculo?: string,
    numeroDoChassi?: string,
    anoDoVeiculo?: Date,
    primeiroLicenciamento?: Date,
    ultimoLicenciamento?: Date
  ) {
    super();
    this.placaDoVeiculo = placaDoVeiculo;
    this.tipoDoVeiculo = tipoDoVeiculo;
    this.marcaDoVeiculo = marcaDoVeiculo;
    this.modeloDoVeiculo = modeloDoVeiculo;
    this.numeroDoChassi = numeroDoChassi;
    this.anoDoVeiculo = anoDoVeiculo;
    this.primeiroLicenciamento = primeiroLicenciamento;
    this.ultimoLicenciamento = ultimoLicenciamento;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "placaDoVeiculo", nullable: false, unique: true })
  placaDoVeiculo: string;

  @Column({ name: "tipoDoVeiculo", nullable: false })
  tipoDoVeiculo: string;

  @Column({ name: "marcaDoVeiculo", nullable: false })
  marcaDoVeiculo: string;

  @Column({ name: "modeloDoVeiculo", nullable: true })
  modeloDoVeiculo: string;

  @Column({ name: "numeroDoChassi", nullable: true })
  numeroDoChassi: string;

  @Column({ name: "anoDoVeiculo", nullable: true, type: "date" })
  anoDoVeiculo: Date;

  @Column({ name: "primeiroLicenciamento", nullable: true, type: "date" })
  primeiroLicenciamento: Date;

  @Column({ name: "ultimoLicenciamento", nullable: true, type: "date" })
  ultimoLicenciamento: Date;

  @ManyToMany(() => ClientEntites)
  @JoinTable()
  clients: ClientEntites[];
}
