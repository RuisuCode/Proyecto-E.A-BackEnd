import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;
}
