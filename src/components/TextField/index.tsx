import * as S from './textField.styles';
import { TextFieldProps } from './textField.types';

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
