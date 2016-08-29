import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapse-datetimes', 'Integration | Component | collapse datetimes', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{collapse-datetimes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#collapse-datetimes}}
      template block text
    {{/collapse-datetimes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
