import { Route, Routes } from 'react-router-dom'
import './components/categories.styles.scss'
import Home from './routes/home/home.component'
import { Navigation } from './routes/navigation/navigation.component'
import { SignIn } from './routes/signIn/signIn.component'


const Shop = () => {
  return (
    <h1> I am the shop page</h1>
  )
}


const App = () => {
  
  return (

        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home/>} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />} />
          </Route>
        </Routes>
  )
}

export default App