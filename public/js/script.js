/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Common": function() { return /* binding */ Common; }
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*!
 * Common Js File
 *
 *
 * Copyright 2022
 */



class Common {
    constructor() {}

    init() {
        // Tooltip
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new _bootstrap__WEBPACK_IMPORTED_MODULE_0__["default"].Tooltip(tooltipTriggerEl);
        });

        // Popover
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new _bootstrap__WEBPACK_IMPORTED_MODULE_0__["default"].Popover(popoverTriggerEl);
        });

        // Dropdown
        var dropdownElementList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
        var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
            return new _bootstrap__WEBPACK_IMPORTED_MODULE_0__["default"].Dropdown(dropdownToggleEl);
        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new Common());


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _bootstrap_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _bootstrap_offcanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _bootstrap_scrollspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);
/* harmony import */ var _bootstrap_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony import */ var _bootstrap_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
/* harmony import */ var _bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): index.umd.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

//! Bootstrap













/* harmony default export */ __webpack_exports__["default"] = ({
    Alert: _bootstrap_alert__WEBPACK_IMPORTED_MODULE_0__["default"],
    Button: _bootstrap_button__WEBPACK_IMPORTED_MODULE_1__["default"],
    Carousel: _bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["default"],
    Collapse: _bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["default"],
    Dropdown: _bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"],
    Offcanvas: _bootstrap_offcanvas__WEBPACK_IMPORTED_MODULE_6__["default"],
    Popover: _bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__["default"],
    ScrollSpy: _bootstrap_scrollspy__WEBPACK_IMPORTED_MODULE_8__["default"],
    Tab: _bootstrap_tab__WEBPACK_IMPORTED_MODULE_9__["default"],
    Toast: _bootstrap_toast__WEBPACK_IMPORTED_MODULE_10__["default"],
    Tooltip: _bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"],
    Modal: _bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
});


/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _util_component_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'alert'
const DATA_KEY = 'bs.alert'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_CLOSE = `close${EVENT_KEY}`
const EVENT_CLOSED = `closed${EVENT_KEY}`
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'

/**
 * Class definition
 */

class Alert extends _base_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  close() {
    const closeEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_CLOSE)

    if (closeEvent.defaultPrevented) {
      return
    }

    this._element.classList.remove(CLASS_NAME_SHOW)

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE)
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated)
  }

  // Private
  _destroyElement() {
    this._element.remove()
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_CLOSED)
    this.dispose()
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Alert.getOrCreateInstance(this)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config](this)
    })
  }
}

/**
 * Data API implementation
 */

(0,_util_component_functions__WEBPACK_IMPORTED_MODULE_3__.enableDismissTrigger)(Alert, 'close')

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Alert)

/* harmony default export */ __webpack_exports__["default"] = (Alert);


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineJQueryPlugin": function() { return /* binding */ defineJQueryPlugin; },
/* harmony export */   "execute": function() { return /* binding */ execute; },
/* harmony export */   "executeAfterTransition": function() { return /* binding */ executeAfterTransition; },
/* harmony export */   "findShadowRoot": function() { return /* binding */ findShadowRoot; },
/* harmony export */   "getElement": function() { return /* binding */ getElement; },
/* harmony export */   "getElementFromSelector": function() { return /* binding */ getElementFromSelector; },
/* harmony export */   "getNextActiveElement": function() { return /* binding */ getNextActiveElement; },
/* harmony export */   "getSelectorFromElement": function() { return /* binding */ getSelectorFromElement; },
/* harmony export */   "getTransitionDurationFromElement": function() { return /* binding */ getTransitionDurationFromElement; },
/* harmony export */   "getUID": function() { return /* binding */ getUID; },
/* harmony export */   "getjQuery": function() { return /* binding */ getjQuery; },
/* harmony export */   "isDisabled": function() { return /* binding */ isDisabled; },
/* harmony export */   "isElement": function() { return /* binding */ isElement; },
/* harmony export */   "isRTL": function() { return /* binding */ isRTL; },
/* harmony export */   "isVisible": function() { return /* binding */ isVisible; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "onDOMContentLoaded": function() { return /* binding */ onDOMContentLoaded; },
/* harmony export */   "reflow": function() { return /* binding */ reflow; },
/* harmony export */   "toType": function() { return /* binding */ toType; },
/* harmony export */   "triggerTransitionEnd": function() { return /* binding */ triggerTransitionEnd; }
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1_000_000
const MILLISECONDS_MULTIPLIER = 1000
const TRANSITION_END = 'transitionend'

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`
  }

  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()
}

/**
 * Public Util API
 */

const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID)
  } while (document.getElementById(prefix))

  return prefix
}

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target')

  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href')

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || (!hrefAttribute.includes('#') && !hrefAttribute.startsWith('.'))) {
      return null
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`
    }

    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null
  }

  return selector
}

const getSelectorFromElement = element => {
  const selector = getSelector(element)

  if (selector) {
    return document.querySelector(selector) ? selector : null
  }

  return null
}

const getElementFromSelector = element => {
  const selector = getSelector(element)

  return selector ? document.querySelector(selector) : null
}

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)

  const floatTransitionDuration = Number.parseFloat(transitionDuration)
  const floatTransitionDelay = Number.parseFloat(transitionDelay)

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0]
  transitionDelay = transitionDelay.split(',')[0]

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
}

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END))
}

const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false
  }

  if (typeof object.jquery !== 'undefined') {
    object = object[0]
  }

  return typeof object.nodeType !== 'undefined'
}

const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object)
  }

  return null
}

const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false
  }

  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])')

  if (!closedDetails) {
    return elementIsVisible
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary')
    if (summary && summary.parentNode !== closedDetails) {
      return false
    }

    if (summary === null) {
      return false
    }
  }

  return elementIsVisible
}

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true
  }

  if (element.classList.contains('disabled')) {
    return true
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
}

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode()
    return root instanceof ShadowRoot ? root : null
  }

  if (element instanceof ShadowRoot) {
    return element
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null
  }

  return findShadowRoot(element.parentNode)
}

const noop = () => {}

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = element => {
  element.offsetHeight // eslint-disable-line no-unused-expressions
}

const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery
  }

  return null
}

const DOMContentLoadedCallbacks = []

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback()
        }
      })
    }

    DOMContentLoadedCallbacks.push(callback)
  } else {
    callback()
  }
}

const isRTL = () => document.documentElement.dir === 'rtl'

const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery()
    /* istanbul ignore if */
    if ($) {
      const name = plugin.NAME
      const JQUERY_NO_CONFLICT = $.fn[name]
      $.fn[name] = plugin.jQueryInterface
      $.fn[name].Constructor = plugin
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT
        return plugin.jQueryInterface
      }
    }
  })
}

const execute = callback => {
  if (typeof callback === 'function') {
    callback()
  }
}

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback)
    return
  }

  const durationPadding = 5
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

  let called = false

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return
    }

    called = true
    transitionElement.removeEventListener(TRANSITION_END, handler)
    execute(callback)
  }

  transitionElement.addEventListener(TRANSITION_END, handler)
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement)
    }
  }, emulatedDuration)
}

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length
  let index = list.indexOf(activeElement)

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]
  }

  index += shouldGetNext ? 1 : -1

  if (isCycleAllowed) {
    index = (index + listLength) % listLength
  }

  return list[Math.max(0, Math.min(index, listLength - 1))]
}




/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/
const stripNameRegex = /\..*/
const stripUidRegex = /::\d+$/
const eventRegistry = {} // Events storage
let uidEvent = 1
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
}

const nativeEvents = new Set([
  'click',
  'dblclick',
  'mouseup',
  'mousedown',
  'contextmenu',
  'mousewheel',
  'DOMMouseScroll',
  'mouseover',
  'mouseout',
  'mousemove',
  'selectstart',
  'selectend',
  'keydown',
  'keypress',
  'keyup',
  'orientationchange',
  'touchstart',
  'touchmove',
  'touchend',
  'touchcancel',
  'pointerdown',
  'pointermove',
  'pointerup',
  'pointerleave',
  'pointercancel',
  'gesturestart',
  'gesturechange',
  'gestureend',
  'focus',
  'blur',
  'change',
  'reset',
  'select',
  'submit',
  'focusin',
  'focusout',
  'load',
  'unload',
  'beforeunload',
  'resize',
  'move',
  'DOMContentLoaded',
  'readystatechange',
  'error',
  'abort',
  'scroll'
])

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
}

function getElementEvents(element) {
  const uid = makeEventUid(element)

  element.uidEvent = uid
  eventRegistry[uid] = eventRegistry[uid] || {}

  return eventRegistry[uid]
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, { delegateTarget: element })

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn)
    }

    return fn.apply(element, [event])
  }
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector)

    for (let { target } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue
        }

        hydrateObj(event, { delegateTarget: target })

        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn)
        }

        return fn.apply(target, [event])
      }
    }
  }
}

function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events)
    .find(event => event.callable === callable && event.delegationSelector === delegationSelector)
}

function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string'
  // todo: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : (handler || delegationFunction)
  let typeEvent = getTypeEvent(originalTypeEvent)

  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent
  }

  return [isDelegated, callable, typeEvent]
}

function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return
  }

  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || (event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget))) {
          return fn.call(this, event)
        }
      }
    }

    callable = wrapFunction(callable)
  }

  const events = getElementEvents(element)
  const handlers = events[typeEvent] || (events[typeEvent] = {})
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null)

  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff

    return
  }

  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''))
  const fn = isDelegated ?
    bootstrapDelegationHandler(element, handler, callable) :
    bootstrapHandler(element, callable)

  fn.delegationSelector = isDelegated ? handler : null
  fn.callable = callable
  fn.oneOff = oneOff
  fn.uidEvent = uid
  handlers[uid] = fn

  element.addEventListener(typeEvent, fn, isDelegated)
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector)

  if (!fn) {
    return
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector))
  delete events[typeEvent][fn.uidEvent]
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {}

  for (const handlerKey of Object.keys(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey]
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)
    }
  }
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '')
  return customEvents[event] || event
}

const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false)
  },

  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true)
  },

  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return
    }

    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)
    const inNamespace = typeEvent !== originalTypeEvent
    const events = getElementEvents(element)
    const storeElementEvent = events[typeEvent] || {}
    const isNamespace = originalTypeEvent.startsWith('.')

    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return
      }

      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null)
      return
    }

    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1))
      }
    }

    for (const keyHandlers of Object.keys(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '')

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers]
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)
      }
    }
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null
    }

    const $ = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getjQuery)()
    const typeEvent = getTypeEvent(event)
    const inNamespace = event !== typeEvent

    let jQueryEvent = null
    let bubbles = true
    let nativeDispatch = true
    let defaultPrevented = false

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args)

      $(element).trigger(jQueryEvent)
      bubbles = !jQueryEvent.isPropagationStopped()
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped()
      defaultPrevented = jQueryEvent.isDefaultPrevented()
    }

    let evt = new Event(event, { bubbles, cancelable: true })
    evt = hydrateObj(evt, args)

    if (defaultPrevented) {
      evt.preventDefault()
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt)
    }

    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault()
    }

    return evt
  }
}

function hydrateObj(obj, meta) {
  for (const [key, value] of Object.entries(meta || {})) {
    try {
      obj[key] = value
    } catch {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value
        }
      })
    }
  }

  return obj
}

/* harmony default export */ __webpack_exports__["default"] = (EventHandler);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const VERSION = '5.2.0'

/**
 * Class definition
 */

class BaseComponent extends _util_config__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(element, config) {
    super()

    element = (0,_util_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(element)
    if (!element) {
      return
    }

    this._element = element
    this._config = this._getConfig(config)

    _dom_data__WEBPACK_IMPORTED_MODULE_0__["default"].set(this._element, this.constructor.DATA_KEY, this)
  }

  // Public
  dispose() {
    _dom_data__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this._element, this.constructor.DATA_KEY)
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].off(this._element, this.constructor.EVENT_KEY)

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null
    }
  }

  _queueCallback(callback, element, isAnimated = true) {
    (0,_util_index__WEBPACK_IMPORTED_MODULE_1__.executeAfterTransition)(callback, element, isAnimated)
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element)
    config = this._configAfterMerge(config)
    this._typeCheckConfig(config)
    return config
  }

  // Static
  static getInstance(element) {
    return _dom_data__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_util_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(element), this.DATA_KEY)
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null)
  }

  static get VERSION() {
    return VERSION
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`
  }

  static eventName(name) {
    return `${name}${this.EVENT_KEY}`
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BaseComponent);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const elementMap = new Map()

/* harmony default export */ __webpack_exports__["default"] = ({
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map())
    }

    const instanceMap = elementMap.get(element)

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`)
      return
    }

    instanceMap.set(key, instance)
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null
    }

    return null
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return
    }

    const instanceMap = elementMap.get(element)

    instanceMap.delete(key)

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element)
    }
  }
});


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {}
  }

  static get DefaultType() {
    return {}
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!')
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config)
    config = this._configAfterMerge(config)
    this._typeCheckConfig(config)
    return config
  }

  _configAfterMerge(config) {
    return config
  }

  _mergeConfigObj(config, element) {
    const jsonConfig = (0,_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__["default"].getDataAttribute(element, 'config') : {} // try to parse

    return {
      ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...((0,_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__["default"].getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    }
  }

  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const property of Object.keys(configTypes)) {
      const expectedTypes = configTypes[property]
      const value = config[property]
      const valueType = (0,_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(value) ? 'element' : (0,_index__WEBPACK_IMPORTED_MODULE_0__.toType)(value)

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
        )
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Config);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return value
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {}
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'))

    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '')
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length)
      attributes[pureKey] = normalizeData(element.dataset[key])
    }

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Manipulator);


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableDismissTrigger": function() { return /* binding */ enableDismissTrigger; }
/* harmony export */ });
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */




const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`
  const name = component.NAME

  _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault()
    }

    if ((0,_index__WEBPACK_IMPORTED_MODULE_1__.isDisabled)(this)) {
      return
    }

    const target = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getElementFromSelector)(this) || this.closest(`.${name}`)
    const instance = component.getOrCreateInstance(target)

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]()
  })
}




/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const NAME = 'button'
const DATA_KEY = 'bs.button'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CLASS_NAME_ACTIVE = 'active'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

/**
 * Class definition
 */

class Button extends _base_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE))
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this)

      if (config === 'toggle') {
        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
  event.preventDefault()

  const button = event.target.closest(SELECTOR_DATA_TOGGLE)
  const data = Button.getOrCreateInstance(button)

  data.toggle()
})

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Button)

/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _util_swipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */








/**
 * Constants
 */

const NAME = 'carousel'
const DATA_KEY = 'bs.carousel'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ARROW_LEFT_KEY = 'ArrowLeft'
const ARROW_RIGHT_KEY = 'ArrowRight'
const TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next'
const ORDER_PREV = 'prev'
const DIRECTION_LEFT = 'left'
const DIRECTION_RIGHT = 'right'

const EVENT_SLIDE = `slide${EVENT_KEY}`
const EVENT_SLID = `slid${EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`
const EVENT_DRAG_START = `dragstart${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_CAROUSEL = 'carousel'
const CLASS_NAME_ACTIVE = 'active'
const CLASS_NAME_SLIDE = 'slide'
const CLASS_NAME_END = 'carousel-item-end'
const CLASS_NAME_START = 'carousel-item-start'
const CLASS_NAME_NEXT = 'carousel-item-next'
const CLASS_NAME_PREV = 'carousel-item-prev'

const SELECTOR_ACTIVE = '.active'
const SELECTOR_ITEM = '.carousel-item'
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM
const SELECTOR_ITEM_IMG = '.carousel-item img'
const SELECTOR_INDICATORS = '.carousel-indicators'
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]'
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]'

const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY]: DIRECTION_LEFT
}

const Default = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
}

const DefaultType = {
  interval: '(number|boolean)', // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
}

/**
 * Class definition
 */

class Carousel extends _base_component__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor(element, config) {
    super(element, config)

    this._interval = null
    this._activeElement = null
    this._isSliding = false
    this.touchTimeout = null
    this._swipeHelper = null

    this._indicatorsElement = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(SELECTOR_INDICATORS, this._element)
    this._addEventListeners()

    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle()
    }
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  next() {
    this._slide(ORDER_NEXT)
  }

  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(this._element)) {
      this.next()
    }
  }

  prev() {
    this._slide(ORDER_PREV)
  }

  pause() {
    if (this._isSliding) {
      (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.triggerTransitionEnd)(this._element)
    }

    this._clearInterval()
  }

  cycle() {
    this._clearInterval()
    this._updateInterval()

    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
  }

  _maybeEnableCycle() {
    if (!this._config.ride) {
      return
    }

    if (this._isSliding) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].one(this._element, EVENT_SLID, () => this.cycle())
      return
    }

    this.cycle()
  }

  to(index) {
    const items = this._getItems()
    if (index > items.length - 1 || index < 0) {
      return
    }

    if (this._isSliding) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].one(this._element, EVENT_SLID, () => this.to(index))
      return
    }

    const activeIndex = this._getItemIndex(this._getActive())
    if (activeIndex === index) {
      return
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV

    this._slide(order, items[index])
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose()
    }

    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval
    return config
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_KEYDOWN, event => this._keydown(event))
    }

    if (this._config.pause === 'hover') {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_MOUSEENTER, () => this.pause())
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle())
    }

    if (this._config.touch && _util_swipe__WEBPACK_IMPORTED_MODULE_4__["default"].isSupported()) {
      this._addTouchEventListeners()
    }
  }

  _addTouchEventListeners() {
    for (const img of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].find(SELECTOR_ITEM_IMG, this._element)) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(img, EVENT_DRAG_START, event => event.preventDefault())
    }

    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return
      }

      // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause()
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout)
      }

      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval)
    }

    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    }

    this._swipeHelper = new _util_swipe__WEBPACK_IMPORTED_MODULE_4__["default"](this._element, swipeConfig)
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return
    }

    const direction = KEY_TO_DIRECTION[event.key]
    if (direction) {
      event.preventDefault()
      this._slide(this._directionToOrder(direction))
    }
  }

  _getItemIndex(element) {
    return this._getItems().indexOf(element)
  }

  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return
    }

    const activeIndicator = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(SELECTOR_ACTIVE, this._indicatorsElement)

    activeIndicator.classList.remove(CLASS_NAME_ACTIVE)
    activeIndicator.removeAttribute('aria-current')

    const newActiveIndicator = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement)

    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE)
      newActiveIndicator.setAttribute('aria-current', 'true')
    }
  }

  _updateInterval() {
    const element = this._activeElement || this._getActive()

    if (!element) {
      return
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10)

    this._config.interval = elementInterval || this._config.defaultInterval
  }

  _slide(order, element = null) {
    if (this._isSliding) {
      return
    }

    const activeElement = this._getActive()
    const isNext = order === ORDER_NEXT
    const nextElement = element || (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getNextActiveElement)(this._getItems(), activeElement, isNext, this._config.wrap)

    if (nextElement === activeElement) {
      return
    }

    const nextElementIndex = this._getItemIndex(nextElement)

    const triggerEvent = eventName => {
      return _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      })
    }

    const slideEvent = triggerEvent(EVENT_SLIDE)

    if (slideEvent.defaultPrevented) {
      return
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // todo: change tests that use empty divs to avoid this check
      return
    }

    const isCycling = Boolean(this._interval)
    this.pause()

    this._isSliding = true

    this._setActiveIndicatorElement(nextElementIndex)
    this._activeElement = nextElement

    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV

    nextElement.classList.add(orderClassName)

    ;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(nextElement)

    activeElement.classList.add(directionalClassName)
    nextElement.classList.add(directionalClassName)

    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName)
      nextElement.classList.add(CLASS_NAME_ACTIVE)

      activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName)

      this._isSliding = false

      triggerEvent(EVENT_SLID)
    }

    this._queueCallback(completeCallBack, activeElement, this._isAnimated())

    if (isCycling) {
      this.cycle()
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE)
  }

  _getActive() {
    return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(SELECTOR_ACTIVE_ITEM, this._element)
  }

  _getItems() {
    return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].find(SELECTOR_ITEM, this._element)
  }

  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }
  }

  _directionToOrder(direction) {
    if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV
  }

  _orderToDirection(order) {
    if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config)

      if (typeof config === 'number') {
        data.to(config)
        return
      }

      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
  const target = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(this)

  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return
  }

  event.preventDefault()

  const carousel = Carousel.getOrCreateInstance(target)
  const slideIndex = this.getAttribute('data-bs-slide-to')

  if (slideIndex) {
    carousel.to(slideIndex)
    carousel._maybeEnableCycle()
    return
  }

  if (_dom_manipulator__WEBPACK_IMPORTED_MODULE_2__["default"].getDataAttribute(this, 'slide') === 'next') {
    carousel.next()
    carousel._maybeEnableCycle()
    return
  }

  carousel.prev()
  carousel._maybeEnableCycle()
})

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(window, EVENT_LOAD_DATA_API, () => {
  const carousels = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].find(SELECTOR_DATA_RIDE)

  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel)
  }
})

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Carousel)

