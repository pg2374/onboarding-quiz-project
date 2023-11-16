import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ToDo {
  id: number;
  description: string;
  done: string; // Change data type to boolean for true/false
  targetDate: Date;
}

const PageContainer = styled.div`
  background-color: #76b5c5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto, 0;
  background-color: #eeeee4;
`;


const Header = styled.h1`
  text-align: center;
  color: #black;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Alert = styled.div`
  position: absolute;
  background-color: #ff0000;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  top: 50%;
  left: calc(100% + 5px);
  transform: translateY(-50%);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #e28743;
  color: white;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const EditableValue = styled.span`
  cursor: pointer;
`;

export default function ToDoComponent() {
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newTodo, setNewTodo] = useState<ToDo>({
    id: 0,
    description: '',
    done: 'ToDo', // Change initial value to 'ToDo'
    targetDate: targetDate,
  });

  const [editRow, setEditRow] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Partial<ToDo>>({});
  const [validationMessage, setValidationMessage] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.description.trim() === '') {
      setValidationMessage('Description cannot be blank');
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      { ...newTodo, id: prevTodos.length + 1 },
    ]);

    setNewTodo({
      id: 0,
      description: '',
      done: 'ToDo', // Change initial value to 'ToDo'
      targetDate: targetDate,
    });

    setValidationMessage('');
  };

  const handleDelete = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleEditRow = (todoId: number) => {
    setEditRow(todoId);
    setEditedData({});
  };

  const handleSaveChanges = (todoId: number) => {
    setEditRow(null);
    // Update the todo with the edited values
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          description: editedData.description || todo.description,
          done: editedData.done || todo.done, // Update status
          targetDate: editedData.targetDate || todo.targetDate,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleCancelEdit = () => {
    setEditRow(null);
    setEditedData({});
  };

  useEffect(() => {
    if (validationMessage) {
      const timer = setTimeout(() => {
        setValidationMessage('');
      }, 3000); // 3 seconds
      return () => {
        clearTimeout(timer);
      };
    }
  }, [validationMessage]);

  return (
    <PageContainer>
      <Container>
        <Header>These tasks need You!</Header>
        <Table>
          <thead>
            <tr>
              <Th>Id</Th>
              <Th>Description</Th>
              <Th>Target Date</Th>
              <Th>Status</Th>
              <Th>Options</Th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <Td>{todo.id}</Td>
                <Td>
                  {editRow === todo.id ? (
                    <Input
                      type="text"
                      value={editedData.description || todo.description}
                      onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                    />
                  ) : (
                    <>
                      <EditableValue onClick={() => handleEditRow(todo.id)}>{todo.description}</EditableValue>
                      {validationMessage && (
                        <Alert onClick={() => setValidationMessage('')}>&times; {validationMessage}</Alert>
                      )}
                    </>
                  )}
                </Td>
                <Td>
                  {editRow === todo.id ? (
                    <Select
                      value={editedData.done || todo.done}
                      onChange={(e) => setEditedData({ ...editedData, done: e.target.value })}
                    >
                      <option value="ToDo">ToDo</option> {/* Add "InProgress" and "Completed" options */}
                      <option value="InProgress">InProgress</option>
                      <option value="Completed">Completed</option>
                    </Select>
                  ) : (
                    <EditableValue onClick={() => handleEditRow(todo.id)}>{todo.done}</EditableValue>
                  )}
                </Td>
                <Td>
                  {editRow === todo.id ? (
                    <Input
                      type="date"
                      value={editedData.targetDate ? editedData.targetDate.toISOString().substring(0, 10) : todo.targetDate.toISOString().substring(0, 10)}
                      onChange={(e) => setEditedData({ ...editedData, targetDate: new Date(e.target.value) })}
                    />
                  ) : (
                    <EditableValue onClick={() => handleEditRow(todo.id)}>{todo.targetDate.toDateString()}</EditableValue>
                  )}
                </Td>
                <Td>
                  {editRow === todo.id ? (
                    <>
                      <Button onClick={() => handleSaveChanges(todo.id)}>Save</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
                  )}
                </Td>
              </tr>
            ))}
            <tr>
              <Td>{todos.length + 1}</Td>
              <Td>
                <Input
                  type="text"
                  placeholder="New ToDo"
                  value={newTodo.description}
                  onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />
                {validationMessage && (
                  <Alert onClick={() => setValidationMessage('')}>&times; {validationMessage}</Alert>
                )}
              </Td>
              <Td>
                <Input
                  type="date"
                  value={newTodo.targetDate.toISOString().substring(0, 10)}
                  onChange={(e) => setNewTodo({ ...newTodo, targetDate: new Date(e.target.value) })}
                />
              </Td>
              <Td>
                <Select
                  value={newTodo.done}
                  onChange={(e) => setNewTodo({ ...newTodo, done: e.target.value })}
                >
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Completed">Completed</option>
                </Select>
              </Td>
              <Td>
                <Button onClick={handleAddTodo}>Add</Button>
              </Td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </PageContainer>
  );
}
