define(['jquery', 'util'], function ($, u) {
  return {
    $window: u.ensureEmpty($(window)),
    $someThingNotExisting: u.ensureEmpty($('#someThingNotExisting'))
  };
});
