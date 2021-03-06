import Ember from 'ember';

export function questionAnswer(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') > 2) {
    return Ember.String.htmlSafe('<p class="glyphicon glyphicon-fire"></p>');
  } else if (question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<p class="noAnswer">No answers!</p>');
  }
}

export default Ember.Helper.helper(questionAnswer);
