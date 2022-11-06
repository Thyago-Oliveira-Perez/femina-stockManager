import * as S from './styles';
import { TextFieldProps } from './type';

export const TextField = (props: TextFieldProps) => {
  return (
    <S.Input 
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
};

export default TextField;
