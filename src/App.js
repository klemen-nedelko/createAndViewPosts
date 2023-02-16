import './App.css';
import Login from'./pages/Login';
import { Forms } from './pages/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Confirmation } from './pages/Confirmation';
import { ApplicationSubmision } from './pages/ApplicationSubmision';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Forms/>}/>
        <Route path="/confirm"  element={<Confirmation/>}/>
        <Route exact path="/admin"  element={<Login/>}/>
        <Route exact path="/submisions" element={<ApplicationSubmision/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
