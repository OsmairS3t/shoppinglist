export interface IUnit {
    name: string;
}

export interface IType {
    name: string;
}

export interface IProduct {
    id: string;
    name: string;
    unit: string;
    price: number;
}

export interface IBuy {
    id: string;
    type: string;
    product: IProduct;
    amount: number;
    price: number;
}

