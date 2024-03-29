// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="playSong">(<%= artist %>)</td>' +
    '<td class="playSong"><%= title %></td>' +
    '<td><a class="addToQ" href=#>Add To Playlist</a></td>'),

  events: {
    'click .playSong': function() {
      this.model.play();
      this.model.enqueue();
    },
    // 'click a.addToQ': function(){
    //   this.model.enqueue();
    // }


  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
