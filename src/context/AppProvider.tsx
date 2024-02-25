import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import NewsType from "../types";

const AppProvider =({ children } : any) => { 
    const [news, setNews] = useState<NewsType>({} as NewsType);
    useEffect(() => {
        const fetchNews = async () =>{
            const res = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=6");
            const data = await res.json();
            setNews(data);
            console.log(`Response: ${data}`);
        }
        fetchNews();
    }, []);
    return (
        <AppContext.Provider value={ news }>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;