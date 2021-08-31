import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default {
  Container: styled.View`
    flex: 1;
  `,

  AreaText: styled.Text`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
  `,

  /* MODALIZE HEADER */

  ModalizeHeaderView: styled.View`
    height: 55px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px;
  `,

  ModalizeHeaderText: styled.Text`
    font-size: 20px;
    font-weight: bold;
  `,

  NewActivityBtn: styled.TouchableOpacity`
    height: 30px;
    width: 120px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
  `,

  NewActivityText: styled.Text`
    font-weight: bold;
    color: #fff;
  `,

  /* MODALIZE BODY */

  ModalizeView: styled.View`
    flex: 1;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    flex-wrap: wrap;
  `,

  CircleBtn: styled.TouchableOpacity`
    background-color: transparent;
    border: 1px solid #000;
    height: 20px;
    width: 20px;
    border-radius: 50px;
  `,

  TimelineView: styled.View`
    width: 100%;
    /* justify-content: space-between; */
    /* background-color: pink; */
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
  `,

  TimelineText: styled.Text`
    font-size: 17px;
    margin-bottom: 5px;
    padding-left: 3px;
    color: #62af8a;
  `,

  TimelineInfoText: styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 15px;
  `,

  Line: styled.View`
    height: 70px;
    width: 1px;
    background-color: #000;
    position: absolute;
    left: 8;
    bottom: -50;
  `,

  TimelineInfoArea: styled.View`
    height: 50px;
    width: 120px;
    position: absolute;
    float: left;
    bottom: -30;
    left: 20;
  `,

  DivisionLine: styled.View`
    height: 60px;
    width: 2px;
    background-color: #000;
    left: 30;
    bottom: -20;
  `,

  AccessPrayerBtn: styled.TouchableOpacity`
    height: 30px;
    width: 135px;
    border-radius: 7px;
    background-color: yellow;
    margin-left: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 30px;
  `,

  AccessPrayerText: styled.Text`
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
  `,

  /* MODAL (NOVA ATIVIDADE) */

  Box: styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
  `,

  BoxBody: styled.View`
    height: 500px;
    width: 350px;
    background-color: #ffffff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
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

  TextBody: styled.Text`
    padding: 15px;
    color: #fff;
    font-size: 20px;
  `,
};
