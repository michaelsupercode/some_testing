

// toDo refactoring

var NtvAuthClient = function(config){

	var config = {
			uri_auth: "https://sso.guj.de/oidc/v1/ntv_web/authorize",
			uri_logout: "https://sso.guj.de/oidc/v1/ntv_web/logout",
			uri_token: "https://sso.guj.de/oidc/v1/ntv_web/token",
			uri_userinfo: "https://sso.guj.de/oidc/v1/ntv_web/userinfo",
			uri_redirect: "https://www.n-tv.de/auth/handler.html",
			client_id: "ntv-web",
			cookies: {
				userData: {
					name: "_ntv_udata",
					path: "/auth/",
					domain: "www.n-tv.de",
					expire: 1 * 60 * 60 * 1000
				},
				pureMode: {
					name: "_ntv_pmode",
					path: "/",
					domain: "n-tv.de",
					expire: 14 * 24 * 60 * 60 * 1000
				},
				verifier: {
					name: "_ntv_vf",
					path: "/auth/",
					domain: "www.n-tv.de"
				},
				// 50min???????
				accessToken: {
					name: "_ntv_at",
					path: "/auth/",
					domain: "www.n-tv.de",
					expire: 1 * 50 * 60 * 1000
				},
				refreshToken: {
					name: "_ntv_rt",
					path: "/auth/",
					domain: "www.n-tv.de",
					expire: 14 * 24 * 60 * 60 * 1000
				},
				idToken: {
					name: "_ntv_it",
					path: "/auth/",
					domain: "www.n-tv.de",
					expire: 14 * 24 * 60 * 60 * 1000
				}
			}
		};


	var crypto = window.crypto || window.msCrypto;


	this.logout = function(callback){

		var authParams = getAuthParams();
		var xhr = new XMLHttpRequest();
		var postparams = "client_id=" + config.client_id + "&id_token_hint=" + authParams.idToken;

		clearCookies();

		xhr.open("POST", config.uri_logout, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
            	ntvDebug("*** logout ***");
            	if (xhr.status == 200) {
            		ntvDebug(xhr);
            	}else{
            		ntvDebug(xhr);
            	}
            	if(callback != undefined) {
            		callback();
            	}

            }

        };
        xhr.send(postparams);
	};


	this.login = function(){
		genLoginData(function(url){
			document.location.href = url;
		});
	};


	this.evalUserStatus = function(callback){

		var userData = {};
		var userDataCookie = getCookie(config.cookies.userData.name);
		
		ntvDebug("*** auth v 2.2 ***");
		
		if(userDataCookie){
			try {
				userData = JSON.parse( atob(userDataCookie) );
			} catch(e){

			}
		}

		var handleUserData = function(data){
			
			data.v = "2.0";

			if(!data.loggedIn){
				clearCookies();

				genLoginData(function(url){
					data.liUrl = url;
					callback(data);
				});

			}else{
				
				setCookie( "userData", btoa(JSON.stringify(data)) );
				setCookie("pureMode", (data.abo && data.abo.active)?"true":"false");
				
				// sourcepointcookies + before consentcookie löschen
				//consentUUID, euconsent-v2, consentAvailable
				if(data.abo && data.abo.active){
					document.cookie = "consentAvailable=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=n-tv.de";
					document.cookie = "consentUUID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=n-tv.de";
					document.cookie = "euconsent-v2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=n-tv.de";
				}

				callback(data);
			}
		};

		if(userData.loggedIn){
			handleUserData(userData);
			return;
		}


		getAccessToken(function(tokenresult){

			if(!(tokenresult.success)){
				handleUserData({});
				return;
			}

			getUserData(tokenresult.accessToken, function(userresult){
				
				
				var data = {};
				

				if((userresult.success)){
					
					ntvDebug("*** userresult ***");
					ntvDebug(userresult);

					data.loggedIn = true;
					
					if(userresult.userData && userresult.userData.email){
						data.email = userresult.userData.email;
					}

					if(userresult.userData && userresult.userData.roles){
						data.abo = evalAbo(userresult.userData.roles);
					}
				}

				handleUserData(data);
			});
		});
	};

	//var newsletterBaseUri = "https://personalization-staging.n-tv.de/n-tv/personalization/newsletter";
	var newsletterBaseUri = "https://personalization.n-tv.de/n-tv/personalization/newsletter";
	
	
	this.getNewsletterChannel = function(callback){

		getAccessToken(function(tokenresult){
			
			if(!(tokenresult.success)){
				callback({success: false});
				return;
			}
			
			
			var xhr = new XMLHttpRequest();
			xhr.open("GET", newsletterBaseUri + "/channel", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Authorization", "Bearer " + tokenresult.accessToken);
	
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4) {
	            	ntvDebug("*** personalisierung ***");
	            	if (xhr.status == 200) {
	            		ntvDebug(xhr);
		                var data = JSON.parse(xhr.responseText);
		                callback({success: true, channel: data});
	            	}else{
	            		ntvDebug(xhr);
	            		callback({success: false});
	            	}
	            }
	        };
	        xhr.send();	

		});
	};
	
	this.getNewsletterSubscriptions = function(callback){

		getAccessToken(function(tokenresult){
			
			if(!(tokenresult.success)){
				callback({success: false, abo: []});
				return;
			}
			
			var xhr = new XMLHttpRequest();
			xhr.open("GET", newsletterBaseUri + "/subscription", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Authorization", "Bearer " + tokenresult.accessToken);
	
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4) {
	            	ntvDebug("*** personalisierung ***");
	            	if (xhr.status == 200) {
	            		ntvDebug(xhr);
		                var data = JSON.parse(xhr.responseText);
		                callback({success: true, subscriptions: data});
	            	}else{
	            		ntvDebug(xhr);
	            		callback({success: false});
	            	}
	            }
	        };
	        xhr.send();	

		});
	};
	
	this.subscribeNewsletter = function(id, callback){

		getAccessToken(function(tokenresult){
			
			if(!(tokenresult.success)){
				callback({success: false, abo: []});
				return;
			}

			var xhr = new XMLHttpRequest();
			xhr.open("POST", newsletterBaseUri + "/subscription", true);
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.setRequestHeader("Authorization", "Bearer " + tokenresult.accessToken);

	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4) {
					console.log("*** subscribeNlShopping ***");
					console.log(xhr);
	            	if (xhr.status == 200) {
	            		callback({success: true});
	            	}else{
	            		callback({success: false});
	            	}
	            }
	        };
			
			xhr.send( '{"id": ' + id + '}' );

		});
	};


	this.unsubscribeNewsletter = function(id, callback){

		getAccessToken(function(tokenresult){
			
			if(!(tokenresult.success)){
				callback({success: false, abo: []});
				return;
			}
			
			var xhr = new XMLHttpRequest();
			xhr.open("DELETE", newsletterBaseUri + "/subscription", true);
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.setRequestHeader("Authorization", "Bearer " + tokenresult.accessToken);

	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4) {
					console.log("*** subscribeNlShopping ***");
					console.log(xhr);
	            	if (xhr.status == 204) {
	            		callback({success: true});
	            	}else{
	            		callback({success: false});
	            	}
	            }
	        };
			
			xhr.send( '{"id": ' + id + '}' );
		});
	};



	var clearCookies = function(){
	    for (var key in config.cookies){
	    	// need verifier for login
	    	if(key != "verifier"){
	    		removeCookie(key);
	    	}
	    }
	    // erschwert Manipulation durch User
	    setCookie("pureMode", "false");
	};


	var evalAbo = function(roles){

		var abo = {};
		var activeAbo = null;

		
		var getActiveRole = function(name){
			
			var role;
			var aboExpire;
			var now = new Date().getTime();
			
			for (index = 0; index < roles.length; index++) {
				
				role = roles[index];
				aboExpire = null;
				
				if( role.product_name == name ){
			
					if (role.valid_to){
						aboExpire = new Date(role.valid_to).getTime();
					}
					
					if (role.time_end){
						aboExpire = new Date(role.time_end).getTime();
					}
					
					
					if(!aboExpire || aboExpire > now ){
						return role;
					}
						
				}
			}
			
			return null;
			
		};
		
		activeAbo = getActiveRole("kimba_ntv_pur");
		
		if(activeAbo){
			abo.active = true;
			abo.name = "ntv PUR-Abo";
			
			if(activeAbo.time_end){
				abo.timeEnd = activeAbo.time_end;
			}
			
			// overwrite name if bundle
			var role_bundle = getActiveRole("kimba_bundle_ntv_sportde_pur_3");
			if(role_bundle){
				abo.name = "Kombi PUR-Abo";
			}
	
		}else{
			
			activeAbo = getActiveRole("zdb_freiausgabe_ntv_pur");
			
			if(activeAbo){
				abo.active = true;
				abo.name = "ntv PUR-Abo";

				// overwrite name if ntv and sport freiausgabe with same valid_from
				var role_freiausgabe_sport = getActiveRole("zdb_freiausgabe_sportde_pur");
				if(role_freiausgabe_sport && role_freiausgabe_sport.valid_to == activeAbo.valid_to){
					abo.name = "Kombi PUR-Abo";
				}
			}

		}
		
		
		var offerTrial = activeAbo?false:true;

		if(offerTrial){
			// check for expired or active abo
			for (index = 0; index < roles.length; index++) {
				if( roles[index].product_name == "kimba_ntv_pur" ){
					offerTrial = false;
					break;
				}
			}
		}

		abo.offerTrial = offerTrial;

		return abo;

	};


	var setCookie = function(listKey, value){

		var cookieList = config.cookies;

		if(cookieList[listKey]){


		    var cookieString = "";
		    if(cookieList[listKey].expire){
		    	var cookieExpireDate = new Date();
		    	cookieExpireDate.setTime(cookieExpireDate.getTime() + cookieList[listKey].expire);
		    }
		    cookieString = cookieList[listKey].name + "=" + value +";";
		    if(cookieExpireDate){
		    	cookieString += " expires=" + cookieExpireDate.toUTCString() + ";";
		    }
		    cookieString += " path=" + cookieList[listKey].path + "; domain=" + cookieList[listKey].domain + "; secure";
		    document.cookie = cookieString;
		}
	};

	var removeCookie = function(listKey){

		var cookieList = config.cookies;

		if(cookieList[listKey]){
			var cookiestr = cookieList[listKey].name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + cookieList[listKey].path + "; domain=" + cookieList[listKey].domain + "; secure";
			document.cookie = cookiestr;
		}

	};

	var getAuthParams = function(){

		return {
			verifier: getCookie(config.cookies.verifier.name),
			code: urlParams.code,
			refreshToken: getCookie(config.cookies.refreshToken.name),
			idToken: getCookie(config.cookies.idToken.name),
		};
	};


	var genLoginData  = function(callback){
		var verifier = generateVerifier();
		setCookie("verifier", verifier);
		generateCodechallenge(verifier,function(hash,error){
			callback(config.uri_auth + "?client_id=" + config.client_id + "&redirect_uri=" + encodeURI(config.uri_redirect) + "&response_type=code&scope=openid&code_challenge=" + hash + "&code_challenge_method=S256");
		});

	};

	var getAccessToken = function(callback){

		var accessTokenCookie = getCookie(config.cookies.accessToken.name);
		
		if(accessTokenCookie){
			ntvDebug("*** accessTokenCookie ***");
			ntvDebug(accessTokenCookie);
			callback({success: true, accessToken: accessTokenCookie});
			return;
		}

		var authParams = getAuthParams();
		var postparams;


		if(authParams.refreshToken){
			postparams = "grant_type=refresh_token&client_id=" + config.client_id + "&redirect_uri=" + config.uri_redirect + "&refresh_token="+authParams.refreshToken;
		}else{

			if(authParams.verifier && authParams.code){
				postparams = "grant_type=authorization_code&client_id=" + config.client_id + "&redirect_uri=" + config.uri_redirect + "&code=" + authParams.code + "&code_verifier=" + authParams.verifier;
			}
		}



		if(postparams){

			var xhr = new XMLHttpRequest();
			xhr.open("POST", config.uri_token, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4) {
	            	ntvDebug("*** token request ***");
	            	if (xhr.status == 200) {
	            		ntvDebug(xhr);
		                var data = JSON.parse(xhr.responseText);
		    			if(data.refresh_token){
		    				setCookie("refreshToken", data.refresh_token);
		    			}
		    			if(data.id_token){
		    				setCookie("idToken", data.id_token);
		    			}
		    			setCookie("accessToken", data.access_token);
		                callback({success: true, accessToken: data.access_token});
	            	}else{
	            		ntvDebug(xhr);
	            		callback({success: false});
	            	}
	            }
	        };
	        xhr.send(postparams);
		}else{
			callback({success: false});
		}
	};



	var getUserData = function(token, callback){

		var xhr = new XMLHttpRequest();
		xhr.open("GET", config.uri_userinfo, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + token);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
            	ntvDebug("*** user request ***");
            	if (xhr.status == 200) {
            		ntvDebug(xhr);
	                var data = JSON.parse(xhr.responseText);
	                callback({success: true, "userData": data});
            	}else{
            		ntvDebug(xhr);
            		callback({success: false});
            	}
            }
        };
        xhr.send();
	};



	var generateCodechallenge = function(v, cb) {

		function textEncode(str) {
			var buf = new ArrayBuffer(str.length);
			var bufView = new Uint8Array(buf);
			for (var i = 0; i < str.length; i++) {
				bufView[i] = str.charCodeAt(i);
			}
			return bufView;
		}

		var base64urlencode = function(h) {
		  var str = "";
		  var bytes = new Uint8Array(h);
		  var len = bytes.byteLength;
		  for (var i = 0; i < len; i++) {
			str += String.fromCharCode(bytes[i]);
		  }
		  return btoa(str)
			.replace(/\+/g, "-")
			.replace(/\//g, "_")
			.replace(/=+$/, "");
		};


		var crypt = crypto.subtle.digest("SHA-256", textEncode(v));

		if (typeof crypt.then == "function") {
		  crypt.then(function(result) {

			if(typeof cb === 'function'){
				cb(base64urlencode(result));
			}
		  });
		} else {
			crypt.oncomplete = function(e){
				if(typeof cb === 'function'){
					cb(base64urlencode(e.target.result));
				}
			}

		}


	};

	var generateVerifier = function() {

		var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var verif_size = 100;

		var bufferToString = function(buffer) {
			var state = [];
			for (var i = 0; i < buffer.byteLength; i += 1) {
				var index = buffer[i] % CHARSET.length;
				state.push(CHARSET[index]);
			}
			return state.join('');
		}

		var buffer = new Uint8Array(verif_size);

		crypto.getRandomValues(buffer);

		return bufferToString(buffer);

	};
};


window.getCookie = function(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) == ' ') {
           c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
           return c.substring(name.length, c.length);
       }
   }
   return null;
};

window.urlParams = (function() {
	var queryString = window.location.search;
	if( queryString ) {
		queryString = queryString.substring( queryString.indexOf( "?" ) + 1 );
		var paramsReturn = {},
			paramString = queryString.split( "&" );
		for( var param in paramString ) {
			var split = paramString[ param ].split( "=" );
			paramsReturn[ split[ 0 ] ] = split[ 1 ];
		}
		return paramsReturn;
	}
	return {};
})();


window.ntvDebug = function (message) {
	if (window.localStorage && localStorage.ntvDebug == 'true') console.log(message);
};

