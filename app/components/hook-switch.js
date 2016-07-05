import Ember from 'ember';

const { alias } = Ember.computed;

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['switch--icon'],
  classNameBindings: ['active'],
  active: alias('repo.active'),
  click() {
    this.sendAction('onToggle');
    let repo = this.get('repo');
    return repo.toggle().then((function() {}), () => {
      this.toggleProperty('repo.active');
      return this.sendAction('onToggleError', repo);
    });
  }
});
