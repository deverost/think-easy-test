import React from 'react';
import './Result.css';

interface ResultProps {
  answerData: string
}

function Result(props: ResultProps) {
  const {answerData} = props;

  return (
    <div className="typewriter">
      <h1>{answerData}</h1>
    </div>
  );
}

export default Result;
