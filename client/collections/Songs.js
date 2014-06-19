// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  enqueue: function(value){
    this.push(value);
  },

  dequeue: function(){
    return this.unshift();
  }


});
