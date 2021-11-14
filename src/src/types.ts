

export interface Settings {
    books: Vote[];
}

export interface Vote {
    votes: number;
    data: Book[];
}

export interface Book {
    displayName: string;
    image: string;
}
