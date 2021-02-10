Node Noindex
============

This module lets the administrator alter the HTML head of a node
to instruct well-behaved search engine robots to *not* index the node.
This will prevent the node from appearing in search engine results.

Reasons why you may want to do this is to tell robots *not* to index
pages on your web site that:

* Are unimportant
* Are transitory
* Contains personal and/or sensitive data

See also:

* [Google: Block search indexing with noindex](https://developers.google.com/search/docs/advanced/crawling/block-access-overview)
* [Wikipedia: noindex](https://en.wikipedia.org/wiki/Template:NOINDEX)

Requirements
------------

No requirements

Recommended modules
-------------------

No recommendations

Installation
------------

1. Install as you would normally install a contributed Backdrop CMS
   module. See: [Installing modules](https://backdropcms.org/user-guide/deep-dive-manual-module-installation) for further information.

2. Enable the **Node noindex** module on the *Modules* list page.

3. Proceed to configure the module as described in the configuration
   section below.

Configuration
-------------

To configure the module, you need the permission “Administer node
noindex”.

To enable the `noindex` option for a node content type navigate to the
configure the node type. For example, to enable it for the node
type *Post*, navigate to *Administration » Structure » Content
types » Post* and click the *configure* link.  Look for “Search engine
settings” in the vertical tabs.  There are two check boxes: “Enable
noindex option” and “Set noindex as default”.  The first enables the
noindex option for the content type, the second makes `noindex` the
default when creating new content of the type. This setting does not
effect nodes that already exist.

When you've enabled the noindex option for a content type, you will
find a vertical tab for “Search engine settings” in the vertical tabs
when you edit an individual node of the type.  This let you check “Set
`noindex` in HTML head”.  Checking this box and saving the node sets
the `robots` metatag to `noindex` and removes the `canonical` relation
added by core in the HTML head of this node.

Views integration
-----------------

The module exposes the field “No index” to **Views**.

Current Maintainers
-------------------

- [Justin Christoffersen](https://github.com/larsdesigns)
- [Jen Lampton](https://github.com/jenlampton)

Credits
-------

- Ported to Backdrop CMS by [Justin Christoffersen](https://github.com/larsdesigns)
- Originally written for Drupal by [Camilla Krag Jensen](https://www.drupal.org/u/naxoc)
- Current Drupal project maintainer [Gisle Hannemyr](https://www.drupal.org/u/gisle)
- Johannes Wehner [Johannes Wehner](https://www.drupal.org/u/johsw)
- Hervé Donner [Hervé Donner](https://www.drupal.org/u/herved)
- Port Sponsored by [Jeneration Web Development](https://www.jenerationweb.com)

License
-------

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.
