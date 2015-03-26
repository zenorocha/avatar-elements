"use strict";var _createClass=function(){function t(t,e){for(var r in e){var a=e[r];a.configurable=!0,a.value&&(a.writable=!0)}Object.defineProperties(t,e)}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),_inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},_classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Avatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{loadJSON:{value:function(t,e){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var t=JSON.parse(r.responseText);e&&e(t)}},r.open("GET",t,!0),r.send()}}}),e}(HTMLImageElement),GitHubAvatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{createdCallback:{value:function(){var t=this,e=this.getAttribute("size")||48,r=this.getAttribute("username");if(!r)throw new Error("Username attribute is required.");var a="https://api.github.com/users/"+r;t.loadJSON(a,function(r){var a=r.avatar_url+"&s="+e;t.setAttribute("src",a)})}}}),e}(Avatar);document.registerElement("avatar-github",{prototype:GitHubAvatar.prototype,"extends":"img"});var FacebookAvatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{createdCallback:{value:function(){var t=this,e=this.getAttribute("size")||48,r=this.getAttribute("username");if(!r)throw new Error("Username attribute is required.");var a="https://graph.facebook.com/"+r+"/picture?width="+e+"&height="+e;t.setAttribute("src",a)}}}),e}(Avatar);document.registerElement("avatar-facebook",{prototype:FacebookAvatar.prototype,"extends":"img"});