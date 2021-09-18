import { Theme, GlobalStyles } from 'themes';
import { Routes } from 'routes';
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
      <ToastContainer bodyStyle={{ fontSize: 16 }} />
    </Theme>
  );
};