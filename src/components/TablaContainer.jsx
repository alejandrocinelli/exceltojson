import useData from "../hooks/useData";

const TablaContainer = () => {
  const { dataMuestra } = useData();

  const numeroAFecha = (numero) => {

    return new Date(((numero)-25567)*86400*1000).toLocaleDateString("es-ES")
  }

  return (
    <div className="bg-slate-100 absolute top-36 left-8 right-8  shadow-2xl w-auto ">
      <table className="table-auto text-xs">
        <thead  className="bg-slate-300" >
          <tr className="" >
            <th className="border border-slate-600 px-1 ">GPO</th>
            <th  className="border border-slate-600">CDL</th>
            <th className="border border-slate-600">Ciudad</th>
            <th className="border border-slate-600 px-1">SubTipoDeTarea</th>
            <th className="border border-slate-600">Resp de Diseño</th>
            <th className="border border-slate-600 px-1">Priorirdad</th>
            <th className="border border-slate-600 px-1">Alcance</th>
            <th className="border border-slate-600">Resp de Obra</th>
            <th className="border border-slate-600 px-1">Fecha de pase a diseño</th>
            <th className="border border-slate-600">Fecha de diseño Replan</th>
            <th className="border border-slate-600">Fecha Diseño real</th>
          </tr>
        </thead>
        {dataMuestra.length > 0
          ? dataMuestra.map((item) => {
              return (
                <tbody key={item.GPO}>
                  <tr className="border border-slate-600 text-xs text-center">
                    <td>{item.GPO}</td>
                    <td className=" ">{item.Nombre_CDL}</td>
                    <td className="">{item.Descripción_CDL}</td>
                    <td>{item.SubTipoDeTarea}</td>
                    <td>{item.ResponsableDiseño}</td>
                    <td >{item.Prioridad}</td>
                    <td ><a href={item.DocumentoDeAlcance} target="blanck">Ver</a></td>
                    <td >{item.ResponsableObra}</td>
                    <td >{numeroAFecha(item.FechaPaseADiseño)}</td>
                    <td >{numeroAFecha(item.FechaDiseñoRePlan)}</td>
                    <td >{numeroAFecha(item.FechaDiseñoReal)}</td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </table>
    </div>
  );
};
export default TablaContainer;
