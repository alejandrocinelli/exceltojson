import useData from "../hooks/useData";
import { useState, useEffect } from "react";

const ResponsableDiseño = () => {

 const { data, setData } = useData();
 const [resposableDiseño, setResponsableDiseño] = useState([]);

 useEffect(() => {

    if(data.length > 0){
    const filtrado = data.map((item) => item.ResponsableDiseño);
    const filtradoUnico = [...new Set(filtrado)];
    setResponsableDiseño(filtradoUnico);
}

else{
    console.log("no hay datos")
}

 }, [data])
    


  return (
    <div className="bg-slate-100  shadow-2xl rounded-md absolute top-5 mr-10 left-1/3 ml-10 pb-5 px-1">
        <div className="flex justify-between mt-1">
            <p className="font-semibold text-sm ml-3">Responsable de Diseño</p>
            <button className="mr-3 " >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
       <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>

        </button>
        </div>
             <div className="flex-wrap pt-2">
        {resposableDiseño.length > 0 ? (
          resposableDiseño.map((item) => {
            return (
              <button
                type="button"
                className="bg-indigo-300 p-1 pl-2 pr-2 ml-3 
                rounded-md text-xs font-semibold
                hover:bg-indigo-400
                "
                key={item}
               
              >
                {item}
              </button>
            );
          })
        ) : (
          <p className="text-center">no hay datos</p>
        )}
      </div>
    </div>
  )
}
export default ResponsableDiseño