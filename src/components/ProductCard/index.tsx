import * as S from './productCard.styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IProductCard } from './productCard.types';
import { FC } from 'react';

const ProductCard: FC<IProductCard> = (props: IProductCard) => {
    return (
        <>
            <S.Container ref={props.useRef}>
                <S.ContentArea>
                    <S.Image src={props.item.imageNames && props.item.imageNames[0] !== undefined 
                        ? `${props.item.imagem}/${props.item.imageNames[0]}` : ''} 
                    />
                    <S.AreaInfo>
                        <S.Row>
                            <S.Title>Nome</S.Title>
                            <S.Text>{props.item.nome}</S.Text>
                        </S.Row>
                        {/* <S.Row>
                            <S.Title>QTD</S.Title>
                            <S.Text>{props.item.quantidade}</S.Text>
                        </S.Row> */}
                        <S.Row>
                            <S.Title>Preço</S.Title>
                            <S.Text>{props.item.valor}</S.Text>
                        </S.Row>
                        <S.Row>
                            <S.Title>Marca</S.Title>
                            <S.Text>{props.item.marca.nome}</S.Text>
                        </S.Row>
                    </S.AreaInfo>
                    <S.ButtonArea>
                        <S.ButtonActions 
                            color={'#46C963'} 
                            onClick={() => props.actions(`view/${props.item.id}`)}
                        >
                            <VisibilityIcon />
                        </S.ButtonActions>
                        <S.ButtonActions 
                            color={'#F6C23C'} 
                            onClick={() => props.actions(`edit/${props.item.id}`)}
                        >
                            <FaEdit size={18} />
                        </S.ButtonActions>
                        <S.ButtonActions 
                            color={'#F05555'} 
                            onClick={() => props.actions(`disable/${props.item.id}`)}
                        >
                            <RiDeleteBin5Fill size={18} />
                        </S.ButtonActions>    
                    </S.ButtonArea>
                </S.ContentArea>
            </S.Container>
        </>
    );
}

export default ProductCard;
