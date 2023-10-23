import matches from './data.json' assert { type: 'json' }
import { groupByDiscipline } from './helpers.js'
import { mapBasketballMatches, mapHandballMatches, mapSoccerMatches, mapTennisMatches, mapVolleyballMatches } from './mappers.js'

export type Match = {
  sport: string
  participant1: string
  participant2: string
  score : string | string[][]
}

function getMatchesData(matches: Match[]) {
  const groupedMatches = groupByDiscipline(matches)

  if (!groupedMatches) {
    return []
  }

  const { soccerMatches, volleyballMatches, handballMatches, tennisMatches, basketballMatches } = groupedMatches

  return [
    ...mapSoccerMatches(soccerMatches),
    ...mapVolleyballMatches(volleyballMatches),
    ...mapHandballMatches(handballMatches),
    ...mapBasketballMatches(basketballMatches),
    ...mapTennisMatches(tennisMatches)
  ]
}

const mappedMatches = getMatchesData(matches as Match[])
console.log(mappedMatches)
