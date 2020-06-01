import { connect } from "react-redux";
import { moveCard, setOpenAddCard } from "../actions";
import Board from "../components/Board";

const mapStateToProps = state => ({
  data: state.boardData
});

const mapDispatchToProps = dispatch => ({
  onMoveCard: moveData => dispatch(moveCard(moveData)),
  onShowAddCard: showAddCardData => dispatch(setOpenAddCard(showAddCardData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
