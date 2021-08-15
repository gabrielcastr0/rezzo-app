import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: #c0d7dc;
  `,

  TitleArea: styled.View`
    height: 115px;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.Text`
    font-size: 70px;
    color: #fff;
    letter-spacing: 10px;
    position: absolute;
    font-weight: bold;
    z-index: 1;
  `,

  TitleBack: styled.Text`
    font-size: 85px;
    color: #c0d7dc;
    letter-spacing: 10px;
    position: absolute;
    font-weight: bold;
    text-shadow: 0px 0px 20px #5e7c5e;
  `,

  BoxArea: styled.View`
    /* flex: 1; */
    height: 80px;
  `,

  BoxTitle: styled.Text`
    font-size: 20px;
    letter-spacing: 2px;
    color: #5e7c5e;
    text-align: center;
    /* margin-top: 50px; */
    line-height: 80px;
    text-transform: uppercase;
  `,

  CardAreaMain: styled.View`
    align-items: center;
    justify-content: center;
    height: 460px;
  `,

  CardAreaSecond: styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    height: 460px;
    width: 310px;
    margin-top: 15px;
  `,

  FirstCard: styled.View`
    width: 130px;
    height: 200px;
    border: 20px solid #ece6d2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  SecondCard: styled.View`
    width: 130px;
    height: 200px;
    border: 20px solid #ece6d2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  ThirdCard: styled.View`
    margin-top: 20px;
    width: 130px;
    height: 200px;
    border: 20px solid #ece6d2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  FourthCard: styled.View`
    margin-top: 20px;
    width: 130px;
    height: 200px;
    border: 20px solid #ece6d2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  CardBtn: styled.TouchableOpacity`
    width: 110px;
    height: 160px;
    justify-content: center;
    align-items: center;
  `,

  CardImg: styled.Image`
    width: 110px;
    height: 160px;
  `,

  /* MODAL */

  Box: styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
  `,

  BoxBody: styled.View`
    height: 350px;
    width: 210px;
    background-color: #ffffff;
    border: 20px solid #ece6d2;
    border-radius: 5px;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
  `,

  AreaBtn: styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* position: absolute;
    left: 0;
    right: 0;
    bottom: -140px; */
    height: 30px;
    width: 170px;
  `,

  BtnYes: styled.TouchableOpacity`
    height: 30px;
    width: 60px;
    background-color: #57e1a9;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `,

  BtnNo: styled.TouchableOpacity`
    height: 30px;
    width: 60px;
    background-color: #fc7184;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `,

  BtnText: styled.Text`
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  `,

  AreaQuestion: styled.View`
    margin-top: 10px;
    width: 210px;
    height: 70px;
    background-color: #ece6d2;
    /* position: absolute;
    /* left: 0;
    right: 0;
    bottom: -100px; */
    border-radius: 20px;
    justify-content: center;
    align-items: center;
  `,

  AreaQText: styled.Text`
    text-transform: uppercase;
    color: #fff;
    font-size: 20px;
  `,
};
