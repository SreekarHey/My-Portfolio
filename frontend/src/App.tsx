import { useEffect } from 'react';
import './app.scss';
import { Container, Spinner } from 'react-bootstrap';
import { LoginRouter, MainRouter } from './routes';
import { LoginStates } from './shared/helpers/types';
import { ReduxType } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updatedLoginState } from './redux/app/appSlice';

const renderAppState = (loginState: LoginStates) => {
  switch (loginState) {
    case LoginStates.LOGGED_IN:
      return <MainRouter />;
    case LoginStates.LOGGED_OUT:
      return <LoginRouter />;
    default:
      return <Spinner animation="grow" />;
  }
};

const App = () => {
  const { loginState } = useSelector((s: ReduxType) => s.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatedLoginState(LoginStates.LOGGED_OUT));
  }, [dispatch]);
  return (
    <div className="App p-3 mb-2 bg-dark text-white">
      <Container>{renderAppState(loginState)}</Container>
    </div>
  );
};

export default App;
