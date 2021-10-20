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
    margin-bottom: 15px;
  `,

  TimelineText: styled.Text`
    font-size: 17px;
    margin-bottom: 2px;
    padding-left: 3px;
    color: #62af8a;
  `,

  Line: styled.View`
    height: 24px;
    width: 1px;
    background-color: #00000033;
    position: absolute;
    left: 7px;
    top: 20.8px;
  `,

  DivisionLine: styled.View`
    height: 30px;
    width: 2px;
    background-color: #000;
    left: 200px;
    position: absolute;
    /* bottom: -20px; */
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
    position: absolute;
    right: 0;
    /* margin-top: 30px; */
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
    /* border-radius: 15px; */
    background-color: #fff;
    flex-direction: row;
    height: 32px;
    width: 300px;
    justify-content: space-between;
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

  TitleTextArea: styled.View`
    height: 50px;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
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
    width: 300px;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px;
  `,

  PrayNameText: styled.Text`
    font-size: 21px;
  `,
};
