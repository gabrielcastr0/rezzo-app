import React, {useRef, useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {Calendar} from 'react-native-calendars';
import {Modalize} from 'react-native-modalize';
import {LocaleConfig} from 'react-native-calendars';
import {Modal, FlatList, View, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useKeyboard} from '@react-native-community/hooks';

import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import AddIcon from '../../assets/add.svg';

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

const Home = ({navigation}) => {
  const {theme} = useTheme();
  const keyboard = useKeyboard();

  const restoreData = async () => {
    let datas = await AsyncStorage.getItem('dataSave');
    console.log(`DATAS: ${datas}`);
    let datasConverted = datas ? JSON.parse(datas) : [];
    let result = datasConverted.find(
      element => element.date === `${todayDate}-${actualMonth}`,
    );

    console.log(`Aqui2: ${datasConverted}`);
    console.log(`Aqui: ${JSON.stringify(result?.list?.prayers)}`);

    let prayers = result?.list?.prayers || [];
    console.log(`Prayers: ${prayers}`);

    setActivity(prayers);
  };

  // open modalize when open home tab
  useEffect(() => {
    console.log(activity);
    modalizeRef.current?.open();
    restoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DateActual = new Date();
  const [prayers, setPrayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterdData, setFilterdData] = useState([]);
  const [search, setSearch] = useState('');

  let [todayDate, setTodayDate] = useState(DateActual.getDate());
  let [actualMonth, setActualMonth] = useState(DateActual.getMonth());
  let [activity, setActivity] = useState([]);

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
    restoreData();
  };

  const findActivities = async () => {
    setModalVisible(true);

    const req = await fetch('http://192.168.1.7:4000/api/prayers/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await req.json();

    if (json) {
      setPrayers(json.list);
      setFilterdData(json.list);
    }
  };

  const handleClickActivity = item => () => {
    setActivity([
      ...activity,
      {
        id: item.id,
        title: item.title,
        body: item.body,
        wasRead: false,
      },
    ]);
  };

  const searchFilter = text => {
    if (text) {
      const newData = prayers.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterdData(newData);
      setSearch(text);
    } else {
      setFilterdData(prayers);
      setSearch(text);
    }
  };

  const savePrayerData = async () => {
    setModalVisible(false);
    const data = {
      date: `${todayDate}-${actualMonth}`,
      list: {
        prayers: activity,
      },
    };

    try {
      let res = await AsyncStorage.getItem('dataSave');
      console.log(`SAVE PRAYER DATA: ${res}`);
      let resObject = res ? JSON.parse(res) : [data];

      let found = resObject.find(element => element.date === data.date);
      console.log(`Found: ${found}`);
      if (found) {
        resObject.forEach((element, index) => {
          console.log(index);
          console.log(`${element.date} === ${data.date}`);
          if (element.date === data.date) {
            resObject[index] = data;
            console.log('dia equivalente');
          }
        });
      } else {
        resObject.push(data);
      }

      await AsyncStorage.setItem('dataSave', JSON.stringify(resObject));
      restoreData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickStatusActivity = item => () => {
    item.wasRead = !item.wasRead;
    setActivity(activity);
    savePrayerData();
    console.log(activity);
  };

  const handleClickAccessPrayer = item => () => {
    item.wasRead = !item.wasRead;
    setActivity(activity);
    savePrayerData();
    console.log(activity);
    navigation.navigate('ReadScreen', {
      id: item.id,
      title: item.title,
      body: item.body,
    });
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <S.Box>
          <S.BoxBody style={{bottom: keyboard.keyboardShown ? -130 : 0}}>
            <S.TitleTextArea>
              <S.TitleText
                style={{
                  color: theme.textColor,
                  borderColor: theme.textColor,
                }}>
                Lista de Orações
              </S.TitleText>
              <S.SearchInput
                value={search}
                placeholder="PESQUISAR ORAÇÃO..."
                placeholderTextColor={theme.textColor}
                underlineColorAndroid="transparent"
                onChangeText={text => searchFilter(text)}
                style={{
                  borderColor: theme.textColor,
                  opacity: 0.8,
                  color: theme.textColor,
                }}
              />
              {/* <TouchableOpacity onPress={savePrayerData}>
                <AddIcon />
              </TouchableOpacity> */}
            </S.TitleTextArea>
            <FlatList
              decelerationRate="fast"
              data={filterdData}
              bounces={false}
              renderItem={({item}) => (
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <S.AreaBoxTitle>
                    <S.PrayNameArea style={{borderColor: theme.textColor}}>
                      <S.PrayNameText
                        style={{color: theme.textColor}}
                        onPress={handleClickActivity(item)}>
                        {item.title}
                      </S.PrayNameText>
                    </S.PrayNameArea>
                  </S.AreaBoxTitle>
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <S.AreaSaveButton>
              <S.SaveButton
                style={{borderColor: theme.textColor}}
                onPress={savePrayerData}>
                <S.SaveButtonText style={{color: theme.textColor}}>
                  Salvar
                </S.SaveButtonText>
              </S.SaveButton>
            </S.AreaSaveButton>
          </S.BoxBody>
        </S.Box>
      </Modal>

      <Calendar
        enableSwipeMonths={true}
        onDayPress={onOpen}
        theme={{
          calendarBackground: 'rgba(0, 0, 0, 0.03)',
          textSectionTitleColor: theme.textColor,
          textSectionTitleColorFontWeight: 'bold',
          selectedDayTextColor: '#000000',
          todayTextColor: theme.textColor,
          dayTextColor: '#ffffff',
          arrowColor: theme.textColor,
          disabledArrowColor: '#d9e1e8',
          monthTextColor: theme.textColor,
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
        snapPoint={370}
        withOverlay={false}
        HeaderComponent={
          <S.ModalizeHeaderView>
            <S.ModalizeHeaderText style={{color: theme.textColor}}>
              {todayDate} de {actualMonth}
            </S.ModalizeHeaderText>

            <S.NewActivityBtn style={{backgroundColor: theme.backgroundColor}}>
              <S.NewActivityText onPress={findActivities}>
                Nova atividade
              </S.NewActivityText>
            </S.NewActivityBtn>
          </S.ModalizeHeaderView>
        }>
        <S.ModalizeView>
          {activity.map(item => (
            <S.TimelineView key={item.id}>
              <TouchableOpacity onPress={handleClickStatusActivity(item)}>
                {item.wasRead === false && <Error />}
                {item.wasRead === true && <Success />}
              </TouchableOpacity>
              <S.TimelineText>{item.title}</S.TimelineText>
              <S.Line />
              <S.DivisionLine
                style={{backgroundColor: theme.backgroundColor}}
              />
              <S.AccessPrayerBtn style={{backgroundColor: theme.textColor}}>
                <S.AccessPrayerText onPress={handleClickAccessPrayer(item)}>
                  Acessar Oração
                </S.AccessPrayerText>
              </S.AccessPrayerBtn>
            </S.TimelineView>
          ))}
        </S.ModalizeView>
      </Modalize>
    </S.Container>
  );
};

export default Home;
