import React from 'react'
import Header from '../../components/Header/Header'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import CardContainer from '../CardContainer/CardContainer'

const Main = () => {
  return (
    <div>
        <Header title={"Find your next course here!"}/>
        <SearchFilter />
        <CardContainer />
    </div>
  )
}

export default Main