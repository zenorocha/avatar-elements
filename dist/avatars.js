"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Avatar = (function (_HTMLImageElement) {
    function Avatar() {
        _classCallCheck(this, Avatar);

        if (_HTMLImageElement != null) {
            _HTMLImageElement.apply(this, arguments);
        }
    }

    _inherits(Avatar, _HTMLImageElement);

    _createClass(Avatar, {
        loadJSON: {
            value: function loadJSON(path, callback) {
                var httpRequest = new XMLHttpRequest();
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState === 4) {
                        if (httpRequest.status === 200) {
                            var data = JSON.parse(httpRequest.responseText);
                            if (callback) callback(data);
                        }
                    }
                };
                httpRequest.open("GET", path, true);
                httpRequest.send();
            }
        }
    });

    return Avatar;
})(HTMLImageElement);

var GitHubAvatar = (function (_Avatar) {
    function GitHubAvatar() {
        _classCallCheck(this, GitHubAvatar);

        if (_Avatar != null) {
            _Avatar.apply(this, arguments);
        }
    }

    _inherits(GitHubAvatar, _Avatar);

    _createClass(GitHubAvatar, {
        createdCallback: {
            value: function createdCallback() {
                var self = this,
                    size = this.getAttribute("size") || 48,
                    username = this.getAttribute("username");

                if (username) {
                    var url = "https://api.github.com/users/" + username;
                } else {
                    throw new Error("Username attribute is required.");
                }

                self.loadJSON(url, function (data) {
                    var image = data.avatar_url + "&s=" + size;
                    self.setAttribute("src", image);
                });
            }
        }
    });

    return GitHubAvatar;
})(Avatar);

document.registerElement("avatar-github", {
    prototype: GitHubAvatar.prototype,
    "extends": "img"
});