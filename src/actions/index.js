export const RECEIVE_API_DATA_ND = "RECEIVE_API_DATA_ND";
export const REQUEST_API_DATA_ND = "REQUEST_API_DATA_ND";
export const receiveApiData_ND = data => ({
  type: RECEIVE_API_DATA_ND,
data
});

export const requestApiData_ND = () => {
  return {
    type: REQUEST_API_DATA_ND
  };
};
