import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';

interface QuestionProps {
  questions: string[];
  handleSetSentence: (value: string) => void;
}

const styles = {
  wrapper: {
    height: '250px',
    width: '40vw',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  question: {
    fontSize: '25px'
  },
  input: {
    padding: '10px 5px',
    width: '200px',
    borderRadius: 0,
    outline: 'none',
    fontFamily: 'Courier New'
  },
  button: {
    border: 0,
    outline: 'none',
    borderRadius: 0,
    padding: '10px 5px',
    fontSize: '20px',
    cursor: 'pointer',
    fontFamily: 'Courier New'
  },
  error: {
    color: 'red',
  }
}

function Question(props: QuestionProps) {
  const history = useHistory();
  const {questions, handleSetSentence} = props;
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answersData, setAnswersData] = useState('');
  const [validationError, setValidationError] = useState('');

  const isLastStep = questions.length === step;

  const validateAnswer = (answer: string) => {
    if (answer.length < 5) {
      setValidationError('The answer must be at least 5 characters long.');
      return false;
    }
    setValidationError('');
    return true;
  }

  const finishAnswer = () => {
    handleSetSentence(answersData);
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  }

  const handleSubmitAnswer = (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateAnswer(answer)) {
      setAnswersData((prevState) => prevState.concat(` ${answer}`));
      setStep((prevState => prevState + 1));
      setAnswer('');
    }
  }

  useEffect(() => {
    if (isLastStep) {
      finishAnswer();
      history.push('/result');
    }
  }, [finishAnswer, isLastStep])

  return (
    <div style={styles.wrapper}>
      <span style={styles.question}>{questions[step]}</span>
      <form style={styles.form} onSubmit={handleSubmitAnswer} id="form">
        <input onChange={handleTextChange} value={answer} style={styles.input} placeholder="Write your answer"/>
        <span style={styles.error}>{validationError}</span>
      </form>
      <button onClick={handleSubmitAnswer} type="button" style={styles.button}>Submit</button>
    </div>
  );
}

export default Question;
