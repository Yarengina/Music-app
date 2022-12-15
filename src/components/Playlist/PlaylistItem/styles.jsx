import styled from 'styled-components'

export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`

export const Track = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TrackTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
    overflow: hidden;
`

export const TrackImageWrapper = styled.div`
    position: relative;
    width: 51px;
    margin-right: 17px;
    overflow: hidden;
`

export const TrackIconWrapper = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
    transition: background-color 0.5s ease;
`

export const TrackIconImage = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    color: #4e4e4e;
`

export const TrackTitleText = styled.div`
    position: relative;
    width: 371px;
    overflow: hidden;
`

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    :hover {
        color: #d9b6ff;
    }
`

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`

export const TrackAuthor = styled.p`
    position: relative;
    width: 321px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`

export const TrackAlbum = styled.p`
    position: relative;
    width: 245px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`

export const TrackTime = styled.div`
    position: relative;
    width: 61px;
    overflow: hidden;
`

export const TrackTimeWrapper = styled.div`
    display: flex;
    align-items: baseline;
`

export const TrackLikeIconWrapper = styled.div`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: ${(props) => (props.isFavorite ? '#FFFFFF' : 'transparent')};
    color: #696969;
`

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`
