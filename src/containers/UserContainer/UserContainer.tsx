import React, { useState, useEffect } from 'react';
import QuizComponent from '../../components/QuizComponent/QuizApp';
import TodoComponent from '../../components/ToDoAppComponent/ToDoComponent';

const UserContainer: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);

  // Simulated data for quiz questions and todos
  const sampleQuizQuestions = [
    'What is the capital of France?',
    'How many continents are there on Earth?',
  ];
  const sampleTodos = ['Buy groceries', 'Complete the project'];

  // Simulate loading quiz questions and todos on component mount
  useEffect(() => {
    setQuizQuestions(sampleQuizQuestions);
    setTodos(sampleTodos);
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>

      <div>
        <h2>Quiz Questions</h2>
        <ul>
          {quizQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserContainer;
