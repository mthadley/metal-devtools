/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ParentSoy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ParentSoy.
 * @public
 */

goog.module('ParentSoy.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('ChildSoy.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'style', 'padding-left: 16px;');
    itext('Parent:');
    ie_open('button', null, null,
        'onClick', 'addChild');
      itext('Add a Child!');
    ie_close('button');
    var childList25 = opt_data.childrenArr;
    var childListLen25 = childList25.length;
    for (var childIndex25 = 0; childIndex25 < childListLen25; childIndex25++) {
      var childData25 = childList25[childIndex25];
      $templateAlias1({index: childIndex25, subTree: false}, null, opt_ijData);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ParentSoy.render';
}

exports.render.params = ["childrenArr"];
exports.render.types = {"childrenArr":"any"};
templates = exports;
return exports;

});

class ParentSoy extends Component {}
Soy.register(ParentSoy, templates);
export { ParentSoy, templates };
export default templates;
/* jshint ignore:end */
