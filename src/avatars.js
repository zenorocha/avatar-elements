'use strict';

class Avatar extends HTMLImageElement {
    username() {
        var usernameAttr = this.getAttribute('username');

        if (!usernameAttr) {
            throw new Error('Username attribute is required.');
        }

        return usernameAttr;
    }

    size() {
        return this.getAttribute('size') || 48;
    }

    apikey(){
      return this.getAttribute('apikey');
    }

    load(path, callback) {
    	var httpRequest = new XMLHttpRequest();
    	httpRequest.onreadystatechange = function() {
    		if (httpRequest.readyState === 4) {
    			if (httpRequest.status === 200) {
    				var data = JSON.parse(httpRequest.responseText);
    				if (callback) callback(data);
    			}
    		}
    	};
    	httpRequest.open('GET', path, true);
    	httpRequest.send();
    }
}

class GitHubAvatar extends Avatar {
    apiURL() {
        return `https://api.github.com/users/${this.username()}`;
    }

    imageURL(data) {
        return `${data.avatar_url}&s=${this.size()}`;
    }

    createdCallback() {
        var self = this;

        self.load(self.apiURL(), function(data) {
            self.setAttribute('src', self.imageURL(data));
		});
    }
}

class FacebookAvatar extends Avatar {
    imageURL() {
        return `https://graph.facebook.com/${this.username()}/picture?width=${this.size()}&height=${this.size()}`;
    }

    createdCallback() {
        this.setAttribute('src', this.imageURL());
    }
}

class SkypeAvatar extends Avatar {
    imageURL() {
        return `http://api.skype.com/users/${this.username()}/profile/avatar`;
    }

    createdCallback() {
        this.setAttribute('src', this.imageURL());
    }
}

class GooglePlusAvatar extends Avatar {

  apiURL() {
    return 'https://www.googleapis.com/plus/v1/people/'+this.username()+'?fields=image&key='+this.apikey();
  }

  imageURL(data) {
    return data.image.url + '&sz=' + this.size();
  }

  createdCallback() {
    var self = this;
    self.load(self.apiURL(), function(data) {
      self.setAttribute('src', self.imageURL(data));
    });
  }
}


document.registerElement('avatar-github', {
    prototype: GitHubAvatar.prototype,
    extends: 'img'
});

document.registerElement('avatar-facebook', {
    prototype: FacebookAvatar.prototype,
    extends: 'img'
});

<<<<<<< HEAD
document.registerElement('avatar-google-plus', {
    prototype: GooglePlusAvatar.prototype,
=======
document.registerElement('avatar-skype', {
    prototype: SkypeAvatar.prototype,
>>>>>>> 8d0120c272815fe036b9d5856868ebe1af50040a
    extends: 'img'
});
