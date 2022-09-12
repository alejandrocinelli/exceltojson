import React from "react";
import ItemContainer from "./components/ItemContainer";
import ParcelExcel from "./components/ParcelExcel";
import TablaContainer from "./components/TablaContainer";
import { DataProvider } from "./contex/DataProvider";

function App() {
  return (
    <div>
      <DataProvider>
        <ParcelExcel />
        <ItemContainer />
      </DataProvider>
    </div>
  );
}

export default App;
