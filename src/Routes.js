import {lazy} from 'react'
import {ONE_BOARD, HOME_PAGE} from './settings/constants'

const routes = [
        {
          path: HOME_PAGE,
          name : "home page",
          exact: true,
          component : lazy(()=> import('./container/Home/Home.js'))
        },
        {
          path: ONE_BOARD,
          name : "contact",
          exact: true,
          component : lazy(()=> import('./container/Board/Board.js'))
        },
]

export default routes;
