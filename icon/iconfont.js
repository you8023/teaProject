;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872 136.992q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0zM872 450.016q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0zM872 763.008q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1008.576 784.704c7.936 15.04 11.712 29.248 11.328 42.496s-4.352 24.704-11.904 34.432c-7.552 9.664-18.176 17.408-31.872 23.104-13.696 5.76-29.568 8.576-47.552 8.576L511.232 893.312 233.344 893.312l-145.92 0c-19.456 0-35.52-3.584-48.128-10.752s-21.824-16.32-27.584-27.456-8.256-23.68-7.552-37.632c0.704-14.016 4.672-28.16 11.904-42.496 10.112-19.392 21.056-40.128 32.96-62.4 11.904-22.208 24-44.8 36.224-67.776L121.984 576c12.224-22.976 24.128-44.8 35.648-65.6 26.688-49.472 53.76-98.944 81.152-148.48L376.128 629.76 646.4 130.688c48.32 84.608 94.784 167.424 139.456 248.512 19.456 34.432 39.296 70.08 59.456 107.008s40.192 73.152 60.032 108.672c19.84 35.52 38.528 69.568 56.192 102.208C979.2 729.664 994.88 758.848 1008.576 784.704L1008.576 784.704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-basket2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M158.4896 993.41824l718.18752 0 93.1072-418.93888L65.38752 574.47936 158.4896 993.41824zM756.98176 724.10112c0-16.5376 13.37856-29.9264 29.9264-29.9264 16.5376 0 29.9264 13.38368 29.9264 29.9264l0 179.54304c0 16.54272-13.38368 29.9264-29.9264 29.9264-16.54272 0-29.9264-13.37856-29.9264-29.9264L756.98176 724.10112zM577.4336 724.10112c0-16.5376 13.37856-29.9264 29.9264-29.9264 16.5376 0 29.92128 13.38368 29.92128 29.9264l0 179.54304c0 16.54272-13.37856 29.9264-29.92128 29.9264-16.54272 0-29.9264-13.37856-29.9264-29.9264L577.4336 724.10112zM397.89056 724.10112c0-16.5376 13.37856-29.9264 29.92128-29.9264 16.54272 0 29.9264 13.38368 29.9264 29.9264l0 179.54304c0 16.54272-13.37856 29.9264-29.9264 29.9264-16.5376 0-29.92128-13.37856-29.92128-29.9264L397.89056 724.10112zM218.3424 724.10112c0-16.5376 13.38368-29.9264 29.9264-29.9264s29.9264 13.38368 29.9264 29.9264l0 179.54304c0 16.54272-13.38368 29.9264-29.9264 29.9264s-29.9264-13.37856-29.9264-29.9264L218.3424 724.10112zM917.23776 454.77888l1.69472-1.8688-318.70976-292.16768c4.56704-10.81344 7.13728-22.61504 7.13728-35.12832 0-49.5616-40.21248-89.77408-89.77408-89.77408-49.59744 0-89.77408 40.21248-89.77408 89.77408 0 12.51328 2.57024 24.31488 7.16288 35.12832L116.20864 452.91008l1.69472 1.8688L38.79424 454.77888l13.29664 59.84768 930.95424 0 13.33248-59.84768L917.23776 454.77888zM202.79808 454.77888l272.9472-250.20416c12.52864 6.72256 26.63936 10.80832 41.84064 10.80832 15.19616 0 29.28128-4.1472 41.84576-10.80832l272.94208 250.20416L202.79808 454.77888z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M867.171674 804.494681c2.859118-3.39226 3.876284-15.35471 3.876284-19.829628 0-156.936285-104.881722-289.893436-249.820766-335.538009 42.411949-32.95046 69.64315-83.793428 69.64315-140.886751 0-99.342566-82.338287-179.874717-183.90859-179.874717-101.570303 0-183.90859 80.533175-183.90859 179.874717 0 58.07058 28.16241 109.678982 71.825862 142.568043C252.671185 497.984798 150.330332 629.632117 150.330332 784.665053c0 4.474918 1.679245 16.411785 4.876054 19.488867C284.92682 928.997276 751.148194 942.160063 867.171674 804.494681z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M410.443186 534.06609l504.431794 489.93391 77.750119-77.298851L565.566855 531.03717 994.214258 74.230023l-83.479484-74.230023L410.443186 534.06609zM613.623328 74.230023l-83.478461-74.230023L29.851232 534.06609l504.431794 489.93391 77.750119-77.298851L184.974902 531.03717 613.623328 74.230023z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaye-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M706.74 890.684c1.679 7.346 3.259 14.18 4.785 20.411-1.34-7.116-2.99-13.851-4.785-20.411v0zM706.74 890.684z"  ></path>' +
    '' +
    '<path d="M982.915 276.055c-40.239-97.34-64.31-120.535-64.31-120.535s22.145 56.315-13.495 97.605c-35.641 41.299-190.745 55.865-235.095 170.065-13.87 35.719-20.57 64.86-23.539 87.821-25.085-132.49-86.56-276.495-262.56-303.114-198.575-30.030-216.23 45.664-356.931 38.419 0 0 117.75 31.066 167.639 163.606 49.894 132.544 151.68 343.785 361.235 362.423 84.11 7.58 131.274 46.575 150.88 118.34-31.2-136.989-96.495-460.315-496.146-619.515 65.61 8.25 372.77 35.1 452.060 375.165-2.919 40.079 3.396 98.364 34.815 185.679 0 0-42.299-142.94-16.809-183.494 25.49-40.55 89.949-44.589 159.31-71.871 69.354-27.279 200.145-162.244 142.944-300.594v0zM803.885 455.924c-41.070 36.396-115.444 99.46-128.95 134.46-4.884 12.645-9.9 29.364-11.945 52.114-2.125-25.317-4.716-53.755-8.79-83.766 9.75-23.479 32.499-69.39 73.364-105.76 42.34-37.694 131.446-95.075 191.86-150.96-8.423 34.644-74.46 117.51-115.54 153.91v0zM803.885 455.924z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.881 249.91c-122.036-122.092-319.94-122.092-442.033 0s-122.093 319.997 0 442.033c56.558 56.574 134.7 91.567 221.017 91.567 86.316 0 164.458-34.994 221.016-91.567 56.575-56.558 91.568-134.701 91.568-221.017 0-86.316-34.994-164.458-91.567-221.016zM181.8 759.992c-74.010-73.991-119.787-176.22-119.787-289.14 0-225.802 183.050-408.852 408.852-408.852 225.803 0 408.852 183.050 408.852 408.852 0 112.92-45.778 215.149-119.787 289.139-73.985 73.966-176.183 119.713-289.065 119.713-112.883 0-215.080-45.747-289.065-119.713zM945.517 945.579c-10.099 10.115-24.058 16.372-39.48 16.372s-29.381-6.257-39.479-16.371l-78.903-78.959c-10.097-10.097-16.342-24.045-16.342-39.452 0-30.814 24.98-55.792 55.792-55.792 15.406 0 29.355 6.245 39.452 16.341l78.958 78.903c10.142 10.087 16.418 24.050 16.418 39.479s-6.277 29.393-16.416 39.477z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)