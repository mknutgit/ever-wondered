import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  voteCount: DS.attr(),
  ask: DS.belongsTo('question', { async: true})
});
