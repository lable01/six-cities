import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  cartCount: number;
}

function App({cartCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen cartCount={cartCount} />
  );
}

export default App;
