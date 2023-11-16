import { useParams, Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import todoImage from "../../images/todo.png";
import quizImage from "../../images/quiz.png";

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #76b5c5;
`;

const HeadingContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const WelcomeTitle = styled.h3`
  margin: 0;
  font-size: 40px;
`;

const WelcomeUsername = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 80%;
  height: 40%;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff3e5;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  &:hover {
    background-color: #ec6064;
  }
`;

// const CardLine = styled.div`
//   position: absolute;
//   bottom: 30%;
//   left: 0;
//   right: 0;
//   height: 1px;
//   background-color: #ccc;
// `;

const CardImage = styled.img`
  width: 95%;
  max-height: 75%;
  margin-bottom: 10px;
  margin-right: 10px; 
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 70%;
`;

const CardDescription = styled.div`
  font-size: 14px;
  color: #333;
`;

interface WelcomeComponentProps {
  username?: string;
}

const WelcomeComponent: React.FC<WelcomeComponentProps> = () => {
  const { username } = useParams<{ username?: string }>();

  return (
    <PageContent>
      <HeadingContent>
        <WelcomeTitle>TaskManagement | Quiz</WelcomeTitle>
        <WelcomeUsername>Welcome {username || "Guest"}</WelcomeUsername>
      </HeadingContent>
      <CardsContainer>
      <Card>
        <CardImage src={todoImage} alt="To-Do" />
        <CardInfo>
          <div>ToDo List</div>
          <CardDescription>---</CardDescription>
        </CardInfo>
        <Link to="/todos" style={{ textDecoration: "none" }}>
          <div>Manage Tasks</div>
        </Link>
        {/* <CardLine /> */}
      </Card>
      <Card>
        <CardImage src={quizImage} alt="Quiz" />
        <CardInfo>
          <div>React Questions</div>
          <CardDescription>---</CardDescription>
        </CardInfo>
        <Link to="/Quiz" style={{ textDecoration: "none" }}>
          <div>Take a Quiz</div>
        </Link>
        {/* <CardLine /> */}
      </Card>
      <Card>
        <CardImage src={quizImage} alt="Quiz" />
        <CardInfo>
          <div>React Questions</div>
          <CardDescription>---</CardDescription>
        </CardInfo>
        <Link to="/Quiz" style={{ textDecoration: "none" }}>
          <div>Take a Quiz</div>
        </Link>
        {/* <CardLine /> */}
      </Card>
      <Card>
        <CardImage src={quizImage} alt="Quiz" />
        <CardInfo>
          <div>React Questions</div>
          <CardDescription>---</CardDescription>
        </CardInfo>
        <Link to="/Quiz" style={{ textDecoration: "none" }}>
          <div>Take a Quiz</div>
        </Link>
        {/* <CardLine /> */}
      </Card>
      <Card>
        <CardImage src={quizImage} alt="Quiz" />
        <CardInfo>
          <div>React Questions</div>
          <CardDescription>---</CardDescription>
        </CardInfo>
        <Link to="/Quiz" style={{ textDecoration: "none" }}>
          <div>Take a Quiz</div>
        </Link>
        {/* <CardLine /> */}
      </Card>
      </CardsContainer>
    </PageContent>
  );
};

export default WelcomeComponent;
