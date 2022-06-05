import { useState } from "react";
import { tesisData } from "./tesisData";
import Highlighter from "react-highlight-words";


function App() {
  const [tesis,setTesis] = useState([]);
  const [searchResults, setSearchResults] = useState(tesisData);
  const [descripcion,setDescripcion] = useState("");

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '') setTesis(searchResults);
    else {
        const filteredData = searchResults.filter((item) => {
            return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(lowercasedValue)
            );
        });
        setTesis(filteredData);
        

    };
};
  
  const handleChange = (e) =>{
    setDescripcion(e.target.value);
    filterData(descripcion);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const buscar = formData.get('buscar');
    filterData(buscar);
  }

const tesisDisplay = (tesis) =>{
  return(
    tesis.map((item)=>(
      <div key={item.titulo} className='resultados'>
        <ul>
          <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.titulo}
          /> 
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.autor}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.director}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.estado}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.nivel}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.areas}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.estado}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.year.toString()}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.palabrasClave.toString()}
          /> 
          </li>
          <li>
            
            <Highlighter
            highlightClassName="resultados"
            searchWords={[descripcion]}
            autoEscape={true}
            textToHighlight={item.resumen}
          /> 
          </li>
          
          </ul>
      </div>
      
    ))
  )
}

  return (
    <div>
      <h1>Filtro de Tesis</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='buscar'
          value={descripcion}
          placeholder = 'ingrese el parametro de busqueda'
          onChange = {handleChange}
          autoComplete ='off'
        />
        <button type="submit">Buscar</button>
      </form>
      {tesisDisplay(tesis)}
      
    </div>
  );
}

export default App;
