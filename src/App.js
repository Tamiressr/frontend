import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'; 

function App() {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
async function callProducts() {
  const response= await fetch('https://backend-production-3a10.up.railway.app/produtos');
  const data= await response.json();
  console.log(data);
  setProducts(data);
}
callProducts();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<ul> {products.map(product=>
  <li >{product.nome}</li>
)}</ul>
      </header>
    </div>
  );
}

export default App;
