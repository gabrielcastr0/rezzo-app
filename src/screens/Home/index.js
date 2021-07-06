import React, {useRef, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Modalize} from 'react-native-modalize';
import {LocaleConfig} from 'react-native-calendars';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const DateActual = new Date();
  console.log(DateActual);

  const modalizeRef = useRef(null);

  const onOpen = day => {
    console.log(day.day);
    modalizeRef.current?.open();
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <Calendar
        enableSwipeMonths={true}
        onDayPress={onOpen}
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

      <Modalize
        ref={modalizeRef}
        snapPoint={300}
        modalHeight={500}
        HeaderComponent={
          <S.ModalizeHeaderView>
            <S.ModalizeHeaderText style={{color: theme.textColor}}>
              day + month
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
