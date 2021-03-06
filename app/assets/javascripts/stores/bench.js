(function(root) {
  'use strict';

  var _benches = [];
  var _filters = {
    min: 1,
    max: 5
  };

  var CHANGE_EVENT = "CHANGE";

  var resetBenches = function(benches) {
    _benches = benches.slice();
  };

  var resetFilters = function(filters) {
    _filters = filters;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return this.filterBenches();
    },

    find: function(id) {
      for (var i = 0; i < _benches.length; i++) {
        if (_benches[i].id === id) {
          return _benches[i];
        }
      }
    },

    update: function(bench) {
      for (var i = 0; i < _benches.length; i++) {
        if (_benches[i].id === bench.id) {
          _benches[i] = bench;
        }
      }
    },

    filterByMinMax: function(bench) {
      return bench.seating >= _filters.min && bench.seating <= _filters.max;
    },

    filterBenches: function() {
      return _benches.filter(this.filterByMinMax);
    },

    changed: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.changed();
          break;
        case BenchConstants.BENCH_RECEIVED:
          _benches.push(payload.bench);
          BenchStore.changed();
          break;
        case BenchConstants.FILTERS_RECEIVED:
          resetFilters(payload.filters);
          BenchStore.filterBenches();
          BenchStore.changed();
          break;
        case BenchConstants.REVIEW_RECEIVED:
          BenchStore.update(payload.bench);
          BenchStore.changed();
          break;
      }
    })
  });

}(this));
