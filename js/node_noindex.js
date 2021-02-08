(function ($) {

/**
 * Update the summary for the module's vertical tab.
 */
Backdrop.behaviors.node_noindexFieldsetSummaries = {
  attach: function (context) {
    // Use the fieldset class to identify the vertical tab element
    $('fieldset#edit-node-noindex', context).backdropSetSummary(function (context) {
      if ($('#edit-node-noindex-noindex', context).attr('checked')) {
        return Backdrop.t('Set <code>noindex</code> in HTML head');
      }
      else {
        return Backdrop.t('Do not try to restrict indexing');
      }
    });
    $('fieldset#edit-node-noindex-ct', context).backdropSetSummary(function (context) {
      if ($('#edit-node-noindex-ct-node-noindex', context).attr('checked')) {
        ss1 = 'Tag <code>noindex</code> enabled';
        if ($('#edit-node-noindex-ct-node-noindex-default', context).attr('checked')) {
          return Backdrop.t(ss1 + ' and default');
	}
        return Backdrop.t(ss1);
      }
	else if ($('#edit-node-noindex-ct-node-noindex-default', context).attr('checked')) {
        return Backdrop.t('Must also enable <code>noindex</code>');
      }
      else {
        return Backdrop.t('Tag <code>noindex</code> disabled');
      }
    });
  }
};

})(jQuery);
