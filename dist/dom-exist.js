(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.domExist = factory());
}(this, (function () { 'use strict';

function domExist$1 (el) {
    var dom;
    if (el instanceof HTMLElement) {
        dom = el;
    } else {
        if (typeof el === 'string') {
            dom = document.getElementById(el) || (document.querySelector && document.querySelector(el));
        }
    }
    if (!dom) {
        return {
            result: false,
            code: -1,
            msg: 'element not found'
        }
    }
    if (document.body.contains(dom)) {
        return {
            result: true
        }
    }
    return {
        result: false,
        code: -2,
        msg: 'element is not in document.body'
    }
}

return domExist$1;

})));
