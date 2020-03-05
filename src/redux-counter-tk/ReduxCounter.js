import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement } from './counter-slice';

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = { increment, decrement };

const ReduxCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ReduxCounter;
