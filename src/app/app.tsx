import {Route, BrowserRouter, Routes} from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Layout}
          element={<MainLayout className={ClassName} />}
        >
          <Route
            path={AppRoute.Main}
            element={<MainScreen cartCount={cartCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={<FavoritesScreen />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
