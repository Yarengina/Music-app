import { Outlet } from 'react-router-dom'
import Navigation from '../../MenuNavigation/Navigation'
import * as S from './styles'

export default function NavLayout() {
    return (
        <S.LayoutWrapper>
            <S.LayoutContainer>
                <main>
                    <Navigation />
                    <Outlet />
                </main>
            </S.LayoutContainer>
        </S.LayoutWrapper>
    )
}
