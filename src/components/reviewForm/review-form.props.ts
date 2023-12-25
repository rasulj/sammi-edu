import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface ReviewFormProps extends DetailedHTMLProps < HtmlHTMLAttributes< HTMLDivElement>,HTMLDivElement>{
  productid:string
}
export interface IReviewResponse {
    name: string;
    rating: number;
    description: string;
    title: string;
    id: number;
    productId: string;
}