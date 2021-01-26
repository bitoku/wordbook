import {Body, Button, Card, CardItem, Text} from "native-base";
import {styles} from "../style/style";
import {Animated, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Vocabulary} from "../Vocabulary";

export type QuestionProps = {
  vocab: Vocabulary
}

export const Question = (props: QuestionProps) => {
  const {vocab} = props;
  const [userAns, setUserAns] = useState<number>(0);

  useEffect(() => {
    setUserAns(0);
  }, [vocab]);

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
          // this option's number
          const optionNum = idx + 1;
          // whether this option is the correct option
          const correctOption = optionNum === correctAns;
          // whether a user answered
          const isAnswered = !!userAns;
          // whether a user selected this option.
          const isSelected = userAns === optionNum;

          return (
            <Button
              block dark
              bordered={
                !isSelected &&
                !(correctOption && isAnswered)
              }
              success={correctOption && isAnswered}
              danger={!correctOption && isAnswered && isSelected}
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