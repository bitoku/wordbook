import {Body, Button, Card, CardItem, Text} from "native-base";
import {styles} from "../style/style";
import {Animated, View} from "react-native";
import React, {useState} from "react";
import {Vocabulary} from "../Vocabulary";

export type QuestionProps = {
  vocab: Vocabulary
}

export const Question = (props: QuestionProps) => {
  const {vocab} = props;
  const [userAns, setUserAns] = useState<number>(0);

  const options = [vocab.meanings[0], 'みかん', 'ぶどう', 'レモン'];
  const correctAns = 1;

  return (
    <View style={styles.question}>
      <Text style={[styles.common, styles.word]}>
        {vocab.word}
      </Text>
      <Text style={[styles.common, styles.phonetic]}>
        [ {vocab.pronunciation} ]
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
            <Text style={[styles.common]}>{vocab.syllable}</Text>
            <Text style={[styles.common]}>| {vocab.pronunciation} |</Text>
          </CardItem>
          <CardItem>
            <Text style={[styles.common]}>
              {vocab.pos} {vocab.inflection}
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={[styles.common]}>
                {vocab.text}
              </Text>
            </Body>
          </CardItem>
        </Card>
      }
    </View>
  );
}