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

  // AreaBox: styled.View`
  //   position: absolute;
  //   height: 100%;
  //   justify-content: center;
  //   align-items: center;
  // `,

  // AreaBoxTitle: styled.View`
  //   border-radius: 15px;
  //   background-color: #fff;
  //   height: 32px;
  //   width: 256px;
  //   justify-content: center;
  //   align-items: center;
  //   margin-top: 10px;
  // `,

  // TextTitle: styled.Text`
  //   color: #000;
  //   font-size: 20px;
  // `,

  // AreaBoxBody: styled.View`
  //   margin-top: 5px;
  //   width: ${windowWidth}px;
  //   align-items: center;
  //   margin-bottom: 50px;
  // `,

  // AreaText: styled.View`
  //   background-color: #65af89;
  //   height: 450px;
  //   width: 350px;
  //   border-radius: 40px;
  //   align-items: center;
  // `,

  // TextBody: styled.Text`
  //   padding: 15px;
  //   color: #fff;
  //   font-size: 20px;
  // `,

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
    top: 70px;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
  `,

  TitleTextArea: styled.View`
    height: 50px;
    width: ${windowWidth}px;
    /* background-color: pink; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
  `,

  TitleText: styled.Text`
    font-size: 21px;
    color: #5e7c5e;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom-width: 3px;
    border-color: #5e7c5e;
  `,

  PrayNameArea: styled.View`
    /* background-color: blue; */
    margin-top: 10px;
    height: 30px;
    width: 400px;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: #5e7c5e;
  `,

  PrayNameText: styled.Text`
    font-size: 21px;
    color: #5e7c5e;
  `,
};
