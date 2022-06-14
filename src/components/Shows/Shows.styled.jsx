import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    gap: 2rem 2rem;
    transition: transform 1.5s;
`

export const CardTerciary = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292728;
  border-radius: 2rem;
`

export const CardTerciaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: space-between;
  gap: 2rem 2rem;
`

export const CardTerciaryImg = styled.img`
  display: flex;
  flex-direction: column;
  width: 15%;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
`

export const CardTerciaryText = styled.span`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-self: center;
  font-size: 1.5rem;
`
