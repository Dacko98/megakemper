import Main from "./components/Main";
import Navbar from './components/Navbar'

const navbarItems = ['O nás', 'Megakemper',  'Nezabudni si', 'Galéria' ,'Registrácia', 'Kontakty']

function App() {
  return (
    <div className="App">
			<Navbar items = {navbarItems}/>
    	<Main/>
			<div className="test">nejaky text</div>
    </div>
  );
}

export default App;
