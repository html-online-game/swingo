document.xURL= "https://poki.com/";

if (typeof consoleLog== 'undefined') {
  consoleLog= console.log;
}

var originalEval= eval;
eval= function() {  
  arguments[0]= arguments[0].replace("aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "I3ViZzIzNQ==");
  arguments[0]= arguments[0].replace("'location'", "'xlocation'");
  arguments[0]= arguments[0].replace("] = _0x3296f7;", "]==_0x3296f7;");
  arguments[0]= arguments[0].replace("] = window[_0xcdc9(", "]==window[_0xcdc9(");

  return originalEval.apply(this, arguments);
}

navigator.sendBeacon= function() {
}

WebSocket= function() {
  
}

xlocation= new Proxy(location, {
  get: function(target, property, receiver) {
    let targetObj = target[property];
    if (typeof targetObj == "function") {
      return (...args) => target[property].apply(target, args);
    } else {
      if (property== "host" || property=="hostname") {
        return "localhost";
      }
      if (property== "href") {
        return "https://localhost/";
      }
      if (property== "origin") {
        return "https://localhost/";
      }
      return targetObj;
    }
  },
  set: function(target, property, receiver) {
    return true;
  }
});

xwindow = new Proxy(window, {
  get: function(target, property, receiver) {  
    if (typeof target[property] == "function") {
      return (...args) => target[property].apply(target,args);
    } else {
      if (property== "location") {
        return target["xlocation"];        
      }
      return target[property];
    }
  }
});

PokiSDK= function() {
  // ***** UTILS *****
  function loadJS(FILE_URL, callback) {
    let scriptEle = document.createElement("script");
  
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", true);
  
    document.body.appendChild(scriptEle);
    
    // Success
    scriptEle.addEventListener("load", () => {
      callback(true);
    });
    
     // Error
    scriptEle.addEventListener("error", () => {
      callback(false);
    });
  }

  this.getURLParam= function(name) {
    return "";
  }
  
  // ***** INIT *****
  this.init= function() {
    return new Promise((resolve, reject)=> {
      resolve("InitDone");
    });
  }
  
  this.setDebug= function(debug) {
  }

  this.setDebugTouchOverlayController= function (debug) {
  }
  
  this.isAdBlocked= function() {
    return false;
  }

  this.happyTime= function(scale) {
  }

  // ***** LOADING *****  
  this.gameLoadingStart= function(){
  }
  
  this.gameLoadingProgress= function(progress){
  }
  
  this.gameLoadingFinished= function(){
  }

  // ***** GAME CONTROL *****
  this.gameplayStart= function(){
  }

  this.gameplayStop= function() {
  }

  // ***** ADS CONTROL *****
  this.commercialBreak= function(){
  }

  this.rewardedBreak= function() {
  }

  this.displayAd= function() {
  }

  this.destroyAd= function() {
  }
}

PokiSDK.prototype.initWithVideoHB= function() {
  return new Promise((resolve, reject)=> {
    resolve("")
  });
}

PokiSDK.prototype.customEvent= function() {
}

PokiSDK= new PokiSDK();
