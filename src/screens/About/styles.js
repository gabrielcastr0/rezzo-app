import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  `,

  AreaBox: styled.View`
    margin-top: 50px;
    position: absolute;
    height: 500px;
    width: 325px;
    align-items: center;
  `,

  AreaBoxTitle: styled.View`
    border-radius: 15px;
    background-color: #fff;
    height: 32px;
    width: 256px;
  `,

  AreaBoxBody: styled.View`
    margin-top: 5px;
    border-radius: 40px;
    height: 452px;
    width: 326px;
    background-color: #65af89;
  `,
};
