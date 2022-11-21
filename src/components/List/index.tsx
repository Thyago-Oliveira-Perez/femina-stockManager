import * as S from './list.styles';
import ProductCard from "../ProductCard";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IColumns, IProdutoResponse } from '../../types/common.types';
import { IListProps } from './list.types';

const List = (props: IListProps) => {

    return (
        <>
            { 
                props.mode === 'list' ? 
                <S.Container>
                    <S.Table>
                        <S.TableHead>
                            <S.TableRowHead>
                                { props.columns.map((column: IColumns, index: number) => (
                                    <S.TableTitle key={index} width={150}>{column.title}</S.TableTitle>
                                )) }
                                <S.TableTitle width={150}>Ações</S.TableTitle>
                            </S.TableRowHead>
                        </S.TableHead>
                        <S.TableBody>
                            { props.items.map((item: any, index: number) => (
                                <S.TableRow key={index}>
                                    { props.columns.map((column: IColumns, index: number) => (
                                        <S.TableCell key={index} width={150}>
                                            {
                                                column.name === 'image' ? <S.Image src={item.imageNames[0]} />
                                                : item[column.name]
                                            }
                                        </S.TableCell>
                            )) }
                                    <S.TableCell width={150}>
                                        <S.ButtonActions color={'#46C963'}><VisibilityIcon /></S.ButtonActions>
                                        <S.ButtonActions color={'#F6C23C'}><FaEdit size={17} /></S.ButtonActions>
                                        <S.ButtonActions color={'#F05555'}><RiDeleteBin5Fill size={17} /></S.ButtonActions>    
                                    </S.TableCell>
                                </S.TableRow>
                            )) }
                        </S.TableBody>
                    </S.Table>
                </S.Container>
                : <S.Grid>{ props.items.map((item: IProdutoResponse, index: number) => (
                    <ProductCard item={item} />
                )) }</S.Grid>
            }
        </>
    );
};

export default List;
