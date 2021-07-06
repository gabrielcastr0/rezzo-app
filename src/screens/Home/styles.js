import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
  `,

  AreaText: styled.Text`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
  `,

  ModalizeHeaderView: styled.View`
    height: 50px;
    justify-content: center;
    padding-left: 15px;
  `,

  ModalizeHeaderText: styled.Text`
    font-size: 20px;
    font-weight: bold;
  `,

  ModalizeView: styled.View`
    flex: 1;
    height: 180px;
    flex-direction: row;
    align-items: center;
  `,
};
