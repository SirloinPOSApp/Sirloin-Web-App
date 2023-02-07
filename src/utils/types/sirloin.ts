export interface ContensType {}

export interface ProductsType {
  buying_price: number;
  category: string;
  id: number;
  items_sold: number;
  minimum_stock: number;
  price: number;
  product_image: string;
  product_name: string;
  stock: number;
  supplier: string;
  upc: string;
  quantity: number;
}

export interface SummaryType {
  customer_id: number;
  sub_total: number;
  discount: number;
  total: number;
}
