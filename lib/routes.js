FlowRouter.triggers.enter([function (context,redirect) {
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}])

FlowRouter.route('/',{
name:'home',
action(){
//  GAnalysics.pageview();
  if(Meteor.userId()){
    FlowRouter.go('recipe-book')
  }

  BlazeLayout.render('HomeLayout');
}
});

FlowRouter.route('/recipe-book',{
name:'recipe-book',
action(){
  //GAnalysics.pageview();
  BlazeLayout.render('MainLayout',{main:'Recipes'});
}
});

FlowRouter.route('/recipe/:id',{
name:'recipe',
action(){
  //GAnalysics.pageview();
  BlazeLayout.render('MainLayout',{main:'RecipeSingle'});
}
});
