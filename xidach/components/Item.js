import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  inputW70: {
    width: 70,
  },
  inputW100: {
    width: 100,
  },
  resultText: {
    fontSize: 24,
    width: 100,
    marginRight: 10,
    textAlign: 'center',
  },
  button: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default function Item({ name }) {
  const [player, setPlayer] = useState('');
  const [bet, setBet] = useState('0');
  const [total, setTotal] = useState(0);

  const onUp = () => {
    if (bet) {
      setTotal(total + +bet);
    }
  };
  const onDown = () => {
    if (bet) {
      setTotal(total - bet);
    }
  };

  const onReset = () => {
    setTotal(0)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <TextInput
        placeholder={name}
        style={[styles.input, styles.inputW100]}
        value={player}
        onChangeText={setPlayer}
      />
      <TextInput
        placeholder="Bets"
        style={[styles.input, styles.inputW70]}
        value={bet}
        onChangeText={setBet}
        keyboardType="number-pad"
      />
      <Text style={styles.resultText}>{total}</Text>
      <TouchableOpacity style={styles.button} onPress={onUp}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDown}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.btnText}>↻</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
