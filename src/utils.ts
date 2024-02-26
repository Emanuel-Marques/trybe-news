import moment from 'moment';
import { NewsItemType } from './types';

export const convertToDays = (date: string): string => {
    const receivedDate = moment(date, 'DD/MM/YYYY HH:mm:ss', true);

    if (!receivedDate.isValid()) {
        return 'Formato de data inválido';
    }
    const currentDate = moment();
    const differenceBetweenDates = currentDate.diff(receivedDate, 'days');
    return `${differenceBetweenDates} dias atrás`;
}

export function Favorite(id: number, news: NewsItemType){
    const favorites = localStorage.getItem('favoritas');
    if(favorites){
      const parsedFavorites = JSON.parse(favorites);
      if(parsedFavorites.some((favoriteItem: NewsItemType) => (favoriteItem.id === id))){
        const newFavorites = parsedFavorites.filter((favoriteItem: NewsItemType) => (favoriteItem.id !== id));
        localStorage.setItem('favoritas', JSON.stringify(newFavorites));
        return(false);
      } else {
        localStorage.setItem('favoritas', JSON.stringify([...parsedFavorites, news]));
        return(true);
      }
    } else {
      localStorage.setItem('favoritas', JSON.stringify([news]));
      return(true);
    }
  }