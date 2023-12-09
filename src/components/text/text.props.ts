import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface TextProps extends DetailedHTMLProps< HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    children:ReactNode;
     size?:'s'|'m'|'l'
}