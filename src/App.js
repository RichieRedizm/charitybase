import React from 'react'
import './App.css'
import CharityBaseState from './context/charityBase/CharityBaseState'
import AlertState from './context/alert/AlertState'
import Alert from './components/atoms/Alert'
import Search from './components/organisms/Search'
import ItemList from './components/organisms/ItemList'

function App() {
  return (
    <CharityBaseState>
      <AlertState>
        <div className='App container'>
          <header className='App-header'>
            <h1>Grant Checker</h1>
          </header>
          <Search />
          <Alert />
          <ItemList />
        </div>
      </AlertState>
    </CharityBaseState>
  )
}

export default App
