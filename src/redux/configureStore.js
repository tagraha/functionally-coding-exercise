import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      logger,
      thunkMiddleware
    )
  )
}
