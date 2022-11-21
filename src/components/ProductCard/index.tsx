import * as S from './productCard.styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IProductCard } from './productCard.types';

const ProductCard = (props: IProductCard) => {
    return (
        <>
            <S.Container>
                <S.ContentArea>
                    <S.Image src={props.item.imageNames[0]} />
                    <S.AreaInfo>
                        <S.Row>
                            <S.Title>Nome</S.Title>
                            <S.Text>Conjunto Olinda</S.Text>
                            <S.Text>{props.item.nome}</S.Text>
                        </S.Row>
                        {/* <S.Row>
                            <S.Title>QTD</S.Title>
                            <S.Text>{props.item.quantidade}</S.Text>
                        </S.Row> */}
                        <S.Row>
                            <S.Title>Preço</S.Title>
                            <S.Text>R$ 99,99</S.Text>
                            <S.Text>{props.item.valor}</S.Text>
                        </S.Row>
                        <S.Row>
                            <S.Title>Marca</S.Title>
                            <S.Text>Hope</S.Text>
                            <S.Text>{props.item.marca.nome}</S.Text>
                        </S.Row>
                    </S.AreaInfo>
                    <S.ButtonArea>
                        <S.ButtonActions color={'#46C963'}><VisibilityIcon /></S.ButtonActions>
                        <S.ButtonActions color={'#F6C23C'}><FaEdit size={18} /></S.ButtonActions>
                        <S.ButtonActions color={'#F05555'}><RiDeleteBin5Fill size={18} /></S.ButtonActions>    
                    </S.ButtonArea>
                </S.ContentArea>
            </S.Container>
        </>
    );
}

export default ProductCard;
