import * as S from './styles';
import List from '../../../../components/List';
import ButtonInsert from '../../../../components/ButtonInsert';
import useMenuBanners from './hooks/useMenuBanners';

const Banners = () => {

    const { 
      columns, 
      list,
      loading,
      hasMore, 
      setPageable,  
      navigate 
    } = useMenuBanners();

    return (
        <>
          <S.Container>
              <S.StackHeader>
                <S.Title>Banners</S.Title>
                <S.Actions>
                  <ButtonInsert 
                    onClick={() => navigate('new')}
                  >
                    Cadastrar Banner
                  </ButtonInsert>
                </S.Actions>
              </S.StackHeader>
            <S.ListArea>
              {
                list !== null ? 
                  <List 
                    loading={loading}
                    hasMore={hasMore} 
                    setNewPage={setPageable} 
                    columns={columns} 
                    items={list} 
                    mode={'list'} 
                  /> : null
              }
            </S.ListArea>
          </S.Container>
        </>
      );
}

export default Banners;
