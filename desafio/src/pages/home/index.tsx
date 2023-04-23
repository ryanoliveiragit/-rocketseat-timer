import { CafeList } from '../../components/coffeList'
import { Header } from '../../components/header'
import { Layout } from '../../components/layout'
import { coffeList } from '../../components/coffeList/list'

import { Container } from './styles'

export function Home() {
    return (
        <Layout>
            <Container>
                <Header />
                <CafeList cafes={coffeList} />
            </Container>
        </Layout>
    )
}