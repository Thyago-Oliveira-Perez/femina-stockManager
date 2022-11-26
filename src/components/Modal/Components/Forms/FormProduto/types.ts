export interface IFromProdutoProps {
  isModalOpen: boolean;
  isToCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INewProduto {
  atualizado?: Date;
  isActive: true;
  codigo: string;
  nome: string;
  valor: number;
  cor: string;
  tamanho: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
}

export interface INewProdutoResponse {}
