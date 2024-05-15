import {
  ScoreCardContainer,
  OptionsContainer,
  OptionsTitle,
  ResultContainer,
  ScorePhrase,
  ScoreNumber,
} from './styledComponents'

const ScoreCard = props => {
  //   console.log(props)
  const {score} = props
  return (
    <ScoreCardContainer>
      <OptionsContainer>
        <OptionsTitle>
          ROCK
          <br />
          <br />
          PAPER
          <br />
          <br />
          SCISSORS
        </OptionsTitle>
      </OptionsContainer>
      <ResultContainer>
        <ScorePhrase>Score</ScorePhrase>
        <ScoreNumber>{score}</ScoreNumber>
      </ResultContainer>
    </ScoreCardContainer>
  )
}
export default ScoreCard
