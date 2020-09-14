const initialState = {
  signedIn: 0,
  fullName: 'John Doe',
  firstName: 'John',
  lastName: 'Doe',
  userId: '0',
  userRole: '1'
};

export const reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_USERDATA':
      return {
        ...state,
        fullName: data.fullName,
        firstName: data.firstName,
        lastName: data.lastName,
        userId: data.userId,
        userRole: data.userRole,
        signedIn: 1,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        signedIn: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
