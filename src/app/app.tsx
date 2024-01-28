import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from 'pages/main-screen';

type AppScreenProps = {
  cartCount: number;
}

function App({cartCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainScreen cartCount={cartCount} />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
