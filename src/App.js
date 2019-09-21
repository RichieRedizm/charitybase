import React, { useState, useEffect } from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import Search from './components/organisms/Search'
import ItemList from './components/organisms/ItemList'

function App() {
  const [charities, setCharities] = useState(null)
  const [loading, setLoading] = useState(false)

  // load charities
  const client = new ApolloClient({
    uri: 'https://charitybase.uk/api/graphql',
    headers: {
      Authorization: 'Apikey 50caff1e-409f-4924-a58e-9d83163de6ed'
    }
  })

  // load the first 20 charities with the lowest income ascending
  useEffect(() => {
    setLoading(true)
    searchCharities('all', -1, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // take income from and to values to search the api
  const searchCharities = (name, from, to) => {
    setLoading(true)
    client
      .query({
        query: gql`
          {
            CHC {
              getCharities(
								filters: { search: "${name}", finances: { latestIncome: { gt: ${from}, lt: ${to} } } }
								) {
                count
                list(limit: 20, sort: income_asc) {
                  id
                  names {
                    value
                    primary
                  }
									contact {
										email
										person
										phone
										address
										postcode
									}
                  finances(all: true) {
                    income
                    spending
                  }
                  grants {
                    id
                    amountAwarded
                    fundingOrganization {
                      name
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => {
        setCharities(result.data.CHC.getCharities.list)
        setLoading(false)
      })
  }

  return (
    <div className='App container'>
      <header className='App-header'>
        <h1>Grant Checker</h1>
      </header>
      <Search searchCharities={searchCharities} />
      <ItemList charities={charities} loading={loading} />
    </div>
  )
}

export default App
