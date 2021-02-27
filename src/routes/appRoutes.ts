import { mergeRight, map } from 'ramda'

import { DASHBOARD_PAGE_PATH } from '../constants'
import { Dashboard } from '../pages/Dashboard/Dashboard'

const defaultRouteConfig = {
  isPrivate: false,
  exact: true,
  userTypes: [],
}

const commonRoutes = [
  {
    path: DASHBOARD_PAGE_PATH,
    component: Dashboard,
  },
]

const mergeDefaultClientConfig = map(
  mergeRight(defaultRouteConfig),
  commonRoutes
)

const appRoutes = mergeDefaultClientConfig

export default appRoutes
