
import { NhostClient, NhostReactProvider } from '@nhost/react'
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter,  Routes , Route } from 'react-router-dom';

//Verseny helyfoglalo






const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
})


   


function App() {
  return (

    <ThemeProvider theme={darkTheme}>
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            
            
            
          </Route>
        </Routes>
      </BrowserRouter>
      </NhostApolloProvider>
    </NhostReactProvider>
    </ThemeProvider>
  )
}

export default App;
