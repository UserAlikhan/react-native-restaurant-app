export enum ENUM_AVAILABILITY {
    AVAILABLE = 'OPEN',
    UNAVAILABLE = 'CLOSE'
}

export type ImagesResponse = {
    id: number;
    url: string;
    bar_id: number;
    created_at: Date;
    updated_at: Date;
}

export type BarResponse = {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    description: string;
    longitude: number;
    latitude: number;
    availabilty: ENUM_AVAILABILITY;
    createdAt: Date;
    updatedAt: Date;
    distance: number;
    images: ImagesResponse[];
}