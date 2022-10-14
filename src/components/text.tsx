import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

//Usei o Slot do RadixUI para poder passar a propriedade asChild

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' ;
    children: ReactNode; // Aqui fala que o children recebe um elemento React, ou seja qualquer coisa válida
    asChild?: boolean;
}

export function Text({size = 'md', children, asChild}: TextProps){

    const Comp = asChild ? Slot : 'span'

    return(
        <Comp className =
        {clsx('text-gray-100 font-sans', 
        {
            'text-xs' : size === 'sm',
            'text-sm' : size === 'md',
            'text-md' : size === 'lg'
        }
        )} >{children}</Comp>
    )
}