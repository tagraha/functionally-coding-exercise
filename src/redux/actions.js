export const SUBMIT_RESPONSE = 'SUBMIT_RESPONSE';

export function submitResponse(responseData) {
  return (dispatch, getState) => {
    dispatch({
      type: SUBMIT_RESPONSE,
      payload: {
        text: responseData,
        id: makeid(9),
      }
    })
  }
}

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}