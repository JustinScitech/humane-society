import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Animal_Type from "./animal_type.model";
// import { PetCareInfo } from "./PetCareInfo"

import { Letters } from "../types";

@Table({ timestamps: false, tableName: "pet" })
export default class Pet extends Model {
  @Column({ type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => Animal_Type)
  @Column({ type: DataType.INTEGER })
  animal_type_id!: number;

  @BelongsTo(() => Animal_Type)
  animal_type!: Animal_Type;

  @Column({ type: DataType.STRING })
  name!: string;

  @Column({ type: DataType.STRING })
  breed!: string;

  @Column({ type: DataType.INTEGER })
  age!: number;

  @Column({ type: DataType.BOOLEAN })
  adoption_status!: boolean;

  //   @ForeignKey(() => PetCareInfo)
  //   @Column ({ type: DataType.INTEGER })
  //   pet_care_info_id?: number;

  //   @BelongsTo(() => PetCareInfo)
  //   petCareInfo?: PetCareInfo;

  @Column({ type: DataType.DECIMAL })
  weight!: number;

  @Column({ type: DataType.BOOLEAN })
  spayed!: boolean;

  @Column({ type: DataType.ENUM("M", "F") })
  sex!: Letters;

  @Column({ type: DataType.STRING })
  photo!: string;

  @Column({ type: DataType.DATE })
  created_at!: Date;

  @Column({ type: DataType.DATE })
  updated_at?: Date;
}
