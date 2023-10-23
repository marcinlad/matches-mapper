import test from 'node:test';
import assert from 'node:assert';
import { groupByDiscipline, getSetsMatchScore } from './helpers.js';

test('should group matches by disciplines', () => {
  const data = [
    { sport: 'soccer' },
    { sport: 'volleyball' },
    { sport: 'handball' },
    { sport: 'basketball' },
    { sport: 'tennis' },
    { sport: 'basketball' },
    { sport: 'handball' },
    { sport: 'soccer' },
    { sport: 'volleyball' },
    { sport: 'basketball' },
    { sport: 'soccer' }
  ];
  const result = groupByDiscipline(data as any) as Record<string, any>;

  assert.strictEqual(result.soccerMatches.length, 3);
  assert.strictEqual(result.volleyballMatches.length, 2);
  assert.strictEqual(result.handballMatches.length, 2);
  assert.strictEqual(result.tennisMatches.length, 1);
  assert.strictEqual(result.basketballMatches.length, 3);  
});

test('should return empty arrays if no matches', () => {
  const data = [
    { sport: 'ski jumping' },
  ]
  const result = groupByDiscipline(data as any) as Record<string, any>;

  assert.strictEqual(result.soccerMatches.length, 0);
  assert.strictEqual(result.volleyballMatches.length, 0);
  assert.strictEqual(result.handballMatches.length, 0);
  assert.strictEqual(result.tennisMatches.length, 0);
  assert.strictEqual(result.basketballMatches.length, 0);
});

test('should return null if input data is wrong', () => {
  const data = 'wrong data'
  const result = groupByDiscipline(data as any) as Record<string, any>;

  assert.strictEqual(result, null);
});

test('should return correct score (for 3 sets)', () => {
  const score = '3:0,25:23,25:19,25:21'
  const result = getSetsMatchScore(score);
  const expected = 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'

  assert.strictEqual(result, expected);
});

test('should return correct score (for 5 sets)', () => {
  const score = '3:2,21:25,19:25,25:21,25:20,15:12'
  const result = getSetsMatchScore(score);
  const expected = 'Main score: 3:2 (set1 21:25, set2 19:25, set3 25:21, set4 25:20, set5 15:12)'

  assert.strictEqual(result, expected);
});

test('should return empty score if input data is wrong', () => {
  const score = 'wrong data'
  const result = getSetsMatchScore(score);

  assert.strictEqual(result, '');
});
