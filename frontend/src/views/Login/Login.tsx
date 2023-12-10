import { useState } from 'react';
import { Col, Form, Row, Spinner, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updatedLoginState } from '../../redux/app/appSlice';
import { LoginStates } from '../../shared/helpers/types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const LOGINCOMPONENT = 'LOGIN-COMPONENT';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    setValidated(true);
    dispatch(updatedLoginState(LoginStates.LOGGED_IN));
    navigate('/', { replace: true });
  };

  return (
    <div className={LOGINCOMPONENT}>
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
      <Spinner animation="grow" />
    </div>
  );
};

export default Login;
