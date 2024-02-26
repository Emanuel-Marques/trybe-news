import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Card from "../Card";
import { NewsItemType } from "../../types";
import styles from './cards.module.css';
import FilterBar from "../FilterBar";
import CardTopo from "../CardTopo";

function Cards(){
    const news = useContext(AppContext);
    return(
        <>

            { news.items && <CardTopo {...news.items[0]} />}
            <FilterBar />
            <div className={styles['card-list']}>    
                {news.items && news.items.map((news: NewsItemType, index: number) => (
                    index > 0 && <Card {...news} />
                    ))}
            </div>
        </>
    );
}

export default Cards;