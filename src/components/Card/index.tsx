import { NewsItemType } from '../../types';
import { convertToDays } from '../../utils';
import styles from './card.module.css';
function Card( news : NewsItemType) {
  return (
    <div className={ styles.box }>
        <h3>{ news.titulo }</h3>
        <p className={ styles.intro }>{  news.introducao }</p>
        <div className={ styles['box-footer'] }>
          <p>{ convertToDays(news.data_publicacao) }</p>
          <button>Leia a notícia aqui</button>
        </div>
        <hr />
        <button className={ styles['button-favorite'] }>
          <img src="../../public/blank-heart.png" alt="" />
        </button>
    </div>
  );
}

export default Card;