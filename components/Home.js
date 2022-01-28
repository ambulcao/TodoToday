import React, { useState } from 'react'

//components
import Header from './Header'
import ListItems from './ListItems'
import InputModal from './InputModal'

const Home = () => {

  //initial todo
  const inicialTodo = [{
    title: "Comprar vinho",
    date: "Quinta, 27 Jan 2022 17:46 GMT",
    key: "1"
  }, {
    title: "Fazer o update no app",
    date: "Sexta, 28 Jan 2022 08:00 GMT",
    key: "2"
  }, {
    title: "Comprar Salada e maionese",
    date: "Sabado, 29 Jan 2022 10:00 GMT",
    key: "3"
  }]

  const [todos, setTodos] = useState(inicialTodo);

  //clear all todos
  const handleClearTodos = () => {
    setTodos([]);
  }

  //Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  //function to add a new todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  }

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems 
        todos={todos}
        setTodos={setTodos}
      />
      <InputModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
      />
    </>
  )
}

export default Home