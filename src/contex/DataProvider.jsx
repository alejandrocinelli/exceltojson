import {createContext,useState,useEffect} from 'react'

const DataContext = createContext()

export const DataProvider = ({children}) => {

const [data,setData] = useState([])
const [dataMuestra,setDataMuestra] = useState([])

useEffect(() => {
  console.log("se ejecuto el use effect")
 
  setDataMuestra(data)

}, [data])

const handlerTipoDeTarea = (tipo) => {
  console.log(tipo)
  const filtrado = data.filter((item) => item.TipoDeTarea === tipo)
  setDataMuestra(filtrado)
}

const handlerDeleteSelection = (e) => {
  e.preventDefault();
  console.log("Borrar filtro")
  setDataMuestra(data)
  
}

  return (

    <DataContext.Provider value={{
        data,
        setData,
        setDataMuestra,
        handlerTipoDeTarea,
        dataMuestra,
        handlerDeleteSelection

    }}>
        {children}

    </DataContext.Provider>
  )
}



export default DataContext