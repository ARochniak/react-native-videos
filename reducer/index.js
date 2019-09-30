export default (initialState={}, action) => {
	switch(action.type) {
		case 'SELECT_VIDEO':
			return {
				...initialState,
				curentVideo: action.idx
			}
		default:
			return initialState;
	}
}