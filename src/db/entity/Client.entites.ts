import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { UserEntites } from "./User.entites";
import { CarroEntites } from "./Carro.entites";
import { SharedProp } from "./sharedProp";

@Entity()
export class ClientEntites extends SharedProp {
  constructor(
    nomeDoCliente: string,
    sobrenomeDoCLiente: string,
    cpfDoCliente: string,
    endDoCliente?: string
  ) {
    super();
    this.nomeDoCliente = nomeDoCliente;
    this.sobrenomeDoCLiente = sobrenomeDoCLiente;
    this.cpfDoCliente = cpfDoCliente;
    this.endDoCliente = endDoCliente;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "nomeDoCliente", nullable: false })
  nomeDoCliente: string;

  @Column({ name: "sobrenomeDoCLiente", nullable: false })
  sobrenomeDoCLiente: string;

  @Column({ name: "cpfDoCliente", nullable: false, unique: true })
  cpfDoCliente: string;

  @Column({ name: "endDoCliente", nullable: true })
  endDoCliente: string;

  @OneToOne(() => UserEntites)
  @JoinColumn()
  user: UserEntites;

  @ManyToMany(() => CarroEntites)
  carro: CarroEntites[];
}
