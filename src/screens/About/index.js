import React, {useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {
  FlatList,
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Favorite from '../../assets/favorite.svg';

const About = ({navigation}) => {
  const {theme} = useTheme();
  const windowWidth = Dimensions.get('window').width;

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
          <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            // snapToInterval={windowWidth}
            // decelerationRate="fast"
            data={prayers}
            bounces={false}
            renderItem={({item}) => (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <S.TitleTextArea>
                  <S.TitleText>{item.title}</S.TitleText>
                </S.TitleTextArea>

                <S.PrayNameArea>
                  <S.PrayNameText>{item.body}</S.PrayNameText>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ReadScreen')}>
                    <Favorite />
                  </TouchableOpacity>
                </S.PrayNameArea>
              </View>
            )}
            keyExtractor={item => item.title}
          />
        )}
      </S.PlannerArea>

      {/* <S.PlannerArea>
        <S.TitleTextArea>
          <S.TitleText>Título</S.TitleText>
        </S.TitleTextArea>

        <S.PrayNameArea>
          <S.PrayNameText>Nome 1</S.PrayNameText>
          <Favorite />
        </S.PrayNameArea>
      </S.PlannerArea> */}
    </S.Container>
  );
};

export default About;
