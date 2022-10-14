import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

//Usei o Slot do RadixUI para poder passar a propriedade asChild

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg' ;
    children: ReactNode; // Aqui fala que o children recebe um elemento React, ou seja qualquer coisa válida
    asChild?: boolean;
}

export function Heading({size = 'md', children, asChild}: HeadingProps){

    const Comp = asChild ? Slot : 'h2'

    return(
        <Comp className =
        {clsx('text-gray-100 font-bold  font-sans', 
        {
            'text-lg' : size === 'sm',
            'text-xl' : size === 'md',
            'text-2xl' : size === 'lg'
        }
        )} >{children}</Comp>
    )
}