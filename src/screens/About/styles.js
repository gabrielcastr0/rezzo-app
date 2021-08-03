import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,

  AreaBox: styled.View`
    position: absolute;
    height: 560px;
    width: 326px;
    align-items: center;
  `,

  AreaBoxTitle: styled.View`
    border-radius: 15px;
    background-color: #fff;
    height: 32px;
    width: 256px;
    justify-content: center;
    align-items: center;
  `,

  TextTitle: styled.Text`
    color: #000;
    font-size: 20px;
  `,

  AreaBoxBody: styled.View`
    margin-top: 5px;
    border-radius: 40px;
    height: 452px;
    width: 326px;
    background-color: #65af89;
    align-items: center;
  `,

  TextBody: styled.Text`
    padding: 15px;
    color: #fff;
    font-size: 20px;
  `,
};
