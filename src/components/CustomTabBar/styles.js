import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

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
    height: 70px;
    justify-content: space-between;
    width: ${width}px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  `,

  TabItem: styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
};
