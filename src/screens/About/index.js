import React, {useState, useEffect} from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';
import {
  FlatList,
  View,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';

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
            data={prayers}
            bounces={false}
            renderItem={({item}) => (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '95%',
                }}>
                <S.AreaBoxTitle>
                  <S.TextTitle>{item.title}</S.TextTitle>
                </S.AreaBoxTitle>

                <S.AreaBoxBody>
                  <S.AreaText style={{backgroundColor: theme.textColor}}>
                    <S.TextBody>{item.body}</S.TextBody>
                    <Button
                      title="Opa"
                      onPress={() => navigation.navigate('ReadScreen')}
                    />
                  </S.AreaText>
                </S.AreaBoxBody>
              </View>
            )}
            keyExtractor={item => item.title}
          />
        )}
      </S.AreaBox>
    </S.Container>
  );
};

export default About;
