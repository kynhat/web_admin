export const RECEIVE_API_DATA_P = "RECEIVE_API_DATA_P";
export const REQUEST_API_DATA_P = "REQUEST_API_DATA_P";
export const receiveApiData_P = data => ({
  type: RECEIVE_API_DATA_P,
  data
});

export const requestApiData_P = () => {
  return {
    type: REQUEST_API_DATA_P
  };
};

