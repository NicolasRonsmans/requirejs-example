define('information', ['modules/cache'], function (c) {
  return {
    ratio: function ($el) {
      var r = $el.width() / $el.height();

      return 'the ratio of ' + $el.get(0).toString() + ' is ' + r;
    }
  };
});