/* harmony default export */ __webpack_exports__["default"] = (Carousel);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * Constants
 */

const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector)
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector))
  },

  parents(element, selector) {
    const parents = []
    let ancestor = element.parentNode.closest(selector)

    while (ancestor) {
      parents.push(ancestor)
      ancestor = ancestor.parentNode.closest(selector)
    }

    return parents
  },

  prev(element, selector) {
    let previous = element.previousElementSibling

    while (previous) {
      if (previous.matches(selector)) {
        return [previous]
      }

      previous = previous.previousElementSibling
    }

    return []
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling

    while (next) {
      if (next.matches(selector)) {
        return [next]
      }

      next = next.nextElementSibling
    }

    return []
  },

  focusableChildren(element) {
    const focusables = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      'details',
      '[tabindex]',
      '[contenteditable="true"]'
    ].map(selector => `${selector}:not([tabindex^="-"])`).join(',')

    return this.find(focusables, element).filter(el => !(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(el) && (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(el))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SelectorEngine);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const NAME = 'swipe'
const EVENT_KEY = '.bs.swipe'
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`
const EVENT_TOUCHEND = `touchend${EVENT_KEY}`
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`
const EVENT_POINTERUP = `pointerup${EVENT_KEY}`
const POINTER_TYPE_TOUCH = 'touch'
const POINTER_TYPE_PEN = 'pen'
const CLASS_NAME_POINTER_EVENT = 'pointer-event'
const SWIPE_THRESHOLD = 40

const Default = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}

const DefaultType = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
}

/**
 * Class definition
 */

class Swipe extends _config__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, config) {
    super()
    this._element = element

    if (!element || !Swipe.isSupported()) {
      return
    }

    this._config = this._getConfig(config)
    this._deltaX = 0
    this._supportPointerEvents = Boolean(window.PointerEvent)
    this._initEvents()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  dispose() {
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].off(this._element, EVENT_KEY)
  }

  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX

      return
    }

    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX
    }
  }

  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX
    }

    this._handleSwipe()
    ;(0,_index__WEBPACK_IMPORTED_MODULE_2__.execute)(this._config.endCallback)
  }

  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ?
      0 :
      event.touches[0].clientX - this._deltaX
  }

  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX)

    if (absDeltaX <= SWIPE_THRESHOLD) {
      return
    }

    const direction = absDeltaX / this._deltaX

    this._deltaX = 0

    if (!direction) {
      return
    }

    (0,_index__WEBPACK_IMPORTED_MODULE_2__.execute)(direction > 0 ? this._config.rightCallback : this._config.leftCallback)
  }

  _initEvents() {
    if (this._supportPointerEvents) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_POINTERDOWN, event => this._start(event))
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_POINTERUP, event => this._end(event))

      this._element.classList.add(CLASS_NAME_POINTER_EVENT)
    } else {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_TOUCHSTART, event => this._start(event))
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_TOUCHMOVE, event => this._move(event))
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_TOUCHEND, event => this._end(event))
    }
  }

  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)
  }

  // Static
  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Swipe);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'collapse'
const DATA_KEY = 'bs.collapse'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_COLLAPSE = 'collapse'
const CLASS_NAME_COLLAPSING = 'collapsing'
const CLASS_NAME_COLLAPSED = 'collapsed'
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal'

const WIDTH = 'width'
const HEIGHT = 'height'

const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]'

const Default = {
  parent: null,
  toggle: true
}

const DefaultType = {
  parent: '(null|element)',
  toggle: 'boolean'
}

/**
 * Class definition
 */

class Collapse extends _base_component__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(element, config) {
    super(element, config)

    this._isTransitioning = false
    this._triggerArray = []

    const toggleList = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(SELECTOR_DATA_TOGGLE)

    for (const elem of toggleList) {
      const selector = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getSelectorFromElement)(elem)
      const filterElement = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(selector)
        .filter(foundElement => foundElement === this._element)

      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem)
      }
    }

    this._initializeChildren()

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown())
    }

    if (this._config.toggle) {
      this.toggle()
    }
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    if (this._isShown()) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return
    }

    let activeChildren = []

    // find active children
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES)
        .filter(element => element !== this._element)
        .map(element => Collapse.getOrCreateInstance(element, { toggle: false }))
    }

    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return
    }

    const startEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOW)
    if (startEvent.defaultPrevented) {
      return
    }

    for (const activeInstance of activeChildren) {
      activeInstance.hide()
    }

    const dimension = this._getDimension()

    this._element.classList.remove(CLASS_NAME_COLLAPSE)
    this._element.classList.add(CLASS_NAME_COLLAPSING)

    this._element.style[dimension] = 0

    this._addAriaAndCollapsedClass(this._triggerArray, true)
    this._isTransitioning = true

    const complete = () => {
      this._isTransitioning = false

      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)

      this._element.style[dimension] = ''

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOWN)
    }

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
    const scrollSize = `scroll${capitalizedDimension}`

    this._queueCallback(complete, this._element, true)
    this._element.style[dimension] = `${this._element[scrollSize]}px`
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return
    }

    const startEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDE)
    if (startEvent.defaultPrevented) {
      return
    }

    const dimension = this._getDimension()

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`

    ;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element)

    this._element.classList.add(CLASS_NAME_COLLAPSING)
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)

    for (const trigger of this._triggerArray) {
      const element = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(trigger)

      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false)
      }
    }

    this._isTransitioning = true

    const complete = () => {
      this._isTransitioning = false
      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDDEN)
    }

    this._element.style[dimension] = ''

    this._queueCallback(complete, this._element, true)
  }

  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW)
  }

  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle) // Coerce string values
    config.parent = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(config.parent)
    return config
  }

  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return
    }

    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE)

    for (const element of children) {
      const selected = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(element)

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected))
      }
    }
  }

  _getFirstLevelChildren(selector) {
    const children = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent)
    // remove children if greater depth
    return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(selector, this._config.parent).filter(element => !children.includes(element))
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return
    }

    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen)
      element.setAttribute('aria-expanded', isOpen)
    }
  }

  // Static
  static jQueryInterface(config) {
    const _config = {}
    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false
    }

    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
    event.preventDefault()
  }

  const selector = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getSelectorFromElement)(this)
  const selectorElements = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(selector)

  for (const element of selectorElements) {
    Collapse.getOrCreateInstance(element, { toggle: false }).toggle()
  }
})

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Collapse)

/* harmony default export */ __webpack_exports__["default"] = (Collapse);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */







/**
 * Constants
 */

const NAME = 'dropdown'
const DATA_KEY = 'bs.dropdown'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ESCAPE_KEY = 'Escape'
const TAB_KEY = 'Tab'
const ARROW_UP_KEY = 'ArrowUp'
const ARROW_DOWN_KEY = 'ArrowDown'
const RIGHT_MOUSE_BUTTON = 2 // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_DROPUP = 'dropup'
const CLASS_NAME_DROPEND = 'dropend'
const CLASS_NAME_DROPSTART = 'dropstart'
const CLASS_NAME_DROPUP_CENTER = 'dropup-center'
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`
const SELECTOR_MENU = '.dropdown-menu'
const SELECTOR_NAVBAR = '.navbar'
const SELECTOR_NAVBAR_NAV = '.navbar-nav'
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'

const PLACEMENT_TOP = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'top-end' : 'top-start'
const PLACEMENT_TOPEND = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'top-start' : 'top-end'
const PLACEMENT_BOTTOM = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'bottom-end' : 'bottom-start'
const PLACEMENT_BOTTOMEND = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'bottom-start' : 'bottom-end'
const PLACEMENT_RIGHT = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'left-start' : 'right-start'
const PLACEMENT_LEFT = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'right-start' : 'left-start'
const PLACEMENT_TOPCENTER = 'top'
const PLACEMENT_BOTTOMCENTER = 'bottom'

const Default = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
}

const DefaultType = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
}

/**
 * Class definition
 */

class Dropdown extends _base_component__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(element, config) {
        super(element, config)

        this._popper = null
        this._parent = this._element.parentNode // dropdown wrapper
        this._menu = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(SELECTOR_MENU, this._parent)
        this._inNavbar = this._detectNavbar()
    }

    // Getters
    static get Default() {
        return Default
    }

    static get DefaultType() {
        return DefaultType
    }

    static get NAME() {
        return NAME
    }

    // Public
    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }

    show() {
        if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this._element) || this._isShown()) {
            return
        }

        const relatedTarget = {
            relatedTarget: this._element
        }

        const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOW, relatedTarget)

        if (showEvent.defaultPrevented) {
            return
        }

        this._createPopper()

        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
            for (const element of [].concat(...document.body.children)) {
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(element, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop)
            }
        }

        this._element.focus()
        this._element.setAttribute('aria-expanded', true)

        this._menu.classList.add(CLASS_NAME_SHOW)
        this._element.classList.add(CLASS_NAME_SHOW)
        _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOWN, relatedTarget)
    }

    hide() {
        if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this._element) || !this._isShown()) {
            return
        }

        const relatedTarget = {
            relatedTarget: this._element
        }

        this._completeHide(relatedTarget)
    }

    dispose() {
        if (this._popper) {
            this._popper.destroy()
        }

        super.dispose()
    }

    update() {
        this._inNavbar = this._detectNavbar()
        if (this._popper) {
            this._popper.update()
        }
    }

    // Private
    _completeHide(relatedTarget) {
        const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDE, relatedTarget)
        if (hideEvent.defaultPrevented) {
            return
        }

        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].off(element, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop)
            }
        }

        if (this._popper) {
            this._popper.destroy()
        }

        this._menu.classList.remove(CLASS_NAME_SHOW)
        this._element.classList.remove(CLASS_NAME_SHOW)
        this._element.setAttribute('aria-expanded', 'false')
        _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__["default"].removeDataAttribute(this._menu, 'popper')
        _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDDEN, relatedTarget)
    }

    _getConfig(config) {
        config = super._getConfig(config)

        if (typeof config.reference === 'object' && !(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(config.reference) &&
            typeof config.reference.getBoundingClientRect !== 'function'
        ) {
            // Popper virtual elements require a getBoundingClientRect method
            throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
        }

        return config
    }

    _createPopper() {
        if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)')
        }

        let referenceElement = this._element

        if (this._config.reference === 'parent') {
            referenceElement = this._parent
        } else if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(this._config.reference)) {
            referenceElement = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(this._config.reference)
        } else if (typeof this._config.reference === 'object') {
            referenceElement = this._config.reference
        }

        const popperConfig = this._getPopperConfig()
        this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig)
    }

    _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW)
    }

    _getPlacement() {
        const parentDropdown = this._parent

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
            return PLACEMENT_RIGHT
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
            return PLACEMENT_LEFT
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
            return PLACEMENT_TOPCENTER
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
            return PLACEMENT_BOTTOMCENTER
        }

        // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
            return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM
    }

    _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null
    }

    _getOffset() {
        const { offset } = this._config

        if (typeof offset === 'string') {
            return offset.split(',').map(value => Number.parseInt(value, 10))
        }

        if (typeof offset === 'function') {
            return popperData => offset(popperData, this._element)
        }

        return offset
    }

    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [{
                name: 'preventOverflow',
                options: {
                    boundary: this._config.boundary
                }
            },
            {
                name: 'offset',
                options: {
                    offset: this._getOffset()
                }
            }]
        }

        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === 'static') {
            _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__["default"].setDataAttribute(this._menu, 'popper', 'static') // todo:v6 remove
            defaultBsPopperConfig.modifiers = [{
                name: 'applyStyles',
                enabled: false
            }]
        }

        return {
            ...defaultBsPopperConfig,
            ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
        }
    }

    _selectMenuItem({ key, target }) {
        const items = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element))

        if (!items.length) {
            return
        }

        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getNextActiveElement)(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus()
    }

    // Static
    static jQueryInterface(config) {
        return this.each(function () {
            const data = Dropdown.getOrCreateInstance(this, config)

            if (typeof config !== 'string') {
                return
            }

            if (typeof data[config] === 'undefined') {
                throw new TypeError(`No method named "${config}"`)
            }

            data[config]()
        })
    }

    static clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || (event.type === 'keyup' && event.key !== TAB_KEY)) {
            return
        }

        const openToggles = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].find(SELECTOR_DATA_TOGGLE_SHOWN)

        for (const toggle of openToggles) {
            const context = Dropdown.getInstance(toggle)
            if (!context || context._config.autoClose === false) {
                continue
            }

            const composedPath = event.composedPath()
            const isMenuTarget = composedPath.includes(context._menu)
            if (
                composedPath.includes(context._element) ||
                (context._config.autoClose === 'inside' && !isMenuTarget) ||
                (context._config.autoClose === 'outside' && isMenuTarget)
            ) {
                continue
            }

            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && ((event.type === 'keyup' && event.key === TAB_KEY) || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                continue
            }

            const relatedTarget = { relatedTarget: context._element }

            if (event.type === 'click') {
                relatedTarget.clickEvent = event
            }

            context._completeHide(relatedTarget)
        }
    }

    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command

        const isInput = /input|textarea/i.test(event.target.tagName)
        const isEscapeEvent = event.key === ESCAPE_KEY
        const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)

        if (!isUpOrDownEvent && !isEscapeEvent) {
            return
        }

        if (isInput && !isEscapeEvent) {
            return
        }

        event.preventDefault()

        const getToggleButton = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__["default"].findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode)
        const instance = Dropdown.getOrCreateInstance(getToggleButton)

        if (isUpOrDownEvent) {
            event.stopPropagation()
            instance.show()
            instance._selectMenuItem(event)
            return
        }

        if (instance._isShown()) { // else is escape and we check if it is shown
            event.stopPropagation()
            instance.hide()
            getToggleButton.focus()
        }
    }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler)
_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler)
_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus)
_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus)
_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault()
    Dropdown.getOrCreateInstance(this).toggle()
})

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Dropdown)

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _util_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _util_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _util_component_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */










/**
 * Constants
 */

const NAME = 'modal'
const DATA_KEY = 'bs.modal'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const ESCAPE_KEY = 'Escape'

const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_RESIZE = `resize${EVENT_KEY}`
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_OPEN = 'modal-open'
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_STATIC = 'modal-static'

const OPEN_SELECTOR = '.modal.show'
const SELECTOR_DIALOG = '.modal-dialog'
const SELECTOR_MODAL_BODY = '.modal-body'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]'

const Default = {
  backdrop: true,
  focus: true,
  keyboard: true
}

const DefaultType = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
}

/**
 * Class definition
 */

class Modal extends _base_component__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(element, config) {
    super(element, config)

    this._dialog = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(SELECTOR_DIALOG, this._element)
    this._backdrop = this._initializeBackDrop()
    this._focustrap = this._initializeFocusTrap()
    this._isShown = false
    this._isTransitioning = false
    this._scrollBar = new _util_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"]()

