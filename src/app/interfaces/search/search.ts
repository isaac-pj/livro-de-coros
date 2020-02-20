import { Songs } from 'src/app/models/songs.model';

export interface Search {

    songs: Songs[];
    searching: boolean;
    type: string;

    search(type: string): void;

    onSearch(event: Event): void;

    searchClose(): void;
}
