import React, {useRef, useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {Calendar} from 'react-native-calendars';
import {Modalize} from 'react-native-modalize';
import {LocaleConfig} from 'react-native-calendars';
import {
  Modal,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import ArrowCircle from '../../assets/arrow_right_circle.svg';

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
  const windowWidth = Dimensions.get('window').width;

  const restoreData = async () => {
    let datas = await AsyncStorage.getItem('dataSave');
    let datasConverted = datas ? JSON.parse(datas) : [];
    let result = datasConverted.find(
      element => element.date === `${todayDate}-${actualMonth}`,
    );

    console.log(`Aqui2: ${datasConverted}`);
    console.log(`Aqui: ${JSON.stringify(result.list.prayers)}`);

    setActivity(result.list.prayers || []);
  };

  // open modalize when open home tab
  useEffect(() => {
    modalizeRef.current?.open();
    restoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DateActual = new Date();
  const [prayers, setPrayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusActivity, setStatusActivity] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
    // alert(`${todayDate} + ${actualMonth}`);
    setModalVisible(true);

    const req = await fetch('http://192.168.100.18:4000/api/prayers/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await req.json();

    if (json) {
      // let prayList = json.list.map(item => {
      //   return {...item, isChecked: false};
      // });

      setPrayers(json.list);
    }
  };

  const handleClickActivity = item => () => {
    setActivity(act => [...act, item.title]);
    // savePrayerData();
  };

  const savePrayerData = async () => {
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
      console.log(found);
      if (found) {
        resObject.forEach((element, index) => {
          console.log(index);
          console.log(`${element.date} === ${data.date}`);
          if (element.date === data.date) {
            resObject[index] = data;
            console.log('caiu no if');
          }
        });
      } else {
        resObject.push(data);
      }

      // if (indexOf === -1) {
      //   // resObject.push(data);
      // } else {
      //   console.log(resObject[indexOf]);
      // }

      await AsyncStorage.setItem('dataSave', JSON.stringify(resObject));
    } catch (err) {
      console.log(err);
    }
  };

  // const combineFunctions = item => () => {
  //   handleClickActivity(item);
  //   savePrayerData();
  // };

  // useEffect(() => {
  //   savePrayerData();
  // }, [activity]);

  const handleClickStatusActivity = () => {
    if (statusActivity === false) {
      setStatusActivity(true);
    } else {
      setStatusActivity(false);
    }
    console.log(activity);
  };

  const handleClickAccessPrayer = item => () => {
    alert(`Você acessou a oração: ${item}`);
  };

  // const verifyCheckbox = item => () => {
  //   let newPrayers = prayers.map(prayer => {
  //     if (item.id === prayer.id) {
  //       return {...prayer, isChecked: !prayers.isChecked};
  //     } else {
  //       return {...prayer};
  //     }
  //   });
  //   setPrayers(newPrayers);
  //   // item.isChecked ? false : true;
  //   console.log(item);
  //   // if (activity.find(element => element.id === item.id)) {
  //   //   handleClickActivity(item);
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  //   setActivity(act => [...act, item.title]);
  // };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <S.Box>
          <S.BoxBody>
            <S.TitleTextArea>
              <S.TitleText
                style={{
                  color: theme.textColor,
                  borderColor: theme.textColor,
                }}>
                Lista de Orações
              </S.TitleText>
              <TouchableOpacity onPress={savePrayerData}>
                <ArrowCircle />
              </TouchableOpacity>
            </S.TitleTextArea>
            <FlatList
              decelerationRate="fast"
              data={prayers}
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
                    {/* <CheckBox
                      disabled={false}
                      value={item.isChecked}
                      onValueChange={verifyCheckbox(item)}
                    /> */}
                  </S.AreaBoxTitle>
                </View>
              )}
              keyExtractor={item => item.id}
            />
            {/* <S.AccessPrayerBtn
              onPress={savePrayerData}
              style={{backgroundColor: theme.textColor}}>
              <S.AccessPrayerText>Salvar</S.AccessPrayerText>
            </S.AccessPrayerBtn> */}
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
        snapPoint={430}
        modalHeight={800}
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
            <S.TimelineView>
              <TouchableOpacity onPress={handleClickStatusActivity}>
                {statusActivity === false && <Error />}
                {statusActivity === true && <Success />}
              </TouchableOpacity>
              <S.TimelineText>{item}</S.TimelineText>
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