    this._addEventListeners()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget)
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return
    }

    const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOW, {
      relatedTarget
    })

    if (showEvent.defaultPrevented) {
      return
    }

    this._isShown = true
    this._isTransitioning = true

    this._scrollBar.hide()

    document.body.classList.add(CLASS_NAME_OPEN)

    this._adjustDialog()

    this._backdrop.show(() => this._showElement(relatedTarget))
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDE)

    if (hideEvent.defaultPrevented) {
      return
    }

    this._isShown = false
    this._isTransitioning = true
    this._focustrap.deactivate()

    this._element.classList.remove(CLASS_NAME_SHOW)

    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())
  }

  dispose() {
    for (const htmlElement of [window, this._dialog]) {
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].off(htmlElement, EVENT_KEY)
    }

    this._backdrop.dispose()
    this._focustrap.deactivate()
    super.dispose()
  }

  handleUpdate() {
    this._adjustDialog()
  }

  // Private
  _initializeBackDrop() {
    return new _util_backdrop__WEBPACK_IMPORTED_MODULE_5__["default"]({
      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    })
  }

  _initializeFocusTrap() {
    return new _util_focustrap__WEBPACK_IMPORTED_MODULE_6__["default"]({
      trapElement: this._element
    })
  }

  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element)
    }

    this._element.style.display = 'block'
    this._element.removeAttribute('aria-hidden')
    this._element.setAttribute('aria-modal', true)
    this._element.setAttribute('role', 'dialog')
    this._element.scrollTop = 0

    const modalBody = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(SELECTOR_MODAL_BODY, this._dialog)
    if (modalBody) {
      modalBody.scrollTop = 0
    }

    (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element)

    this._element.classList.add(CLASS_NAME_SHOW)

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate()
      }

      this._isTransitioning = false
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOWN, {
        relatedTarget
      })
    }

    this._queueCallback(transitionComplete, this._dialog, this._isAnimated())
  }

  _addEventListeners() {
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return
      }

      if (this._config.keyboard) {
        event.preventDefault()
        this.hide()
        return
      }

      this._triggerBackdropTransition()
    })

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(window, EVENT_RESIZE, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog()
      }
    })

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
      if (event.target !== event.currentTarget) { // click is inside modal-dialog
        return
      }

      if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition()
        return
      }

      if (this._config.backdrop) {
        this.hide()
      }
    })
  }

  _hideModal() {
    this._element.style.display = 'none'
    this._element.setAttribute('aria-hidden', true)
    this._element.removeAttribute('aria-modal')
    this._element.removeAttribute('role')
    this._isTransitioning = false

    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN)
      this._resetAdjustments()
      this._scrollBar.reset()
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDDEN)
    })
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _triggerBackdropTransition() {
    const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDE_PREVENTED)
    if (hideEvent.defaultPrevented) {
      return
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight
    const initialOverflowY = this._element.style.overflowY
    // return if the following background transition hasn't yet completed
    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return
    }

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden'
    }

    this._element.classList.add(CLASS_NAME_STATIC)
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC)
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY
      }, this._dialog)
    }, this._dialog)

    this._element.focus()
  }

  /**
   * The following methods are used to handle overflowing modals
   */

  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight
    const scrollbarWidth = this._scrollBar.getWidth()
    const isBodyOverflowing = scrollbarWidth > 0

    if (isBodyOverflowing && !isModalOverflowing) {
      const property = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'paddingLeft' : 'paddingRight'
      this._element.style[property] = `${scrollbarWidth}px`
    }

    if (!isBodyOverflowing && isModalOverflowing) {
      const property = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'paddingRight' : 'paddingLeft'
      this._element.style[property] = `${scrollbarWidth}px`
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = ''
    this._element.style.paddingRight = ''
  }

  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config](relatedTarget)
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  const target = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(this)

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].one(target, EVENT_SHOW, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return
    }

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].one(target, EVENT_HIDDEN, () => {
      if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(this)) {
        this.focus()
      }
    })
  })

  // avoid conflict when clicking modal toggler while another one is open
  const alreadyOpen = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(OPEN_SELECTOR)
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide()
  }

  const data = Modal.getOrCreateInstance(target)

  data.toggle(this)
})

;(0,_util_component_functions__WEBPACK_IMPORTED_MODULE_7__.enableDismissTrigger)(Modal)

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Modal)

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
const SELECTOR_STICKY_CONTENT = '.sticky-top'
const PROPERTY_PADDING = 'padding-right'
const PROPERTY_MARGIN = 'margin-right'

/**
 * Class definition
 */

class ScrollBarHelper {
  constructor() {
    this._element = document.body
  }

  // Public
  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth
    return Math.abs(window.innerWidth - documentWidth)
  }

  hide() {
    const width = this.getWidth()
    this._disableOverFlow()
    // give padding to element to balance the hidden scrollbar width
    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width)
    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width)
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width)
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow')
    this._resetElementAttributes(this._element, PROPERTY_PADDING)
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING)
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN)
  }

  isOverflowing() {
    return this.getWidth() > 0
  }

  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow')
    this._element.style.overflow = 'hidden'
  }

  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth()
    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return
      }

      this._saveInitialAttribute(element, styleProperty)
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty)
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`)
    }

    this._applyManipulationCallback(selector, manipulationCallBack)
  }

  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty)
    if (actualValue) {
      _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__["default"].setDataAttribute(element, styleProperty, actualValue)
    }
  }

  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = element => {
      const value = _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__["default"].getDataAttribute(element, styleProperty)
      // We only want to remove the property if the value is `null`; the value can also be zero
      if (value === null) {
        element.style.removeProperty(styleProperty)
        return
      }

      _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__["default"].removeDataAttribute(element, styleProperty)
      element.style.setProperty(styleProperty, value)
    }

    this._applyManipulationCallback(selector, manipulationCallBack)
  }

  _applyManipulationCallback(selector, callBack) {
    if ((0,_index__WEBPACK_IMPORTED_MODULE_2__.isElement)(selector)) {
      callBack(selector)
      return
    }

    for (const sel of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__["default"].find(selector, this._element)) {
      callBack(sel)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ScrollBarHelper);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const NAME = 'backdrop'
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`

const Default = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true, // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements
}

const DefaultType = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
}

/**
 * Class definition
 */

class Backdrop extends _config__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(config) {
    super()
    this._config = this._getConfig(config)
    this._isAppended = false
    this._element = null
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  show(callback) {
    if (!this._config.isVisible) {
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback)
      return
    }

    this._append()

    const element = this._getElement()
    if (this._config.isAnimated) {
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.reflow)(element)
    }

    element.classList.add(CLASS_NAME_SHOW)

    this._emulateAnimation(() => {
      ;(0,_index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback)
    })
  }

  hide(callback) {
    if (!this._config.isVisible) {
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback)
      return
    }

    this._getElement().classList.remove(CLASS_NAME_SHOW)

    this._emulateAnimation(() => {
      this.dispose()
      ;(0,_index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback)
    })
  }

  dispose() {
    if (!this._isAppended) {
      return
    }

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._element, EVENT_MOUSEDOWN)

    this._element.remove()
    this._isAppended = false
  }

  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div')
      backdrop.className = this._config.className
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE)
      }

      this._element = backdrop
    }

    return this._element
  }

  _configAfterMerge(config) {
    // use getElement() with the default "body" to get a fresh Element on each instantiation
    config.rootElement = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(config.rootElement)
    return config
  }

  _append() {
    if (this._isAppended) {
      return
    }

    const element = this._getElement()
    this._config.rootElement.append(element)

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].on(element, EVENT_MOUSEDOWN, () => {
      ;(0,_index__WEBPACK_IMPORTED_MODULE_1__.execute)(this._config.clickCallback)
    })

    this._isAppended = true
  }

  _emulateAnimation(callback) {
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.executeAfterTransition)(callback, this._getElement(), this._config.isAnimated)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Backdrop);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const NAME = 'focustrap'
const DATA_KEY = 'bs.focustrap'
const EVENT_KEY = `.${DATA_KEY}`
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`

const TAB_KEY = 'Tab'
const TAB_NAV_FORWARD = 'forward'
const TAB_NAV_BACKWARD = 'backward'

const Default = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of
}

const DefaultType = {
  autofocus: 'boolean',
  trapElement: 'element'
}

/**
 * Class definition
 */

class FocusTrap extends _config__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(config) {
    super()
    this._config = this._getConfig(config)
    this._isActive = false
    this._lastTabNavDirection = null
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  activate() {
    if (this._isActive) {
      return
    }

    if (this._config.autofocus) {
      this._config.trapElement.focus()
    }

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].off(document, EVENT_KEY) // guard against infinite focus loop
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, EVENT_FOCUSIN, event => this._handleFocusin(event))
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event))

    this._isActive = true
  }

  deactivate() {
    if (!this._isActive) {
      return
    }

    this._isActive = false
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__["default"].off(document, EVENT_KEY)
  }

  // Private
  _handleFocusin(event) {
    const { trapElement } = this._config

    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return
    }

    const elements = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_1__["default"].focusableChildren(trapElement)

    if (elements.length === 0) {
      trapElement.focus()
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus()
    } else {
      elements[0].focus()
    }
  }

  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return
    }

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FocusTrap);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _util_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _util_backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _util_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _util_component_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */










/**
 * Constants
 */

const NAME = 'offcanvas'
const DATA_KEY = 'bs.offcanvas'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const ESCAPE_KEY = 'Escape'

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_SHOWING = 'showing'
const CLASS_NAME_HIDING = 'hiding'
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop'
const OPEN_SELECTOR = '.offcanvas.show'

const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_RESIZE = `resize${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]'

const Default = {
  backdrop: true,
  keyboard: true,
  scroll: false
}

const DefaultType = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
}

/**
 * Class definition
 */

class Offcanvas extends _base_component__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(element, config) {
    super(element, config)

    this._isShown = false
    this._backdrop = this._initializeBackDrop()
    this._focustrap = this._initializeFocusTrap()
    this._addEventListeners()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget)
  }

  show(relatedTarget) {
    if (this._isShown) {
      return
    }

    const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_SHOW, { relatedTarget })

    if (showEvent.defaultPrevented) {
      return
    }

    this._isShown = true
    this._backdrop.show()

    if (!this._config.scroll) {
      new _util_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"]().hide()
    }

    this._element.setAttribute('aria-modal', true)
    this._element.setAttribute('role', 'dialog')
    this._element.classList.add(CLASS_NAME_SHOWING)

    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate()
      }

      this._element.classList.add(CLASS_NAME_SHOW)
      this._element.classList.remove(CLASS_NAME_SHOWING)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_SHOWN, { relatedTarget })
    }

    this._queueCallback(completeCallBack, this._element, true)
  }

  hide() {
    if (!this._isShown) {
      return
    }

    const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_HIDE)

    if (hideEvent.defaultPrevented) {
      return
    }

    this._focustrap.deactivate()
    this._element.blur()
    this._isShown = false
    this._element.classList.add(CLASS_NAME_HIDING)
    this._backdrop.hide()

    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING)
      this._element.removeAttribute('aria-modal')
      this._element.removeAttribute('role')

      if (!this._config.scroll) {
        new _util_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"]().reset()
      }

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_HIDDEN)
    }

    this._queueCallback(completeCallback, this._element, true)
  }

  dispose() {
    this._backdrop.dispose()
    this._focustrap.deactivate()
    super.dispose()
  }

  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === 'static') {
        _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_HIDE_PREVENTED)
        return
      }

      this.hide()
    }

    // 'static' option will be translated to true, and booleans will keep their value
    const isVisible = Boolean(this._config.backdrop)

    return new _util_backdrop__WEBPACK_IMPORTED_MODULE_5__["default"]({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null
    })
  }

  _initializeFocusTrap() {
    return new _util_focustrap__WEBPACK_IMPORTED_MODULE_6__["default"]({
      trapElement: this._element
    })
  }

  _addEventListeners() {
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return
      }

      if (!this._config.keyboard) {
        _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, EVENT_HIDE_PREVENTED)
        return
      }

      this.hide()
    })
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Offcanvas.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config](this)
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  const target = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(this)

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this)) {
    return
  }

  _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].one(target, EVENT_HIDDEN, () => {
    // focus on trigger when it is closed
    if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(this)) {
      this.focus()
    }
  })

  // avoid conflict when clicking a toggler of an offcanvas, while another is open
  const alreadyOpen = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__["default"].findOne(OPEN_SELECTOR)
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide()
  }

  const data = Offcanvas.getOrCreateInstance(target)
  data.toggle(this)
})

_dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(window, EVENT_LOAD_DATA_API, () => {
  for (const selector of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__["default"].find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show()
  }
})

_dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(window, EVENT_RESIZE, () => {
  for (const element of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__["default"].find('[aria-modal][class*=show][class*=offcanvas-]')) {
    if (getComputedStyle(element).position !== 'fixed') {
      Offcanvas.getOrCreateInstance(element).hide()
    }
  }
})

;(0,_util_component_functions__WEBPACK_IMPORTED_MODULE_7__.enableDismissTrigger)(Offcanvas)

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Offcanvas)

/* harmony default export */ __webpack_exports__["default"] = (Offcanvas);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * Constants
 */

const NAME = 'popover'

const SELECTOR_TITLE = '.popover-header'
const SELECTOR_CONTENT = '.popover-body'

const Default = {
  ..._tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' +
    '<div class="popover-arrow"></div>' +
    '<h3 class="popover-header"></h3>' +
    '<div class="popover-body"></div>' +
    '</div>',
  trigger: 'click'
}

const DefaultType = {
  ..._tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].DefaultType,
  content: '(null|string|element|function)'
}

/**
 * Class definition
 */

class Popover extends _tooltip__WEBPACK_IMPORTED_MODULE_1__["default"] {
  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent()
  }

  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    }
  }

  _getContent() {
    return this._resolvePossibleFunction(this._config.content)
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * jQuery
 */

(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Popover)

/* harmony default export */ __webpack_exports__["default"] = (Popover);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _util_sanitizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_template_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */








/**
 * Constants
 */

const NAME = 'tooltip'
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn'])

const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_MODAL = 'modal'
const CLASS_NAME_SHOW = 'show'

const SELECTOR_TOOLTIP_INNER = '.tooltip-inner'
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`

const EVENT_MODAL_HIDE = 'hide.bs.modal'

const TRIGGER_HOVER = 'hover'
const TRIGGER_FOCUS = 'focus'
const TRIGGER_CLICK = 'click'
const TRIGGER_MANUAL = 'manual'

const EVENT_HIDE = 'hide'
const EVENT_HIDDEN = 'hidden'
const EVENT_SHOW = 'show'
const EVENT_SHOWN = 'shown'
const EVENT_INSERTED = 'inserted'
const EVENT_CLICK = 'click'
const EVENT_FOCUSIN = 'focusin'
const EVENT_FOCUSOUT = 'focusout'
const EVENT_MOUSEENTER = 'mouseenter'
const EVENT_MOUSELEAVE = 'mouseleave'

const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'right' : 'left'
}

const Default = {
    allowList: _util_sanitizer__WEBPACK_IMPORTED_MODULE_1__.DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' +
        '<div class="tooltip-arrow"></div>' +
        '<div class="tooltip-inner"></div>' +
        '</div>',
    title: '',
    trigger: 'hover focus'
}

const DefaultType = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
}

/**
 * Class definition
 */

class Tooltip extends _base_component__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(element, config) {
        if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)')
        }

        super(element, config)

        // Private
        this._isEnabled = true
        this._timeout = 0
        this._isHovered = false
        this._activeTrigger = {}
        this._popper = null
        this._templateFactory = null
        this._newContent = null

        // Protected
        this.tip = null

        this._setListeners()
    }

    // Getters
    static get Default() {
        return Default
    }

    static get DefaultType() {
        return DefaultType
    }

    static get NAME() {
        return NAME
    }

    // Public
    enable() {
        this._isEnabled = true
    }

    disable() {
        this._isEnabled = false
    }

    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }

    toggle(event) {
        if (!this._isEnabled) {
            return
        }

        if (event) {
            const context = this._initializeOnDelegatedTarget(event)

            context._activeTrigger.click = !context._activeTrigger.click

            if (context._isWithActiveTrigger()) {
                context._enter()
            } else {
                context._leave()
            }

            return
        }

        if (this._isShown()) {
            this._leave()
            return
        }

        this._enter()
    }

    dispose() {
        clearTimeout(this._timeout)

        _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler)

        if (this.tip) {
            this.tip.remove()
        }

        this._disposePopper()
        super.dispose()
    }

    show() {
        if (this._element.style.display === 'none') {
            throw new Error('Please use show on visible elements')
        }

        if (!(this._isWithContent() && this._isEnabled)) {
            return
        }

        const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, this.constructor.eventName(EVENT_SHOW))
        const shadowRoot = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.findShadowRoot)(this._element)
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element)

        if (showEvent.defaultPrevented || !isInTheDom) {
            return
        }

        // todo v6 remove this OR make it optional
        if (this.tip) {
            this.tip.remove()
            this.tip = null
        }

        const tip = this._getTipElement()

        this._element.setAttribute('aria-describedby', tip.getAttribute('id'))

        const { container } = this._config

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip)
            _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, this.constructor.eventName(EVENT_INSERTED))
        }

        if (this._popper) {
            this._popper.update()
        } else {
            this._popper = this._createPopper(tip)
        }

        tip.classList.add(CLASS_NAME_SHOW)

        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(element, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop)
            }
        }

        const complete = () => {
            const previousHoverState = this._isHovered

            this._isHovered = false
            _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, this.constructor.eventName(EVENT_SHOWN))

            if (previousHoverState) {
                this._leave()
            }
        }

        this._queueCallback(complete, this.tip, this._isAnimated())
    }

    hide() {
        if (!this._isShown()) {
            return
        }

        const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, this.constructor.eventName(EVENT_HIDE))
        if (hideEvent.defaultPrevented) {
            return
        }

        const tip = this._getTipElement()
        tip.classList.remove(CLASS_NAME_SHOW)

        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].off(element, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop)
            }
        }

        this._activeTrigger[TRIGGER_CLICK] = false
        this._activeTrigger[TRIGGER_FOCUS] = false
        this._activeTrigger[TRIGGER_HOVER] = false
        this._isHovered = false

        const complete = () => {
            if (this._isWithActiveTrigger()) {
                return
            }

            if (!this._isHovered) {
                tip.remove()
            }

            this._element.removeAttribute('aria-describedby')
            _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(this._element, this.constructor.eventName(EVENT_HIDDEN))

            this._disposePopper()
        }

        this._queueCallback(complete, this.tip, this._isAnimated())
    }

    update() {
        if (this._popper) {
            this._popper.update()
        }
    }

    // Protected
    _isWithContent() {
        return Boolean(this._getTitle())
    }

    _getTipElement() {
        if (!this.tip) {
            this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())
        }

        return this.tip
    }

    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml()

        // todo: remove this check on v6
        if (!tip) {
            return null
        }

        tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW)
        // todo: on v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`)

        const tipId = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getUID)(this.constructor.NAME).toString()

        tip.setAttribute('id', tipId)

        if (this._isAnimated()) {
            tip.classList.add(CLASS_NAME_FADE)
        }

        return tip
    }

    setContent(content) {
        this._newContent = content
        if (this._isShown()) {
            this._disposePopper()
            this.show()
        }
    }

    _getTemplateFactory(content) {
        if (this._templateFactory) {
            this._templateFactory.changeContent(content)
        } else {
            this._templateFactory = new _util_template_factory__WEBPACK_IMPORTED_MODULE_5__["default"]({
                ...this._config,
                // the `content` var has to be after `this._config`
                // to override config.content in case of popover
                content,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            })
        }

        return this._templateFactory
    }

    _getContentForTemplate() {
        return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
        }
    }

    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
    }

    // Private
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig())
    }

    _isAnimated() {
        return this._config.animation || (this.tip && this.tip.classList.contains(CLASS_NAME_FADE))
    }

    _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW)
    }

    _createPopper(tip) {
        const placement = typeof this._config.placement === 'function' ?
            this._config.placement.call(this, tip, this._element) :
            this._config.placement
        const attachment = AttachmentMap[placement.toUpperCase()]
        return Popper.createPopper(this._element, tip, this._getPopperConfig(attachment))
    }

    _getOffset() {
        const { offset } = this._config

        if (typeof offset === 'string') {
            return offset.split(',').map(value => Number.parseInt(value, 10))
        }

        if (typeof offset === 'function') {
            return popperData => offset(popperData, this._element)
        }

        return offset
    }

    _resolvePossibleFunction(arg) {
        return typeof arg === 'function' ? arg.call(this._element) : arg
    }

    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'arrow',
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: 'preSetPlacement',
                    enabled: true,
                    phase: 'beforeMain',
                    fn: data => {
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute('data-popper-placement', data.state.placement)
                    }
                }
            ]
        }

        return {
            ...defaultBsPopperConfig,
            ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
        }
    }

    _setListeners() {
        const triggers = this._config.trigger.split(' ')

        for (const trigger of triggers) {
            if (trigger === 'click') {
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, event => this.toggle(event))
            } else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ?
                    this.constructor.eventName(EVENT_MOUSEENTER) :
                    this.constructor.eventName(EVENT_FOCUSIN)
                const eventOut = trigger === TRIGGER_HOVER ?
                    this.constructor.eventName(EVENT_MOUSELEAVE) :
                    this.constructor.eventName(EVENT_FOCUSOUT)

                _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(this._element, eventIn, this._config.selector, event => {
                    const context = this._initializeOnDelegatedTarget(event)
                    context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true
                    context._enter()
                })
                _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(this._element, eventOut, this._config.selector, event => {
                    const context = this._initializeOnDelegatedTarget(event)
                    context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] =
                        context._element.contains(event.relatedTarget)

                    context._leave()
                })
            }
        }

        this._hideModalHandler = () => {
            if (this._element) {
                this.hide()
            }
        }

        _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__["default"].on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler)

        if (this._config.selector) {
            this._config = {
                ...this._config,
                trigger: 'manual',
                selector: ''
            }
        } else {
            this._fixTitle()
        }
    }

    _fixTitle() {
        const title = this._config.originalTitle

        if (!title) {
            return
        }

        if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
            this._element.setAttribute('aria-label', title)
        }

        this._element.removeAttribute('title')
    }

    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true
            return
        }

        this._isHovered = true

        this._setTimeout(() => {
            if (this._isHovered) {
                this.show()
            }
        }, this._config.delay.show)
    }

    _leave() {
        if (this._isWithActiveTrigger()) {
            return
        }

        this._isHovered = false

        this._setTimeout(() => {
            if (!this._isHovered) {
                this.hide()
            }
        }, this._config.delay.hide)
    }

    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout)
        this._timeout = setTimeout(handler, timeout)
    }

    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true)
    }

    _getConfig(config) {
        const dataAttributes = _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__["default"].getDataAttributes(this._element)

        for (const dataAttribute of Object.keys(dataAttributes)) {
            if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
                delete dataAttributes[dataAttribute]
            }
        }

        config = {
            ...dataAttributes,
            ...(typeof config === 'object' && config ? config : {})
        }
        config = this._mergeConfigObj(config)
        config = this._configAfterMerge(config)
        this._typeCheckConfig(config)
        return config
    }

    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(config.container)

        if (typeof config.delay === 'number') {
            config.delay = {
                show: config.delay,
                hide: config.delay
            }
        }

        config.originalTitle = this._element.getAttribute('title') || ''
        if (typeof config.title === 'number') {
            config.title = config.title.toString()
        }

        if (typeof config.content === 'number') {
            config.content = config.content.toString()
        }

        return config
    }

    _getDelegateConfig() {
        const config = {}

        for (const key in this._config) {
            if (this.constructor.Default[key] !== this._config[key]) {
                config[key] = this._config[key]
            }
        }

        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config
    }

    _disposePopper() {
        if (this._popper) {
            this._popper.destroy()
            this._popper = null
        }
    }

    // Static
    static jQueryInterface(config) {
        return this.each(function () {
            const data = Tooltip.getOrCreateInstance(this, config)

            if (typeof config !== 'string') {
                return
            }

            if (typeof data[config] === 'undefined') {
                throw new TypeError(`No method named "${config}"`)
            }

            data[config]()
        })
    }
}

