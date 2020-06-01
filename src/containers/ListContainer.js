import { connect } from "react-redux";
import { addCard, deleteCard, updateCard } from "../actions";
import List from "../components/List";
import { findElem } from "../utils/arrayUtils";

const mapStateToProps = (state, ownProps) => ({
  data: findElem(state.boardData.lists, ownProps.listId)
});

const mapDispatchToProps = dispatch => ({
  onAddCard: addData => dispatch(addCard(addData)),
  onDeleteCard: deleteData => dispatch(deleteCard(deleteData)),
  onUpdateCard: updateData => dispatch(updateCard(updateData))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
