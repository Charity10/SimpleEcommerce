import CategoryData from '../../Categories';
import { Directory } from '../../components/directory/Directory';
import { Outlet } from 'react-router-dom';




const Home = () => {
  
  return (
          <div>
            <Outlet />
            <Directory categories={CategoryData} />
          </div>
        
  )
}

export default Home