import { connect } from 'react-redux';
import Home from '../components/Home';
import { setCategory } from '../actions/reanimation';


const mapStateToProps = (state) => ({
  category: state.reanimation.category,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => {
    dispatch(setCategory(category));
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
