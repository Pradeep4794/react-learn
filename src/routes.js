import { lazy } from "react";


const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
const MainToggle = lazy(() => import('./app/pages/Toggle/MainToggle'));

const routes = [
    { path: '/',  component: Main },
    { path: '*' , component: Page404 },
    { path: '/togle', component:MainToggle},
]

export default routes;