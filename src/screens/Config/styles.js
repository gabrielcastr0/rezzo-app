import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,

  BoxButton: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: ${width}px;
    height: 100px;
    position: absolute;
  `,

  ButtonReset: styled.TouchableOpacity`
    border-radius: 10px;
    width: 300px;
    height: 80px;
    position: absolute;
    justify-content: center;
    align-items: center;
  `,

  ButtonText: styled.Text`
    font-size: 25px;
    font-weight: bold;
    position: absolute;
  `,
}