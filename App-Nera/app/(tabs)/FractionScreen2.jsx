import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../components/styles';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuStudent from '../../components/MenuStudent';

const decimalToFraction = {
  "0.5": "1/2",
  "0.25": "1/4",
  "0.75": "3/4",
  "0.33": "1/3",
};

const fractions = Object.values(decimalToFraction);

const QuestionScreen = () => {
  const [selectedDecimal, setSelectedDecimal] = useState(null);
  const [selectedFraction, setSelectedFraction] = useState(null);
  const [feedbackColors, setFeedbackColors] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  const handleSelectDecimal = (decimal) => {
    setSelectedDecimal(decimal);
    if (selectedFraction) {
      checkAnswer(decimal, selectedFraction);
    }
  };

  const handleSelectFraction = (fraction) => {
    setSelectedFraction(fraction);
    if (selectedDecimal) {
      checkAnswer(selectedDecimal, fraction);
    }
  };

  const checkAnswer = (decimal, fraction) => {
    const correctFraction = decimalToFraction[decimal];
    if (correctFraction === fraction) {
      setFeedbackColors({
        ...feedbackColors,
        [decimal]: 'lightgreen',
        [fraction]: 'lightgreen',
      });
    } else {
      setFeedbackColors({
        ...feedbackColors,
        [decimal]: 'red',
        [fraction]: 'red',
      });
    }
    setDisableButton(false);
  };

  // Função para refazer a atividade
  const handleRefazer = () => {
    setSelectedDecimal(null);
    setSelectedFraction(null);
    setFeedbackColors({});
    setDisableButton(true);
  };

  // Função para ir para a próxima atividade
  const handleProximo = () => {
    // Implementar lógica para próxima atividade
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderTeacher />
      </View>
      <View style={styles.headerQuiz}>
        <Text style={styles.headerText}>MÓDULO I - Frações</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Toque no número decimal e na fração correspondentes:
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          {Object.keys(decimalToFraction).map((decimal) => (
            <TouchableOpacity
              key={decimal}
              style={[
                styles.button,
                selectedDecimal === decimal && { backgroundColor: feedbackColors[decimal] },
              ]}
              onPress={() => handleSelectDecimal(decimal)}
            >
              <Text style={styles.buttonText}>{decimal}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {fractions.map((fraction) => (
            <TouchableOpacity
              key={fraction}
              style={[
                styles.button,
                selectedFraction === fraction && { backgroundColor: feedbackColors[fraction] },
              ]}
              onPress={() => handleSelectFraction(fraction)}
            >
              <Text style={styles.buttonText}>{fraction}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.buttonRefazProximo}>
        <TouchableOpacity onPress={handleRefazer} style={[styles.actionButton, { width: '40%', height: '90%' }]}>
          <View style={styles.buttonContent}>
            <Text style={styles.actionButtonText}>Refazer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { width: '40%', height: '90%' }, disableButton ? styles.disabledButton : null]}
          disabled={disableButton}
          onPress={handleProximo}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.actionButtonText}>Próximo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomMenuStudent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.branco,
  },
  header: {
    width: '100%',
    height: '12%',
  },
  headerQuiz: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  headerText: {
    fontSize: 20,
    width: '100%',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    margin: 5,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    marginVertical: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
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
    backgroundColor: `${colors.azulClaro}22`,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#F6F7F8', // Cor diferente para o botão desabilitado
  },
  actionButtonText: {
    marginLeft: 5,
    fontSize: 18,
  },
});

export default QuestionScreen;
