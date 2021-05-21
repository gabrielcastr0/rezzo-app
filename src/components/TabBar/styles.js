import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default {
  Wrapper: styled.View`
    position: absolute;
    bottom: 0;
    width: ${width}px;
    align-items: center;
    justify-content: center;
  `,

  Container: styled.View`
    flex-direction: row;
    height: 65px;
    justify-content: space-between;
    background-color: #5E7C5E;
    width: ${width}px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  `,
}