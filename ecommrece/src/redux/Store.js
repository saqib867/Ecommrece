import {configureStore,combineReducers} from '@reduxjs/toolkit'
import  productSlice  from './Reducer'
import  userSlice  from './userReducer'
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer=combineReducers({userReducer:userSlice,productState:productSlice})
  const persistedReducer = persistReducer(persistConfig, rootReducer)
 export const store=configureStore({

    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
},
}),
})

export let persistor = persistStore(store)

