export enum Language {
    LV = 'lv',
    EN = 'en',
    RU = 'ru'
}

export type KeywordMapper = {
    meta: {
        name: string;
        abbrev: string;
        flagPath: string;
    };
    language: string;
    profile: string;
    user: string;
    shop: string;
    currency: string;
};

export type Translator = (language: Language) => KeywordMapper;
