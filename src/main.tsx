
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './contexts/UserContexts.tsx';

const clientId = "944666948628-7oc2k7ijn2vu6bp943hn5c026a3u9ln9.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={
    clientId
  }>
    <UserProvider>
      <App />
    </UserProvider>
  </GoogleOAuthProvider>

)
