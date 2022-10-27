import { Language, Translator } from './types';
import lv from './languages/lv';
import en from './languages/en';
import ru from './languages/ru';

const translator: Translator = (language: Language) => {
    switch (language) {
        case Language.LV:
            return lv;
        case Language.EN:
            return en;
        case Language.RU:
            return ru;
    }
};

export default translator;
