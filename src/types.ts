export type NewsItemType = {
    id: number;
    tipo: string;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    produto_id: number;
    produtos: string;
    editoriais: string;
    imagens: string;
    produtos_relacionados: string;
    destaque: boolean;
    link: string;
  
};

type NewsType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingForm: number;
  showingTo: number;
  items: NewsItemType[];
}

export default NewsType;