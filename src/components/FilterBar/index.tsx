import Nav from 'react-bootstrap/Nav';
import styles from './filterbar.module.css';
function FilterBar() {
  return (
      <div className={ styles['filter-bar'] }>
          <Nav variant="underline" defaultActiveKey="/">
              <Nav.Item>
                  <Nav.Link href="/">Mais recentes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="release">Release</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="noticia">
                      Notícia
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="favoritas">
                      Favoritas
                  </Nav.Link>
              </Nav.Item>
          </Nav>
      </div>
  );
}

export default FilterBar;