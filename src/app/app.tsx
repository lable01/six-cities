import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from './../const-enum.ts';
import MainScreen from 'pages/main-screen';
import LoginScreen from 'pages/login-screen';
import FavoritiesScreen from 'pages/favorities-screen';
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
          element={<MainLayout />}
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
            element={<FavoritiesScreen />}
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
