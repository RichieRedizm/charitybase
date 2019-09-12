import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ItemList from '../ItemList'

afterEach(cleanup)

test('if charities context is empty do not display any list', () => {
  const props = {
    charities: [],
    loading: false
  }
  const { queryByTestId } = render(<ItemList {...props} />)
  expect(queryByTestId('charities-list')).toBeNull()
})

test('if charities data available generate list of items', () => {
  const props = {
    charities: [
      {
        id: '266065',
        names: [
          {
            value: 'Wandsworth Mind',
            primary: true
          }
        ],
        contact: {
          email: 'finance@bwwmind.org.uk',
          person: '',
          phone: '02072598100',
          address: [
            'Brent Wandsworth & Westminster Mind',
            '6 Osbert Street',
            'London'
          ],
          postcode: 'SW1P 2QU'
        },
        finances: [
          {
            income: 0,
            spending: 0
          }
        ],
        grants: null
      },
      {
        id: '517267',
        names: [
          {
            value: 'Carmarthen Mind Association',
            primary: true
          }
        ],
        contact: {
          email: 'carmsmind132@aol.com',
          person: '',
          phone: '01267222990',
          address: ['Mind Carmarthen', '132B Priory Street', 'Carmarthen'],
          postcode: 'SA31 1LR'
        },
        finances: [
          {
            income: 0,
            spending: 0
          }
        ],
        grants: [
          {
            id: '360G-LBFEW-103658',
            amountAwarded: 15100,
            fundingOrganization: [
              {
                name: 'Lloyds Bank Foundation for England and Wales'
              }
            ]
          }
        ]
      },
      {
        id: '219829',
        names: [
          {
            value: 'The Elliott Charity',
            primary: true
          }
        ],
        contact: {
          email: 'contact@mind.org.uk',
          person: '',
          phone: '02082152295',
          address: ['Mind N A M H', 'Granta House', '15-19 Broadway', 'London'],
          postcode: 'E15 4BQ'
        },
        finances: [
          {
            income: 0,
            spending: 0
          }
        ],
        grants: null
      }
    ],
    loading: false,
    searchCharities: jest.fn()
  }
  const { getByTestId, asFragment } = render(<ItemList {...props} />)
  const charityList = getByTestId('charities-list')
  expect(charityList)
  expect(charityList.children.length).toBe(3)
  expect(asFragment()).toMatchSnapshot()
})
