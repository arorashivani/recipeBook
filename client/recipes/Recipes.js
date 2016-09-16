//Meteor.subscribe('recipes');
//console.log(Meteor.settings.public.ga);

Template.Recipes.onCreated(
  function () {
    var self = this;
    self.autorun(function() {
      self.subscribe('recipes');
    });

  }
);


Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});
