import React, { useState } from 'react';
import { QuizData } from '../../Data/QuizData';
import QuizResult from './QuizResult';
import styled from 'styled-components';


const Heading = styled.p`
font-size: 24px;
text-align: center;
margin-top: 20px;
`;

const Container = styled.div`
width: 80%;
margin: 0 auto;
background-color: #f7f7f7;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Question = styled.div`
font-size: 18px;
margin-bottom: 20px;
`;

const QuestionNumber = styled.span`
font-weight: bold;
`;

const OptionContainer = styled.div``;

const OptionButton = styled.button`
font-size: 16px;
padding: 10px 20px;
margin: 5px;
border: 1px solid #ccc;
border-radius: 5px;
cursor: pointer;

&.checked {
  background-color: #4caf50;
  color: #fff;
  border: none;
}

&:hover {
  background-color: #4caf50; /* Change the background color on hover */
  color: #fff; /* Change the text color on hover */
}
`;

const NextButton = styled.input`
background-color: #008CBA;
color: #fff;
font-size: 16px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;

&:hover {
  background-color: #005B87; /* Change the background color on hover */
}
`;

const AppContainer = styled.div`
  background-color: #76b5c5 ; /* Light Purple background color */
  min-height: 100vh; /* Ensure the background color covers the entire viewport height */
`;

const PreviousButton = styled.button`
  background-color: #f8c1cc;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ff6b81; /* Change the background color on hover */
  }
`;

interface QuizProps {}

function Quiz(props: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [clickedOption, setClickedOption] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const changeQuestion = (forward: boolean) => {
    if (clickedOption > 0) {
      updateScore();
    }
    if (forward && currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else if (!forward && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1); // Go back to the previous question
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <AppContainer>
      <Heading>Quiz</Heading>
      <Container>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <Question>
              <QuestionNumber>{currentQuestion + 1}. </QuestionNumber>
              {QuizData[currentQuestion].question}
            </Question>
            <OptionContainer>
              {QuizData[currentQuestion].options.map((option, i) => (
                <OptionButton
                  className={clickedOption === i + 1 ? 'checked' : ''}
                  key={i}
                  onClick={() => {
                    if (clickedOption === i + 1) {
                      // If the same option is clicked again, unselect it
                      setClickedOption(0);
                    } else {
                      setClickedOption(i + 1);
                    }
                    updateScore();
                  }}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionContainer>
            <PreviousButton
              type="button"
              onClick={() => changeQuestion(false)}
              disabled={currentQuestion === 0}
            >
              Previous
            </PreviousButton>
            <NextButton type="button" value="Next" onClick={() => changeQuestion(true)} />
          </>
        )}
      </Container>
    </AppContainer>
  );
}

export default Quiz;