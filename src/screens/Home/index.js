import React from 'react';
import {StyleSheet} from 'react-native';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

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

  const DateActual = new Date();
  console.log(DateActual);

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <Calendar
        enableSwipeMonths={true}
        onDayPress={day => {
          alert(`O dia selecionado é: ${day.day}`);
        }}
        // Specify style for calendar container element. Default = {}
        style={{}}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
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
    </S.Container>
  );
};

export default Home;
