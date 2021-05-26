import EmberRouter from '@ember/routing/router';
import config from 'ember01-basic-store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function() {
    this.route('t-shirt');
  });
  /* rotas dinamicas como os route_params */
  this.route('item', {path: '/item/:item_id'});
  /* colocando o { path: '/*path' } faço com que todas as rotas não gerenciadas caiam nessa página*/
  this.route('not-found', { path: '/*path' });
});
