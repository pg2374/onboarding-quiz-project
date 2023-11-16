import React, { useState, useEffect } from 'react';
import QuizComponent from '../../components/QuizComponent/QuizApp';
import TodoComponent from '../../components/ToDoAppComponent/ToDoComponent';

const AdminContainer: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);
  const [newQuizQuestion, setNewQuizQuestion] = useState<string>('');
  const [newTodo, setNewTodo] = useState<string>('');

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

  const addQuizQuestion = () => {
    if (newQuizQuestion.trim() !== '') {
      setQuizQuestions([...quizQuestions, newQuizQuestion]);
      setNewQuizQuestion('');
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div>
        <h2>Quiz Questions</h2>
        <ul>
          {quizQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a new quiz question"
          value={newQuizQuestion}
          onChange={(e) => setNewQuizQuestion(e.target.value)}
        />
        <button onClick={addQuizQuestion}>Add</button>
      </div>

      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default AdminContainer;
