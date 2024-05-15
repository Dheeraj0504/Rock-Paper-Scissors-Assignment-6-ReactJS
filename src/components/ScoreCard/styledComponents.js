import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionsTitle = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
