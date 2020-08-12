import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import backgroundImg from '../../assets/home-background.png';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={backgroundImg}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={logo}/>
          <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
          <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
        </View>

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a UF"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf}
            onChangeText={setUf}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a cidade"
            autoCorrect={false}
            value={city}
            onChangeText={setCity}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Home;
