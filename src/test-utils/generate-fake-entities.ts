import { faker } from '@faker-js/faker';
import { map, sample, random, times } from 'lodash';

import { throwError } from '@utils/throw-error';

type EntityId = number;

interface Video {
  id: number;
  authorId: number;
  title: string;
  description: string;
  duration: number;
  posterUrl: string;
  videoUrl: string;
  createdAt: number;
}

export function generateDependableEntities(foreignIds: EntityId[]): Video[] {
  return map(foreignIds, (foreignId, i) => {
    const id = 100 + i;
    return generateDependableEntity(id, foreignId);
  });
}

export function generateDependableEntity(id: EntityId, foreignId: EntityId): Video {
  return {
    id,
    authorId: foreignId,
    title: randomName(),
    description: randomDesc(),
    duration: randomDurationBetween({ h: 0, m: 1 }, { h: 0, m: 15 }),
    posterUrl: randomImgUrl(),
    videoUrl: faker.internet.url(),
    createdAt: randomPastDateInMs(),
  };
}

export function generateRandomIds(count: number, min: number, max: number): number[] {
  return times(count, () => random(min, max));
}

interface IDuration {
  h: number;
  m: number;
}

function randomDurationBetween(min: IDuration, max: IDuration): number {
  if (min.m < 1 || max.m < 1) {
    throwError(`Minutes must be greater than 0`);
  }
  const minMs = durationToMs(min);
  console.log('min:', minMs, 5 * 60 * 1000);
  const maxMs = durationToMs(max);
  return random(minMs, maxMs);
}

const hFactor = 3600_000;
const mFactor = 60_000;
const sFactor = 1_000;

function durationToMs(duration: IDuration): number {
  return duration.h * hFactor + (duration.m - 1) * mFactor + random(1, 59) * sFactor;
}

const allImgMethods = ['animals', 'fashion', 'nature', 'technics', 'people', 'sports'];

function randomImgUrl(): string {
  const imgMethod = sample(allImgMethods)!;
  return (faker.image as any)[imgMethod](320, 180, true);
}

function randomName(): string {
  return faker.commerce.productName();
}

function randomDesc(): string {
  return faker.commerce.productDescription();
}

function randomPastDateInMs(): number {
  const pastDateStr = faker.date.past(10, '2022-01-01T00:00:00.000Z');
  return new Date(pastDateStr).getTime();
}

// TODO wip
// export function tmpGenVids(videoService: any) {
//   const ids = generateRandomIds(30, 1, 15);
//   const vids = generateDependableEntities(ids);
//   vids.forEach((vidDat) => {
//     videoService.create(vidDat).subscribe((v: any) => {
//       console.log('cre:', v);
//     });
//   });
// }
