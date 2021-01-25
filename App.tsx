import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Button, Body, Card, CardItem, Header, Title, Content} from 'native-base';

export default function App() {
  const [userAns, setUserAns] = useState<number>(0);
  const options = ['りんご', 'みかん', 'ぶどう', 'レモン'];
  const correctAns = 1;
  return (
    <Container>
      <Header style={styles.header}>
        <Title>
          WordHoliC
        </Title>
      </Header>
      <Content style={styles.container}>
        <Text style={[styles.common, styles.word]}>
          apple
        </Text>
        <Text style={[styles.common, styles.phonetic]}>
          [ǽpl]
        </Text>

        {options.map((option, idx) => {
          const optionNum = idx + 1;
          if (optionNum === correctAns) {
            return (
              <Button
                block dark
                bordered={!userAns}
                success={!!userAns}
                style={[styles.common]}
                onPress={() => {setUserAns(optionNum)}}
                key={idx}
              >
                <Text>{option}</Text>
              </Button>
            );
          } else {
            return (
              <Button
                block dark
                bordered={!(!!userAns && userAns === optionNum)}
                danger={!!userAns && userAns === optionNum}
                style={[styles.common]}
                onPress={() => {setUserAns(optionNum)}}
                key={idx}
              >
                <Text>{option}</Text>
              </Button>
            );
          }
        })}
        {!!userAns &&
        <Card style={[styles.common]}>
          <CardItem header>
            <Text style={[styles.common]}>ap･ple</Text>
            <Text style={[styles.common]}>| ǽp(ə)l |</Text>
          </CardItem>
          <CardItem>
            <Text style={[styles.common]}>
              名詞複～s | -z |
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={[styles.common]}>
                1 Cリンゴ; リンゴの木(apple tree) (!果肉ではU)
              </Text>
              <Text style={[styles.common]}>
                ▸ bake [bite into] an apple
              </Text>
              <Text style={[styles.common]}>
                リンゴを焼く[かじる]
              </Text>
              <Text style={[styles.common]}>
                ▸ An apple a day keeps the doctor away.
              </Text>
              <Text style={[styles.common]}>
                〘ことわざ〙 1日にリンゴ1つで医者いらず (!リンゴは健康に良いとされる) .
              </Text>
              <Text style={[styles.common]}>
                2 Cリンゴに似た果実; リンゴに形が似たもの
              </Text>
              <Text style={[styles.common]}>
                ▸ a crab apple
              </Text>
              <Text style={[styles.common]}>
                野生リンゴ.
              </Text>
              <Text style={[styles.common]}>
                3 〖A-〗アップル〘米国のIT企業〙; ＝ Macintosh.
              </Text>
            </Body>
          </CardItem>
        </Card>
        }
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
