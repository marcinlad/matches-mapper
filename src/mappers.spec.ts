
// For the first function, I wrote tests following the "none, one, many" principle to illustrate the concept. For the 
// remaining functions, I wrote one test each, I believe that should be enough for now.

import test from 'node:test';
import assert from 'node:assert';
import type { Match } from './app.js';
import { mapSoccerMatches, mapBasketballMatches, mapHandballMatches, mapTennisMatches, mapVolleyballMatches } from './mappers.js';

test('should map soccer matches (no matches)', () => {
  const data: Match[]= []
  const result = mapSoccerMatches(data);
  const expected: Match[] = []

  assert.deepStrictEqual(result, expected);
})

test('should map soccer matches (one match)', () => {
  const data  = [
    { participant1: 'Argetina', participant2: 'Brazil', score: '2:2' }
  ] as Match[]
  const result = mapSoccerMatches(data);
  const expected = [
    { name: 'Argetina - Brazil', score: '2:2' }
  ]

  assert.deepStrictEqual(result, expected);
})

test('should map soccer matches (many matches)', () => {
  const data = [
    { participant1: 'Poland', participant2: 'Germany', score: '3:0' },
    { participant1: 'Spain', participant2: 'Italy', score: '1:1' }
  ]
  const result = mapSoccerMatches(data as any);
  const expected = [
    { name: 'Poland - Germany', score: '3:0' },
    { name: 'Spain - Italy', score: '1:1' }
  ]

  assert.deepStrictEqual(result, expected);
});

test('should map basketball matches', () => {
  const data = [
    { participant1: 'Lakers', participant2: 'Warriors', score: [['10:8', '7:7'], ['13:14', '15:18']] },
    { participant1: 'Celtics', participant2: 'Bulls', score: [['6:12', '7:10'], ['11:8', '8:8']] }
  ];
  const result = mapBasketballMatches(data as any);
  const expected = [
    { name: 'Lakers - Warriors', score: '10:8,7:7,13:14,15:18' },
    { name: 'Celtics - Bulls', score: '6:12,7:10,11:8,8:8' }
  ];

  assert.deepStrictEqual(result, expected);
});

test('should map volleyball matches', () => {
  const data = [
    { participant1: 'Spain', participant2: 'England', score: '3:2,25:16,27:25,20:25,25:22,15:13' },
    { participant1: 'Croatia', participant2: 'Italy', score: '0:3,16:25,20:25,19:25' },
  ] as Match[];
  const result = mapVolleyballMatches(data);
  const expected = [
    { name: 'Spain - England', score: 'Main score: 3:2 (set1 25:16, set2 27:25, set3 20:25, set4 25:22, set5 15:13)' },
    { name: 'Croatia - Italy', score: 'Main score: 0:3 (set1 16:25, set2 20:25, set3 19:25)' },
  ];
  assert.deepStrictEqual(result, expected);
});

test('should map handball matches', () => {
  const data = [
    { participant1: 'Canada', participant2: 'Mexico', score: '28:30' },
    { participant1: 'France', participant2: 'Austria', score: '27:26' },
  ] as Match[];
  const result = mapHandballMatches(data);
  const expected = [
    { name: 'Canada vs Mexico', score: '28:30' },
    { name: 'France vs Austria', score: '27:26' },
  ];
  assert.deepStrictEqual(result, expected);
});

test('should map tennis matches', () => {
  const data = [
    { participant1: 'Player A', participant2: 'Player B', score: '2:1,7:5,6:4,6:3' },
    { participant1: 'Player C', participant2: 'Player D', score: '2:0,6:2,6:3' },
  ] as Match[];
  const result = mapTennisMatches(data);
  const expected = [
    { name: 'Player A vs Player B', score: 'Main score: 2:1 (set1 7:5, set2 6:4, set3 6:3)' },
    { name: 'Player C vs Player D', score: 'Main score: 2:0 (set1 6:2, set2 6:3)' },
  ];
  assert.deepStrictEqual(result, expected);
});
