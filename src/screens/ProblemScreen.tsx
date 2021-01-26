import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, Text, Button} from 'native-base';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../Props";
import {Vocabulary} from "../Vocabulary";
import {AnimatedQuestion} from "../components/AnimatedQuestion";

type ProblemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Problem'
  >;

type Props = {
  navigation: ProblemScreenNavigationProp;
};

export default function ProblemScreen(props: Props) {
  const [questionIdx, setQuestionIdx] = useState(0);

  const vocabs: Vocabulary[] = [
    {
      word: 'apple',
      pronunciation: 'ǽpl',
      syllable: 'ap･ple',
      pos: 'noun',
      inflection: '複～s | -z |',
      meanings: ['りんご'],
      text: `1 Cリンゴ; リンゴの木(apple tree) (!果肉ではU)
▸ bake [bite into] an apple
リンゴを焼く[かじる]
▸ An apple a day keeps the doctor away.
〘ことわざ〙 1日にリンゴ1つで医者いらず (!リンゴは健康に良いとされる) .
2 Cリンゴに似た果実; リンゴに形が似たもの
▸ a crab apple
野生リンゴ.
3 〖A-〗アップル〘米国のIT企業〙; ＝ Macintosh.`
    },
    {
      word: 'lemon',
      pronunciation: 'lémən',
      syllable: 'lem･on',
      pos: 'noun',
      inflection: '複～s | -z |',
      meanings: ['レモン'],
      text: `1 C〖スライスしたものは不可算〗レモン; 〖形容詞的に〗レモンの(入った), レモン風味の
▸ lemon juice
レモン果汁
▸ a slice of lemon
レモン1切れ
▸ half a lemon
レモン半分
▸ tea with lemon
レモンティー.
2 Uレモン汁; ｟英｠ レモン飲料; Cレモンの木(lemon tree).
3 Uレモン色(lemon yellow).
4 C｟米･くだけて｠ 役立たずの物; ポンコツ車.
5 C｟英･くだけて｠ おろか者
▸ like a lemon
ばかみたいに.`
    },
  ];

  return (
    <Container>
      <View style={{flex: 1}}>
        <AnimatedQuestion
          vocabs={vocabs}
          questionIdx={questionIdx}
        />
      </View>
      <View style={{flex: 1}}>
        <Button>
          <Text onPress={
            () => {
              setQuestionIdx(prevState => prevState+1)
            }
          }>
            next
          </Text>
        </Button>
      </View>
    </Container>
  );
}
