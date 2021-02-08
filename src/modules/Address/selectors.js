export const getErrors = state => state.address.authError;
export const getAddresses = state => {
  return state.address.data.map(item => ({
    value: item,
    label: item
  }));
};
export const isLoading = state => state.address.isLoading;
