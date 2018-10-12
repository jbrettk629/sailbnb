import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
// import FiltersReducer from './filter_reducer';

const UIReducer = combineReducers({
  modal: ModalReducer,
  // filters: FiltersReducer,
});

export default UIReducer;
