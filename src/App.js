import React from 'react'
import './App.css'
import CharityBaseState from './context/charityBase/CharityBaseState'
import ItemList from './components/organisms/ItemList'

function App() {
  return (
    <CharityBaseState>
      <div className='App container'>
        <header className='App-header'>
          <h1>Grant Checker</h1>
        </header>
				<ItemList />
      </div>
    </CharityBaseState>
  )
}

export default App
