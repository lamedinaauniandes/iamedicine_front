import {BrowserRouter,Route,Routes,Outlet,useLocation ,Navigate} from  'react-router-dom';

import Layout_front from './front/layout/layout_front.jsx'; 
import LandingPage from "./front/pages/LandingPage.jsx";
import LoginPage from "./front/pages/LoginPage.jsx";
import Layout from "./app/layout/Layout.jsx";
import Chat from "./app/pages/ChatPage.jsx";
import Settings from "./app/pages/SettingsPage.jsx";
import ChatPage from "./app/pages/proofChat.jsx"; 
import Users from "./app/pages/userspage.jsx"

function RequireAuth() {
      const location = useLocation(); 
      const auth = localStorage.getItem("token") !== null; 
       if(!auth) {
          return <Navigate to="/login" replace state={{ from:location}}/>;
       }
       return <Outlet />;
}

function RootRoute({ isAuthed }) {

        const auth = localStorage.getItem("token") !== null; 
        if(!auth) { 
           return <Outlet />
        }
        return <Navigate to="app" replace/>

        // return isAuthed ? <Navigate to="app" replace />: <LandingPage /> 
}

function App() {

  const isAuthed = localStorage.getItem("token") !== null; 

  return (
    <BrowserRouter>
        <Routes>
               {/* condicional */}
               <Route element={<RootRoute/>}> 
                    <Route path="/" element={<Layout_front />}>
                      <Route index element={<LandingPage />}></Route>
                      <Route path="/login" element={<LoginPage />}></Route>
                    </Route>
               </Route>

               {/* público */}
               <Route path="/login" element={<LoginPage />}></Route>

               {/* privado */}
              <Route element={<RequireAuth isAuthed={isAuthed} />}>
                  <Route path="/app" element={<Layout />}>
                    <Route index element={<Chat />}></Route>
                    <Route path="users/" element={<Users />}></Route>
                    <Route path="chat/" element={<Chat />}></Route>
                    <Route path="settings/" element={<Settings />}></Route>
                    <Route path="chatproof/" element={<ChatPage />}></Route>
                  </Route>
              </Route>
                  

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

    </BrowserRouter>


  )
 
}


export default App;
