!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n){n.exports={domain:"andrewlamansky.com",subdirectory:"/krmonin",ssl:!0}},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,"/** @format */\n/** @format */\n/* stylelint-disable */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\nimg {\n  border-style: none; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Correct the padding in Firefox.\r\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\r\n   ========================================================================== */\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\ndetails {\n  display: block; }\n\n/*\r\n * Add the correct display in all browsers.\r\n */\nsummary {\n  display: list-item; }\n\n/* Misc\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 10+.\r\n */\ntemplate {\n  display: none; }\n\n/**\r\n * Add the correct display in IE 10.\r\n */\n[hidden] {\n  display: none; }\n\n/** @format */\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n/** @format */\n/** @format */\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/** @format */\n:root {\n  font-size: calc(10px + (16 - 14) * ((100vw - 400px) / (800 - 400))); }\n\nbody {\n  background-image: linear-gradient(to right bottom, #f3eeeb, #f6e9e1, #fae5d8, #fce0ce, #ffdbc5);\n  font-family: 'Merriweather Sans', sans-serif;\n  line-height: 1.5;\n  overflow-x: hidden;\n  margin: 0;\n  padding: 0; }\n\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 0.1rem;\n  font-weight: 300; }\n\nh1 {\n  font-family: 'Lato', sans-serif;\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  opacity: 0.7; }\n\np {\n  font-family: 'Merriweather', serif;\n  opacity: 0.9; }\n\n.content {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  width: 75%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 50%));\n  grid-template-rows: minmax(min-content, max-content);\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n  background-color: #f3eeeb;\n  opacity: 1; }\n  @media screen and (max-width: 768px) {\n    .content {\n      width: 100%;\n      margin-top: 8rem; } }\n  @media screen and (max-width: 576px) {\n    .content {\n      grid-template-columns: repeat(auto-fit, minmax(200px, 100%)); } }\n\n.button {\n  position: relative;\n  padding: 1rem;\n  border-radius: 10px;\n  border: 0;\n  outline: 0;\n  transition: all 0.3s ease;\n  z-index: 1; }\n  .button:hover {\n    cursor: pointer;\n    letter-spacing: 0.1rem;\n    background-color: #ff6c64; }\n  .button--primary {\n    background-color: rgba(255, 108, 100, 0.7);\n    color: white; }\n  .button--secondary {\n    border: 2px solid rgba(255, 108, 100, 0.7);\n    color: #ff6c64;\n    background-color: rgba(255, 255, 255, 0); }\n    .button--secondary:hover {\n      color: white; }\n  .button--secondary--mc {\n    border: 2px solid rgba(255, 108, 100, 0.7) !important;\n    color: #ff6c64 !important;\n    background-color: rgba(255, 255, 255, 0) !important; }\n    .button--secondary--mc:hover {\n      color: white !important;\n      background-color: #ff6c64 !important; }\n\n.test {\n  opacity: 0.5; }\n\n/** @format */\n.loader--spin {\n  width: 100%;\n  min-height: 100vh;\n  position: relative;\n  grid-column: 1 / -1; }\n  .loader--spin::after {\n    content: '';\n    position: absolute;\n    border: 5px dashed #ff6c64;\n    top: calc(50% - 25px);\n    left: calc(50% - 25px);\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    z-index: 5;\n    animation: loader 1s infinite forwards; }\n\n@keyframes loader {\n  0% {\n    transform: rotateZ(0deg); }\n  100% {\n    transform: rotateZ(260deg); } }\n\n.loader--blank {\n  width: 100%;\n  min-height: 100vh;\n  background-color: white; }\n\n/** @format */\n.header {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 25%;\n  border-right: 0.3rem solid rgba(255, 108, 100, 0.5);\n  background-image: radial-gradient(circle, white, #fffdfe, #fffbfb, #fefaf7, #fbf9f4);\n  padding: 0 5rem 0 5rem;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); }\n  @media screen and (max-width: 992px) {\n    .header {\n      padding: 0 2rem 0 2rem; } }\n  @media screen and (max-width: 768px) {\n    .header {\n      width: 100%;\n      height: 8rem;\n      flex-direction: column;\n      align-items: center; } }\n  .header__profile {\n    position: relative;\n    width: 100%;\n    min-height: 8rem;\n    background-color: rgba(255, 255, 255, 0); }\n    @media screen and (max-width: 768px) {\n      .header__profile {\n        z-index: 10;\n        background-color: white; } }\n  .header__social {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    justify-items: center;\n    padding: 1rem 0 0 0;\n    transition: all 0.3s ease;\n    border-top: 1px solid rgba(1, 1, 1, 0.2); }\n    @media screen and (max-width: 768px) {\n      .header__social {\n        width: 100%;\n        order: 1;\n        transform: translateY(-200px);\n        justify-content: space-around;\n        padding: 1rem 0 1rem 0;\n        margin-top: 1rem; } }\n    .header__social--active {\n      transform: translateY(0);\n      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); }\n    .header__social__icon {\n      width: 2rem;\n      opacity: 0.5;\n      transition: all 0.3s ease; }\n      .header__social__icon:hover {\n        transform: scale(1.1);\n        opacity: 0.7; }\n  .header__menu {\n    transition: all 0.3s ease;\n    margin-top: auto; }\n    @media screen and (max-width: 768px) {\n      .header__menu {\n        transform: translateY(-200px);\n        margin-top: 1rem; } }\n    .header__menu--active {\n      transform: translateY(0);\n      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); }\n\n@media screen and (max-width: 768px) {\n  .header > * {\n    background-image: radial-gradient(circle, white, #fffdfe, #fffbfb, #fefaf7, #fbf9f4); } }\n\n.profile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center; }\n  .profile__blurb {\n    opacity: 0.7;\n    margin-top: 2rem; }\n    @media screen and (max-width: 768px) {\n      .profile__blurb {\n        display: none; } }\n  .profile__title {\n    border-top: 1px solid rgba(1, 1, 1, 0.8);\n    border-bottom: 1px solid rgba(1, 1, 1, 0.8);\n    margin-top: 2rem;\n    margin-bottom: 0; }\n    @media screen and (max-width: 576px) {\n      .profile__title {\n        align-self: start; } }\n  .profile__headshot {\n    max-height: 5rem;\n    margin-bottom: 2rem; }\n    @media screen and (max-width: 768px) {\n      .profile__headshot {\n        display: none; } }\n\n.menu {\n  width: 100%; }\n  .menu__list {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    border-top: 1px solid rgba(1, 1, 1, 0.2);\n    padding: 0; }\n    .menu__list::before {\n      content: 'Menu';\n      width: 3.5rem;\n      padding: 0.2rem;\n      font-size: 1rem;\n      position: relative;\n      z-index: 1;\n      background-color: white;\n      color: #00554e;\n      top: -0.9rem;\n      left: 1rem; }\n      @media screen and (max-width: 768px) {\n        .menu__list::before {\n          display: none; } }\n    @media screen and (max-width: 768px) {\n      .menu__list {\n        flex-direction: row;\n        justify-content: space-around;\n        border-top: none;\n        flex-wrap: wrap; } }\n  .menu__link {\n    margin-bottom: 1rem;\n    list-style-type: circle;\n    transition: all 0.3s ease;\n    opacity: 0.7; }\n    .menu__link:hover {\n      letter-spacing: 0.1rem;\n      cursor: pointer;\n      opacity: 1; }\n      .menu__link:hover::marker {\n        color: #ff6c64;\n        list-style-type: disc; }\n    @media screen and (max-width: 768px) {\n      .menu__link {\n        list-style-type: none;\n        margin-bottom: 0; } }\n\n.button--hamburger {\n  opacity: 0.5;\n  position: absolute;\n  top: 2.2rem;\n  right: 1rem;\n  height: 20px;\n  width: 10px;\n  outline: 0;\n  border-top: 2px solid #010101;\n  border-bottom: 2px solid #010101;\n  border-left: 0;\n  border-right: 0;\n  background-color: white;\n  display: none; }\n  @media screen and (max-width: 768px) {\n    .button--hamburger {\n      display: block; } }\n  .button--hamburger::before {\n    content: '';\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    left: 0;\n    bottom: 6.5px;\n    background-color: #010101; }\n  .button--hamburger:hover {\n    opacity: 0.9;\n    cursor: pointer; }\n\n/** @format */\n.page {\n  padding: 2rem;\n  width: 100%;\n  grid-column: 1 / -1;\n  animation: fadeIn 1s ease; }\n  .page__image {\n    float: left;\n    margin-right: 2rem;\n    margin-bottom: 2rem;\n    max-width: 100%; }\n  .page__buttons {\n    display: flex;\n    justify-content: center; }\n  .page__previous, .page__next {\n    margin: 1rem;\n    width: 120px;\n    text-align: center; }\n\n/** @format */\n.card {\n  margin: 2rem 0 0 2rem;\n  background-image: radial-gradient(circle, white, #fffdfe, #fffbfb, #fefaf7, #fbf9f4);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  animation: fadeIn 1s ease; }\n  .card > * {\n    width: 100%; }\n  .card__image {\n    width: 100%;\n    margin-bottom: 0;\n    padding-bottom: 0;\n    transition: all 0.3s ease; }\n    .card__image--grayscale {\n      filter: grayscale(100%); }\n  .card__text {\n    border-top: 2px solid #02c7b6;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .card__title {\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 1rem; }\n  .card__subtitle {\n    text-align: center;\n    font-style: italic;\n    opacity: 0.5;\n    margin: 0; }\n  .card__excerpt {\n    margin: 0;\n    opacity: 0.8;\n    margin-bottom: 2rem; }\n  .card__button {\n    margin-top: auto;\n    margin-bottom: 1rem; }\n  .card--featured {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2; }\n    @media screen and (min-width: 576px) {\n      .card--featured > .card__text {\n        position: relative;\n        margin-top: -15rem;\n        background-color: white;\n        z-index: 1; } }\n\n/** @format */\n#mc_embed_signup {\n  background-color: white;\n  clear: left;\n  justify-self: center;\n  align-self: center; }\n\n.contact--success {\n  background-color: #ff6c64;\n  color: white;\n  padding: 1rem;\n  animation: fadeIn 1s ease; }\n\n/* from Mailchimp */\n/* stylelint-disable */\n/* MailChimp Form Embed Code - Classic - 12/17/2015 v10.7 */\n#mc_embed_signup form {\n  display: block;\n  position: relative;\n  text-align: left;\n  padding: 10px 0 10px 3%; }\n\n#mc_embed_signup h2 {\n  font-weight: bold;\n  padding: 0;\n  margin: 15px 0;\n  font-size: 1.4em; }\n\n#mc_embed_signup input {\n  border: 1px solid #abb0b2;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\n#mc_embed_signup input[type='checkbox'] {\n  -webkit-appearance: checkbox; }\n\n#mc_embed_signup input[type='radio'] {\n  -webkit-appearance: radio; }\n\n#mc_embed_signup input:focus {\n  border-color: #333; }\n\n#mc_embed_signup .button {\n  clear: both;\n  background-color: #aaa;\n  border: 0 none;\n  border-radius: 4px;\n  transition: all 0.23s ease-in-out 0s;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: normal;\n  height: 32px;\n  line-height: 32px;\n  margin: 0 5px 10px 0;\n  padding: 0 22px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: top;\n  white-space: nowrap;\n  width: auto; }\n\n#mc_embed_signup .button:hover {\n  background-color: #777; }\n\n#mc_embed_signup .small-meta {\n  font-size: 11px; }\n\n#mc_embed_signup .nowrap {\n  white-space: nowrap; }\n\n#mc_embed_signup .mc-field-group {\n  clear: left;\n  position: relative;\n  width: 96%;\n  padding-bottom: 3%;\n  min-height: 50px; }\n\n#mc_embed_signup .size1of2 {\n  clear: none;\n  float: left;\n  display: inline-block;\n  width: 46%;\n  margin-right: 4%; }\n\n* html #mc_embed_signup .size1of2 {\n  margin-right: 2%;\n  /* Fix for IE6 double margins. */ }\n\n#mc_embed_signup .mc-field-group label {\n  display: block;\n  margin-bottom: 3px; }\n\n#mc_embed_signup .mc-field-group input {\n  display: block;\n  width: 100%;\n  padding: 8px 0;\n  text-indent: 2%; }\n\n#mc_embed_signup .mc-field-group select {\n  display: inline-block;\n  width: 99%;\n  padding: 5px 0;\n  margin-bottom: 2px; }\n\n#mc_embed_signup .datefield,\n#mc_embed_signup .phonefield-us {\n  padding: 5px 0; }\n\n#mc_embed_signup .datefield input,\n#mc_embed_signup .phonefield-us input {\n  display: inline;\n  width: 60px;\n  margin: 0 2px;\n  letter-spacing: 1px;\n  text-align: center;\n  padding: 5px 0 2px 0; }\n\n#mc_embed_signup .phonefield-us .phonearea input,\n#mc_embed_signup .phonefield-us .phonedetail1 input {\n  width: 40px; }\n\n#mc_embed_signup .datefield .monthfield input,\n#mc_embed_signup .datefield .dayfield input {\n  width: 30px; }\n\n#mc_embed_signup .datefield label,\n#mc_embed_signup .phonefield-us label {\n  display: none; }\n\n#mc_embed_signup .indicates-required {\n  text-align: right;\n  font-size: 11px;\n  margin-right: 4%; }\n\n#mc_embed_signup .asterisk {\n  color: #e85c41;\n  font-size: 150%;\n  font-weight: normal;\n  position: relative;\n  top: 5px; }\n\n#mc_embed_signup .clear {\n  clear: both; }\n\n#mc_embed_signup .mc-field-group.input-group ul {\n  margin: 0;\n  padding: 5px 0;\n  list-style: none; }\n\n#mc_embed_signup .mc-field-group.input-group ul li {\n  display: block;\n  padding: 3px 0;\n  margin: 0; }\n\n#mc_embed_signup .mc-field-group.input-group label {\n  display: inline; }\n\n#mc_embed_signup .mc-field-group.input-group input {\n  display: inline;\n  width: auto;\n  border: none; }\n\n#mc_embed_signup div#mce-responses {\n  float: left;\n  top: -1.4em;\n  padding: 0em 0.5em 0em 0.5em;\n  overflow: hidden;\n  width: 90%;\n  margin: 0 5%;\n  clear: both; }\n\n#mc_embed_signup div.response {\n  margin: 1em 0;\n  padding: 1em 0.5em 0.5em 0;\n  font-weight: bold;\n  float: left;\n  top: -1.5em;\n  z-index: 1;\n  width: 80%; }\n\n#mc_embed_signup #mce-error-response {\n  display: none; }\n\n#mc_embed_signup #mce-success-response {\n  color: #529214;\n  display: none; }\n\n#mc_embed_signup label.error {\n  display: block;\n  float: none;\n  width: auto;\n  margin-left: 1.05em;\n  text-align: left;\n  padding: 0.5em 0; }\n\n#mc-embedded-subscribe {\n  clear: both;\n  width: auto;\n  display: block;\n  margin: 1em 0 1em 5%; }\n\n#mc_embed_signup #num-subscribers {\n  font-size: 1.1em; }\n\n#mc_embed_signup #num-subscribers span {\n  padding: 0.5em;\n  border: 1px solid #ccc;\n  margin-right: 0.5em;\n  font-weight: bold; }\n\n#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {\n  display: inline-block;\n  margin: 2px 0 1em 0;\n  padding: 5px 10px;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: normal;\n  z-index: 1;\n  color: #e85c41; }\n\n#mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {\n  border: 2px solid #e85c41; }\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([i]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),d=null,c=0,l=[],m=t(5);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(_(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(_(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function f(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return h(e,n.attrs),f(n,e),e}function h(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function _(n,e){var t,r,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var a=c++;t=d||(d=g(e)),r=v.bind(null,t,a,!1),i=v.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),f(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=m(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){b(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return p(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}n&&p(u(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete o[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function v(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){"use strict";t.r(e);t(1);var r=t(0);function i(n,e){let t=n.shift(),r=Object.keys(t),{elementType:o,elementClasses:a,elementAttributes:s}=function(n){let e,t=n.split(""),r=[],i=[];return function n(t,o){let a=function(){for(var n=1;n<t.length;++n)switch(t[n]){case'"':for(var e=n+1;e<t.length;++e)'"'==t[e]&&(n=e+1);break;case".":return[n,"class"];case"[":return[n,"attribute"]}return[n,null]}(),[s,d]=a,c=t.slice(0,s),l=t.slice(s);switch(o){case"element":e=c.join("");break;case"class":r.push(c.join("").substring(1));break;case"attribute":i.push(c.join("").replace(/"/gi,"").substring(1).split("="))}null!=d&&n(l,d)}(t,"element"),{elementType:e,elementClasses:r,elementAttributes:i}}(r[0]),d=document.createElement(o);if(a&&a.forEach(n=>d.classList.add(n)),s&&s.forEach(n=>{let[e,t]=n;if("data-"==e.substring(0,5)){let n=e.substring(5);d.dataset[n]=t}else switch(e){case"src":d.src=t;break;case"href":d.href=t;break;case"target":d.target=t}}),e.insertBefore(d,null),Array.isArray(t[r]))i(t[r],d);else if("object"==typeof t[r]){let n=t[r];n.hasOwnProperty("src")&&(d.src=n.src)}else d.innerHTML=t[r];0!=n.length&&i(n,e)}const o={spin(n){n.innerHTML="<div class='loader--spin'></div>"},blank(n){n.innerHTML="<div class='loader--blank'></div>"}};async function a(n,e,t,a=o.spin){a(e);let s=`http${r.ssl?"s":""}://${r.domain}${r.subdirectory}/wp-json/wp/v2/${n.toLowerCase()}`,d=await fetch(s);!function(n,e,t,r){let o=r(),a=document.createElement("div");a.classList.add("tempElement"),Array.isArray(e)?e.forEach(n=>{i(o.markup(n),a)}):i(o.markup(e),a);t.innerHTML=a.innerHTML,o.events&&o.events(n,t)}(n,await d.json(),e,t)}function s(){window.scrollTo(0,0)}function d(){return{markup:n=>[{[`article.page[data-id=${n.id}[data-type=${2==n.categories[0]?"blog":"story"}`]:[{"img.page__image":{src:n._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}},{"h1.page__title":n.title.rendered},{"div.page__body":n.content.rendered},{"div.page__buttons":[{"button.button.button--secondary.page__previous":"Previous"},{"button.button.button--secondary.page__next":"Next"}]}]}],async events(n,e){let t,i,o=document.querySelector(".page").dataset.type,c=`http${r.ssl?"s":""}://${r.domain}${r.subdirectory}/wp-json/rest-routes/v2/${o}-ids`,l=await fetch(c),m=(await l.json()).map(n=>n.ID),p=document.querySelector("article").dataset.id;!function(){for(let n=0;n<m.length;++n)m[n]==p&&(t=m[n-1]?m[n-1]:m[m.length-1],i=m[n+1]?m[n+1]:m[0])}(),document.querySelector(".page__next").addEventListener("click",()=>{a(`posts/${i}?_embed`,e,d),s()}),document.querySelector(".page__previous").addEventListener("click",()=>{a(`posts/${t}?_embed`,e,d),s()})}}}function c(){return{markup:n=>[{[`div.card${n.acf.featured?".card--featured":""}[data-type=${2==n.categories[0]?"blog":"story"}`]:[{[`img.card__image${n.acf.featured?".card__image--featured":""}.card__image--grayscale`]:{src:n._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}},{"div.card__text":[{"h2.card__title":n.title.rendered},{"h3.card__subtitle":n.acf.subtitle},{"div.card__excerpt":`${n.excerpt.rendered}`},{[`button.button.button--primary.card__button[data-id=${n.id}`]:"Continue Reading"}]}]}],events(n,e){document.querySelectorAll(".button").forEach(n=>{n.addEventListener("click",()=>{a(`posts/${n.dataset.id}?_embed`,e,d),s()}),n.addEventListener("mouseenter",n=>{n.target.parentElement.parentElement.childNodes[0].classList.remove("card__image--grayscale")}),n.addEventListener("mouseleave",n=>{n.target.parentElement.parentElement.childNodes[0].classList.add("card__image--grayscale")})})}}}function l(){return{markup:n=>[{"article.page":[{"img.page__image":{src:n._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}},{"h2.page__title":n.title.rendered},{"div.page__body":n.content.rendered}]}]}}let m={form:'<div class="page"><div id="mc_embed_signup">\n    <form\n        action="https://gmail.us3.list-manage.com/subscribe/post?u=cf4c8e47ea13f2921ab524ad1&amp;id=c403735431"\n        method="post"\n        id="mc-embedded-subscribe-form"\n        name="mc-embedded-subscribe-form"\n        class="validate"\n        target="_blank"\n        novalidate\n    >\n        <div id="mc_embed_signup_scroll">\n            <h2>Subscribe</h2>\n            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\n            <div class="mc-field-group">\n                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span> </label>\n                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />\n            </div>\n            <div class="mc-field-group">\n                <label for="mce-NAME">Name </label>\n                <input type="text" value="" name="NAME" class="" id="mce-NAME" />\n            </div>\n            <div id="mce-responses" class="clear">\n                <div class="response" id="mce-error-response" style="display:none"></div>\n                <div class="response" id="mce-success-response" style="display:none"></div>\n            </div>\n            \x3c!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--\x3e\n\t\t\t<div style="position: absolute; left: -5000px;" aria-hidden="true">\n                <input type="text" name="b_cf4c8e47ea13f2921ab524ad1_c403735431" tabindex="-1" value="" />\n            </div>\n            <div class="clear">\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button button--secondary--mc" />\n            </div>\n        </div>\n    </form>\n</div></div>',success:"<div class='contact--success'><p>You are now subscribed to K.R. Monin!</p></div>"};const p=document.querySelector(".content"),u=document.querySelector(".header__profile"),f=document.querySelector(".header__social");a("profile",u,function(){return{markup:n=>[{"div.profile":[{"button.button--hamburger":""},{"h2.profile__title":n.title.rendered},{"h3.profile__blurb":n.acf.blurb},{"img.profile__headshot":{src:n.acf.image}}]}],async events(){document.querySelector(".button--hamburger").addEventListener("click",function(){document.querySelector(".header__menu").classList.toggle("header__menu--active"),document.querySelector(".header__social").classList.toggle("header__social--active"),document.querySelector(".content").classList.toggle("test")}),document.querySelector(".menu").addEventListener("click",function(){document.querySelector(".header__menu").classList.remove("header__menu--active"),document.querySelector(".header__social").classList.remove("header__social--active"),document.querySelector(".content").classList.remove("test")})}}},o.blank),a("social",f,function(){return{markup:n=>[{[`a.header__social__link[target=_blank[href="${n.acf.social_media_url}"`]:[{"img.header__social__icon":{src:n.acf.icon}}]}]}},o.blank),a("posts?_embed",p,c),document.querySelector(".menu__list").addEventListener("click",function(n){switch(n.target.textContent){case"Home":a("posts?_embed",p,c);break;case"Stories":a("posts?_embed&categories=3",p,c);break;case"Blog":a("posts?_embed&categories=2",p,c);break;case"About":a("pages?_embed&slug=about-me",p,l);break;case"Contact":document.querySelector(".content").innerHTML=m.form,document.querySelector("#mc-embedded-subscribe").addEventListener("click",function(){let n=document.querySelector(".contact--success");n&&document.removeChild(n),document.querySelector("#mce-NAME").value="",document.querySelector("#mce-EMAIL").value="";let e=document.createElement("div");e.innerHTML=m.success,document.querySelector("#mc_embed_signup").appendChild(e)})}s()})}]);