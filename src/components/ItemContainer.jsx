import TablaContainer from "./TablaContainer"
import TipoDeTarea from "./TipoDeTarea"

const ItemContainer = () => {
  return (
    <div className="bg-purple-300 flex-col h-screen relative" >

    <TipoDeTarea/>
    <TablaContainer/>

    </div>
  )
}
export default ItemContainer