!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function h(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),s?h(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=g();if(S(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function w(e){return f=void 0,p&&i?h(e):(i=r=void 0,a)}function O(){var e=g(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),h(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const h=document.querySelector("input"),j=document.querySelector("textarea"),S=document.querySelector("form"),T="feedback-form-state";let w={};S.addEventListener("input",(function(e){localStorage.setItem(T,JSON.stringify({email:h.value,message:j.value}))})),S.addEventListener("submit",e(t)((function(e){e.preventDefault(),console.log({email:h.value,message:j.value}),localStorage.removeItem(T),e.currentTarget.reset()}),500));try{w=JSON.parse(localStorage.getItem(T)),null!==w&&(h.value=w.email,j.value=w.message)}catch(e){console.log(e)}}();
//# sourceMappingURL=03-feedback.2047df36.js.map
