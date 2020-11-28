import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSentence} from "../../store/slices/stringData";
import Question from "../../components/Question/Question";
import {Switch, Route} from 'react-router-dom';
import {useHistory} from 'react-router';
import Result from "../../components/Result/Result";

export default function MainContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  // @ts-ignore
  const {sentence} = useSelector((state => state.sentence));
  const questionsArr = ['Who?', 'What?', 'When?', 'Where?'];

  const handleSetSentence = (value: string) => {
    dispatch(setSentence(value));
  }

  useEffect(() => {
    if (sentence === '') history.push('/');
  }, [sentence]);

  return (
    <Switch>
      <Route exact path="/">
        <Question
          questions={questionsArr}
          handleSetSentence={handleSetSentence}
        />
      </Route>
      <Route path="/result">
        <Result answerData={sentence}/>
      </Route>
    </Switch>
  );
}
