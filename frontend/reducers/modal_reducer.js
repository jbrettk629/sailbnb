import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
  switch(action.type){
    case OPEN_MODAL:
      return {modal: action.modal, data: action.data};
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default ModalReducer;
