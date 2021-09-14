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

  TopArea: styled.View`
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  `,

  TopTitle: styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  `,

  AreaPrayer: styled.View`
    width: 346px;
    position: absolute;
    top: 80px;
    align-items: center;
  `,

  AreaTitle: styled.View`
    background-color: #5e7c5e;
    width: 282px;
    height: 54px;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
  `,

  TextTitle: styled.Text`
    font-size: 35px;
    color: #fff;
  `,

  AreaBody: styled.View`
    min-height: 182px;
    width: 346px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 21px;
    justify-content: flex-start;
    align-items: center;
  `,

  TextBody: styled.Text`
    padding-top: 10px;
    font-size: 21px;
    color: #5e7c5e;
  `,

  BottomArea: styled.View`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  `,
};
