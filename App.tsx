import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Button} from 'native-base';

export default function App() {
  return (
    <Container style={styles.container}>
      <Text style={styles.word}>
        apple
      </Text>
      <Text style={styles.phonetic}>
        [ǽpl]
      </Text>

      <Button bordered block>
        <Text>りんご</Text>
      </Button>
      <Button bordered block>
        <Text>りんご</Text>
      </Button>
      <Button bordered block>
        <Text>りんご</Text>
      </Button>
      <Button bordered block>
        <Text>りんご</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    fontWeight: 'bold',
    fontFamily: 'Hiragino Sans',
    fontSize: 32,
  },
  phonetic: {
    fontWeight: 'bold',
    fontFamily: 'Hiragino Sans',
    fontSize: 16,
  }
});
