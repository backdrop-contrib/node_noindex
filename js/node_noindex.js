(function ($) {

/**
 * Update the summary for the module's vertical tab.
 */
Drupal.behaviors.node_noindexFieldsetSummaries = {
  attach: function (context) {
    // Use the fieldset class to identify the vertical tab element
    $('fieldset#edit-node-noindex', context).drupalSetSummary(function (context) {
      if ($('#edit-node-noindex-noindex', context).attr('checked')) {
        return Drupal.t('Set <code>noindex</code> in HTML head');
      }
      else {
        return Drupal.t('Do not try to restrict indexing');
      }
    });
    $('fieldset#edit-node-noindex-ct', context).drupalSetSummary(function (context) {
      if ($('#edit-node-noindex-ct-node-noindex', context).attr('checked')) {
        ss1 = 'Tag <code>noindex</code> enabled';
        if ($('#edit-node-noindex-ct-node-noindex-default', context).attr('checked')) {
          return Drupal.t(ss1 + ' and default');
	}
        return Drupal.t(ss1);
      }
	else if ($('#edit-node-noindex-ct-node-noindex-default', context).attr('checked')) {
        return Drupal.t('Must also enable <code>noindex</code>');
      }
      else {
        return Drupal.t('Tag <code>noindex</code> disabled');
      }
    });
  }
};

})(jQuery);
