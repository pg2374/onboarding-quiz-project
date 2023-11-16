import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  text-align: center;
`;

const ShowScore = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TotalScore = styled.div`
  font-size: 18px;
`;

const TryAgainButton = styled.button`
  background-color: #008CBA;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

interface QuizResultProps {
  score: number;
  totalScore: number;
  tryAgain: () => void;
}

function QuizResult(props: QuizResultProps) {
  return (
    <ResultContainer>
      <ShowScore>Your Score: {props.score}</ShowScore>
      <TotalScore>Total Score: {props.totalScore}</TotalScore>
      <TryAgainButton onClick={props.tryAgain}>Try Again</TryAgainButton>
    </ResultContainer>
  );
}

export default QuizResult;
