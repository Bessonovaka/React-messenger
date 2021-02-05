import Layout from "./components/Layout/Layout";
import { AboutPage } from './pages/AboutPage';
import { Profile } from './pages/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
    },
]