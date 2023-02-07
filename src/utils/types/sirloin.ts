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

export interface CustType {
  id: number;
  email: string;
  business_name: string;
  phone_number: number;
  address: string;
}

export interface transactionType {
  created_at: string;
  customer_id: number;
  customer_name: string;
  discount: number;
  id: number;
  invoice_number: string;
  invoice_url: string;
  payment_url: string;
  total_bill: number;
  total_price: number;
  transaction_Status: string;
  transaction_status: string;
  TransactionProductRes: [
    {
      price: number;
      product_id: number;
      product_image: string;
      product_name: string;
      quantity: number;
      total_price: number;
    }
  ];
}

export interface transactionDetailType {
  created_at: string;
  customer_id: number;
  customer_name: string;
  discount: number;
  id: number;
  invoice_number: string;
  invoice_url: string;
  payment_url: string;
  total_bill: number;
  total_price: number;
  transaction_status: string;
}

export interface transactionAdminType {
  created_at: string;
  tenant_id: number;
  tenant_name: string;
  id: number;
  invoice_number: string;
  invoice_url: string;
  payment_url: string;
  total_bill: number;
  transaction_status: string;
}

export interface userType {
  id: number;
  business_name: string;
  email: string;
  phone_number: number;
  address: string;
  password: string;
}
