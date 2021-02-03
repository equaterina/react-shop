import { signInWithGoogle, signOut } from '../../apis/firebase'

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function updateUserData(payload) {
  return {
    type: "UPDATE_USER_DATA",
    payload,
  };
}

export function updateError(payload) {
  return {
    type: "UPDATE_ERROR",
    payload,
  };
}


//Redux Thunk returns a function
export function loginUser(){
    return (dispatch) => {
        dispatch(startLoading())

        signInWithGoogle().then((response) => {
            const payload = response.user;
            dispatch(updateUserData(payload));
        }).catch((error) => {
          dispatch(updateError(error))
        })
    }
}

export function logoutUser(){
  return (dispatch) => {
      dispatch(startLoading())

      signOut().then((response) => { 
        dispatch(updateUserData(null))
      }).catch((error) => {
        dispatch(updateError(error))
      })
  }
}