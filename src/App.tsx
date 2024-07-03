// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './components/Pages';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from 'styled-components';
import Global from './components/Global';
import profile from './components/profile';
import Login from './components/Login';
// import ProjectList from './components/ProjectList ';
import ProjectDetail from './components/ProjectDetail ';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "#ffffff",
      white: "rgb(255,255,255)",
      black: "rgb(0,0,0)",
      helper: "#fff",
      bg: "rgb(0,0,0)",
      footerbg: "#0a1435",
      btn: "rgb(98,84,243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(132,144,255) 0%, rgb(98,189,252) 100%",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.02) 0px 1px 3px ",


    },
    media: { mobile: "768px", tablet: "998px" }
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <Global />
        <BrowserRouter>
          {/* <Navbar /> */}
          {/* <Login /> */}
          <Routes>
            <Route path="/browse" Component={Pages} />
            {/* <Route path="/" Component={Login} /> */}
            <Route path="/" Component={Login} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/profile" Component={profile} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
