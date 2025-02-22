import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './Slices/contactsSlice';
import filterReducer from './Slices/filterSlice';
const persistConfig = {
    key: 'root', // Cheia pentru localStorage
    storage, // Folosește localStorage
    whitelist: ['contacts'], // Persistă doar starea contactelor
  };
  
  // Aplică Redux Persist pe reducer-ul contactelor
  const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
  
  // Creează store-ul Redux
  export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer, // Folosește reducer-ul persistat pentru contacte
      filter: filterReducer, // Filtrul nu este persistat
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Dezactivează verificarea de serializare pentru Redux Persist
      }),
  });
  
  // Creează persistor-ul pentru Redux Persist
  export const persistor = persistStore(store);