export type SlotType = {
    time: string;
    isAvailable: boolean;
}

export type BookingInfoType = {
    id: string;
    location: {
        address: string;
        coords?: [number, number];
    };
    slots: {
        today: SlotType[];
        tomorrow: SlotType[];
    };
};
