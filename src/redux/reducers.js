import { SUBMIT_RESPONSE } from './actions';

const initialState = {
  value: []
};

function apps( state = initialState, action) {
  switch (action.type) {
    case SUBMIT_RESPONSE: {
      return Object.assign({}, state, {
        value: state.responses.value.unshift({
          data: action.payload.text,
          id: action.payload.id,
        }),
      });
    }
    default: {
      return state
    }
  }
}

export default apps
