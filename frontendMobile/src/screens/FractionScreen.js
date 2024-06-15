import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal, Button } from 'react-native';
import colors from '../components/styles';

const FractionScreen = () => {
  const [selectedFraction, setSelectedFraction] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState(null);

  const handleSelectFraction = (fraction) => {
    setSelectedFraction(fraction);
    if (fraction === '1/8') {
      setFeedbackColor('lightgreen'); // Fração correta, cor verde
    } else {
      setFeedbackColor('red'); // Fração incorreta, cor vermelha
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>MÓDULO I - Frações</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imageContainerIcon}>
        <Image
          source={require('../assets/icon_fracao.png')}
          style={[styles.cornerImage]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          1- Toque na fração correspondente às fatias que faltam:
        </Text>
      </View>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imageContainer}>
        <Image
          source={require('../assets/ideia.png')}
          style={[styles.cornerImage]}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Image
        source={require('../assets/pizza.png')}
        style={[styles.pizzaImage, { height: windowHeight * 0.25, width: windowWidth * 0.6 }]}
        resizeMode="contain"
      /> 
      <View style={styles.fractionContainer}>
        <TouchableOpacity
          style={[
            styles.fractionButton,
            selectedFraction === '1/8' && { backgroundColor: feedbackColor }, // Verifica se é 1/8 e aplica a cor correspondente
          ]}
          onPress={() => handleSelectFraction('1/8')}
        >
          <Text style={styles.fractionText}>1/8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.fractionButton,
            selectedFraction === '1/2' && { backgroundColor: feedbackColor }, // Verifica se é 1/2 e aplica a cor correspondente
          ]}
          onPress={() => handleSelectFraction('1/2')}
        >
          <Text style={styles.fractionText}>1/2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.fractionButton,
            selectedFraction === '6/8' && { backgroundColor: feedbackColor }, // Verifica se é 6/8 e aplica a cor correspondente
          ]}
          onPress={() => handleSelectFraction('6/8')}
        >
          <Text style={styles.fractionText}>6/8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.fractionButton,
            selectedFraction === '1/1' && { backgroundColor: feedbackColor }, // Verifica se é 1/1 e aplica a cor correspondente
          ]}
          onPress={() => handleSelectFraction('1/1')}
        >
          <Text style={styles.fractionText}>1/1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRefazProximo}>
      <TouchableOpacity style={[styles.actionButton, { width: '40%', height:'90%' }]}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/refresh_button.png')}
            style={[styles.actionButtonIcon]}
            resizeMode="contain"
          />
          <Text style={styles.actionButtonText}>Refazer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, { width: '40%', height:'90%' }]}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/proximo_button.png')}
            style={[styles.actionButtonIcon]}
            resizeMode="contain"
          />
          <Text style={styles.actionButtonText}>Próximo</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.menubar}>
   
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Image
                source={require('../assets/voltar.png')}
                style={[styles.closeIcon]}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/ideia.png')}
              style={[styles.ideiaIcon]}
              resizeMode="contain"
            />
            <Text style={styles.modalText}>
              Dica: 
              {'\n\n'}
              Conte as fatias faltantes! Identifique quantas fatias estão faltando na pizza. Esse número será o numerador da fração correspondente.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
    alignItems: 'center',
    padding:10,
  },
  headerText: {
    color: colors.branco,
    fontSize: 20,
    backgroundColor: colors.cinza,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 8,
    marginTop: 40,
  },
  content: {
    alignItems: 'center',
    padding:60,
  },
  instructionText: {
    margin:5,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  pizzaImage: {
    marginTop: 20,
    aspectRatio: 1,
  },
  fractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  fractionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  fractionText: {
    fontSize: 18,
  },
  menubar: {
    backgroundColor: colors.verdeAgua,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  buttonRefazProximo: {
    marginTop: 50,
    bottom: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  actionButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    width: 30,
    height: 30,
  },

  actionButtonText: {
    marginLeft: 5,
    fontSize: 18,
  },
  imageContainer: {
    marginTop:250,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  imageContainerIcon: {
    marginTop:80,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  cornerImage: {
    width: 50,
    height: 50,
  },
  ideiaIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginRight: 10,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.branco,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FractionScreen;
