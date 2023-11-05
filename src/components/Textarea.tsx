import styled from 'styled-components';
import { Colors } from '../constants';

const Textarea = styled.textarea`
  width: 30%;
  padding: 10px;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 18px;
  border: 1px solid ${Colors.DARK_GRAY};
  border-radius: 5px;
  outline: none;
  resize: none
`;

export default Textarea;
