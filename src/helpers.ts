import type { Match } from './app.js'

export function groupByDiscipline(matches: Match[]) {
  try {
    const soccerMatches = matches.filter(match => match.sport === 'soccer') 
    const volleyballMatches = matches.filter(match => match.sport === 'volleyball')
    const handballMatches = matches.filter(match => match.sport === 'handball')
    const tennisMatches = matches.filter(match => match.sport === 'tennis')
    const basketballMatches = matches.filter(match => match.sport === 'basketball')

    return {
        soccerMatches, volleyballMatches, handballMatches, tennisMatches, basketballMatches
    }
  } catch (error) {
    console.error('Error while grouping matches', error)

    return null
  }
}

export function getSetsMatchScore (score: string) {
  try {
    const [mainScore, ...setScores] = (score as string).split(',')

    if (setScores.length === 0) {
      throw ('Wrong score format')
    }

    const setScoresText = setScores
      .map((setScore, index) => `set${index+1} ${setScore}`)
      .join(', ')

    return `Main score: ${mainScore} (${setScoresText})`
  } catch (error) {
    console.error('Error while getting sets match score', error)

    return ''
  }
}
