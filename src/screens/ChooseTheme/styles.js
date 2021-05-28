import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: #C0D7DC;
  `,

  TitleArea: styled.View`
    height: 115px;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.Text`
    font-size: 70px;
    color: #fff;
    letter-spacing: 25px;
    position: absolute;
    font-weight: bold;
    text-shadow: 10px 5px 5px #5E7C5E;
  `,

  BoxArea: styled.View`
    flex: 1;
  `,

  BoxTitle: styled.Text`
    font-size: 20px;
    letter-spacing: 2px;
    color: #5E7C5E;
    text-align: center;
    margin-top: 50px;
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
    border: 20px solid #ECE6D2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  FirstCardBtn: styled.TouchableOpacity`
    width: 110px;
    height: 160px;
  `,

  FirstCardImg: styled.Image`
    width: 110px;
    height: 160px;
  `,

  SecondCard: styled.View`
    width: 130px;
    height: 200px;
    border: 20px solid #ECE6D2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  SecondCardBtn: styled.TouchableOpacity`
    width: 110px;
    height: 160px;
  `,

  SecondCardImg: styled.Image`
    width: 110px;
    height: 160px;
  `,

  ThirdCard: styled.View`
    margin-top: 30px;
    width: 130px;
    height: 200px;
    border: 20px solid #ECE6D2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,

  FourthCard: styled.View`
    margin-top: 30px;
    width: 130px;
    height: 200px;
    border: 20px solid #ECE6D2;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
}