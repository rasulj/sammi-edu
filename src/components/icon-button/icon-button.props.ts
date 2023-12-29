
 import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import up from './icons/up.svg'
import close from './icons/close.svg'
import menu from './icons/menu.svg'

export const  icons = { up, menu, close}

export type Icontype = keyof typeof icons

export interface IconButtonProps extends DetailedHTMLProps< HtmlHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    appearance:'primary'|'white'
    icon:Icontype
}