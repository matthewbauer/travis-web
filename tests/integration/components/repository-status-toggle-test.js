import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repository-status-toggle', 'RepositoryStatusToggle', {
  integration: true
});

test('it renders', function() {
  let repo = Ember.Object.create({
    id: 10000,
    name: "foo-bar",
    owner_name: "foo",
    description: "A foo repo",
    active: true,
    urlGithub: "https://github.com/foo/foobar",
    slug: "foo/foo-bar"
  });

  this.set('repo', repo);
  this.render(hbs`{{repository-status-toggle repo=repo}}`);

  ok(this.$().find('li.row').hasClass('active'), 'component should have active class');
  ok(this.$().find('.switch--icon').hasClass('active'), 'switch should have active class');
  return equal(this.$().find('.profile-repo span').text().trim(), 'A foo repo', 'repo description should be displayed');
});
