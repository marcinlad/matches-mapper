import type { Match } from './app.js'
import { getSetsMatchScore } from './helpers.js'

export function mapSoccerMatches (matches: Match[]) {
  return matches.map(match => {
    const { participant1, participant2, score } = match
    return {
      name: `${participant1} - ${participant2}`,
      score
    }
  })
}

export function mapVolleyballMatches (matches: Match[]) {
  return matches.map(match => {
    const { participant1, participant2, score } = match

    const scoreText = getSetsMatchScore(score as string)

    return {
      name: `${participant1} - ${participant2}`,
      score: scoreText
    }
  })
}

export function mapHandballMatches (matches: Match[]) {
  return matches.map(match => {
    const { participant1, participant2, score } = match

    return {
      name: `${participant1} vs ${participant2}`,
      score
    }
  })
}

export function mapBasketballMatches (matches: Match[]) {
  return matches.map(match => {
    const { participant1, participant2, score } = match
    const scoreText = [...score[0], ...score[1]].join(',')

    return {
      name: `${participant1} - ${participant2}`,
      score: scoreText
    }
  })
}

export function mapTennisMatches (matches: Match[]) {
  return matches.map(match => {
    const { participant1, participant2, score } = match

    const scoreText = getSetsMatchScore(score as string)

    return {
      name: `${participant1} vs ${participant2}`,
      score: scoreText
    }
  })
}
