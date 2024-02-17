
import './App.css'
import {Column} from "./components/Column"
import {SiteHeader} from "./components/SiteHeader"
import { TestModal } from './components/TestModal'

function App() {


  return (
    <>
     <Column>
     <SiteHeader />
     <TestModal />
     </Column>
    </>
  )
}

export default App
