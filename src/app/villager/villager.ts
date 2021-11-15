export interface Villager {
    id: number,
    name: {
        'name-USen': string,
        'name-EUnl': string,
    }
    personality: string,
    saying: string,
    'catch-phrase': string,
    icon_uri: string,
    image_uri: string,
    gender: string,
    species: string,
    'birthday-string': string,
}