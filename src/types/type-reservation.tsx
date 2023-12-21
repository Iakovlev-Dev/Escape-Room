export type ReservationType = {
    date: 'today' | 'tomorrow';
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: string;
    location: {
        address: string;
        coords: [number, number];
    };
    quest: {
        id: string;
        title: string;
        previewImg: string;
        previewImgWebp: string;
        level: 'easy' | 'medium' | 'hard';
        type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
        peopleMinMax: [number, number];
    };
}

export type ReservationsAllType = ReservationType[]
