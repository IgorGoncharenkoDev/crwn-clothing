import UserActionTypes from './user.types';

export const setCurrentUser = userObject => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: userObject
});