/**
 * jQuery
 */

(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Tooltip)

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultAllowlist": function() { return /* binding */ DefaultAllowlist; },
/* harmony export */   "sanitizeHtml": function() { return /* binding */ sanitizeHtml; }
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const uriAttributes = new Set([
  'background',
  'cite',
  'href',
  'itemtype',
  'longdesc',
  'poster',
  'src',
  'xlink:href'
])

const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */
const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i

/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */
const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i

const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase()

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue))
    }

    return true
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp)
    .some(regex => regex.test(attributeName))
}

const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}

function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml
  }

  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml)
  }

  const domParser = new window.DOMParser()
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html')
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'))

  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase()

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove()

      continue
    }

    const attributeList = [].concat(...element.attributes)
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || [])

    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName)
      }
    }
  }

  return createdDocument.body.innerHTML
}


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'TemplateFactory'

const Default = {
  allowList: _sanitizer__WEBPACK_IMPORTED_MODULE_0__.DefaultAllowlist,
  content: {}, // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
}

const DefaultType = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
}

const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
}

/**
 * Class definition
 */

class TemplateFactory extends _config__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(config) {
    super()
    this._config = this._getConfig(config)
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  getContent() {
    return Object.values(this._config.content)
      .map(config => this._resolvePossibleFunction(config))
      .filter(Boolean)
  }

  hasContent() {
    return this.getContent().length > 0
  }

  changeContent(content) {
    this._checkContent(content)
    this._config.content = { ...this._config.content, ...content }
    return this
  }

  toHtml() {
    const templateWrapper = document.createElement('div')
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template)

    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector)
    }

    const template = templateWrapper.children[0]
    const extraClass = this._resolvePossibleFunction(this._config.extraClass)

    if (extraClass) {
      template.classList.add(...extraClass.split(' '))
    }

    return template
  }

  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config)
    this._checkContent(config.content)
  }

  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({ selector, entry: content }, DefaultContentType)
    }
  }

  _setContent(template, content, selector) {
    const templateElement = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(selector, template)

    if (!templateElement) {
      return
    }

    content = this._resolvePossibleFunction(content)

    if (!content) {
      templateElement.remove()
      return
    }

    if ((0,_util_index__WEBPACK_IMPORTED_MODULE_1__.isElement)(content)) {
      this._putElementInTemplate((0,_util_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(content), templateElement)
      return
    }

    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content)
      return
    }

    templateElement.textContent = content
  }

  _maybeSanitize(arg) {
    return this._config.sanitize ? (0,_sanitizer__WEBPACK_IMPORTED_MODULE_0__.sanitizeHtml)(arg, this._config.allowList, this._config.sanitizeFn) : arg
  }

  _resolvePossibleFunction(arg) {
    return typeof arg === 'function' ? arg(this) : arg
  }

  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = ''
      templateElement.append(element)
      return
    }

    templateElement.textContent = element.textContent
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateFactory);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'scrollspy'
const DATA_KEY = 'bs.scrollspy'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_ACTIVATE = `activate${EVENT_KEY}`
const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item'
const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]'
const SELECTOR_TARGET_LINKS = '[href]'
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group'
const SELECTOR_NAV_LINKS = '.nav-link'
const SELECTOR_NAV_ITEMS = '.nav-item'
const SELECTOR_LIST_ITEMS = '.list-group-item'
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`
const SELECTOR_DROPDOWN = '.dropdown'
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle'

const Default = {
  offset: null, // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null
}

const DefaultType = {
  offset: '(number|null)', // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element'
}

/**
 * Class definition
 */

class ScrollSpy extends _base_component__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(element, config) {
    super(element, config)

    // this._element is the observablesContainer and config.target the menu links wrapper
    this._targetLinks = new Map()
    this._observableSections = new Map()
    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element
    this._activeTarget = null
    this._observer = null
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }
    this.refresh() // initialize
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  refresh() {
    this._initializeTargetsAndObservables()
    this._maybeEnableSmoothScroll()

    if (this._observer) {
      this._observer.disconnect()
    } else {
      this._observer = this._getNewObserver()
    }

    for (const section of this._observableSections.values()) {
      this._observer.observe(section)
    }
  }

  dispose() {
    this._observer.disconnect()
    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
    config.target = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(config.target) || document.body

    return config
  }

  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return
    }

    // unregister any previous listeners
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].off(this._config.target, EVENT_CLICK)

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      const observableSection = this._observableSections.get(event.target.hash)
      if (observableSection) {
        event.preventDefault()
        const root = this._rootElement || window
        const height = observableSection.offsetTop - this._element.offsetTop
        if (root.scrollTo) {
          root.scrollTo({ top: height, behavior: 'smooth' })
          return
        }

        // Chrome 60 doesn't support `scrollTo`
        root.scrollTop = height
      }
    })
  }

  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: [0.1, 0.5, 1],
      rootMargin: this._getRootMargin()
    }

    return new IntersectionObserver(entries => this._observerCallback(entries), options)
  }

  // The logic of selection
  _observerCallback(entries) {
    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`)
    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop
      this._process(targetElement(entry))
    }

    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop
    this._previousScrollData.parentScrollTop = parentScrollTop

    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null
        this._clearActiveClass(targetElement(entry))

        continue
      }

      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop
      // if we are scrolling down, pick the bigger offsetTop
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry)
        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
        if (!parentScrollTop) {
          return
        }

        continue
      }

      // if we are scrolling up, pick the smallest offsetTop
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry)
      }
    }
  }

  // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
  _getRootMargin() {
    return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
  }

  _initializeTargetsAndObservables() {
    this._targetLinks = new Map()
    this._observableSections = new Map()

    const targetLinks = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(SELECTOR_TARGET_LINKS, this._config.target)

    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(anchor)) {
        continue
      }

      const observableSection = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(anchor.hash, this._element)

      // ensure that the observableSection exists & is visible
      if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(observableSection)) {
        this._targetLinks.set(anchor.hash, anchor)
        this._observableSections.set(anchor.hash, observableSection)
      }
    }
  }

  _process(target) {
    if (this._activeTarget === target) {
      return
    }

    this._clearActiveClass(this._config.target)
    this._activeTarget = target
    target.classList.add(CLASS_NAME_ACTIVE)
    this._activateParents(target)

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target })
  }

  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN))
        .classList.add(CLASS_NAME_ACTIVE)
      return
    }

    for (const listGroup of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE)
      }
    }
  }

  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE)

    const activeNodes = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE}`, parent)
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE)
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(window, EVENT_LOAD_DATA_API, () => {
  for (const spy of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy)
  }
})

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(ScrollSpy)

/* harmony default export */ __webpack_exports__["default"] = (ScrollSpy);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'tab'
const DATA_KEY = 'bs.tab'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`

const ARROW_LEFT_KEY = 'ArrowLeft'
const ARROW_RIGHT_KEY = 'ArrowRight'
const ARROW_UP_KEY = 'ArrowUp'
const ARROW_DOWN_KEY = 'ArrowDown'

const CLASS_NAME_ACTIVE = 'active'
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'
const CLASS_DROPDOWN = 'dropdown'

const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle'
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu'
const SELECTOR_DROPDOWN_ITEM = '.dropdown-item'
const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)'

const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]'
const SELECTOR_OUTER = '.nav-item, .list-group-item'
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]' // todo:v6: could be only `tab`
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`

const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`

/**
 * Class definition
 */

class Tab extends _base_component__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(element) {
    super(element)
    this._parent = this._element.closest(SELECTOR_TAB_PANEL)

    if (!this._parent) {
      return
      // todo: should Throw exception on v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    }

    // Set up initial aria attributes
    this._setInitialAttributes(this._parent, this._getChildren())

    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_KEYDOWN, event => this._keydown(event))
  }

  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  show() { // Shows this elem and deactivate the active sibling if exists
    const innerElem = this._element
    if (this._elemIsActive(innerElem)) {
      return
    }

    // Search for active tab on same parent to deactivate it
    const active = this._getActiveElem()

    const hideEvent = active ?
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(active, EVENT_HIDE, { relatedTarget: innerElem }) :
      null

    const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(innerElem, EVENT_SHOW, { relatedTarget: active })

    if (showEvent.defaultPrevented || (hideEvent && hideEvent.defaultPrevented)) {
      return
    }

    this._deactivate(active, innerElem)
    this._activate(innerElem, active)
  }

  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return
    }

    element.classList.add(CLASS_NAME_ACTIVE)

    this._activate((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(element)) // Search and activate/show the proper section

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.add(CLASS_NAME_SHOW)
        return
      }

      element.focus()
      element.removeAttribute('tabindex')
      element.setAttribute('aria-selected', true)
      this._toggleDropDown(element, true)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(element, EVENT_SHOWN, {
        relatedTarget: relatedElem
      })
    }

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE))
  }

  _deactivate(element, relatedElem) {
    if (!element) {
      return
    }

    element.classList.remove(CLASS_NAME_ACTIVE)
    element.blur()

    this._deactivate((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(element)) // Search and deactivate the shown section too

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.remove(CLASS_NAME_SHOW)
        return
      }

      element.setAttribute('aria-selected', false)
      element.setAttribute('tabindex', '-1')
      this._toggleDropDown(element, false)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(element, EVENT_HIDDEN, { relatedTarget: relatedElem })
    }

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE))
  }

  _keydown(event) {
    if (!([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key))) {
      return
    }

    event.stopPropagation()// stopPropagation/preventDefault both added to support up/down keys without scrolling the page
    event.preventDefault()
    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key)
    const nextActiveElement = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getNextActiveElement)(this._getChildren().filter(element => !(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(element)), event.target, isNext, true)

    if (nextActiveElement) {
      Tab.getOrCreateInstance(nextActiveElement).show()
    }
  }

  _getChildren() { // collection of inner elements
    return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(SELECTOR_INNER_ELEM, this._parent)
  }

  _getActiveElem() {
    return this._getChildren().find(child => this._elemIsActive(child)) || null
  }

  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, 'role', 'tablist')

    for (const child of children) {
      this._setInitialAttributesOnChild(child)
    }
  }

  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child)
    const isActive = this._elemIsActive(child)
    const outerElem = this._getOuterElement(child)
    child.setAttribute('aria-selected', isActive)

    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, 'role', 'presentation')
    }

    if (!isActive) {
      child.setAttribute('tabindex', '-1')
    }

    this._setAttributeIfNotExists(child, 'role', 'tab')

    // set attributes to the related panel too
    this._setInitialAttributesOnTargetPanel(child)
  }

  _setInitialAttributesOnTargetPanel(child) {
    const target = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(child)

    if (!target) {
      return
    }

    this._setAttributeIfNotExists(target, 'role', 'tabpanel')

    if (child.id) {
      this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`)
    }
  }

  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element)
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return
    }

    const toggle = (selector, className) => {
      const element = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(selector, outerElem)
      if (element) {
        element.classList.toggle(className, open)
      }
    }

    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE)
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW)
    toggle(SELECTOR_DROPDOWN_ITEM, CLASS_NAME_ACTIVE)
    outerElem.setAttribute('aria-expanded', open)
  }

  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value)
    }
  }

  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE)
  }

  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].findOne(SELECTOR_INNER_ELEM, elem)
  }

  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  if ((0,_util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this)) {
    return
  }

  Tab.getOrCreateInstance(this).show()
})

/**
 * Initialize on focus
 */
_dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of _dom_selector_engine__WEBPACK_IMPORTED_MODULE_2__["default"].find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element)
  }
})
/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Tab)

/* harmony default export */ __webpack_exports__["default"] = (Tab);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _util_component_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'toast'
const DATA_KEY = 'bs.toast'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`

const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_HIDE = 'hide' // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_SHOWING = 'showing'

const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
}

const Default = {
  animation: true,
  autohide: true,
  delay: 5000
}

/**
 * Class definition
 */

class Toast extends _base_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(element, config) {
    super(element, config)

    this._timeout = null
    this._hasMouseInteraction = false
    this._hasKeyboardInteraction = false
    this._setListeners()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  show() {
    const showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOW)

    if (showEvent.defaultPrevented) {
      return
    }

    this._clearTimeout()

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE)
    }

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_SHOWN)

      this._maybeScheduleHide()
    }

    this._element.classList.remove(CLASS_NAME_HIDE) // @deprecated
    ;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element)
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING)

    this._queueCallback(complete, this._element, this._config.animation)
  }

  hide() {
    if (!this.isShown()) {
      return
    }

    const hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDE)

    if (hideEvent.defaultPrevented) {
      return
    }

    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE) // @deprecated
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW)
      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].trigger(this._element, EVENT_HIDDEN)
    }

    this._element.classList.add(CLASS_NAME_SHOWING)
    this._queueCallback(complete, this._element, this._config.animation)
  }

  dispose() {
    this._clearTimeout()

    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW)
    }

    super.dispose()
  }

  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW)
  }

  // Private

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return
    }

    this._timeout = setTimeout(() => {
      this.hide()
    }, this._config.delay)
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting
        break
      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting
        break
      default:
        break
    }

    if (isInteracting) {
      this._clearTimeout()
      return
    }

    const nextElement = event.relatedTarget
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return
    }

    this._maybeScheduleHide()
  }

  _setListeners() {
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true))
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false))
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true))
    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__["default"].on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false))
  }

  _clearTimeout() {
    clearTimeout(this._timeout)
    this._timeout = null
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Toast.getOrCreateInstance(this, config)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this)
      }
    })
  }
}

/**
 * Data API implementation
 */

(0,_util_component_functions__WEBPACK_IMPORTED_MODULE_3__.enableDismissTrigger)(Toast)

/**
 * jQuery
 */

;(0,_util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Toast)

/* harmony default export */ __webpack_exports__["default"] = (Toast);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/*!
 * Header js
 *
 *
 * Copyright 2022
 */
class Header {
    constructor() {
        this.siteHeader = '.site-header';
        this.navbarToggler = '.navbar-toggler, .navbar-toggler *';
        this.stickyHeader = 'stickyHeader';
        this.activeClass = 'active';
        this.body = 'body';
        this.show = 'show';
        this.homePage = '.home-page';
    }

