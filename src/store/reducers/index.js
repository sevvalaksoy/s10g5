import { NOTLARI_AL, NOT_EKLE, NOT_SIL } from '../actions';

const s10chLocalStorageKey = 's10d5';

const baslangicDegerleri = {
  notlar: [],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar !== null) {
    return localStorageStateOku(key);
  } else {
    localStorageStateYaz(key, baslangicDegerleri);
    return baslangicDegerleri;
  }
}
export const reducer = (
  state = baslangicNotlariniGetir(s10chLocalStorageKey),
  action
) => {
  switch (action.type) {
    case NOTLARI_AL:
      const newState = { ...state, notlar: action.payload };
      localStorageStateYaz(s10chLocalStorageKey, newState);
      return newState;

    /*case NOTLARI_AL:
    localStorageStateYaz(s10chLocalStorageKey, action.payload);
    return { ...state, notlar: action.payload };
    */

    case NOT_EKLE:
      const newNotes = { ...state, notlar: [...state.notlar, action.payload] };
      localStorageStateYaz(s10chLocalStorageKey, newNotes);
      return newNotes;

    case NOT_SIL:
      const currentNotes = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, currentNotes);
      return currentNotes;

    default:
      return state;
  }
};
