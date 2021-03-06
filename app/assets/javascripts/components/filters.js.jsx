(function(root) {
  'use strict';

  var defaultFilters = {
    min: 1,
    max: 5
  };

  root.Filters = React.createClass({

    getInitialState: function() {
      return (defaultFilters);
    },

    componentDidMount: function() {
      this.clearFilters();
    },

    clearFilters: function() {
      FilterActions.updateFilters(defaultFilters);
    },

    updateMin: function(e) {
      e.preventDefault();
      var newMin = parseInt(e.target.value);
      this.setState({
        min: newMin
      }, function() {
        FilterActions.updateFilters({min: newMin, max: this.state.max});
      }.bind(this));
    },

    updateMax: function(e) {
      e.preventDefault();
      var newMax = parseInt(e.target.value);
      this.setState({
        max: newMax
      }, function() {
        FilterActions.updateFilters({min: this.state.min, max: newMax});
      }.bind(this));
    },

    render: function() {
      return (
        <div className="filters">
          <label id="min-seats">Minimum Seats:</label>&nbsp;&nbsp;
          <select id="min" name="min" onChange={this.updateMin} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <label id="max-seats">Maximum Seats:</label>&nbsp;&nbsp;
          <select id="max" name="max" onChange={this.updateMax} defaultValue="5">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      );
    }
  });

}(this));
