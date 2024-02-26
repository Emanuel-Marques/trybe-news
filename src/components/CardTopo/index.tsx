import { NewsItemType } from "../../types";
import imgTopo from '../../../public/img-topo.png';
import { useState } from "react";
import { Favorite, convertToDays } from "../../utils";
import styles from './cardtopo.module.css';
import heartBlank from '../../../public/blank-heart.png';
import heartFull from '../../../public/heart.png';

function CardTopo( news: NewsItemType) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavorite(id: number){
    setIsFavorite(Favorite(id, news));
  }
  return (
    <section className={styles['section']}>
        <div className={styles['main-image']}>
          <img src={ imgTopo } alt="" />
        </div>
        <div className={styles['box']}>
            <div className={styles['info-topo']}>
                <span>Notícia mais recente</span>
                  <button
                      className={styles['button-favorite']}
                      onClick={() => handleFavorite(news.id)}
                  >
                      <img
                          src={isFavorite ? heartFull : heartBlank}
                          alt={isFavorite ? 'Favorito' : 'Adicionar aos favoritos'}
                      />
                  </button>
            </div>
            <h3>{ news.titulo }</h3>
            <p>{ news.introducao }</p>
            <div  className={styles['box-footer']}>
                <p>{ convertToDays(news.data_publicacao) }</p>
                <button>Leia a notícia aqui</button>
            </div>
        </div>
    </section>
  );
}

export default CardTopo;