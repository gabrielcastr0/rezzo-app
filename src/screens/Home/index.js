import React, {useRef, useState} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {Calendar} from 'react-native-calendars';
import {Modalize} from 'react-native-modalize';
import {LocaleConfig} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

LocaleConfig.locales.pt_br = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabádo',
  ],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt_br';

const Home = () => {
  const {theme} = useTheme();

  // open modalize when open home tab
  // useEffect(() => {
  //   modalizeRef.current?.open();
  // }, []);

  const DateActual = new Date();
  let [todayDate, setTodayDate] = useState(DateActual.getDate());
  let [actualMonth, setActualMonth] = useState(DateActual.getMonth());

  // converting months number to string
  switch (actualMonth) {
    case 0:
      actualMonth = 'JANEIRO';
      break;
    case 1:
      actualMonth = 'FEVEREIRO';
      break;
    case 2:
      actualMonth = 'MARÇO';
      break;
    case 3:
      actualMonth = 'ABRIL';
      break;
    case 4:
      actualMonth = 'MAIO';
      break;
    case 5:
      actualMonth = 'JUNHO';
      break;
    case 6:
      actualMonth = 'JULHO';
      break;
    case 7:
      actualMonth = 'AGOSTO';
      break;
    case 8:
      actualMonth = 'SETEMBRO';
      break;
    case 9:
      actualMonth = 'OUTUBRO';
      break;
    case 10:
      actualMonth = 'NOVEMBRO';
      break;
    case 11:
      actualMonth = 'DEZEMBRO';
      break;
    default:
      actualMonth = '?';
      break;
  }

  const modalizeRef = useRef(null);

  const onOpen = item => {
    setTodayDate(item.day);
    setActualMonth(item.month - 1);
    modalizeRef.current?.open();
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <Calendar
        enableSwipeMonths={true}
        onDayPress={onOpen}
        style={{}}
        theme={{
          backgroundColor: '#000000',
          calendarBackground: '#00000011',
          textSectionTitleColor: theme.textColor,
          textSectionTitleColorFontWeight: 'bold',
          // textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#000000',
          todayTextColor: theme.textColor,
          dayTextColor: '#ffffff',
          textDisabledColor: 'gray',
          dotColor: '#00adf5',
          selectedDotColor: 'red',
          arrowColor: theme.textColor,
          disabledArrowColor: '#d9e1e8',
          monthTextColor: theme.textColor,
          indicatorColor: 'blue',
          textDayFontFamily: 'Arial',
          textMonthFontFamily: 'Arial',
          textDayHeaderFontFamily: 'Arial',
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          textDayFontSize: 25,
          textMonthFontSize: 30,
          textDayHeaderFontSize: 30,
        }}
      />

      <CustomBackgroundImage />

      <Modalize
        handlePosition="inside"
        ref={modalizeRef}
        snapPoint={300}
        modalHeight={800}
        HeaderComponent={
          <S.ModalizeHeaderView>
            <S.ModalizeHeaderText style={{color: theme.textColor}}>
              {todayDate} de {actualMonth}
            </S.ModalizeHeaderText>
          </S.ModalizeHeaderView>
        }>
        <S.ModalizeView>
          {/* <TouchableOpacity
            style={[styles.botao, {backgroundColor: '#29ae19'}]}>
            <Text>EDITAR</Text>
          </TouchableOpacity> */}
        </S.ModalizeView>
      </Modalize>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 7,
  },
});

export default Home;
