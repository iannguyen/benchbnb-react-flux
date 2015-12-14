(function(root) {
  'use strict';

  root.IndexItem = React.createClass({
    mixins: [ReactRouter.History],

    show: function(e) {
      e.preventDefault();
      this.history.pushState(null, "/benches/" + this.props.bench.id);
    },

    render: function() {
      return (
        <div onClick={this.show}>
          <ul>
            <li>{this.props.bench.description}</li>
            <li>Seating: {this.props.bench.seating}</li>
          </ul>
        </div>
      );
    }
  });

}(this));
