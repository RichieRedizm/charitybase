import React, { useReducer, useEffect } from 'react'
import CharityBaseContext from './charityBaseContext'
import CharityBaseReducer from './charityBaseReducer'
import { GET_CHARITIES, SET_LOADING } from '../types'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const CharityBaseState = props => {
  const initialState = {
    charities: null,
    loading: false
  }
  const [state, dispatch] = useReducer(CharityBaseReducer, initialState)

  // load charities
  const client = new ApolloClient({
    uri: 'https://charitybase.uk/api/graphql',
    headers: {
      Authorization: 'Apikey 50caff1e-409f-4924-a58e-9d83163de6ed'
    }
  })

  // load the first 20 charities with the lowest income ascending
  useEffect(() => {
    setLoading()
    client
      .query({
        query: gql`
          {
            CHC {
              getCharities(filters: { search: "all" }) {
                count
                list(limit: 20, sort: income_asc) {
                  id
                  names {
                    value
                    primary
                  }
                  activities
                  finances {
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
      .then(result =>
        dispatch({
          type: GET_CHARITIES,
          payload: result.data.CHC.getCharities.list
        })
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // take income from and to values to search the api
  const searchCharities = (from, to) => {
    setLoading()
    client
      .query({
        query: gql`
          {
            CHC {
              getCharities(
								filters: { finances: { latestIncome: { gt: ${from}, lt: ${to} } } }
								) {
                count
                list(limit: 20, sort: income_asc) {
                  id
                  names {
                    value
                    primary
                  }
                  activities
                  finances {
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
      .then(result =>
        dispatch({
          type: GET_CHARITIES,
          payload: result.data.CHC.getCharities.list
        })
      )
  }

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <CharityBaseContext.Provider
      value={{
        searchCharities,
        charities: state.charities,
        loading: state.loading
      }}
    >
      {props.children}
    </CharityBaseContext.Provider>
  )
}

export default CharityBaseState
