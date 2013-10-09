// Generated by CoffeeScript 1.6.2
(function() {
  var createRedPillButton;

  window.onload = function() {
    var rp, rpdiv;

    window.clicked = '';
    rpdiv = document.createElement('div');
    document.body.appendChild(rpdiv);
    rpdiv.id = '_rp';
    rpdiv.style.lineHeight = '10px';
    rpdiv.style.fontSize = '10px';
    rpdiv.style.padding = '0';
    rpdiv.style.margin = '0';
    rpdiv.innerHTML = "<p id='_rp'>Hello RP!</p>";
    rp = document.getElementById('_rp');
    rp.style.color = '#6F3';
    rp.style.backgroundColor = '#333';
    rp.style.padding = '2px';
    rp.style.position = 'fixed';
    rp.style.bottom = '0px';
    rp.style.lineHeight = '10px';
    rp.style.fontSize = '10px';
    rp.style.margin = '0';
    setInterval(function() {
      var bw, clock, d, h, t, w;

      d = new Date();
      clock = d.toLocaleTimeString();
      w = window.innerWidth;
      h = window.innerHeight;
      t = document.body.scrollTop;
      bw = document.documentElement.clientWidth;
      return rpdiv.innerHTML = ("Debug: " + clock + " | W:" + w + " | H:" + h + " | T:" + t + " | [" + bw + "] | " + window.clicked + " | ") + navigator.sayswho();
    }, 300);
    return document.onclick = function(evt) {
      evt = evt || event;
      return window.clicked = "Click= x:" + evt.clientX + " y:" + evt.clientY;
    };
  };

  createRedPillButton = function() {
    var rpbtn;

    rpbtn = document.createElement("input");
    rpbtn.type = "button";
    document.body.appendChild(rpbtn);
    return rpdiv.id = '_rpbtn';
  };

  navigator.sayswho = function() {
    var M, N, ua;

    N = navigator.appName;
    ua = navigator.userAgent;
    M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    return M;
  };

  console.log(" |::| RedPill Loaded |::| ");

}).call(this);

/*
//@ sourceMappingURL=redpill.map
*/
