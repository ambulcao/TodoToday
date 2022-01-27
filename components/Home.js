import React from 'react'

//components
import Header from './Header';
import ListItems from './ListItems';

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

  return (
    <>
      <Header />
      <ListItems />
    </>
  )
}

export default Home