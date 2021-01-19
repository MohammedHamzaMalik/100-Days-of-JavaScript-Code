// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
(function () {
  var quotes = [{
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  }, {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  }, {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  }, {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  }, {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  }, {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  }, {
    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  }, {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  }, {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth"
  }, {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone"
  }, {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse"
  }, {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  }, {
    quote: "We become what we think about.",
    author: "Earl Nightingale"
  }, {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain"
  }, {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"
  }, {
    quote: "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker"
  }, {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  }, {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  }, {
    quote: "An unexamined life is not worth living.",
    author: "Socrates"
  }, {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen"
  }, {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  }, {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi"
  }, {
    quote: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey"
  }, {
    quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso"
  }, {
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus"
  }, {
    quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou"
  }, {
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn"
  }, {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  }, {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  }, {
    quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe"
  }, {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
  }, {
    quote: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar"
  }, {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin"
  }, {
    quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh"
  }, {
    quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle"
  }, {
    quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus"
  }, {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  }, {
    quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau"
  }, {
    quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck"
  }, {
    quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington"
  }, {
    quote: "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb"
  }, {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt"
  }, {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  }, {
    quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato"
  }, {
    quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides"
  }, {
    quote: "Start where you are. Use what you have.  Do what you can.",
    author: "Arthur Ashe"
  }, {
    quote: "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon"
  }, {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb"
  }, {
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller"
  }, {
    quote: "Everything has beauty, but not everyone can see.",
    author: "Confucius"
  }, {
    quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank"
  }, {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu"
  }, {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou"
  }, {
    quote: "Happiness is not something readymade.  It comes from your own actions.",
    author: "Dalai Lama"
  }, {
    quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg"
  }, {
    quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle"
  }, {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb"
  }, {
    quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown"
  }, {
    quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie"
  }, {
    quote: "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  }, {
    quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
  }, {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  }, {
    quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  }, {
    quote: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  }, {
    quote: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong"
  }, {
    quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan"
  }, {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin"
  }, {
    quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby"
  }, {
    quote: "A person who never made a mistake never tried anything new.",
    author: " Albert Einstein"
  }, {
    quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb"
  }, {
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach"
  }, {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
  }, {
    quote: "You become what you believe.",
    author: "Oprah Winfrey"
  }, {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh"
  }, {
    quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown"
  }, {
    quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers"
  }, {
    quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren"
  }, {
    quote: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray"
  }, {
    quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens"
  }, {
    quote: "Education costs money.  But then so does ignorance.",
    author: "Sir Claus Moser"
  }, {
    quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks"
  }, {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  }, {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey"
  }, {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama"
  }, {
    quote: "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou"
  }, {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }, {
    quote: "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr."
  }, {
    quote: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt"
  }, {
    quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins"
  }, {
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  }, {
    quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison"
  }, {
    quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills"
  }, {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  }, {
    quote: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses"
  }, {
    quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand"
  }, {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford"
  }, {
    quote: "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln"
  }, {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
  }, {
    quote: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin"
  }, {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn"
  }, {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }, {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar"
  }];
  var btn = document.getElementById("generate-btn");
  btn.addEventListener('click', function () {
    var random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    document.getElementById("quote-content").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55168" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map