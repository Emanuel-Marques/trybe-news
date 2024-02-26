import styles from './notfound.module.css';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
    return (
        <div id={ styles.wrapper }>
            <img src="https://i.imgur.com/qIufhof.png" />
            <div id="info">
                <h3>Página não encontrada!</h3>
            </div>
            <Button
              variant="outline-warning"
              onClick={() => window.location.href = '/'}
            >
                Voltar para o início
            </Button>
        </div >
    )
}

export default NotFound;