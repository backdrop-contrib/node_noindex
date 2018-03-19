## Contents of this file

* Introduction
* Requirements
* Recommended modules
* Installation
* Configuration
* Views integration
* Maintainers

## Introduction

This module lets the administrator to alter the HTML head of a node
to instruct well-behaved search engine robots to *not* index the node.
This will prevent the node from appearing in search engine results.

Reasons why you may want to do this is to tell robots *not* to index
pages on your web site that:

* are unimportant
* are transitory
* contains personal and/or sensitive data

See also:

* [Google: Block search indexing with noindex][01]
* [Wikipedia: noindex][02]

## Requirements

No special requirements.

## Recommended modules

* [Advanced help hint][03]:  
  Will link standard help text to **Advanced help**.
* [Advanced Help][04]:  
  When this module is enabled, display of the project's `README.md`
  will be rendered when you visit
  `help/node_nofilter/README.md`.
* [Markdown filter][05]:  
  When this module is enabled, the project's `README.md` will be
  rendered with the markdown filter.


## Installation

1. Install as you would normally install a contributed drupal
   module. See: [Installing modules][06] for further information.

2. Enable the **Node noindex** module on the *Modules* list page.

3. Proceed to configure the module as described in the configuraton
   section below.


## Configuration

To configure the module, you need the permission “Administer node
noindex”.

To enable the `noindex` option for a node content type navigate to the
edit the node type's setting. For example, to enable it for the node
type *Article*, navigate to *Administration » Structure » Content
types » Article* and click the *edit* link.  Look for “Search engine
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
added by core in the HTML head of this node

## Views integration

The module exposes the field “No index” to **Views**.


## Maintainers

* [naxoc][07] - Camilla Krag Jensen (orginal creator)
* [johsw][08] - Johannes Wehner 
* [herved][09] - Hervé Donner
* [gisle][10] - Gisle Hannemyr (current maintainer)

Any help with development (patches, reviews, comments) are welcome.

[01]: https://support.google.com/webmasters/answer/93710
[02]: https://en.wikipedia.org/wiki/Noindex  
[03]: https://www.drupal.org/project/advanced_help_hint
[04]: https://www.drupal.org/project/advanced_help
[05]: https://www.drupal.org/project/markdown
[06]: https://drupal.org/documentation/install/modules-themes/modules-7
[07]: https://www.drupal.org/u/naxoc
[08]: https://www.drupal.org/u/johsw
[09]: https://www.drupal.org/u/herved
[10]: https://www.drupal.org/u/gisle
