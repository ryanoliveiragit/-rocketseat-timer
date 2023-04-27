import { CafeList } from '../../components/coffeList'
import { Header } from '../../components/header'
import { Layout } from '../../components/layout'

import { Container } from './styles'

export function Home() {
    return (
        <Layout>
            <Container>
                <Header />
                <CafeList/>
            </Container>
        </Layout>
    )
}