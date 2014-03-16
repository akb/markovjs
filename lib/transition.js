// Generated by CoffeeScript 1.6.3
(function() {
  module.exports.Transition = (function() {
    function Transition(head, tail) {
      if (arguments.length === 1) {
        this.tail = head.tail;
        this.count = head.count;
        this.head = head.head;
      } else {
        this.head = head;
        this.tail = tail;
        this.count = 0;
      }
    }

    Transition.prototype.headMatches = function(state) {
      return state.toLowerCase() === this.head.toLowerCase();
    };

    Transition.prototype.tailMatches = function(state) {
      return state.toLowerCase() === this.tail.toLowerCase();
    };

    Transition.prototype.execute = function() {
      this.count++;
      return this.tail;
    };

    return Transition;

  })();

}).call(this);