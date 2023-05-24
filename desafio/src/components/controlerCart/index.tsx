import { ReactNode } from 'react'
import {Container} from './styles'

type ControlerType = {
    children: ReactNode;
}

export function ControlerCart({children}: ControlerType) {
    return (
        <Container>{children}</Container>
    )
} 