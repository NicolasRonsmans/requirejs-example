require.config({
  baeUrl: 'js',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min',
    util: 'modules/util',
    information: 'modules/info'
  },
  map: {
    '*': {
      display: 'information'
    }
  }
});

requirejs(['util', 'modules/cache', 'display'], function (u, c, i) {
  u.log(c.$window.height());
  u.log(c.$someThingNotExisting);
  u.log(i.ratio(c.$window));
});
