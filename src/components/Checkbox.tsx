import * as CheckboxPrimitive from '@radix-ui/react-checkbox';  
import {Check} from 'phosphor-react'

//Usei o Slot do RadixUI para poder passar a propriedade asChild

export interface CheckboxProps {

}

export function Checkbox({ }: CheckboxProps){

    return(
        <CheckboxPrimitive.Root
        className='w-6 h-6 p-[2px] bg-gray-800 rounded'
        >

        <Check weight='bold' className='w-5 h-5 text-cyan-500'/>
        <CheckboxPrimitive.Indicator asChild>

        </CheckboxPrimitive.Indicator>

        </CheckboxPrimitive.Root>
            
           
    )
}