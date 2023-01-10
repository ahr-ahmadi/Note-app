(()=>{"use strict";var n={414:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),s=r(667),l=r.n(s),c=new URL(r(435),r.b),d=new URL(r(222),r.b),u=a()(o()),f=l()(c),p=l()(d);u.push([n.id,'@font-face {\r\n  font-family: "sora";\r\n  src: url('+f+');\r\n  font-style: normal;\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: "sora";\r\n  src: url('+p+");\r\n  font-style: normal;\r\n  font-weight: 700;\r\n}",""]);const m=u},402:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"/* Reset */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n/*  Variable : */\r\n:root {\r\n    /* Color */\r\n    --primary-color: #288fd9;\r\n    --secondary-color: #ede9fe;\r\n    --main-white: #202020;\r\n    --main-black: #fff;\r\n    --main-gray: #7c7c7c;\r\n    --main-red: #ff3d3d;\r\n    --body-color: #181818;\r\n    /* Size */\r\n    --nav-width: 300px;\r\n    /* Transition */\r\n    --main-transition: all .2s ease-out;\r\n    /* Border */\r\n    --main-border: 2px solid var(--primary-color);\r\n    /* Border reduce */\r\n    --primary-border-reduce: 1.4rem;\r\n    --secondary-border-reduce: 1rem;\r\n    /* Spacing */\r\n    --main-spacing: 0.2rem;\r\n}\r\n\r\n/* Typoghraphy */\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody,\r\nbutton,\r\ninput,\r\ntextarea {\r\n    font-family: sora;\r\n}\r\n\r\n/* Main */\r\nhtml {\r\n    scroll-behavior: smooth;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    min-height: 630px;\r\n    color: var(--main-black);\r\n    background-color: var(--body-color);\r\n}\r\n\r\n.notes {\r\n    display: flex;\r\n    padding: 2rem;\r\n    height: 100%;\r\n    gap: 2rem;\r\n}\r\n\r\n.notes__sidebar {\r\n    height: inherit;\r\n    width: var(--nav-width);\r\n    padding: 2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    right: 0;\r\n    background: var(--main-white);\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: var(--main-transition);\r\n    border-radius: var(--primary-border-reduce);\r\n}\r\n\r\n.notes__header {\r\n    font-size: 4rem;\r\n    color: var(--main-black);\r\n    margin: 2rem 0 3.2rem;\r\n    text-align: center;\r\n    user-select: none;\r\n}\r\n\r\n.notes__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    gap: 2rem;\r\n    overflow-y: auto;\r\n    margin-bottom: 2rem;\r\n    border-radius: var(--secondary-border-reduce);\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.notes__list::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.notes__empty {\r\n    text-align: center;\r\n    color: var(--primary-color);\r\n    font-size: 1.8rem;\r\n    user-select: none;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.notes__list-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    cursor: pointer;\r\n    color: var(--main-black);\r\n    background-color: var(--body-color);\r\n    border-radius: var(--secondary-border-reduce);\r\n    padding: 2rem;\r\n    border: 2px solid transparent;\r\n    transition: var(--main-transition);\r\n    user-select: none;\r\n    scroll-snap-align: center;\r\n}\r\n\r\n.notes__list-item--selected {\r\n    border: var(--main-border);\r\n}\r\n\r\n.notes__small-title {\r\n    font-size: 2rem;\r\n}\r\n\r\n.notes__hr {\r\n    border: none;\r\n    height: 1px;\r\n    background-color: #ddd;\r\n}\r\n\r\n.notes__small-body {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.notes__samll-updated {\r\n    font-size: 1.2rem;\r\n    color: #aaa;\r\n}\r\n\r\n.notes__add {\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: var(--secondary-border-reduce);\r\n    color: var(--secondary-color);\r\n    cursor: pointer;\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n    padding: 1.6rem 0;\r\n    width: 100%;\r\n    transition: var(--main-transition);\r\n}\r\n\r\n.notes__add:hover {\r\n    background-color: #2575ae;\r\n}\r\n\r\n/*  Note preview section */\r\n.notes__preview {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    gap: 2rem;\r\n}\r\n\r\n.notes__logo {\r\n    font-size: 5rem;\r\n    letter-spacing: var(--main-spacing);\r\n    user-select: none;\r\n    margin: 1.5rem 2rem;\r\n}\r\n\r\n.notes__title,\r\n.notes__body {\r\n    border: none;\r\n    outline: none;\r\n    width: 100%;\r\n    border-radius: var(--primary-border-reduce);\r\n}\r\n\r\n.disabled {\r\n    opacity: 0.3;\r\n    pointer-events: none;\r\n}\r\n\r\n.notes__title {\r\n    font-size: 2.4rem;\r\n    padding: 2rem;\r\n    border: 2px solid transparent;\r\n    transition: var(--main-transition);\r\n    background-color: var(--main-white);\r\n    color: var(--main-black);\r\n}\r\n\r\n.notes__title:focus {\r\n    border: var(--main-border);\r\n}\r\n\r\n.notes__body-container {\r\n    flex-grow: 1;\r\n}\r\n\r\n.notes__body {\r\n    height: 100%;\r\n    font-size: 1.8rem;\r\n    resize: none;\r\n    padding: 2rem;\r\n    border: 2px solid transparent;\r\n    transition: var(--main-transition);\r\n    background-color: var(--main-white);\r\n    color: var(--main-black);\r\n}\r\n\r\n.notes__body:focus {\r\n    border: var(--main-border);\r\n}\r\n\r\n.notes__item-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.notes__item-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.notes__item-trash {\r\n    color: var(--main-red);\r\n}\r\n\r\n.notes__item-trash i {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n@media screen and (max-width: 640px) {\r\n    .notes {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .notes__sidebar {\r\n        width: 100%;\r\n        height: fit-content;\r\n    }\r\n\r\n    .notes__list {\r\n        flex-direction: row;\r\n        scroll-snap-type: x proximity;\r\n    }\r\n\r\n    .notes__empty {\r\n        margin: 0 auto 1rem;\r\n    }\r\n\r\n    .notes__header {\r\n        margin: 0 0 2rem;\r\n    }\r\n\r\n    .notes__list-item {\r\n        width: 200px;\r\n    }\r\n\r\n    .notes__small-body {\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    .notes__logo {\r\n        font-size: 4rem;\r\n        text-align: center;\r\n        margin: 1rem;\r\n    }\r\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var f=r(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);r.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var l=t(n,o),c=0;c<i.length;c++){var d=r(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},222:(n,e,r)=>{n.exports=r.p+"4473853965a9d49c11d9.ttf"},435:(n,e,r)=>{n.exports=r.p+"59e8cd26fdf2c27c0ec7.ttf"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),s=r(565),l=r.n(s),c=r(216),d=r.n(c),u=r(589),f=r.n(u),p=r(414),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d();e()(p.Z,m);p.Z&&p.Z.locals&&p.Z.locals;var v=r(402),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d();e()(v.Z,h);v.Z&&v.Z.locals&&v.Z.locals;function y(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var b=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r,t;return e=n,t=[{key:"getAllNotes",value:function(){return(JSON.parse(localStorage.getItem("notes-app"))||[]).sort((function(n,e){return new Date(n.updated)>new Date(e.updated)?-1:1}))}},{key:"saveNote",value:function(n){var e=this.getAllNotes(),r=e.find((function(e){return e.id==n.id}));r?(r.title=n.title,r.body=n.body,r.updated=(new Date).toISOString()):(n.id=(new Date).getTime(),n.updated=(new Date).toISOString(),e.push(n)),localStorage.setItem("notes-app",JSON.stringify(e))}},{key:"deleteNote",value:function(n){var e=this.getAllNotes().filter((function(e){return e.id!=n}));localStorage.setItem("notes-app",JSON.stringify(e))}}],(r=null)&&y(e.prototype,r),t&&y(e,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function _(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(!n)return;if("string"==typeof n)return g(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(n,e)}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var t=0,o=function(){};return{s:o,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function w(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var N=function(){function n(e,r){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.root=e;var o=r.onNoteAdd,i=r.onNoteEdit,a=r.onNoteSelect,s=r.onNoteDelete;this.onNoteAdd=o,this.onNoteEdit=i,this.onNoteSelect=a,this.onNoteDelete=s,this.root.innerHTML='\n            <div class="notes__sidebar">\n                <div class="notes__header">Notes</div>\n                <div class="notes__list">\n                </div>\n                <button class="notes__add">ADD NOTE</button>\n            </div>\n            <div class="notes__preview">\n            <h1 class="notes__logo">NOTE APP</h1>\n            <a href="#input-title" tabindex="-1">\n            <input type="text" class="notes__title" id="input-title" placeholder="Note title" />\n            </a>\n            <a href="#input-body" tabindex="-1" class="notes__body-container">\n            <textarea name="" class="notes__body" id="input-body" placeholder="Take note..."></textarea>\n            </a>\n            </div>\n        ';var l=this.root.querySelector(".notes__add"),c=this.root.querySelector(".notes__title"),d=this.root.querySelector(".notes__body");l.addEventListener("click",(function(){t.onNoteAdd()})),[c,d].forEach((function(n){n.addEventListener("blur",(function(){var n=c.value.trim(),e=d.value.trim();t.onNoteEdit(n,e)}))}))}var e,r,t;return e=n,r=[{key:"_createListItemHTML",value:function(n,e,r,t){return'\n        <a href="#'.concat(n,'" tabindex="-1">\n        <div id="').concat(n,'" class="notes__list-item" data-note-id="').concat(n,'">\n        <div class="notes__small-title">').concat(e,'</div>\n        <hr class="notes__hr">\n        <div class="notes__small-body">\n        ').concat(r.substring(0,50),"\n        ").concat(r.length>50?"...":"",'\n        </div>\n        <div class="notes__item-footer">\n        <div class="notes__samll-updated">\n        ').concat(new Date(t).toLocaleString("en",{dataStyle:"full",timeStyle:"short"}),'\n        </div>\n        <span class="notes__item-trash" data-note-id="').concat(n,'"><i class="fa-solid fa-trash-can"></i></span>\n        </div>\n        </div>\n        </a>\n        ')}},{key:"updateNoteList",value:function(n){var e,r=this,t=this.root.querySelector(".notes__list"),o="",i=_(n);try{for(i.s();!(e=i.n()).done;){var a=e.value,s=a.id,l=a.title,c=a.body,d=a.updated;o+=this._createListItemHTML(s,l,c,d)}}catch(n){i.e(n)}finally{i.f()}t.innerHTML=o,t.querySelectorAll(".notes__list-item").forEach((function(n){n.addEventListener("click",(function(){return r.onNoteSelect(n.dataset.noteId)}))})),t.querySelectorAll(".notes__item-trash").forEach((function(n){n.addEventListener("click",(function(e){e.stopPropagation(),r.onNoteDelete(n.dataset.noteId)}))}))}},{key:"updateActiveNote",value:function(n){this.root.querySelector(".notes__title").value=n.title,this.root.querySelector(".notes__body").value=n.body,this.root.querySelectorAll(".notes__list-item").forEach((function(n){n.classList.remove("notes__list-item--selected")})),this.root.querySelector('.notes__list-item[data-note-id="'.concat(n.id,'"]')).classList.add("notes__list-item--selected")}},{key:"updateNotePreviewVisibility",value:function(n){var e=this,r=this.root.querySelector(".notes__preview"),t=this.root.querySelector(".notes__title"),o=this.root.querySelector(".notes__body"),i=this.root.querySelector(".notes__list");n?(r.childNodes[3].classList.remove("disabled"),r.childNodes[5].classList.remove("disabled")):(r.childNodes[3].classList.add("disabled"),r.childNodes[5].classList.add("disabled"),t.value="Note title",o.value="",i.innerHTML='<p class="notes__empty">You don\'t have any note!</p>'),r.addEventListener("click",(function(n){n.target.childNodes[3].classList.contains("disabled")&&e.onNoteAdd()}))}}],r&&w(e.prototype,r),t&&w(e,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function x(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var S=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.notes=[],this.activeNote=null,this.view=new N(e,this._handlers()),this._refreshNotes()}var e,r,t;return e=n,r=[{key:"_refreshNotes",value:function(){var n=b.getAllNotes();this._setNotes(n),n.length>0&&this._setActiveNote(n[0])}},{key:"_setActiveNote",value:function(n){this.activeNote=n,this.view.updateActiveNote(n)}},{key:"_setNotes",value:function(n){this.notes=n,this.view.updateNoteList(n),this.view.updateNotePreviewVisibility(n.length>0)}},{key:"_handlers",value:function(){var n=this;return{onNoteAdd:function(){b.saveNote({title:"New Note",body:""}),n._refreshNotes()},onNoteEdit:function(e,r){b.saveNote({id:n.activeNote.id,title:e,body:r}),n._refreshNotes()},onNoteSelect:function(e){var r=n.notes.find((function(n){return n.id==e}));n._setActiveNote(r)},onNoteDelete:function(e){b.deleteNote(e),n._refreshNotes()}}}}],r&&x(e.prototype,r),t&&x(e,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();new S(document.getElementById("app"))})()})();