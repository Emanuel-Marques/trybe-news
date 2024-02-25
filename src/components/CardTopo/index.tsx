import { NewsItemType } from "../../types";
import imgTopo from '../../../public/igm-topo.png';

function CardTopo( news: NewsItemType) {
  return (
    <section>
        <div>
          <img src={ imgTopo } alt="" />
        </div>
        <div>
            <div>
                <span>Notícia mais recente</span>
                
            </div>
            <h1>{ news.titulo }</h1>
            <p>{ news.introducao }</p>
            <button>Leia a notícia aqui</button>
        </div>
    </section>
  );
}

export default CardTopo;