    init() {
        let ThisClass = this,
            bodyEl = document.querySelectorAll(this.body)[0],
            siteHeaderEl = document.querySelectorAll(this.siteHeader)[0],
            landingPageEl = document.querySelector('body'),
            navbarToggleEl = document.querySelectorAll(this.navbarToggler)[0];

        document.addEventListener(
            'scroll',
            (e) => {
                if (landingPageEl !== null) {
                    // Class Toggle on Scroll
                    if (window.pageYOffset > 100) {
                        bodyEl.classList.add(ThisClass.stickyHeader);
                    } else {
                        bodyEl.classList.remove(ThisClass.stickyHeader);
                    }
                }
            },
            false
        );

        // Smooth Scroll
        // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth',
        //         });
        //     });
        // });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new Header());


/***/ }),
/* 30 */
/***/ (function(module) {

/*!
 * Glide.js v3.2.0
 * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

(function (global, factory) {
     true ? module.exports = factory() :
        0;
}(this, (function () {
    'use strict';

    var defaults = {
        /**
         * Type of the movement.
         *
         * Available types:
         * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
         * `carousel` - Changes slides without starting over when it reaches the first or last slide.
         *
         * @type {String}
         */
        type: 'slider',

        /**
         * Start at specific slide number defined with zero-based index.
         *
         * @type {Number}
         */
        startAt: 0,

        /**
         * A number of slides visible on the single viewport.
         *
         * @type {Number}
         */
        perView: 1,

        /**
         * Focus currently active slide at a specified position in the track.
         *
         * Available inputs:
         * `center` - Current slide will be always focused at the center of a track.
         * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
         *
         * @type {String|Number}
         */
        focusAt: 0,

        /**
         * A size of the gap added between slides.
         *
         * @type {Number}
         */
        gap: 10,

        /**
         * Change slides after a specified interval. Use `false` for turning off autoplay.
         *
         * @type {Number|Boolean}
         */
        autoplay: false,

        /**
         * Stop autoplay on mouseover event.
         *
         * @type {Boolean}
         */
        hoverpause: true,

        /**
         * Allow for changing slides with left and right keyboard arrows.
         *
         * @type {Boolean}
         */
        keyboard: true,

        /**
         * Stop running `perView` number of slides from the end. Use this
         * option if you don't want to have an empty space after
         * a slider. Works only with `slider` type and a
         * non-centered `focusAt` setting.
         *
         * @type {Boolean}
         */
        bound: false,

        /**
         * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
         *
         * @type {Number|Boolean}
         */
        swipeThreshold: 80,

        /**
         * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
         *
         * @type {Number|Boolean}
         */
        dragThreshold: 120,

        /**
         * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
         *
         * @type {Number|Boolean}
         */
        perTouch: false,

        /**
         * Moving distance ratio of the slides on a swiping and dragging.
         *
         * @type {Number}
         */
        touchRatio: 0.5,

        /**
         * Angle required to activate slides moving on swiping or dragging.
         *
         * @type {Number}
         */
        touchAngle: 45,

        /**
         * Duration of the animation in milliseconds.
         *
         * @type {Number}
         */
        animationDuration: 3000,

        /**
         * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
         *
         * @type {Boolean}
         */
        rewind: true,

        /**
         * Duration of the rewinding animation of the `slider` type in milliseconds.
         *
         * @type {Number}
         */
        rewindDuration: 800,

        /**
         * Easing function for the animation.
         *
         * @type {String}
         */
        animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',

        /**
         * Throttle costly events at most once per every wait milliseconds.
         *
         * @type {Number}
         */
        throttle: 10,

        /**
         * Moving direction mode.
         *
         * Available inputs:
         * - 'ltr' - left to right movement,
         * - 'rtl' - right to left movement.
         *
         * @type {String}
         */
        direction: 'ltr',

        /**
         * The distance value of the next and previous viewports which
         * have to peek in the current view. Accepts number and
         * pixels as a string. Left and right peeking can be
         * set up separately with a directions object.
         *
         * For example:
         * `100` - Peek 100px on the both sides.
         * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
         *
         * @type {Number|String|Object}
         */
        peek: 0,

        /**
         * Collection of options applied at specified media breakpoints.
         * For example: display two slides per view under 800px.
         * `{
         *   '800px': {
         *     perView: 2
         *   }
         * }`
         */
        breakpoints: {},

        /**
         * Collection of internally used HTML classes.
         *
         * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
         * @type {Object}
         */
        classes: {
            direction: {
                ltr: 'glide--ltr',
                rtl: 'glide--rtl'
            },
            slider: 'glide--slider',
            carousel: 'glide--carousel',
            swipeable: 'glide--swipeable',
            dragging: 'glide--dragging',
            cloneSlide: 'glide__slide--clone',
            activeNav: 'glide__bullet--active',
            activeSlide: 'glide__slide--active',
            disabledArrow: 'glide__arrow--disabled'
        }
    };

    /**
     * Outputs warning message to the bowser console.
     *
     * @param  {String} msg
     * @return {Void}
     */
    function warn(msg) {
        console.error("[Glide warn]: " + msg);
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    var inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    var possibleConstructorReturn = function (self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    /**
     * Converts value entered as number
     * or string to integer value.
     *
     * @param {String} value
     * @returns {Number}
     */
    function toInt(value) {
        return parseInt(value);
    }

    /**
     * Converts value entered as number
     * or string to flat value.
     *
     * @param {String} value
     * @returns {Number}
     */
    function toFloat(value) {
        return parseFloat(value);
    }

    /**
     * Indicates whether the specified value is a string.
     *
     * @param  {*}   value
     * @return {Boolean}
     */
    function isString(value) {
        return typeof value === 'string';
    }

    /**
     * Indicates whether the specified value is an object.
     *
     * @param  {*} value
     * @return {Boolean}
     *
     * @see https://github.com/jashkenas/underscore
     */
    function isObject(value) {
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

        return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
    }

    /**
     * Indicates whether the specified value is a number.
     *
     * @param  {*} value
     * @return {Boolean}
     */
    function isNumber(value) {
        return typeof value === 'number';
    }

    /**
     * Indicates whether the specified value is a function.
     *
     * @param  {*} value
     * @return {Boolean}
     */
    function isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Indicates whether the specified value is undefined.
     *
     * @param  {*} value
     * @return {Boolean}
     */
    function isUndefined(value) {
        return typeof value === 'undefined';
    }

    /**
     * Indicates whether the specified value is an array.
     *
     * @param  {*} value
     * @return {Boolean}
     */
    function isArray(value) {
        return value.constructor === Array;
    }

    /**
     * Creates and initializes specified collection of extensions.
     * Each extension receives access to instance of glide and rest of components.
     *
     * @param {Object} glide
     * @param {Object} extensions
     *
     * @returns {Object}
     */
    function mount(glide, extensions, events) {
        var components = {};

        for (var name in extensions) {
            if (isFunction(extensions[name])) {
                components[name] = extensions[name](glide, components, events);
            } else {
                warn('Extension must be a function');
            }
        }

        for (var _name in components) {
            if (isFunction(components[_name].mount)) {
                components[_name].mount();
            }
        }

        return components;
    }

    /**
     * Defines getter and setter property on the specified object.
     *
     * @param  {Object} obj         Object where property has to be defined.
     * @param  {String} prop        Name of the defined property.
     * @param  {Object} definition  Get and set definitions for the property.
     * @return {Void}
     */
    function define(obj, prop, definition) {
        Object.defineProperty(obj, prop, definition);
    }

    /**
     * Sorts aphabetically object keys.
     *
     * @param  {Object} obj
     * @return {Object}
     */
    function sortKeys(obj) {
        return Object.keys(obj).sort().reduce(function (r, k) {
            r[k] = obj[k];

            return r[k], r;
        }, {});
    }

    /**
     * Merges passed settings object with default options.
     *
     * @param  {Object} defaults
     * @param  {Object} settings
     * @return {Object}
     */
    function mergeOptions(defaults, settings) {
        var options = _extends({}, defaults, settings);

        // `Object.assign` do not deeply merge objects, so we
        // have to do it manually for every nested object
        // in options. Although it does not look smart,
        // it's smaller and faster than some fancy
        // merging deep-merge algorithm script.
        if (settings.hasOwnProperty('classes')) {
            options.classes = _extends({}, defaults.classes, settings.classes);

            if (settings.classes.hasOwnProperty('direction')) {
                options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
            }
        }

        return options;
    }

    var EventsBus = function () {
        /**
         * Construct a EventBus instance.
         *
         * @param {Object} events
         */
        function EventsBus() {
            var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, EventsBus);

            this.events = events;
            this.hop = events.hasOwnProperty;
        }

        /**
         * Adds listener to the specifed event.
         *
         * @param {String|Array} event
         * @param {Function} handler
         */


        createClass(EventsBus, [{
            key: 'on',
            value: function on(event, handler) {
                if (isArray(event)) {
                    for (var i = 0; i < event.length; i++) {
                        this.on(event[i], handler);
                    }
                }

                // Create the event's object if not yet created
                if (!this.hop.call(this.events, event)) {
                    this.events[event] = [];
                }

                // Add the handler to queue
                var index = this.events[event].push(handler) - 1;

                // Provide handle back for removal of event
                return {
                    remove: function remove() {
                        delete this.events[event][index];
                    }
                };
            }

            /**
             * Runs registered handlers for specified event.
             *
             * @param {String|Array} event
             * @param {Object=} context
             */

        }, {
            key: 'emit',
            value: function emit(event, context) {
                if (isArray(event)) {
                    for (var i = 0; i < event.length; i++) {
                        this.emit(event[i], context);
                    }
                }

                // If the event doesn't exist, or there's no handlers in queue, just leave
                if (!this.hop.call(this.events, event)) {
                    return;
                }

                // Cycle through events queue, fire!
                this.events[event].forEach(function (item) {
                    item(context || {});
                });
            }
        }]);
        return EventsBus;
    }();

    var Glide = function () {
        /**
         * Construct glide.
         *
         * @param  {String} selector
         * @param  {Object} options
         */
        function Glide(selector) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            classCallCheck(this, Glide);

            this._c = {};
            this._t = [];
            this._e = new EventsBus();

            this.disabled = false;
            this.selector = selector;
            this.settings = mergeOptions(defaults, options);
            this.index = this.settings.startAt;
        }

        /**
         * Initializes glide.
         *
         * @param {Object} extensions Collection of extensions to initialize.
         * @return {Glide}
         */


        createClass(Glide, [{
            key: 'mount',
            value: function mount$$1() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this._e.emit('mount.before');

                if (isObject(extensions)) {
                    this._c = mount(this, extensions, this._e);
                } else {
                    warn('You need to provide a object on `mount()`');
                }

                this._e.emit('mount.after');

                return this;
            }

            /**
             * Collects an instance `translate` transformers.
             *
             * @param  {Array} transformers Collection of transformers.
             * @return {Void}
             */

        }, {
            key: 'mutate',
            value: function mutate() {
                var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                if (isArray(transformers)) {
                    this._t = transformers;
                } else {
                    warn('You need to provide a array on `mutate()`');
                }

                return this;
            }

            /**
             * Updates glide with specified settings.
             *
             * @param {Object} settings
             * @return {Glide}
             */

        }, {
            key: 'update',
            value: function update() {
                var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.settings = _extends({}, this.settings, settings);

                if (settings.hasOwnProperty('startAt')) {
                    this.index = settings.startAt;
                }

                this._e.emit('update');

                return this;
            }

            /**
             * Change slide with specified pattern. A pattern must be in the special format:
             * `>` - Move one forward
             * `<` - Move one backward
             * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
             * `>>` - Rewinds to end (last slide)
             * `<<` - Rewinds to start (first slide)
             *
             * @param {String} pattern
             * @return {Glide}
             */

        }, {
            key: 'go',
            value: function go(pattern) {
                this._c.Run.make(pattern);

                return this;
            }

            /**
             * Move track by specified distance.
             *
             * @param {String} distance
             * @return {Glide}
             */

        }, {
            key: 'move',
            value: function move(distance) {
                this._c.Transition.disable();
                this._c.Move.make(distance);

                return this;
            }

            /**
             * Destroy instance and revert all changes done by this._c.
             *
             * @return {Glide}
             */

        }, {
            key: 'destroy',
            value: function destroy() {
                this._e.emit('destroy');

                return this;
            }

            /**
             * Start instance autoplaying.
             *
             * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
             * @return {Glide}
             */

        }, {
            key: 'play',
            value: function play() {
                var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (interval) {
                    this.settings.autoplay = interval;
                }

                this._e.emit('play');

                return this;
            }

            /**
             * Stop instance autoplaying.
             *
             * @return {Glide}
             */

        }, {
            key: 'pause',
            value: function pause() {
                this._e.emit('pause');

                return this;
            }

            /**
             * Sets glide into a idle status.
             *
             * @return {Glide}
             */

        }, {
            key: 'disable',
            value: function disable() {
                this.disabled = true;

                return this;
            }

            /**
             * Sets glide into a active status.
             *
             * @return {Glide}
             */

        }, {
            key: 'enable',
            value: function enable() {
                this.disabled = false;

                return this;
            }

            /**
             * Adds cuutom event listener with handler.
             *
             * @param  {String|Array} event
             * @param  {Function} handler
             * @return {Glide}
             */

        }, {
            key: 'on',
            value: function on(event, handler) {
                this._e.on(event, handler);

                return this;
            }

            /**
             * Checks if glide is a precised type.
             *
             * @param  {String} name
             * @return {Boolean}
             */

        }, {
            key: 'isType',
            value: function isType(name) {
                return this.settings.type === name;
            }

            /**
             * Gets value of the core options.
             *
             * @return {Object}
             */

        }, {
            key: 'settings',
            get: function get$$1() {
                return this._o;
            }

            /**
             * Sets value of the core options.
             *
             * @param  {Object} o
             * @return {Void}
             */
            ,
            set: function set$$1(o) {
                if (isObject(o)) {
                    this._o = o;
                } else {
                    warn('Options must be an `object` instance.');
                }
            }

            /**
             * Gets current index of the slider.
             *
             * @return {Object}
             */

        }, {
            key: 'index',
            get: function get$$1() {
                return this._i;
            }

            /**
             * Sets current index a slider.
             *
             * @return {Object}
             */
            ,
            set: function set$$1(i) {
                this._i = toInt(i);
            }

            /**
             * Gets type name of the slider.
             *
             * @return {String}
             */

        }, {
            key: 'type',
            get: function get$$1() {
                return this.settings.type;
            }

            /**
             * Gets value of the idle status.
             *
             * @return {Boolean}
             */

        }, {
            key: 'disabled',
            get: function get$$1() {
                return this._d;
            }

            /**
             * Sets value of the idle status.
             *
             * @return {Boolean}
             */
            ,
            set: function set$$1(status) {
                this._d = !!status;
            }
        }]);
        return Glide;
    }();

    function Run(Glide, Components, Events) {
        var Run = {
            /**
             * Initializes autorunning of the glide.
             *
             * @return {Void}
             */
            mount: function mount() {
                this._o = false;
            },


            /**
             * Makes glides running based on the passed moving schema.
             *
             * @param {String} move
             */
            make: function make(move) {
                var _this = this;

                if (!Glide.disabled) {
                    Glide.disable();

                    this.move = move;

                    Events.emit('run.before', this.move);

                    this.calculate();

                    Events.emit('run', this.move);

                    Components.Transition.after(function () {
                        if (_this.isOffset('<') || _this.isOffset('>')) {
                            _this._o = false;

                            Events.emit('run.offset', _this.move);
                        }

                        Events.emit('run.after', _this.move);

                        Glide.enable();
                    });
                }
            },


            /**
             * Calculates current index based on defined move.
             *
             * @return {Void}
             */
            calculate: function calculate() {
                var move = this.move,
                    length = this.length;
                var steps = move.steps,
                    direction = move.direction;


                var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

                switch (direction) {
                    case '>':
                        if (steps === '>') {
                            Glide.index = length;
                        } else if (this.isEnd()) {
                            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                                this._o = true;

                                Glide.index = 0;
                            }

                            Events.emit('run.end', move);
                        } else if (countableSteps) {
                            Glide.index += Math.min(length - Glide.index, -toInt(steps));
                        } else {
                            Glide.index++;
                        }
                        break;

                    case '<':
                        if (steps === '<') {
                            Glide.index = 0;
                        } else if (this.isStart()) {
                            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                                this._o = true;

                                Glide.index = length;
                            }

                            Events.emit('run.start', move);
                        } else if (countableSteps) {
                            Glide.index -= Math.min(Glide.index, toInt(steps));
                        } else {
                            Glide.index--;
                        }
                        break;

                    case '=':
                        Glide.index = steps;
                        break;
                }
            },


            /**
             * Checks if we are on the first slide.
             *
             * @return {Boolean}
             */
            isStart: function isStart() {
                return Glide.index === 0;
            },


            /**
             * Checks if we are on the last slide.
             *
             * @return {Boolean}
             */
            isEnd: function isEnd() {
                return Glide.index === this.length;
            },


            /**
             * Checks if we are making a offset run.
             *
             * @param {String} direction
             * @return {Boolean}
             */
            isOffset: function isOffset(direction) {
                return this._o && this.move.direction === direction;
            }
        };

        define(Run, 'move', {
            /**
             * Gets value of the move schema.
             *
             * @returns {Object}
             */
            get: function get() {
                return this._m;
            },


            /**
             * Sets value of the move schema.
             *
             * @returns {Object}
             */
            set: function set(value) {
                this._m = {
                    direction: value.substr(0, 1),
                    steps: value.substr(1) ? value.substr(1) : 0
                };
            }
        });

        define(Run, 'length', {
            /**
             * Gets value of the running distance based
             * on zero-indexing number of slides.
             *
             * @return {Number}
             */
            get: function get() {
                var settings = Glide.settings;
                var length = Components.Html.slides.length;

                // While number of slides inside instance is smaller
                // that `perView` settings we should't run at all.
                // Running distance has to be zero.

                if (settings.perView > length) {
                    return 0;
                }

                // If the `bound` option is acitve, a maximum running distance should be
                // reduced by `perView` and `focusAt` settings. Running distance
                // should end before creating an empty space after instance.
                if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
                    return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
                }

                return length - 1;
            }
        });

        define(Run, 'offset', {
            /**
             * Gets status of the offsetting flag.
             *
             * @return {Boolean}
             */
            get: function get() {
                return this._o;
            }
        });

        return Run;
    }

    /**
     * Returns a current time.
     *
     * @return {Number}
     */
    function now() {
        return new Date().getTime();
    }

    /**
     * Returns a function, that, when invoked, will only be triggered
     * at most once during a given window of time.
     *
     * @param {Function} func
     * @param {Number} wait
     * @param {Object=} options
     * @return {Function}
     *
     * @see https://github.com/jashkenas/underscore
     */
    function throttle(func, wait, options) {
        var timeout = void 0,
            context = void 0,
            args = void 0,
            result = void 0;
        var previous = 0;
        if (!options) options = {};

        var later = function later() {
            previous = options.leading === false ? 0 : now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };

        var throttled = function throttled() {
            var at = now();
            if (!previous && options.leading === false) previous = at;
            var remaining = wait - (at - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = at;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };

        throttled.cancel = function () {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
        };

        return throttled;
    }

    var MARGIN_TYPE = {
        ltr: ['marginLeft', 'marginRight'],
        rtl: ['marginRight', 'marginLeft']
    };

    function Gaps(Glide, Components, Events) {
        var Gaps = {
            /**
             * Setups gap value based on settings.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.value = Glide.settings.gap;
            },


            /**
             * Applies gaps between slides. First and last
             * slides do not receive it's edge margins.
             *
             * @param {HTMLCollection} slides
             * @return {Void}
             */
            apply: function apply(slides) {
                for (var i = 0, len = slides.length; i < len; i++) {
                    var style = slides[i].style;
                    var direction = Components.Direction.value;

                    if (i !== 0) {
                        style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
                    } else {
                        style[MARGIN_TYPE[direction][0]] = '';
                    }

                    if (i !== slides.length - 1) {
                        style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
                    } else {
                        style[MARGIN_TYPE[direction][1]] = '';
                    }
                }
            },


            /**
             * Removes gaps from the slides.
             *
             * @param {HTMLCollection} slides
             * @returns {Void}
            */
            remove: function remove(slides) {
                for (var i = 0, len = slides.length; i < len; i++) {
                    var style = slides[i].style;

                    style.marginLeft = '';
                    style.marginRight = '';
                }
            }
        };

        define(Gaps, 'value', {
            /**
             * Gets value of the gap.
             *
             * @returns {Number}
             */
            get: function get() {
                return Gaps._v;
            },


            /**
             * Sets value of the gap.
             *
             * @param {String} value
             * @return {Void}
             */
            set: function set(value) {
                Gaps._v = toInt(value);
            }
        });

        define(Gaps, 'grow', {
            /**
             * Gets additional dimentions value caused by gaps.
             * Used to increase width of the slides wrapper.
             *
             * @returns {Number}
             */
            get: function get() {
                return Gaps.value * (Components.Sizes.length - 1);
            }
        });

        define(Gaps, 'reductor', {
            /**
             * Gets reduction value caused by gaps.
             * Used to subtract width of the slides.
             *
             * @returns {Number}
             */
            get: function get() {
                var perView = Glide.settings.perView;

                return Gaps.value * (perView - 1) / perView;
            }
        });

        /**
         * Remount component:
         * - on updating via API, to update gap value
         */
        Events.on('update', function () {
            Gaps.mount();
        });

        /**
         * Apply calculated gaps:
         * - after building, so slides (including clones) will receive proper margins
         * - on updating via API, to recalculate gaps with new options
         */
        Events.on(['build.after', 'update'], throttle(function () {
            Gaps.apply(Components.Html.wrapper.children);
        }, 30));

        /**
         * Remove gaps:
         * - on destroying to bring markup to its inital state
         */
        Events.on('destroy', function () {
            Gaps.remove(Components.Html.wrapper.children);
        });

        return Gaps;
    }

    /**
     * Finds siblings nodes of the passed node.
     *
     * @param  {Element} node
     * @return {Array}
     */
    function siblings(node) {
        var n = node.parentNode.firstChild;
        var matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== node) {
                matched.push(n);
            }
        }

        return matched;
    }

    /**
     * Checks if passed node exist and is a valid element.
     *
     * @param  {Element} node
     * @return {Boolean}
     */
    function exist(node) {
        if (node && node instanceof window.HTMLElement) {
            return true;
        }

        return false;
    }

    var TRACK_SELECTOR = '[data-glide-el="track"]';

    function Html(Glide, Components) {
        var Html = {
            /**
             * Setup slider HTML nodes.
             *
             * @param {Glide} glide
             */
            mount: function mount() {
                this.root = Glide.selector;
                this.track = this.root.querySelector(TRACK_SELECTOR);
                this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
                    return !slide.classList.contains(Glide.settings.classes.cloneSlide);
                });
            }
        };

        define(Html, 'root', {
            /**
             * Gets node of the glide main element.
             *
             * @return {Object}
             */
            get: function get() {
                return Html._r;
            },


            /**
             * Sets node of the glide main element.
             *
             * @return {Object}
             */
            set: function set(r) {
                if (isString(r)) {
                    r = document.querySelector(r);
                }

                if (exist(r)) {
                    Html._r = r;
                } else {
                    warn('Root element must be a existing Html node');
                }
            }
        });

        define(Html, 'track', {
            /**
             * Gets node of the glide track with slides.
             *
             * @return {Object}
             */
            get: function get() {
                return Html._t;
            },


            /**
             * Sets node of the glide track with slides.
             *
             * @return {Object}
             */
            set: function set(t) {
                if (exist(t)) {
                    Html._t = t;
                } else {
                    warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
                }
            }
        });

        define(Html, 'wrapper', {
            /**
             * Gets node of the slides wrapper.
             *
             * @return {Object}
             */
            get: function get() {
                return Html.track.children[0];
            }
        });

        return Html;
    }

    function Peek(Glide, Components, Events) {
        var Peek = {
            /**
             * Setups how much to peek based on settings.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.value = Glide.settings.peek;
            }
        };

        define(Peek, 'value', {
            /**
             * Gets value of the peek.
             *
             * @returns {Number|Object}
             */
            get: function get() {
                return Peek._v;
            },


            /**
             * Sets value of the peek.
             *
             * @param {Number|Object} value
             * @return {Void}
             */
            set: function set(value) {
                if (isObject(value)) {
                    value.before = toInt(value.before);
                    value.after = toInt(value.after);
                } else {
                    value = toInt(value);
                }

                Peek._v = value;
            }
        });

        define(Peek, 'reductor', {
            /**
             * Gets reduction value caused by peek.
             *
             * @returns {Number}
             */
            get: function get() {
                var value = Peek.value;
                var perView = Glide.settings.perView;

                if (isObject(value)) {
                    return value.before / perView + value.after / perView;
                }

                return value * 2 / perView;
            }
        });

        /**
         * Recalculate peeking sizes on:
         * - when resizing window to update to proper percents
         */
        Events.on(['resize', 'update'], function () {
            Peek.mount();
        });

        return Peek;
    }

    function Move(Glide, Components, Events) {
        var Move = {
            /**
             * Constructs move component.
             *
             * @returns {Void}
             */
            mount: function mount() {
                this._o = 0;
            },


            /**
             * Calculates a movement value based on passed offset and currently active index.
             *
             * @param  {Number} offset
             * @return {Void}
             */
            make: function make() {
                var _this = this;

                var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                this.offset = offset;

                Events.emit('move', {
                    movement: this.value
                });

                Components.Transition.after(function () {
                    Events.emit('move.after', {
                        movement: _this.value
                    });
                });
            }
        };

        define(Move, 'offset', {
            /**
             * Gets an offset value used to modify current translate.
             *
             * @return {Object}
             */
            get: function get() {
                return Move._o;
            },


            /**
             * Sets an offset value used to modify current translate.
             *
             * @return {Object}
             */
            set: function set(value) {
                Move._o = !isUndefined(value) ? toInt(value) : 0;
            }
        });

        define(Move, 'translate', {
            /**
             * Gets a raw movement value.
             *
             * @return {Number}
             */
            get: function get() {
                return Components.Sizes.slideWidth * Glide.index;
            }
        });

        define(Move, 'value', {
            /**
             * Gets an actual movement value corrected by offset.
             *
             * @return {Number}
             */
            get: function get() {
                var offset = this.offset;
                var translate = this.translate;

                if (Components.Direction.is('rtl')) {
                    return translate + offset;
                }

                return translate - offset;
            }
        });

        /**
         * Make movement to proper slide on:
         * - before build, so glide will start at `startAt` index
         * - on each standard run to move to newly calculated index
         */
        Events.on(['build.before', 'run'], function () {
            Move.make();
        });

        return Move;
    }

    function Sizes(Glide, Components, Events) {
        var Sizes = {
            /**
             * Setups dimentions of slides.
             *
             * @return {Void}
             */
            setupSlides: function setupSlides() {
                var slides = Components.Html.slides;

                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.width = this.slideWidth + 'px';
                }
            },


            /**
             * Setups dimentions of slides wrapper.
             *
             * @return {Void}
             */
            setupWrapper: function setupWrapper(dimention) {
                Components.Html.wrapper.style.width = this.wrapperSize + 'px';
            },


            /**
             * Removes applied styles from HTML elements.
             *
             * @returns {Void}
             */
            remove: function remove() {
                var slides = Components.Html.slides;

                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.width = '';
                }

                Components.Html.wrapper.style.width = '';
            }
        };

        define(Sizes, 'length', {
            /**
             * Gets count number of the slides.
             *
             * @return {Number}
             */
            get: function get() {
                return Components.Html.slides.length;
            }
        });

        define(Sizes, 'width', {
            /**
             * Gets width value of the glide.
             *
             * @return {Number}
             */
            get: function get() {
                return Components.Html.root.offsetWidth;
            }
        });

        define(Sizes, 'wrapperSize', {
            /**
             * Gets size of the slides wrapper.
             *
             * @return {Number}
             */
            get: function get() {
                return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
            }
        });

        define(Sizes, 'slideWidth', {
            /**
             * Gets width value of the single slide.
             *
             * @return {Number}
             */
            get: function get() {
                return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
            }
        });

        /**
         * Apply calculated glide's dimensions:
         * - before building, so other dimentions (e.g. translate) will be calculated propertly
         * - when resizing window to recalculate sildes dimensions
         * - on updating via API, to calculate dimensions based on new options
         */
        Events.on(['build.before', 'resize', 'update'], function () {
            Sizes.setupSlides();
            Sizes.setupWrapper();
        });

        /**
         * Remove calculated glide's dimensions:
         * - on destoting to bring markup to its inital state
         */
        Events.on('destroy', function () {
            Sizes.remove();
        });

        return Sizes;
    }

    function Build(Glide, Components, Events) {
        var Build = {
            /**
             * Init glide building. Adds classes, sets
             * dimensions and setups initial state.
             *
             * @return {Void}
             */
            mount: function mount() {
                Events.emit('build.before');

                this.typeClass();
                this.activeClass();

                Events.emit('build.after');
            },


            /**
             * Adds `type` class to the glide element.
             *
             * @return {Void}
             */
            typeClass: function typeClass() {
                Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
            },


            /**
             * Sets active class to current slide.
             *
             * @return {Void}
             */
            activeClass: function activeClass() {
                var classes = Glide.settings.classes;
                var slide = Components.Html.slides[Glide.index];

                slide.classList.add(classes.activeSlide);

                siblings(slide).forEach(function (sibling) {
                    sibling.classList.remove(classes.activeSlide);
                });
            },


            /**
             * Removes HTML classes applied at building.
             *
             * @return {Void}
             */
            removeClasses: function removeClasses() {
                var classes = Glide.settings.classes;

                Components.Html.root.classList.remove(classes[Glide.settings.type]);

                Components.Html.slides.forEach(function (sibling) {
                    sibling.classList.remove(classes.activeSlide);
                });
            }
        };

        /**
         * Clear building classes:
         * - on destroying to bring HTML to its initial state
         * - on updating to remove classes before remounting component
         */
        Events.on(['destroy', 'update'], function () {
            Build.removeClasses();
        });

        /**
         * Remount component:
         * - on resizing of the window to calculate new dimentions
         * - on updating settings via API
         */
        Events.on(['resize', 'update'], function () {
            Build.mount();
        });

        /**
         * Swap active class of current slide:
         * - after each move to the new index
         */
        Events.on('move.after', function () {
            Build.activeClass();
        });

        return Build;
    }

    function Clones(Glide, Components, Events) {
        var Clones = {
            /**
             * Create pattern map and collect slides to be cloned.
             */
            mount: function mount() {
                this.items = [];

                if (Glide.isType('carousel')) {
                    this.items = this.collect();
                }
            },


            /**
             * Collect clones with pattern.
             *
             * @return {Void}
             */
            collect: function collect() {
                var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var slides = Components.Html.slides;
                var _Glide$settings = Glide.settings,
                    perView = _Glide$settings.perView,
                    classes = _Glide$settings.classes;


                var start = slides.slice(0, perView);
                var end = slides.slice(-perView);

                for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
                    for (var i = 0; i < start.length; i++) {
                        var clone = start[i].cloneNode(true);

                        clone.classList.add(classes.cloneSlide);

                        items.push(clone);
                    }

                    for (var _i = 0; _i < end.length; _i++) {
                        var _clone = end[_i].cloneNode(true);

                        _clone.classList.add(classes.cloneSlide);

                        items.unshift(_clone);
                    }
                }

                return items;
            },


            /**
             * Append cloned slides with generated pattern.
             *
             * @return {Void}
             */
            append: function append() {
                var items = this.items;
                var _Components$Html = Components.Html,
                    wrapper = _Components$Html.wrapper,
                    slides = _Components$Html.slides;


                var half = Math.floor(items.length / 2);
                var prepend = items.slice(0, half).reverse();
                var append = items.slice(half, items.length);

                for (var i = 0; i < append.length; i++) {
                    wrapper.appendChild(append[i]);
                }

                for (var _i2 = 0; _i2 < prepend.length; _i2++) {
                    wrapper.insertBefore(prepend[_i2], slides[0]);
                }

                for (var _i3 = 0; _i3 < items.length; _i3++) {
                    items[_i3].style.width = Components.Sizes.slideWidth + 'px';
                }
            },


            /**
             * Remove all cloned slides.
             *
             * @return {Void}
             */
            remove: function remove() {
                var items = this.items;


                for (var i = 0; i < items.length; i++) {
                    Components.Html.wrapper.removeChild(items[i]);
                }
            }
        };

        define(Clones, 'grow', {
            /**
             * Gets additional dimentions value caused by clones.
             *
             * @return {Number}
             */
            get: function get() {
                return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
            }
        });

        /**
         * Append additional slide's clones:
         * - while glide's type is `carousel`
         */
        Events.on('update', function () {
            Clones.remove();
            Clones.mount();
            Clones.append();
        });

        /**
         * Append additional slide's clones:
         * - while glide's type is `carousel`
         */
        Events.on('build.before', function () {
            if (Glide.isType('carousel')) {
                Clones.append();
            }
        });

        /**
         * Remove clones HTMLElements:
         * - on destroying, to bring HTML to its initial state
         */
        Events.on('destroy', function () {
            Clones.remove();
        });

        return Clones;
    }

    var EventsBinder = function () {
        /**
         * Construct a EventsBinder instance.
         */
        function EventsBinder() {
            var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            classCallCheck(this, EventsBinder);

            this.listeners = listeners;
        }

        /**
         * Adds events listeners to arrows HTML elements.
         *
         * @param  {String|Array} events
         * @param  {Element|Window|Document} el
         * @param  {Function} closure
         * @return {Void}
         */


        createClass(EventsBinder, [{
            key: 'on',
            value: function on(events, el, closure) {
                var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                if (isString(events)) {
                    events = [events];
                }

                for (var i = 0; i < events.length; i++) {
                    this.listeners[events[i]] = closure;

                    el.addEventListener(events[i], this.listeners[events[i]], capture);
                }
            }

            /**
             * Removes event listeners from arrows HTML elements.
             *
             * @param  {String|Array} events
             * @param  {Element|Window|Document} el
             * @return {Void}
             */

        }, {
            key: 'off',
            value: function off(events, el) {
                if (isString(events)) {
                    events = [events];
                }

                for (var i = 0; i < events.length; i++) {
                    el.removeEventListener(events[i], this.listeners[events[i]], false);
                }
            }

            /**
             * Destroy collected listeners.
             *
             * @returns {Void}
             */

        }, {
            key: 'destroy',
            value: function destroy() {
                delete this.listeners;
            }
        }]);
        return EventsBinder;
    }();

    function Resize(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var Resize = {
            /**
             * Initializes window bindings.
             */
            mount: function mount() {
                this.bind();
            },


            /**
             * Binds `rezsize` listener to the window.
             * It's a costly event, so we are debouncing it.
             *
             * @return {Void}
             */
            bind: function bind() {
                Binder.on('resize', window, throttle(function () {
                    Events.emit('resize');
                }, Glide.settings.throttle));
            },


            /**
             * Unbinds listeners from the window.
             *
             * @return {Void}
             */
            unbind: function unbind() {
                Binder.off('resize', window);
            }
        };

        /**
         * Remove bindings from window:
         * - on destroying, to remove added EventListener
         */
        Events.on('destroy', function () {
            Resize.unbind();
            Binder.destroy();
        });

        return Resize;
    }

    var VALID_DIRECTIONS = ['ltr', 'rtl'];
    var FLIPED_MOVEMENTS = {
        '>': '<',
        '<': '>',
        '=': '='
    };

    function Direction(Glide, Components, Events) {
        var Direction = {
            /**
             * Setups gap value based on settings.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.value = Glide.settings.direction;
            },


            /**
             * Resolves pattern based on direction value
             *
             * @param {String} pattern
             * @returns {String}
             */
            resolve: function resolve(pattern) {
                var token = pattern.slice(0, 1);

                if (this.is('rtl')) {
                    return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
                }

                return pattern;
            },


            /**
             * Checks value of direction mode.
             *
             * @param {String} direction
             * @returns {Boolean}
             */
            is: function is(direction) {
                return this.value === direction;
            },


            /**
             * Applies direction class to the root HTML element.
             *
             * @return {Void}
             */
            addClass: function addClass() {
                Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
            },


            /**
             * Removes direction class from the root HTML element.
             *
             * @return {Void}
             */
            removeClass: function removeClass() {
                Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
            }
        };

        define(Direction, 'value', {
            /**
             * Gets value of the direction.
             *
             * @returns {Number}
             */
            get: function get() {
                return Direction._v;
            },


            /**
             * Sets value of the direction.
             *
             * @param {String} value
             * @return {Void}
             */
            set: function set(value) {
                if (VALID_DIRECTIONS.indexOf(value) > -1) {
                    Direction._v = value;
                } else {
                    warn('Direction value must be `ltr` or `rtl`');
                }
            }
        });

        /**
         * Clear direction class:
         * - on destroy to bring HTML to its initial state
         * - on update to remove class before reappling bellow
         */
        Events.on(['destroy', 'update'], function () {
            Direction.removeClass();
        });

        /**
         * Remount component:
         * - on update to reflect changes in direction value
         */
        Events.on('update', function () {
            Direction.mount();
        });

        /**
         * Apply direction class:
         * - before building to apply class for the first time
         * - on updating to reapply direction class that may changed
         */
        Events.on(['build.before', 'update'], function () {
            Direction.addClass();
        });

        return Direction;
    }

    /**
     * Reflects value of glide movement.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function Rtl(Glide, Components) {
        return {
            /**
             * Negates the passed translate if glide is in RTL option.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
                if (Components.Direction.is('rtl')) {
                    return -translate;
                }

                return translate;
            }
        };
    }

    /**
     * Updates glide movement with a `gap` settings.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function Gap(Glide, Components) {
        return {
            /**
             * Modifies passed translate value with number in the `gap` settings.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
                return translate + Components.Gaps.value * Glide.index;
            }
        };
    }

    /**
     * Updates glide movement with width of additional clones width.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function Grow(Glide, Components) {
        return {
            /**
             * Adds to the passed translate width of the half of clones.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
                return translate + Components.Clones.grow / 2;
            }
        };
    }

    /**
     * Updates glide movement with a `peek` settings.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function Peeking(Glide, Components) {
        return {
            /**
             * Modifies passed translate value with a `peek` setting.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
                if (Glide.settings.focusAt >= 0) {
                    var peek = Components.Peek.value;

                    if (isObject(peek)) {
                        return translate - peek.before;
                    }

                    return translate - peek;
                }

                return translate;
            }
        };
    }

    /**
     * Updates glide movement with a `focusAt` settings.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function Focusing(Glide, Components) {
        return {
            /**
             * Modifies passed translate value with index in the `focusAt` setting.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
                var gap = Components.Gaps.value;
                var width = Components.Sizes.width;
                var focusAt = Glide.settings.focusAt;
                var slideWidth = Components.Sizes.slideWidth;

                if (focusAt === 'center') {
                    return translate - (width / 2 - slideWidth / 2);
                }

                return translate - slideWidth * focusAt - gap * focusAt;
            }
        };
    }

    /**
     * Applies diffrent transformers on translate value.
     *
     * @param  {Object} Glide
     * @param  {Object} Components
     * @return {Object}
     */
    function mutator(Glide, Components, Events) {
        /**
         * Merge instance transformers with collection of default transformers.
         * It's important that the Rtl component be last on the list,
         * so it reflects all previous transformations.
         *
         * @type {Array}
         */
        var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

        return {
            /**
             * Piplines translate value with registered transformers.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            mutate: function mutate(translate) {
                for (var i = 0; i < TRANSFORMERS.length; i++) {
                    var transformer = TRANSFORMERS[i];

                    if (isFunction(transformer) && isFunction(transformer().modify)) {
                        translate = transformer(Glide, Components, Events).modify(translate);
                    } else {
                        warn('Transformer should be a function that returns an object with `modify()` method');
                    }
                }

                return translate;
            }
        };
    }

    function Translate(Glide, Components, Events) {
        var Translate = {
            /**
             * Sets value of translate on HTML element.
             *
             * @param {Number} value
             * @return {Void}
             */
            set: function set(value) {
                var transform = mutator(Glide, Components).mutate(value);

                Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
            },


            /**
             * Removes value of translate from HTML element.
             *
             * @return {Void}
             */
            remove: function remove() {
                Components.Html.wrapper.style.transform = '';
            }
        };

        /**
         * Set new translate value:
         * - on move to reflect index change
         * - on updating via API to reflect possible changes in options
         */
        Events.on('move', function (context) {
            var gap = Components.Gaps.value;
            var length = Components.Sizes.length;
            var width = Components.Sizes.slideWidth;

            if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
                Components.Transition.after(function () {
                    Events.emit('translate.jump');

                    Translate.set(width * (length - 1));
                });

                return Translate.set(-width - gap * length);
            }

            if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
                Components.Transition.after(function () {
                    Events.emit('translate.jump');

                    Translate.set(0);
                });

                return Translate.set(width * length + gap * length);
            }

            return Translate.set(context.movement);
        });

        /**
         * Remove translate:
         * - on destroying to bring markup to its inital state
         */
        Events.on('destroy', function () {
            Translate.remove();
        });

        return Translate;
    }

    function Transition(Glide, Components, Events) {
        /**
         * Holds inactivity status of transition.
         * When true transition is not applied.
         *
         * @type {Boolean}
         */
        var disabled = false;

        var Transition = {
            /**
             * Composes string of the CSS transition.
             *
             * @param {String} property
             * @return {String}
             */
            compose: function compose(property) {
                var settings = Glide.settings;

                if (!disabled) {
                    return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
                }

                return property + ' 0ms ' + settings.animationTimingFunc;
            },


            /**
             * Sets value of transition on HTML element.
             *
             * @param {String=} property
             * @return {Void}
             */
            set: function set() {
                var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

                Components.Html.wrapper.style.transition = this.compose(property);
            },


            /**
             * Removes value of transition from HTML element.
             *
             * @return {Void}
             */
            remove: function remove() {
                Components.Html.wrapper.style.transition = '';
            },


            /**
             * Runs callback after animation.
             *
             * @param  {Function} callback
             * @return {Void}
             */
            after: function after(callback) {
                setTimeout(function () {
                    callback();
                }, this.duration);
            },


            /**
             * Enable transition.
             *
             * @return {Void}
             */
            enable: function enable() {
                disabled = false;

                this.set();
            },


            /**
             * Disable transition.
             *
             * @return {Void}
             */
            disable: function disable() {
                disabled = true;

                this.set();
            }
        };

        define(Transition, 'duration', {
            /**
             * Gets duration of the transition based
             * on currently running animation type.
             *
             * @return {Number}
             */
            get: function get() {
                var settings = Glide.settings;

                if (Glide.isType('slider') && Components.Run.offset) {
                    return settings.rewindDuration;
                }

                return settings.animationDuration;
            }
        });

        /**
         * Set transition `style` value:
         * - on each moving, because it may be cleared by offset move
         */
        Events.on('move', function () {
            Transition.set();
        });

        /**
         * Disable transition:
         * - before initial build to avoid transitioning from `0` to `startAt` index
         * - while resizing window and recalculating dimentions
         * - on jumping from offset transition at start and end edges in `carousel` type
         */
        Events.on(['build.before', 'resize', 'translate.jump'], function () {
            Transition.disable();
        });

        /**
         * Enable transition:
         * - on each running, because it may be disabled by offset move
         */
        Events.on('run', function () {
            Transition.enable();
        });

        /**
         * Remove transition:
         * - on destroying to bring markup to its inital state
         */
        Events.on('destroy', function () {
            Transition.remove();
        });

        return Transition;
    }

    var START_EVENTS = ['touchstart', 'mousedown'];
    var MOVE_EVENTS = ['touchmove', 'mousemove'];
    var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
    var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

    function Swipe(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var swipeSin = 0;
        var swipeStartX = 0;
        var swipeStartY = 0;
        var disabled = false;

        var Swipe = {
            /**
             * Initializes swipe bindings.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.bindSwipeStart();
            },


            /**
             * Handler for `swipestart` event. Calculates entry points of the user's tap.
             *
             * @param {Object} event
             * @return {Void}
             */
            start: function start(event) {
                if (!disabled && !Glide.disabled) {
                    this.disable();

                    var swipe = this.touches(event);

                    swipeSin = null;
                    swipeStartX = toInt(swipe.pageX);
                    swipeStartY = toInt(swipe.pageY);

                    this.bindSwipeMove();
                    this.bindSwipeEnd();

                    Events.emit('swipe.start');
                }
            },


            /**
             * Handler for `swipemove` event. Calculates user's tap angle and distance.
             *
             * @param {Object} event
             */
            move: function move(event) {
                if (!Glide.disabled) {
                    var _Glide$settings = Glide.settings,
                        touchAngle = _Glide$settings.touchAngle,
                        touchRatio = _Glide$settings.touchRatio,
                        classes = _Glide$settings.classes;


                    var swipe = this.touches(event);

                    var subExSx = toInt(swipe.pageX) - swipeStartX;
                    var subEySy = toInt(swipe.pageY) - swipeStartY;
                    var powEX = Math.abs(subExSx << 2);
                    var powEY = Math.abs(subEySy << 2);
                    var swipeHypotenuse = (powEX + powEY) * (powEX + powEY);
                    var swipeCathetus = powEY * powEY;

                    swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

                    Components.Move.make(subExSx * toFloat(touchRatio));

                    if (swipeSin * 180 / Math.PI < touchAngle) {
                        event.stopPropagation();

                        Components.Html.root.classList.add(classes.dragging);

                        Events.emit('swipe.move');
                    } else {
                        return false;
                    }
                }
            },


            /**
             * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
             *
             * @param {Object} event
             * @return {Void}
             */
            end: function end(event) {
                if (!Glide.disabled) {
                    var settings = Glide.settings;

                    var swipe = this.touches(event);
                    var threshold = this.threshold(event);

                    var swipeDistance = swipe.pageX - swipeStartX;
                    var swipeDeg = swipeSin * 180 / Math.PI;
                    var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

                    this.enable();

                    if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
                        // While swipe is positive and greater than threshold move backward.
                        if (settings.perTouch) {
                            steps = Math.min(steps, toInt(settings.perTouch));
                        }

                        if (Components.Direction.is('rtl')) {
                            steps = -steps;
                        }

                        Components.Run.make(Components.Direction.resolve('<' + steps));
                    } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
                        // While swipe is negative and lower than negative threshold move forward.
                        if (settings.perTouch) {
                            steps = Math.max(steps, -toInt(settings.perTouch));
                        }

                        if (Components.Direction.is('rtl')) {
                            steps = -steps;
                        }

                        Components.Run.make(Components.Direction.resolve('>' + steps));
                    } else {
                        // While swipe don't reach distance apply previous transform.
                        Components.Move.make();
                    }

                    Components.Html.root.classList.remove(settings.classes.dragging);

                    this.unbindSwipeMove();
                    this.unbindSwipeEnd();

                    Events.emit('swipe.end');
                }
            },


            /**
             * Binds swipe's starting event.
             *
             * @return {Void}
             */
            bindSwipeStart: function bindSwipeStart() {
                var _this = this;

                var settings = Glide.settings;

                if (settings.swipeThreshold) {
                    Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
                        return _this.start(event);
                    }, { passive: true });
                }

                if (settings.dragThreshold) {
                    Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
                        return _this.start(event);
                    });
                }
            },


            /**
             * Unbinds swipe's starting event.
             *
             * @return {Void}
             */
            unbindSwipeStart: function unbindSwipeStart() {
                Binder.off(START_EVENTS[0], Components.Html.wrapper);
                Binder.off(START_EVENTS[1], Components.Html.wrapper);
            },


            /**
             * Binds swipe's moving event.
             *
             * @return {Void}
             */
            bindSwipeMove: function bindSwipeMove() {
                var _this2 = this;

                Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
                    return _this2.move(event);
                }, Glide.settings.throttle), { passive: true });
            },


            /**
             * Unbinds swipe's moving event.
             *
             * @return {Void}
             */
            unbindSwipeMove: function unbindSwipeMove() {
                Binder.off(MOVE_EVENTS, Components.Html.wrapper);
            },


            /**
             * Binds swipe's ending event.
             *
             * @return {Void}
             */
            bindSwipeEnd: function bindSwipeEnd() {
                var _this3 = this;

                Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
                    return _this3.end(event);
                });
            },


            /**
             * Unbinds swipe's ending event.
             *
             * @return {Void}
             */
            unbindSwipeEnd: function unbindSwipeEnd() {
                Binder.off(END_EVENTS, Components.Html.wrapper);
            },


            /**
             * Normalizes event touches points accorting to different types.
             *
             * @param {Object} event
             */
            touches: function touches(event) {
                if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                    return event;
                }

                return event.touches[0] || event.changedTouches[0];
            },


            /**
             * Gets value of minimum swipe distance settings based on event type.
             *
             * @return {Number}
             */
            threshold: function threshold(event) {
                var settings = Glide.settings;

                if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                    return settings.dragThreshold;
                }

                return settings.swipeThreshold;
            },


            /**
             * Enables swipe event.
             *
             * @return {self}
             */
            enable: function enable() {
                disabled = false;

                Components.Transition.enable();

                return this;
            },


            /**
             * Disables swipe event.
             *
             * @return {self}
             */
            disable: function disable() {
                disabled = true;

                Components.Transition.disable();

                return this;
            }
        };

        /**
         * Add component class:
         * - after initial building
         */
        Events.on('build.after', function () {
            Components.Html.root.classList.add(Glide.settings.classes.swipeable);
        });

        /**
         * Remove swiping bindings:
         * - on destroying, to remove added EventListeners
         */
        Events.on('destroy', function () {
            Swipe.unbindSwipeStart();
            Swipe.unbindSwipeMove();
            Swipe.unbindSwipeEnd();
            Binder.destroy();
        });

        return Swipe;
    }

    function Images(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var Images = {
            /**
             * Binds listener to glide wrapper.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.bind();
            },


            /**
             * Binds `dragstart` event on wrapper to prevent dragging images.
             *
             * @return {Void}
             */
            bind: function bind() {
                Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
            },


            /**
             * Unbinds `dragstart` event on wrapper.
             *
             * @return {Void}
             */
            unbind: function unbind() {
                Binder.off('dragstart', Components.Html.wrapper);
            },


            /**
             * Event handler. Prevents dragging.
             *
             * @return {Void}
             */
            dragstart: function dragstart(event) {
                event.preventDefault();
            }
        };

        /**
         * Remove bindings from images:
         * - on destroying, to remove added EventListeners
         */
        Events.on('destroy', function () {
            Images.unbind();
            Binder.destroy();
        });

        return Images;
    }

    function Anchors(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        /**
         * Holds detaching status of anchors.
         * Prevents detaching of already detached anchors.
         *
         * @private
         * @type {Boolean}
         */
        var detached = false;

        /**
         * Holds preventing status of anchors.
         * If `true` redirection after click will be disabled.
         *
         * @private
         * @type {Boolean}
         */
        var prevented = false;

        var Anchors = {
            /**
             * Setups a initial state of anchors component.
             *
             * @returns {Void}
             */
            mount: function mount() {
                /**
                 * Holds collection of anchors elements.
                 *
                 * @private
                 * @type {HTMLCollection}
                 */
                this._a = Components.Html.wrapper.querySelectorAll('a');

                this.bind();
            },


            /**
             * Binds events to anchors inside a track.
             *
             * @return {Void}
             */
            bind: function bind() {
                Binder.on('click', Components.Html.wrapper, this.click);
            },


            /**
             * Unbinds events attached to anchors inside a track.
             *
             * @return {Void}
             */
            unbind: function unbind() {
                Binder.off('click', Components.Html.wrapper);
            },


            /**
             * Handler for click event. Prevents clicks when glide is in `prevent` status.
             *
             * @param  {Object} event
             * @return {Void}
             */
            click: function click(event) {
                event.stopPropagation();

                if (prevented) {
                    event.preventDefault();
                }
            },


            /**
             * Detaches anchors click event inside glide.
             *
             * @return {self}
             */
            detach: function detach() {
                prevented = true;

                if (!detached) {
                    for (var i = 0; i < this.items.length; i++) {
                        this.items[i].draggable = false;

                        this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

                        this.items[i].removeAttribute('href');
                    }

                    detached = true;
                }

                return this;
            },


            /**
             * Attaches anchors click events inside glide.
             *
             * @return {self}
             */
            attach: function attach() {
                prevented = false;

                if (detached) {
                    for (var i = 0; i < this.items.length; i++) {
                        this.items[i].draggable = true;

                        this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
                    }

                    detached = false;
                }

                return this;
            }
        };

        define(Anchors, 'items', {
            /**
             * Gets collection of the arrows HTML elements.
             *
             * @return {HTMLElement[]}
             */
            get: function get() {
                return Anchors._a;
            }
        });

        /**
         * Detach anchors inside slides:
         * - on swiping, so they won't redirect to its `href` attributes
         */
        Events.on('swipe.move', function () {
            Anchors.detach();
        });

        /**
         * Attach anchors inside slides:
         * - after swiping and transitions ends, so they can redirect after click again
         */
        Events.on('swipe.end', function () {
            Components.Transition.after(function () {
                Anchors.attach();
            });
        });

        /**
         * Unbind anchors inside slides:
         * - on destroying, to bring anchors to its initial state
         */
        Events.on('destroy', function () {
            Anchors.attach();
            Anchors.unbind();
            Binder.destroy();
        });

        return Anchors;
    }

    var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
    var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

    function Controls(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var Controls = {
            /**
             * Inits arrows. Binds events listeners
             * to the arrows HTML elements.
             *
             * @return {Void}
             */
            mount: function mount() {
                /**
                 * Collection of navigation HTML elements.
                 *
                 * @private
                 * @type {HTMLCollection}
                 */
                this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

                /**
                 * Collection of controls HTML elements.
                 *
                 * @private
                 * @type {HTMLCollection}
                 */
                this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

                this.addBindings();
            },


            /**
             * Sets active class to current slide.
             *
             * @return {Void}
             */
            setActive: function setActive() {
                for (var i = 0; i < this._n.length; i++) {
                    this.addClass(this._n[i].children);
                }
            },


            /**
             * Removes active class to current slide.
             *
             * @return {Void}
             */
            removeActive: function removeActive() {
                for (var i = 0; i < this._n.length; i++) {
                    this.removeClass(this._n[i].children);
                }
            },


            /**
             * Toggles active class on items inside navigation.
             *
             * @param  {HTMLElement} controls
             * @return {Void}
             */
            addClass: function addClass(controls) {
                var settings = Glide.settings;
                var item = controls[Glide.index];

                item.classList.add(settings.classes.activeNav);

                siblings(item).forEach(function (sibling) {
                    sibling.classList.remove(settings.classes.activeNav);
                });
            },


            /**
             * Removes active class from active control.
             *
             * @param  {HTMLElement} controls
             * @return {Void}
             */
            removeClass: function removeClass(controls) {
                controls[Glide.index].classList.remove(Glide.settings.classes.activeNav);
            },


            /**
             * Adds handles to the each group of controls.
             *
             * @return {Void}
             */
            addBindings: function addBindings() {
                for (var i = 0; i < this._c.length; i++) {
                    this.bind(this._c[i].children);
                }
            },


            /**
             * Removes handles from the each group of controls.
             *
             * @return {Void}
             */
            removeBindings: function removeBindings() {
                for (var i = 0; i < this._c.length; i++) {
                    this.unbind(this._c[i].children);
                }
            },


            /**
             * Binds events to arrows HTML elements.
             *
             * @param {HTMLCollection} elements
             * @return {Void}
             */
            bind: function bind(elements) {
                for (var i = 0; i < elements.length; i++) {
                    Binder.on(['click', 'touchstart'], elements[i], this.click);
                }
            },


            /**
             * Unbinds events binded to the arrows HTML elements.
             *
             * @param {HTMLCollection} elements
             * @return {Void}
             */
            unbind: function unbind(elements) {
                for (var i = 0; i < elements.length; i++) {
                    Binder.off(['click', 'touchstart'], elements[i]);
                }
            },


            /**
             * Handles `click` event on the arrows HTML elements.
             * Moves slider in driection precised in
             * `data-glide-dir` attribute.
             *
             * @param {Object} event
             * @return {Void}
             */
            click: function click(event) {
                event.preventDefault();

                Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
            }
        };

        define(Controls, 'items', {
            /**
             * Gets collection of the controls HTML elements.
             *
             * @return {HTMLElement[]}
             */
            get: function get() {
                return Controls._c;
            }
        });

        /**
         * Swap active class of current navigation item:
         * - after mounting to set it to initial index
         * - after each move to the new index
         */
        Events.on(['mount.after', 'move.after'], function () {
            Controls.setActive();
        });

        /**
         * Remove bindings and HTML Classes:
         * - on destroying, to bring markup to its initial state
         */
        Events.on('destroy', function () {
            Controls.removeBindings();
            Controls.removeActive();
            Binder.destroy();
        });

        return Controls;
    }

    function Keyboard(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var Keyboard = {
            /**
             * Binds keyboard events on component mount.
             *
             * @return {Void}
             */
            mount: function mount() {
                if (Glide.settings.keyboard) {
                    this.bind();
                }
            },


            /**
             * Adds keyboard press events.
             *
             * @return {Void}
             */
            bind: function bind() {
                Binder.on('keyup', document, this.press);
            },


            /**
             * Removes keyboard press events.
             *
             * @return {Void}
             */
            unbind: function unbind() {
                Binder.off('keyup', document);
            },


            /**
             * Handles keyboard's arrows press and moving glide foward and backward.
             *
             * @param  {Object} event
             * @return {Void}
             */
            press: function press(event) {
                if (event.keyCode === 39) {
                    Components.Run.make(Components.Direction.resolve('>'));
                }

                if (event.keyCode === 37) {
                    Components.Run.make(Components.Direction.resolve('<'));
                }
            }
        };

        /**
         * Remove bindings from keyboard:
         * - on destroying to remove added events
         * - on updating to remove events before remounting
         */
        Events.on(['destroy', 'update'], function () {
            Keyboard.unbind();
        });

        /**
         * Remount component
         * - on updating to reflect potential changes in settings
         */
        Events.on('update', function () {
            Keyboard.mount();
        });

        /**
         * Destroy binder:
         * - on destroying to remove listeners
         */
        Events.on('destroy', function () {
            Binder.destroy();
        });

        return Keyboard;
    }

    function Autoplay(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        var Autoplay = {
            /**
             * Initializes autoplaying and events.
             *
             * @return {Void}
             */
            mount: function mount() {
                this.start();

                if (Glide.settings.hoverpause) {
                    this.bind();
                }
            },


            /**
             * Starts autoplaying in configured interval.
             *
             * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
             * @return {Void}
             */
            start: function start() {
                var _this = this;

                if (Glide.settings.autoplay) {
                    if (isUndefined(this._i)) {
                        this._i = setInterval(function () {
                            _this.stop();

                            Components.Run.make('>');

                            _this.start();
                        }, this.time);
                    }
                }
            },


            /**
             * Stops autorunning of the glide.
             *
             * @return {Void}
             */
            stop: function stop() {
                this._i = clearInterval(this._i);
            },


            /**
             * Stops autoplaying while mouse is over glide's area.
             *
             * @return {Void}
             */
            bind: function bind() {
                var _this2 = this;

                Binder.on('mouseover', Components.Html.root, function () {
                    _this2.stop();
                });

                Binder.on('mouseout', Components.Html.root, function () {
                    _this2.start();
                });
            },


            /**
             * Unbind mouseover events.
             *
             * @returns {Void}
             */
            unbind: function unbind() {
                Binder.off(['mouseover', 'mouseout'], Components.Html.root);
            }
        };

        define(Autoplay, 'time', {
            /**
             * Gets time period value for the autoplay interval. Prioritizes
             * times in `data-glide-autoplay` attrubutes over options.
             *
             * @return {Number}
             */
            get: function get() {
                var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

                if (autoplay) {
                    return toInt(autoplay);
                }

                return toInt(Glide.settings.autoplay);
            }
        });

        /**
         * Stop autoplaying and unbind events:
         * - on destroying, to clear defined interval
         * - on updating via API to reset interval that may changed
         */
        Events.on(['destroy', 'update'], function () {
            Autoplay.unbind();
        });

        /**
         * Stop autoplaying:
         * - before each run, to restart autoplaying
         * - on pausing via API
         * - on destroying, to clear defined interval
         * - while starting a swipe
         * - on updating via API to reset interval that may changed
         */
        Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
            Autoplay.stop();
        });

        /**
         * Start autoplaying:
         * - after each run, to restart autoplaying
         * - on playing via API
         * - while ending a swipe
         */
        Events.on(['run.after', 'play', 'swipe.end'], function () {
            Autoplay.start();
        });

        /**
         * Remount autoplaying:
         * - on updating via API to reset interval that may changed
         */
        Events.on('update', function () {
            Autoplay.mount();
        });

        /**
         * Destroy a binder:
         * - on destroying glide instance to clearup listeners
         */
        Events.on('destroy', function () {
            Binder.destroy();
        });

        return Autoplay;
    }

    /**
     * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
     *
     * @param {Object} points
     * @returns {Object}
     */
    function sortBreakpoints(points) {
        if (isObject(points)) {
            return sortKeys(points);
        } else {
            warn('Breakpoints option must be an object');
        }

        return {};
    }

    function Breakpoints(Glide, Components, Events) {
        /**
         * Instance of the binder for DOM Events.
         *
         * @type {EventsBinder}
         */
        var Binder = new EventsBinder();

        /**
         * Holds reference to settings.
         *
         * @type {Object}
         */
        var settings = Glide.settings;

        /**
         * Holds reference to breakpoints object in settings
         *
         * @type {Object}
         */
        var points = settings.breakpoints;

        /**
         * Sort breakpoints from smaller to larger. It is required in order
         * to proper matching currently active breakpoint settings.
         */
        points = sortBreakpoints(points);

        /**
         * Cache initial settings before overwritting.
         *
         * @type {Object}
         */
        var defaults = _extends({}, settings);

        var Breakpoints = {
            /**
             * Matches settings for currectly matching media breakpoint.
             *
             * @param {Object} points
             * @returns {Object}
             */
            match: function match(points) {
                if (typeof window.matchMedia !== 'undefined') {
                    for (var point in points) {
                        if (points.hasOwnProperty(point)) {
                            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                                return points[point];
                            }
                        }
                    }
                }

                return defaults;
            }
        };

        /**
         * Overwrite instance settings with currently matching breakpoint settings.
         * This happens right after component initialization.
         */
        _extends(settings, Breakpoints.match(points));

        /**
         * Update glide with settings of matched brekpoint:
         * - window resize to update slider
         */
        Binder.on('resize', window, throttle(function () {
            _extends(settings, Breakpoints.match(points));
        }, Glide.settings.throttle));

        /**
         * Resort and update default settings:
         * - on reinit via API, so breakpoint matching will be performed with options
         */
        Events.on('update', function () {
            points = sortBreakpoints(points);

            defaults = _extends({}, settings);
        });

        /**
         * Unbind resize listener:
         * - on destroying, to bring markup to its initial state
         */
        Events.on('destroy', function () {
            Binder.off('resize', window);
        });

        return Breakpoints;
    }

    var COMPONENTS = {
        // Required
        Html: Html,
        Translate: Translate,
        Transition: Transition,
        Direction: Direction,
        Peek: Peek,
        Sizes: Sizes,
        Gaps: Gaps,
        Move: Move,
        Clones: Clones,
        Resize: Resize,
        Build: Build,
        Run: Run,

        // Optional
        Swipe: Swipe,
        Images: Images,
        Anchors: Anchors,
        Controls: Controls,
        Keyboard: Keyboard,
        Autoplay: Autoplay,
        Breakpoints: Breakpoints
    };

    var Glide$1 = function (_Core) {
        inherits(Glide$$1, _Core);

        function Glide$$1() {
            classCallCheck(this, Glide$$1);
            return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
        }

        createClass(Glide$$1, [{
            key: 'mount',
            value: function mount() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
            }
        }]);
        return Glide$$1;
    }(Glide);

    return Glide$1;

})));


