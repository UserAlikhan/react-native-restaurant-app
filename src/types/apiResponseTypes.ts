export type ImagesResponse = {
    id: number;
    url: string;
    bar_id: number;
    // created_at: Date;
    // updated_at: Date;
};

export type BarResponse = {
    id: number;
    name: string;
    average_cocktail_price: string;
    address: string;
    longitude: number;
    latitude: number;
    state: string;
    country: string;
    city: string;
    zipCode: string;
    description?: string;
    isOpen: boolean;
    reserve_link?: string;
    website_link?: string;
    phone_number?: string;
    createdAt: Date;
    updatedAt: Date;
    distance: number;
    images: ImagesResponse[];
};

export type User = {
    id: number;
    clerk_id?: string;
    email: string;
    username: string;
    password: string;
    isGoogleAccount: boolean;
    role?: string;
}

export type CreateUser = {
    clerk_id?: string;
    email: string;
    username: string;
    password: string;
    isGoogleAccount: boolean;
}