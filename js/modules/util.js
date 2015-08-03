define({
  log: function (msg) {
    if (console && console.log) {
      console.log(msg);
    } else {
      alert(msg);
    }
  },
  ensureEmpty: function ($el) {
    if (!$el.length) {
      return null;
    }

    return $el;
  }
});
