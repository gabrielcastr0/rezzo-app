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
    height: 100px;
  `,

  BoxTitle: styled.Text`
    font-size: 20px;
    letter-spacing: 2px;
    color: #5e7c5e;
    text-align: center;
    /* margin-top: 50px; */
    line-height: 140px;
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
  `,

  CardImg: styled.Image`
    width: 110px;
    height: 160px;
  `,
};
