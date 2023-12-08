import { ReactNode } from "react"

export interface HeadingProps{
    children: ReactNode
    tag:'h1'|'h2'|'h3'
}