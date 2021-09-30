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

import ArrowRight from '../../assets/arrow_right_circle.svg';

const PrayerList = ({navigation}) => {
  const {theme} = useTheme();

  const [loading, setLoading] = useState();
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    const handleLoadingButton = async () => {
      setLoading(true);
      const req = await fetch('http://192.168.100.18:4000/api/prayers/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await req.json();

      if (json) {
        setPrayers(json.list);
      }

      setLoading(false);
    };

    handleLoadingButton();
  }, []);

  const goToReadScreen = item => () => {
    navigation.navigate('ReadScreen', {
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

        {!loading && (
          <S.TitleTextArea>
            <S.TitleText>ORAÇÕES</S.TitleText>
          </S.TitleTextArea>
        )}

        {!loading && (
          <FlatList
            data={prayers}
            bounces={false}
            renderItem={({item}) => (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <S.PrayNameArea>
                  <S.PrayNameText>
                    {item.title} - ID: {item.id}
                  </S.PrayNameText>
                  <TouchableOpacity onPress={goToReadScreen(item)}>
                    <ArrowRight />
                  </TouchableOpacity>
                </S.PrayNameArea>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </S.PlannerArea>
    </S.Container>
  );
};

export default PrayerList;
