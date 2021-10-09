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

  LoadingArea: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,

  PlannerArea: styled.View`
    width: ${windowWidth}px;
    height: 575px;
    background-color: #fff;
    position: absolute;
    top: 35px;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
  `,

  TitleTextArea: styled.View`
    height: 50px;
    width: ${windowWidth}px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
  `,

  TitleText: styled.Text`
    font-size: 21px;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom-width: 3px;
  `,

  PrayNameArea: styled.View`
    margin-top: 10px;
    height: 30px;
    width: 400px;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px;
  `,

  PrayNameText: styled.Text`
    font-size: 21px;
  `,
};
