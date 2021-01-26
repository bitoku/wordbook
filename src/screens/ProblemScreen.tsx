import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Container, Text, Button, Body, Card, CardItem, Header, Title, Content} from 'native-base';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../Props";

type ProblemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Problem'
  >;

type Props = {
  navigation: ProblemScreenNavigationProp;
};

export default function ProblemScreen({ navigation }: Props) {
  const [userAns, setUserAns] = useState<number>(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slide = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const options = ['りんご', 'みかん', 'ぶどう', 'レモン'];
  const correctAns = 1;
  return (
    <Container>
      <View style={styles.content}>
        <Animated.View style={{
          width: Dimensions.get('window').width,
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').width / 2, -Dimensions.get('window').width / 2],
              })
            }]
        }}
        >
        <Text style={[styles.common, styles.word]}>
          apple
        </Text>
        <Text style={[styles.common, styles.phonetic]}>
          [ǽpl]
        </Text>
        {options.map((option, idx) => {
          const optionNum = idx + 1;
          const correctOption = optionNum === correctAns;
          const isAnswered = !!userAns;
          return (
            <Button
              block dark
              bordered={
                !(correctOption && isAnswered) &&
                !(!correctOption && userAns === optionNum)
              }
              success={correctOption && isAnswered}
              danger={!correctOption && isAnswered && userAns === optionNum}
              style={[styles.common]}
              onPress={() => {setUserAns(optionNum)}}
              key={idx}
            >
              <Text>{option}</Text>
            </Button>
          );
        })}
        <Button
          onPress={() => {
            slide();
          }}
        >
          <Text>
            next
          </Text>
        </Button>
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
        </Animated.View>
        <Animated.View style={{
          width: Dimensions.get('window').width,
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').width / 2, -Dimensions.get('window').width / 2],
              })
            }]
        }}
        >
          <Text style={[styles.common, styles.word]}>
            apple
          </Text>
          <Text style={[styles.common, styles.phonetic]}>
            [ǽpl]
          </Text>
          {options.map((option, idx) => {
            const optionNum = idx + 1;
            const correctOption = optionNum === correctAns;
            const isAnswered = !!userAns;
            return (
              <Button
                block dark
                bordered={
                  !(correctOption && isAnswered) &&
                  !(!correctOption && userAns === optionNum)
                }
                success={correctOption && isAnswered}
                danger={!correctOption && isAnswered && userAns === optionNum}
                style={[styles.common]}
                onPress={() => {setUserAns(optionNum)}}
                key={idx}
              >
                <Text>{option}</Text>
              </Button>
            );
          })}
          <Button
            onPress={() => {
              slide();
            }}
          >
            <Text>
              next
            </Text>
          </Button>
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
        </Animated.View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
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
