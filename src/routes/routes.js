import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Feedback from '~/pages/Feedback'
import Live from '~/pages/Live'
import Setting from '~/pages/Setting'
import Coin from '~/pages/Coin'
import Explore from '~/pages/Explore'
import { HeaderOnly } from '~/Layout'
import config from '~/config'

const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.upload, element: Upload, layout: HeaderOnly },
    { path: config.routes.search, element: Search },
    { path: config.routes.feedback, element: Feedback },
    { path: config.routes.live, element: Live },
    { path: config.routes.setting, element: Setting },
    { path: config.routes.coin, element: Coin },
    { path: config.routes.explore, element: Explore },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
