
import Console from './components/Console'
import Games from './components/Games'
import Manette from './components/Manette'
import Navbar from './components/Navbar'
import Header from './components/Header'
function App() {


  return (
    < >
<Navbar/>
<Header/>
<label id='console'><Console/></label>
<label id='controller'><Manette/></label>
<label id='games'><Games/></label>
    </>
  )
}

export default App
