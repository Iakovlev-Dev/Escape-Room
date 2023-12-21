export type QuestMinType = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: 'easy' | 'medium' | 'hard';
    type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
    peopleMinMax: [number, number];
}

export type QuestsMinArrayType = QuestMinType[]

export type QuesMaxType = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: 'easy' | 'medium' | 'hard';
    type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
    peopleMinMax: [number, number];
    description: string;
    coverImg: string;
    coverImgWebp: string;
}
