import { useContext} from "react";

import DataContext from "../contex/DataProvider";

const useData = () => {
    return useContext(DataContext);
};

export default useData;