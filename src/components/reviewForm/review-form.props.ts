import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction } from "react";


export interface ReviewFormProps extends DetailedHTMLProps < HtmlHTMLAttributes< HTMLDivElement>,HTMLDivElement>{
  productid:string
}

export interface SuccessProps {
	setIsSuccess?: Dispatch<SetStateAction<boolean>>;
}

export interface ErrorProps {
	setError?: Dispatch<SetStateAction<boolean>>;
}