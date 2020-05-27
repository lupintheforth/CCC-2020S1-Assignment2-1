/**
 * COMP90024 Cluster and Cloud Computing Team 12
 *
 * @Author: Haowen Shen
 * Email: haoshen@student.unimelb.edu.au
 */
import { UPDATE_SEARCH_FIELD_EXPANSION_STATUS } from "../actionTypes/search";

export function updateSearchFieldExpansionStatus(showSearchInput = true) {
  return {
    type: UPDATE_SEARCH_FIELD_EXPANSION_STATUS,
    payload: { showSearchInput },
  };
}
