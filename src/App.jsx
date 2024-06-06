import Home from './pages/Home'
import { Header } from './components';
import { useEffect,useState } from 'react';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import { useDispatch } from 'react-redux'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))     
  },[])
   

  return !loading ? (
    <div className=''>
      <Home/>
    </div>
  ):null
}

export default App
