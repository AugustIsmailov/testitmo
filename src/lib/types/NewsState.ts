import type NewsItem from "./NewsItem";

type NewsState =  {
    list: NewsItem[];
    related: NewsItem[];
    isLoader: boolean;
  }
  export default NewsState