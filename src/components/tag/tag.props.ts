import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    size?: 's' | 'm';
    color?: 'red' | 'green' | 'primary';
    children: ReactNode;
}