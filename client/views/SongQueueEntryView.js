// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td>' +
    '<td><%= title %></td>'),

  events: {
    //our code for removing a view from the queue

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});
