import { Route, Navigate, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
};
