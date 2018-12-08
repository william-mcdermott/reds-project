import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate } from '../actions/filters'

export class TradeListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Filter by team"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeListFilters);
