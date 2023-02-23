
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import NavBar from './components/NavBar';
import { routeArray } from './routes';
const Routes=()=>{
 const element=  useRoutes(routeArray)

  return(
    <>
    
    <NavBar/>

{/* Same as */}

    {/* <ToastContainer/> */}
    {element}
    </>

  )

}

function App() {
  return (
    <>
    <Routes/>
   

     
    </>
  );
}

export default App;
