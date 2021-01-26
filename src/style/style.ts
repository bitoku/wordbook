import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  common: {
    margin: 5,
    fontFamily: 'Hiragino Mincho ProN',
  },
  word: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  phonetic: {
    marginTop: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    height: 30,
  }
});