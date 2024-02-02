import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {AppRoute} from '../const.ts';
import {ClassName} from '../const.ts';
import MainScreen from 'pages/main-screen';
import LoginScreen from 'pages/login-screen';
import FavoritesScreen from 'pages/favorites-screen';
import NotFound from 'pages/not-found';
import MainLayout from 'layouts/main-layout';

type AppScreenProps = {
  cartCount: number;
}

function App({cartCount}: AppScreenProps): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <MainLayout className={ClassName} />,
      children: [
        {
          path: AppRoute.Main,
          element: <MainScreen cartCount={cartCount} />,
        },
        {
          path: AppRoute.Login,
          element: <LoginScreen />,
        },
        {
          path: AppRoute.Favorites,
          element: <FavoritesScreen />,
        },
        {
          path: AppRoute.NotFound,
          element: <NotFound />,
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  );

}

export default App;
