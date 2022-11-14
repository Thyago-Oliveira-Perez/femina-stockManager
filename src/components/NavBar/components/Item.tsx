import * as styles from '../navBar.styles';
import iconNavBar from '../../../assets/navBarItem.svg';
import { IItemProps } from './item.types';

const Item = (props: IItemProps) => {
  return (

    <styles.Item>
      <styles.Image src={iconNavBar} alt='icon' />
      <styles.LinkStyled
        to={props.path}
        style={{ color: '#7A0000', textDecoration: 'none' }}
      >
        {props.children}
      </styles.LinkStyled>
    </styles.Item>

  );
};

export default Item;
