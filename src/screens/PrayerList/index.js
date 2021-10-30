import React, {useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import ArrowCircle from '../../assets/arrow_right_circle.svg';

const PrayerList = ({navigation}) => {
  const {theme} = useTheme();

  const [loading, setLoading] = useState();
  const [prayers, setPrayers] = useState([]);
  const [filterdData, setFilterdData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleLoadingButton = async () => {
      setLoading(true);
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

      setLoading(false);
    };

    handleLoadingButton();
  }, []);

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

  const goToReadScreen = item => () => {
    navigation.navigate('ReadScreen', {
      id: item.id,
      title: item.title,
      body: item.body,
    });
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundImage />

      <S.PlannerArea>
        {loading && (
          <S.LoadingArea>
            <ActivityIndicator size="large" color={theme.textColor} />
          </S.LoadingArea>
        )}

        <S.SearchInput
          value={search}
          placeholder="PESQUISAR ORAÇÃO..."
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilter(text)}
          style={{
            backgroundColor: theme.textColor,
            opacity: 0.8,
          }}
        />

        {!loading && (
          <S.TitleTextArea>
            <S.TitleText
              style={{color: theme.textColor, borderColor: theme.textColor}}>
              ORAÇÕES
            </S.TitleText>
          </S.TitleTextArea>
        )}

        {!loading && (
          <FlatList
            data={filterdData}
            bounces={false}
            renderItem={({item}) => (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <S.PrayNameArea style={{borderColor: theme.textColor}}>
                  <S.PrayNameText style={{color: theme.textColor}}>
                    {item.title}
                  </S.PrayNameText>
                  <TouchableOpacity onPress={goToReadScreen(item)}>
                    <ArrowCircle />
                  </TouchableOpacity>
                </S.PrayNameArea>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </S.PlannerArea>
    </S.Container>
  );
};

export default PrayerList;
