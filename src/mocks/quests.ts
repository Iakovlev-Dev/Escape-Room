import { QuestsMinArrayType } from '../types/type-quest';

const quests: QuestsMinArrayType = [
  {
    id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    title: 'Маньяк',
    previewImg: 'img/content/maniac/maniac-size-s.jpg',
    previewImgWebp: 'img/content/maniac/maniac-size-s.webp',
    level: 'easy',
    type: 'adventures',
    peopleMinMax: [2, 5]
  },
  {
    id: 'aba665c3-bdf3-4fb3-b8f3-42e007864bbf',
    title: 'Призрак',
    previewImg: 'img/content/ghosts/ghosts-size-s@2x.jpg 2x',
    previewImgWebp: 'img/content/ghosts/ghosts-size-s@2x.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [1, 3]
  },
  {
    id: 'aba64c3-bdf3-4fb3-b8f3-42e007864bbf',
    title: 'Тайны старого особняка',
    previewImg: 'img/content/palace/palace-size-s.jpg',
    previewImgWebp: 'img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x',
    level: 'hard',
    type: 'mystic' ,
    peopleMinMax: [4, 6]
  },
  {
    id: 'aba664c3-bdf3-4fb3-bf3-42e007864bbf',
    title: 'Хижина в лесу',
    previewImg: 'img/content/hut/hut-size-s.jpg',
    previewImgWebp: 'img/content/hut/hut-size-s.webp, img/content/hut/hut-size-s@2x.webp 2x',
    level: 'hard',
    type: 'detective',
    peopleMinMax: [1, 2]
  }
];

export {quests};
