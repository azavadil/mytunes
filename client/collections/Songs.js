// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songDataArray){
    for(var i = 0; i < songDataArray.length; i++ ){
      var curData = songDataArray[i];
      this.collection.add(new SongModel(curData));
    }
  }

});
