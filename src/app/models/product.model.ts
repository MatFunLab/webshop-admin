import { Category } from "./category.model";

export class Product {
    id: number;
    name: string;
    price: number;
    file: File | null;
    desc: string;
    category: Category = new Category();
} 