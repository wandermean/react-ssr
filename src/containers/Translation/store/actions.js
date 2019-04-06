import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getTranslationList = () => {
  return (dispatch,getState,axiosInstance) => {
    return axiosInstance
      .get('/api/translations.json')
      .then(res => {
        const list = res.data.success ? res.data.data : []
        dispatch(changeList(list));
      });
  };
};
