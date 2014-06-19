// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  //front will be slot 0, and back will be where we add new songs
  //the end of the queue will be songQueue.length - 1
  enqueue: function(value){
    console.log('enqueued: ' + value.get('title'));

    this.push(value);
  },

  dequeue: function(){
    var temp = this.shift();
    console.log('ended: ' + temp.get('title'));
    return temp;
  },

  playFirst: function(){
    return;
  }

});
