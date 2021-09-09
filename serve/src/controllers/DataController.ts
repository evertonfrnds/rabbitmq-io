import DataSchema from "../models/DataSchema";

interface IData {
  category: string;
  value: string;
}

export default class DataController {
  public async create(data: IData): Promise<IData> {
    const response = (await DataSchema.create(data)) as unknown as IData;

    return response;
  }

  public async index(): Promise<IData[]> {
    const response = (await DataSchema.find()) as unknown[] as IData[];

    return response;
  }
}
