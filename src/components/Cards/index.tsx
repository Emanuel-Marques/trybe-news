import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Card from "../Card";
import { NewsItemType } from "../../types";
import styles from './cards.module.css';
import FilterBar from "../FilterBar";

function Cards(){
    const news = useContext(AppContext);
    return(
        <>
            <FilterBar />
            <div className={styles['card-list']}>    
                {news.items && news.items.map((news: NewsItemType) => (
                    <Card {...news} />)
                )}
            </div>
        </>
    );
}

export default Cards;