/***/ }),
/* 31 */
/***/ (function(module) {

/*!
 * AOS.js v3.0.0
 * https://michalsnik.github.io/aos/
 */

!(function (e, t) {
     true
        ? (module.exports = t())
        : 0;
})(this, function () {
    return (function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = { exports: {}, id: o, loaded: !1 });
            return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
    })([
        function (e, t, n) {
            'use strict';
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    },
                r = n(1),
                a = (o(r), n(6)),
                u = o(a),
                c = n(7),
                f = o(c),
                s = n(8),
                d = o(s),
                l = n(9),
                p = o(l),
                m = n(10),
                b = o(m),
                v = n(11),
                y = o(v),
                g = n(14),
                h = o(g),
                w = [],
                k = !1,
                x = document.all && !window.atob,
                j = {
                    offset: 120,
                    delay: 0,
                    easing: 'ease',
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: 'DOMContentLoaded',
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1,
                },
                O = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if ((e && (k = !0), k)) return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
                },
                _ = function () {
                    (w = (0, h.default)()), O();
                },
                S = function () {
                    w.forEach(function (e, t) {
                        e.node.removeAttribute('data-aos'),
                            e.node.removeAttribute('data-aos-easing'),
                            e.node.removeAttribute('data-aos-duration'),
                            e.node.removeAttribute('data-aos-delay');
                    });
                },
                z = function (e) {
                    return (
                        e === !0 ||
                        ('mobile' === e && p.default.mobile()) ||
                        ('phone' === e && p.default.phone()) ||
                        ('tablet' === e && p.default.tablet()) ||
                        ('function' == typeof e && e() === !0)
                    );
                },
                A = function (e) {
                    return (
                        (j = i(j, e)),
                        (w = (0, h.default)()),
                        z(j.disable) || x
                            ? S()
                            : (document.querySelector('body').setAttribute('data-aos-easing', j.easing),
                              document.querySelector('body').setAttribute('data-aos-duration', j.duration),
                              document.querySelector('body').setAttribute('data-aos-delay', j.delay),
                              'DOMContentLoaded' === j.startEvent && ['complete', 'interactive'].indexOf(document.readyState) > -1
                                  ? O(!0)
                                  : 'load' === j.startEvent
                                  ? window.addEventListener(j.startEvent, function () {
                                        O(!0);
                                    })
                                  : document.addEventListener(j.startEvent, function () {
                                        O(!0);
                                    }),
                              window.addEventListener('resize', (0, f.default)(O, j.debounceDelay, !0)),
                              window.addEventListener('orientationchange', (0, f.default)(O, j.debounceDelay, !0)),
                              window.addEventListener(
                                  'scroll',
                                  (0, u.default)(function () {
                                      (0, b.default)(w, j.once);
                                  }, j.throttleDelay)
                              ),
                              j.disableMutationObserver || (0, d.default)('[data-aos]', _),
                              w)
                    );
                };
            e.exports = { init: A, refresh: O, refreshHard: _ };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
            (function (t) {
                'use strict';
                function n(e, t, n) {
                    function o(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (k = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w,
                            o = e - k,
                            i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w,
                            o = e - k;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function s() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
                    }
                    function d(e) {
                        return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(),
                            n = c(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(s, t)), o(w);
                        }
                        return void 0 === h && (h = setTimeout(s, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        k = 0,
                        _ = !1,
                        S = !1,
                        z = !0;
                    if ('function' != typeof e) throw new TypeError(f);
                    return (
                        (t = u(t) || 0),
                        i(n) &&
                            ((_ = !!n.leading),
                            (S = 'maxWait' in n),
                            (y = S ? x(u(n.maxWait) || 0, t) : y),
                            (z = 'trailing' in n ? !!n.trailing : z)),
                        (m.cancel = l),
                        (m.flush = p),
                        m
                    );
                }
                function o(e, t, o) {
                    var r = !0,
                        a = !0;
                    if ('function' != typeof e) throw new TypeError(f);
                    return (
                        i(o) && ((r = 'leading' in o ? !!o.leading : r), (a = 'trailing' in o ? !!o.trailing : a)),
                        n(e, t, { leading: r, maxWait: t, trailing: a })
                    );
                }
                function i(e) {
                    var t = 'undefined' == typeof e ? 'undefined' : c(e);
                    return !!e && ('object' == t || 'function' == t);
                }
                function r(e) {
                    return !!e && 'object' == ('undefined' == typeof e ? 'undefined' : c(e));
                }
                function a(e) {
                    return 'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) || (r(e) && k.call(e) == d);
                }
                function u(e) {
                    if ('number' == typeof e) return e;
                    if (a(e)) return s;
                    if (i(e)) {
                        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + '' : t;
                    }
                    if ('string' != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, '');
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
                }
                var c =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              },
                    f = 'Expected a function',
                    s = NaN,
                    d = '[object Symbol]',
                    l = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    m = /^0b[01]+$/i,
                    b = /^0o[0-7]+$/i,
                    v = parseInt,
                    y = 'object' == ('undefined' == typeof t ? 'undefined' : c(t)) && t && t.Object === Object && t,
                    g = 'object' == ('undefined' == typeof self ? 'undefined' : c(self)) && self && self.Object === Object && self,
                    h = y || g || Function('return this')(),
                    w = Object.prototype,
                    k = w.toString,
                    x = Math.max,
                    j = Math.min,
                    O = function () {
                        return h.Date.now();
                    };
                e.exports = o;
            }.call(
                t,
                (function () {
                    return this;
                })()
            ));
        },
        function (e, t) {
            (function (t) {
                'use strict';
                function n(e, t, n) {
                    function i(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (O = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w,
                            o = e - O,
                            i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function f(e) {
                        var n = e - w,
                            o = e - O;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function s() {
                        var e = j();
                        return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
                    }
                    function d(e) {
                        return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(),
                            n = f(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(s, t)), i(w);
                        }
                        return void 0 === h && (h = setTimeout(s, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        O = 0,
                        _ = !1,
                        S = !1,
                        z = !0;
                    if ('function' != typeof e) throw new TypeError(c);
                    return (
                        (t = a(t) || 0),
                        o(n) &&
                            ((_ = !!n.leading),
                            (S = 'maxWait' in n),
                            (y = S ? k(a(n.maxWait) || 0, t) : y),
                            (z = 'trailing' in n ? !!n.trailing : z)),
                        (m.cancel = l),
                        (m.flush = p),
                        m
                    );
                }
                function o(e) {
                    var t = 'undefined' == typeof e ? 'undefined' : u(e);
                    return !!e && ('object' == t || 'function' == t);
                }
                function i(e) {
                    return !!e && 'object' == ('undefined' == typeof e ? 'undefined' : u(e));
                }
                function r(e) {
                    return 'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) || (i(e) && w.call(e) == s);
                }
                function a(e) {
                    if ('number' == typeof e) return e;
                    if (r(e)) return f;
                    if (o(e)) {
                        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + '' : t;
                    }
                    if ('string' != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, '');
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
                }
                var u =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              },
                    c = 'Expected a function',
                    f = NaN,
                    s = '[object Symbol]',
                    d = /^\s+|\s+$/g,
                    l = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    m = /^0o[0-7]+$/i,
                    b = parseInt,
                    v = 'object' == ('undefined' == typeof t ? 'undefined' : u(t)) && t && t.Object === Object && t,
                    y = 'object' == ('undefined' == typeof self ? 'undefined' : u(self)) && self && self.Object === Object && self,
                    g = v || y || Function('return this')(),
                    h = Object.prototype,
                    w = h.toString,
                    k = Math.max,
                    x = Math.min,
                    j = function () {
                        return g.Date.now();
                    };
                e.exports = n;
            }.call(
                t,
                (function () {
                    return this;
                })()
            ));
        },
        function (e, t) {
            'use strict';
            function n(e, t) {
                var n = new r(o);
                (a = t), n.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
            }
            function o(e) {
                e &&
                    e.forEach(function (e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            n = Array.prototype.slice.call(e.removedNodes),
                            o = t.concat(n).filter(function (e) {
                                return e.hasAttribute && e.hasAttribute('data-aos');
                            }).length;
                        o && a();
                    });
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = window.document,
                r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                a = function () {};
            t.default = n;
        },
        function (e, t) {
            'use strict';
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || '';
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                'value' in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })(),
                r =
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                a =
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                u =
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                c =
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                f = (function () {
                    function e() {
                        n(this, e);
                    }
                    return (
                        i(e, [
                            {
                                key: 'phone',
                                value: function () {
                                    var e = o();
                                    return !(!r.test(e) && !a.test(e.substr(0, 4)));
                                },
                            },
                            {
                                key: 'mobile',
                                value: function () {
                                    var e = o();
                                    return !(!u.test(e) && !c.test(e.substr(0, 4)));
                                },
                            },
                            {
                                key: 'tablet',
                                value: function () {
                                    return this.mobile() && !this.phone();
                                },
                            },
                        ]),
                        e
                    );
                })();
            t.default = new f();
        },
        function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = function (e, t, n) {
                    var o = e.node.getAttribute('data-aos-once');
                    t > e.position
                        ? e.node.classList.add('aos-animate')
                        : 'undefined' != typeof o && ('false' === o || (!n && 'true' !== o)) && e.node.classList.remove('aos-animate');
                },
                o = function (e, t) {
                    var o = window.pageYOffset,
                        i = window.innerHeight;
                    e.forEach(function (e, r) {
                        n(e, i + o, t);
                    });
                };
            t.default = o;
        },
        function (e, t, n) {
            'use strict';
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = n(12),
                r = o(i),
                a = function (e, t) {
                    return (
                        e.forEach(function (e, n) {
                            e.node.classList.add('aos-init'), (e.position = (0, r.default)(e.node, t.offset));
                        }),
                        e
                    );
                };
            t.default = a;
        },
        function (e, t, n) {
            'use strict';
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = n(13),
                r = o(i),
                a = function (e, t) {
                    var n = 0,
                        o = 0,
                        i = window.innerHeight,
                        a = {
                            offset: e.getAttribute('data-aos-offset'),
                            anchor: e.getAttribute('data-aos-anchor'),
                            anchorPlacement: e.getAttribute('data-aos-anchor-placement'),
                        };
                    switch (
                        (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
                        a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
                        (n = (0, r.default)(e).top),
                        a.anchorPlacement)
                    ) {
                        case 'top-bottom':
                            break;
                        case 'center-bottom':
                            n += e.offsetHeight / 2;
                            break;
                        case 'bottom-bottom':
                            n += e.offsetHeight;
                            break;
                        case 'top-center':
                            n += i / 2;
                            break;
                        case 'bottom-center':
                            n += i / 2 + e.offsetHeight;
                            break;
                        case 'center-center':
                            n += i / 2 + e.offsetHeight / 2;
                            break;
                        case 'top-top':
                            n += i;
                            break;
                        case 'bottom-top':
                            n += e.offsetHeight + i;
                            break;
                        case 'center-top':
                            n += e.offsetHeight / 2 + i;
                    }
                    return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                };
            t.default = a;
        },
        function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = function (e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                    (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
                        (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
                        (e = e.offsetParent);
                return { top: n, left: t };
            };
            t.default = n;
        },
        function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = function (e) {
                return (
                    (e = e || document.querySelectorAll('[data-aos]')),
                    Array.prototype.map.call(e, function (e) {
                        return { node: e };
                    })
                );
            };
            t.default = n;
        },
    ]);
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _custom_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_2_aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _libs_2_aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_2_aos__WEBPACK_IMPORTED_MODULE_3__);
/*!
 * Script Js
 *
 *
 * Copyright 2022
 */






window.addEventListener('load', (e) => {
    _custom_common__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    _custom_header__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    _libs_2_aos__WEBPACK_IMPORTED_MODULE_3___default().init();
});

if (document.querySelector('.glide')) {
    new (_libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2___default())('.glide', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 2,
        rewind: true,
    }).mount();
}

if (document.querySelector('.director')) {
    new (_libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2___default())('.director', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 1,
        rewind: true,
    }).mount();
}

if (document.querySelector('.testimonial')) {
    new (_libs_1_glide_carousel__WEBPACK_IMPORTED_MODULE_2___default())('.testimonial', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 1,
        rewind: true,
    }).mount();
}


}();
/******/ })()
;
//# sourceMappingURL=script.js.map