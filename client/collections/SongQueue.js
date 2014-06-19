// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    // this.appRef = params.context;
  },

  //front will be slot 0, and back will be where we add new songs
  //the end of the queue will be songQueue.length - 1
  enqueue: function(value){
    this.unshift(value);
  },

  dequeue: function(){
    var temp = this.pop();
    return temp;
  },

  playFirst: function(){
    return;
  }

});
