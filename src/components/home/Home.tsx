import { useSelector,useDispatch } from 'react-redux'
import Navbar from '../navbar/Navbar';
import { toggleTheme } from '../../redux/themeReducer';

const Home = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector((state:any) => state.theme.mode);




  return (
    <div> 
   <Navbar/>

    <button onClick={()=>dispatch(toggleTheme())}>TOGGLE THEME</button>
     current theme is : {themeMode}
    
   </div>
  )
}

export default Home