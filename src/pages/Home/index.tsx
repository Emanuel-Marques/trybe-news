import Cards from "../../components/Cards";
import Header from "../../components/Header";
import styles from './home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return(
        <div>
            <Header />
            <main className={ styles.main }>
                <div className={ styles.content }>
                  <Cards />
                </div>
            </main>
        </div>
    );
}

export default Home;