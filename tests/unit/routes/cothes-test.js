import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cothes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cothes');
    assert.ok(route);
  });
});
