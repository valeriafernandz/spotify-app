import styled from 'styled-components';

export const PlaylistCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    gap: 2rem 2rem;
    transition: transform 1.5s;
`

export const PlaylistCard = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #292728;
    padding: 1.5rem;
    border-radius: 2rem;
    box-shadow: 0 .5rem 1rem #292728;
    text-align:center;
    
    &:hover{
        transform: translateY(-1.5rem) scale(1.03);
    }

    @media (min-width: 320px) and (max-width:480){
        flex: 0 0 100%;
      
      }
      @media (min-width: 481px) and (max-width:768px) {
        flex: 0 0 100%;
      }
      @media (min-width: 769px) and (max-width:1024px) {
        flex: 0 0 50%;
      }
      @media (min-width: 1025px) and (max-width:1200px) {
        flex: 0 0 40%;
      }
      @media (min-width: 1201px) and (max-width:1400px) {
        flex: 0 0 20%;
      }
      @media (min-width: 1401px) and (max-width:1899px) {
        flex: 0 0 30%;
      }
      @media (min-width: 1900px) {
        flex: 0 0 20%;
      }
`

export const PlaylistCardImg = styled.img`
      width: 15rem;
      margin-top: 1.5rem;
`

export const CardTextPrimary = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  color: #fff;
  letter-spacing: .2rem;
  align-self: center;
  justify-content: center;
  margin-top: .5rem;
  text-decoration: none;
`

export const CardTextSecondary = styled.span`
  display: flex;
  flex-direction: row;
  font-size: .7rem;
  color: #27CC8454;
  letter-spacing: .2rem;
  align-self: center;
  justify-content: center;
  margin-top: .5rem;
  margin-bottom: .5rem;
  text-decoration: none;
`

export const PlaylistHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #292728;
    
`
export const PlaylistImg = styled.img`
    display: flex;
    flex-direction: column;
    width: 20vw;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2vw;
    align-self: center;
`
export const PlaylistName = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 4rem;
    color: #fff;
    
`

export const TypePlaylist = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    color: #27CC8454;
    
`

export const PlaylistOwner = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    color: #27CC8454;
`
export const PlaylistTracks = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #292728;
    color: #f4f4f4;
`

export const TracksTable = styled.table`
    width: 100%;
    margin-top: 2rem;
    margin-left: 2rem;
    overflow: hidden;
`

export const TracksTableTR = styled.tr`
  overflow: hidden; 
`

export const TracksTableTH = styled.th`
    text-align: left;
    overflow: hidden;
    
`

export const TracksTableTD = styled.td`
  text-align: left;
  overflow: hidden;
  
`

