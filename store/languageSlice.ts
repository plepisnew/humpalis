import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '@/localization/types';
import { RootState } from './';

type LanguageState = {
    language: Language;
};

const initialState: LanguageState = {
    language: Language.EN
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state: LanguageState, action: PayloadAction<Language>) => {
            state.language = action.payload;
        }
    }
});

export const selectLanguage = (state: RootState) => state.languages.language;

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
