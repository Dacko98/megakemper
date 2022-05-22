import Main from "./components/Main";
import Navbar from './components/Navbar'
import Registration  from "./components/Registration";
import Informations  from "./components/Informations";


const navbarItems = ['O nás', 'Megakemper',  'Nezabudni si', 'Galéria' ,'Registrácia', 'Kontakty']
function App() {
  return (
    <div className="App">
			<Navbar items = {navbarItems}/>
    	<Main/>
			<Registration/>
			<Informations/>
    </div>
  );
}

export default App;
