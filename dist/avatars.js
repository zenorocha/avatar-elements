"use strict";var _createClass=function(){function t(t,e){for(var a in e){var r=e[a];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),_inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},_classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Avatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{username:{value:function(){var t=this.getAttribute("username");if(!t)throw new Error("Username attribute is required.");return t}},size:{value:function(){return this.getAttribute("size")||48}},load:{value:function(t,e){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=JSON.parse(a.responseText);e&&e(t)}},a.open("GET",t,!0),a.send()}}}),e}(HTMLImageElement),GitHubAvatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{apiURL:{value:function(){return"https://api.github.com/users/"+this.username()}},imageURL:{value:function(t){return""+t.avatar_url+"&s="+this.size()}},createdCallback:{value:function(){var t=this;t.load(t.apiURL(),function(e){t.setAttribute("src",t.imageURL(e))})}}}),e}(Avatar),FacebookAvatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{imageURL:{value:function(){return"https://graph.facebook.com/"+this.username()+"/picture?width="+this.size()+"&height="+this.size()}},createdCallback:{value:function(){this.setAttribute("src",this.imageURL())}}}),e}(Avatar),SkypeAvatar=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),_createClass(e,{imageURL:{value:function(){return"http://api.skype.com/users/"+this.username()+"/profile/avatar"}},createdCallback:{value:function(){this.setAttribute("src",this.imageURL())}}}),e}(Avatar);document.registerElement("avatar-github",{prototype:GitHubAvatar.prototype,"extends":"img"}),document.registerElement("avatar-facebook",{prototype:FacebookAvatar.prototype,"extends":"img"}),document.registerElement("avatar-skype",{prototype:SkypeAvatar.prototype,"extends":"img"});