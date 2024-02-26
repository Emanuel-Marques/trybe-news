import { useContext } from "react";
import Header from "../../components/Header";
import AppContext from "../../context/AppContext";
import { useParams } from "react-router-dom";


function News(){
    const params = useParams();
    const news = useContext(AppContext);
    const currentNews = news.items ? news.items.find((item) => item.id === Number.parseInt(params.id || "")) : null;
    return(
        <>
          <Header />
            <main>
                <h1>{ currentNews?.titulo }</h1>
                
            </main>
        </>
    );
}

export default News;