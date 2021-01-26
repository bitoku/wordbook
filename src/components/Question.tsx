import {Body, Button, Card, CardItem, Text} from "native-base";
import {styles} from "../style/style";
import {Animated, View} from "react-native";
import React, {useState} from "react";

export const Question = () => {
  const [userAns, setUserAns] = useState<number>(0);
  const options = ['りんご', 'みかん', 'ぶどう', 'レモン'];
  const correctAns = 1;

  return (
    <View>
      <Text style={[styles.common, styles.word]}>
        apple
      </Text>
      <Text style={[styles.common, styles.phonetic]}>
        [ǽpl]
      </Text>
      {
        options.map((option, idx) => {
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
              onPress={() => {
                setUserAns(optionNum)
              }}
              key={idx}
            >
              <Text>{option}</Text>
            </Button>
          );
        })
      }
      {
        !!userAns &&
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
                ▸ bake [bite into] an apple
                リンゴを焼く[かじる]
                ▸ An apple a day keeps the doctor away.
                〘ことわざ〙 1日にリンゴ1つで医者いらず (!リンゴは健康に良いとされる) .
                2 Cリンゴに似た果実; リンゴに形が似たもの
                ▸ a crab apple
                野生リンゴ.
                3 〖A-〗アップル〘米国のIT企業〙; ＝ Macintosh.
              </Text>
            </Body>
          </CardItem>
        </Card>
      }
    </View>
  );
}