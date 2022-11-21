import List from '../../components/List';
import { IColumns, IProdutoResponse, Tamanhos } from '../../types/common.types';
import * as S from './styles';

const Menu = () => {

  const columns:IColumns[] = [
    {
      title: 'Foto',
      name: 'image',
    },
    {
      title: 'Nome',
      name: 'nome',
    },
    {
      title: 'Preço',
      name: 'valor',
    },
  ];

  const items:IProdutoResponse[] = [
    {
      imageNames: [
        'https://a-static.mlcdn.com.br/1500x1500/conjunto-lingerie-soutien-e-calcinha-tamanho-p-paty-moda-feminina/emporioyaskara/c9c4b94e7ac511ebb3af4201ac1850d6/7c78e02acca45d3476feb9d1395b5bb1.jpeg'
      ],
      nome: 'teste',
      valor: 'R$32',
      cor: '',
      codigo: '',
      destaque: false,
      imagemUrl: '',
      categoria: {
        id: 1,
        nome: 'teste'
      },
      marca: {
        id: 1,
        nome: 'teste'
      },
      modelo: [
        {
          id: 1,
          nome: 'teste'
        }
      ],
      tamanho: Tamanhos.P,
      fornecedor: {
        id: 1,
        cnpj: '',
        email: '',
        nome: '',
        telefone: ''
      }
    },
    {
      imageNames: [
        'https://a-static.mlcdn.com.br/1500x1500/conjunto-lingerie-soutien-e-calcinha-tamanho-p-paty-moda-feminina/emporioyaskara/c9c4b94e7ac511ebb3af4201ac1850d6/7c78e02acca45d3476feb9d1395b5bb1.jpeg'
      ],
      nome: 'teste2',
      valor: 'R$32',
      cor: '',
      codigo: '',
      destaque: false,
      imagemUrl: '',
      categoria: {
        id: 1,
        nome: 'teste'
      },
      marca: {
        id: 1,
        nome: 'teste'
      },
      modelo: [
        {
          id: 1,
          nome: 'teste'
        }
      ],
      tamanho: Tamanhos.P,
      fornecedor: {
        id: 1,
        cnpj: '',
        email: '',
        nome: '',
        telefone: ''
      }
    },
    {
      imageNames: [
        'https://a-static.mlcdn.com.br/1500x1500/conjunto-lingerie-soutien-e-calcinha-tamanho-p-paty-moda-feminina/emporioyaskara/c9c4b94e7ac511ebb3af4201ac1850d6/7c78e02acca45d3476feb9d1395b5bb1.jpeg'
      ],
      nome: 'teste2',
      valor: 'R$32',
      cor: '',
      codigo: '',
      destaque: false,
      imagemUrl: '',
      categoria: {
        id: 1,
        nome: 'teste'
      },
      marca: {
        id: 1,
        nome: 'teste'
      },
      modelo: [
        {
          id: 1,
          nome: 'teste'
        }
      ],
      tamanho: Tamanhos.P,
      fornecedor: {
        id: 1,
        cnpj: '',
        email: '',
        nome: '',
        telefone: ''
      }
    },
  ]

  const columns2:IColumns[] = [
    {
      title: 'Nome',
      name: 'nome',
    },
  ];

  const items2 = [
    {
      nome: 'Categoria 1',
    },
    {
      nome: 'Categoria 2',
    },
    {
      nome: 'Categoria 3',
    }
  ]

  return (
    <>
      <List columns={columns} items={items} mode={'list'} />
    </>
  );
};

export default Menu;
