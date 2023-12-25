import { DetailedHTMLProps, HTMLAttributes, } from "react";
import { FieldError } from "react-hook-form";




export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating:number;
    error?:FieldError
    isEditabled?:boolean ;
   
    setRating?: (rating:number)=> void ;
}