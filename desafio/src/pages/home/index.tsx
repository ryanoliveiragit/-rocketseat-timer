import { Header } from '../../components/header'
import { Layout } from '../../components/layout'

import { Container } from './styles'

export function Home() {
    return (
        <Layout>
            <Container>
                <Header />
            </Container>
        </Layout>
    )
}