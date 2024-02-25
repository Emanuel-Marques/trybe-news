import { createContext } from "react";
import NewsType from "../types";
const AppContext = createContext({} as NewsType);

export default AppContext;