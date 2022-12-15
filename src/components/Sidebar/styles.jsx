import styled from 'styled-components'

export const Sidebar = styled.div`
    max-width: 418px;
    padding: 154px 70px 20px 70px;
    transition: right 0.5s;

    @media (max-width: 1889px) {
        position: absolute;
        background-color: #181818;
        right: 0;
    }
`

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 200px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const SidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
