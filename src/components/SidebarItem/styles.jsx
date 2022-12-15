import styled from 'styled-components'

export const SidebarItem = styled.div`
    position: relative;
    width: 250px;
    height: 150px;
    background-color: #313131;
    overflow: hidden;
    cursor: pointer;
`

export const SidebarImage = styled.img`
    width: 100%;
    height: auto;
    :hover {
        transform: scale(1.09);
    }
`

export const Skeleton = styled.div`
    width: 100%;
    height: auto;
`
