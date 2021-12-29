import { API } from "../../api/api";

export const ordersRequest = async(doLoading, dispatch, endpoint, type) => {
    doLoading(true);
    const data = await API[endpoint]();
    dispatch({ type: type, payload: data });
    doLoading(false);
}