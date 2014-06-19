// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    // this.appRef = params.context;
    this.on('ended', function(song){
      console.log('song',song);
      console.log('sq.length',this.length);
      this.remove(song);
      console.log('sq.length',this.length);
      if( this.length > 0 ){
        this.playFirst();
      }
    }, this);

    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    },this);
  },

  //front will be slot 0, and back will be where we add new songs
  //the end of the queue will be songQueue.length - 1
  enqueue: function(value){
    this.add(value);
  },

  dequeue: function(){
    //return this.remove(this.first());
    this.shift();
  },

  playFirst: function(){
    console.log("playFirst() is invoking");
    this.at(0).play();
  }

});
