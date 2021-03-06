import { connect } from 'react-redux';

import QuranList from './QuranList.component';
import { getQuranList } from '../../Redux/Actions/QuranList/QuranList';

const mapStateToProps = state => ({
  dataQuran: state.quranList.data,
  isLoading: state.quranList.loading,
  refreshing: state.quranList.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getQuranList: () => dispatch(getQuranList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuranList);
