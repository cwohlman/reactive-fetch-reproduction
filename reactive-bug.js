Bugs = new Meteor.Collection('bugs');

if (Meteor.isClient) {
  findQuery = Bugs.find();
  fetchQuery = Bugs.find();
  taintedQuery = Bugs.find(); taintedQuery.fetch();
  Template.find.result = function () {
    return findQuery;
  };
  Template.fetch.result = function () {
    return fetchQuery.fetch();
  };
  Template.tainted.result = function () {
    return taintedQuery;
  };
  Template.findFetch.result = function () {
    return Bugs.find().fetch();
  };
  

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
