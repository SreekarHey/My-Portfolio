import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../views/Login/Login';

export const LoginRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </Routes>
);
