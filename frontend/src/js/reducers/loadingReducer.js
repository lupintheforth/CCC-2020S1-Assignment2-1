/**
 * COMP90024 Cluster and Cloud Computing Team 12
 *
 * @Author: Haowen Shen
 * Email: haoshen@student.unimelb.edu.au
 */
import { UPDATE_LOADING_STATUS } from "../actionTypes/loading";

const LOADING_REDUCER_DEFAULT_VALUE = {
  isLoading: false,
};

export function loadingReducer(state = LOADING_REDUCER_DEFAULT_VALUE, action) {
  switch (action.type) {
    case UPDATE_LOADING_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
