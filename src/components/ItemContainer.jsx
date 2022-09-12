import ResponsableDiseño from "./ResponsableDiseño"
import TablaContainer from "./TablaContainer"
import TipoDeTarea from "./TipoDeTarea"

const ItemContainer = () => {
  return (
    <div className="flex-col h-max
    relative" >

    <TipoDeTarea/>
    <ResponsableDiseño/>
    <TablaContainer/>

    </div>
  )
}
export default ItemContainer