import { useState } from 'react';
import { NewsItemType } from '../../types';
import { Favorite, convertToDays } from '../../utils';
import styles from './card.module.css';
import heartBlank from '../../../public/blank-heart.png';
import heartFull from '../../../public/heart.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card( news : NewsItemType) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = localStorage.getItem('favoritas');
    if(favorites){
      const parsedFavorites = JSON.parse(favorites);
      setIsFavorite(parsedFavorites.some((favoriteItem: NewsItemType) => (favoriteItem.id === news.id)));
    }
  }, []);
  function handleFavorite(id: number){
    setIsFavorite(Favorite(id, news));
  }
  return (
    <div className={ styles.box }>
        <h3>{ news.titulo }</h3>
        <p className={ styles.intro }>{  news.introducao }</p>
        <div className={ styles['box-footer'] }>
          <p>{ convertToDays(news.data_publicacao) }</p>
          <button
          >
            <Link to={ `${news.link}` }>Leia a notícia aqui</Link>
          </button>
        </div>
        <hr />
        <button
          className={ styles['button-favorite'] }
          onClick={ () => handleFavorite(news.id) }
        >
          <img
            src={ isFavorite ? heartFull : heartBlank } 
            alt={ isFavorite ?  'Favorito' : 'Adicionar aos favoritos'} 
          />
        </button>
    </div>
  );
}

export default Card;