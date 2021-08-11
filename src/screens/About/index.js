import React, {useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {Dimensions} from 'react-native';

const About = () => {
  const {theme} = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleLoadingButton = async () => {
      setLoading(true);
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();

      if (json) {
        setMovies(json);
      }

      setLoading(false);
    };

    handleLoadingButton();
  }, []);

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundImage />
      <S.AreaBox>
        {loading && (
          <S.LoadingArea>
            <ActivityIndicator size="large" color={theme.textColor} />
          </S.LoadingArea>
        )}

        {!loading && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth}
            decelerationRate="fast"
            data={movies}
            bounces={false}
            renderItem={({item}) => (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '95%',
                }}>
                <S.AreaBoxTitle>
                  <S.TextTitle>
                    {item.titulo.substring(0, 10) + '...'}
                  </S.TextTitle>
                </S.AreaBoxTitle>

                <S.AreaBoxBody>
                  <S.AreaText style={{backgroundColor: theme.textColor}}>
                    <S.TextBody>{item.titulo}</S.TextBody>
                  </S.AreaText>
                </S.AreaBoxBody>
              </View>
            )}
            keyExtractor={item => item.titulo}
          />
        )}
      </S.AreaBox>
    </S.Container>
  );
};

export default About;
