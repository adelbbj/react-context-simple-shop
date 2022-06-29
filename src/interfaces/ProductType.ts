export interface ProductType {
  item: {
    title: string;
    image: string;
    description: string;
    id?: number;
    isAuth?: boolean;
    toggleCart?: () => void;
    inCart?: boolean;
  };
  key: number;
}
