import './components/categories.styles.scss'
import CategoryData from './Categories'
import { Directory } from './components/directory/Directory'


const App = () => {
  
  return (

        <Directory categories={CategoryData} />
  )
}

export default App