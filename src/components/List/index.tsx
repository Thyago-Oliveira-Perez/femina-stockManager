import * as S from './list.styles';
import ProductCard from "../ProductCard";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IColumns, IProdutoResponse } from '../../types/common.types';
import { IListProps } from './list.types';
import { useNavigate } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import { CircularProgress } from '@mui/material';

const List = (props: IListProps) => {

    const navigate = useNavigate();
    
    const renderColumn = (columnName: string, item: any) => {
        if(columnName === 'marca' && item !== null) {
            return item.nome;
        }
        if(columnName === 'valor' && item !== null) {
            return item.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
        }
        return item !== null ? item : null;
    }
    const observer = useRef<IntersectionObserver>() ;
    const lasElementListRef = useCallback((node: any) => {
        if (props.loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting  && props.hasMore && props.items.length > 1) {
                props.setNewPage(previousValue => { return {...previousValue, currentPage: previousValue.currentPage + 1}})
            }
        });
        if(node) observer.current.observe(node);
    }, [props.loading, props.hasMore]);

    return (
        <>
            { props.loading ? 
                <S.LoadingContainer>
                    <CircularProgress style={{ color: '#7A0000' }} /> 
                </S.LoadingContainer>
                : props.mode === 'list' ? 
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
                                <S.TableRow key={index} ref={lasElementListRef}>
                                    { props.columns.map((column: IColumns, index: number) => (
                                        <S.TableCell key={index} width={150}>
                                            {
                                                column.name === 'image' ? <S.Image src={item.imageNames ? `${item.imagemUrl}/${item.imageNames[0]}` : ''} />
                                                : <S.Text>{renderColumn(column.name, item[column.name])}</S.Text>
                                            }
                                        </S.TableCell>
                                    )) }
                                    <S.TableCell width={150}>
                                        {
                                            props.actions.view && 
                                            <S.ButtonActions 
                                                color={'#46C963'} 
                                                onClick={() => navigate(`view/${item.id}`)}
                                            >
                                                <VisibilityIcon />
                                            </S.ButtonActions>
                                        }
                                        {
                                            props.actions.edit && 
                                            <S.ButtonActions 
                                                color={'#F6C23C'} 
                                                onClick={() => navigate(`edit/${item.id}`)}
                                            >
                                                <FaEdit size={17} />
                                            </S.ButtonActions>
                                        }
                                        {
                                            props.actions.disable && 
                                            <S.ButtonActions 
                                                color={'#F05555'} 
                                                onClick={() => navigate(`disable/${item.id}`)}
                                            >
                                                <RiDeleteBin5Fill size={17} />
                                            </S.ButtonActions>
                                        }
                                    </S.TableCell>
                                </S.TableRow>
                            )) }
                        </S.TableBody>
                    </S.Table>
                </S.Container>
                : <S.Grid>{props.items.map((item: IProdutoResponse, index: number) => (
                    <ProductCard useRef={lasElementListRef} key={index} actions={navigate} item={item} />
                )) }</S.Grid>
            }
        </>
    );
};

export default List;
