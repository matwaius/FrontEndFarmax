export class Estado{
  id: number;
  estado: string;
}

export class Cidade{
  id: number;
  nome: string;
  estado = new Estado();
}
