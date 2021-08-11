import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default {
  Container: styled.View`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
  `,

  AreaBox: styled.View`
    position: absolute;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,

  AreaBoxTitle: styled.View`
    border-radius: 15px;
    background-color: #fff;
    height: 32px;
    width: 256px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  `,

  TextTitle: styled.Text`
    color: #000;
    font-size: 20px;
  `,

  AreaBoxBody: styled.View`
    margin-top: 5px;
    width: ${windowWidth}px;
    align-items: center;
    margin-bottom: 50px;
  `,

  AreaText: styled.View`
    background-color: #65af89;
    height: 450px;
    width: 350px;
    border-radius: 40px;
    align-items: center;
  `,

  TextBody: styled.Text`
    padding: 15px;
    color: #fff;
    font-size: 20px;
  `,

  LoadingArea: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
};
