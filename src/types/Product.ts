export type ProductCategory =
  | "Cuentas"
  | "Tarjetas"
  | "Préstamos"
  | "Inversiones"
  | "Seguros";

export interface PerformanceData {
  date: string;
  value: number;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  category: ProductCategory;
  description: string;
  interestRate?: number;
  riskLevel?: number;
  minimumAmount?: number;
  term?: string;
  benefits?: string[];
  performanceData?: PerformanceData[];
}
