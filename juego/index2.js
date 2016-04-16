var Game = function(canvasId) {
  var canvas = document.getElementById(canvasId);
  var screen = canvas.getContext('2d');//webgl
  this.size = {
    x: canvas.width,
    y: canvas.height
  };

  this.bodies = createInvaders(this).concat(new Player(this));

  var self = this;
  var tick = function() {
    self.update();
    self.draw(screen);
    requestAnimationFrame(tick); //60fps
  };

  tick();
};

Game.prototype = {
  addBody: function(body) {
    this.bodies.push(body);
  },

  update: function() {
    var bodies = this.bodies;

    var notCollidingWithAnything = function(b1) {
      return bodies.filter(function(b2) {
        return isColliding(b1, b2);
      }).length === 0;
    };

    this.bodies = this.bodies.filter(notCollidingWithAnything);

    for (var i = 0, len = this.bodies.length; i < len; i ++) {
      this.bodies[i].update();
    }
  },

  draw: function(screen) {
    screen.clearRect(0, 0, this.size.x, this.size.y);
    for (var i = 0, len = this.bodies.length; i < len; i ++) {
      this.bodies[i].draw(screen);
    }
  }
};

var Player = function(game) {
  this.game = game;
  this.size = {
    x: 15,
    y: 15
  };

  this.center = {
    x: game.size.x / 2,
    y: game.size.y - this.size.y
  };

  this.keyboarder = new Keyboarder();
};

Player.prototype = {
  update: function() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2;
    }
    if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
      var bullet = new Bullet(
        { x: this.center.x, y: this.center.y - this.size.y },
        {x: 0, y: -7}
      );
      this.game.addBody(bullet);
    }
  },

  draw: function(screen) {
    drawRect(screen, this);
  }
};

var Bullet = function(center, speed) {
  this.center = center;
  this.speed = speed;
  this.size = {
    x: 3,
    y: 3
  };
};

Bullet.prototype = {
  update: function() {
    this.center.x += this.speed.x;
    this.center.y += this.speed.y;
  },

  draw: function(screen) {
    drawRect(screen, this);
  }
};

var Keyboarder = function() {
  var keyState = {};

  window.onkeyup = function(e) {
    keyState[e.keyCode] = false;
  };
  window.onkeydown = function(e) {
    keyState[e.keyCode] = true;
  };
  this.isDown = function(keyCode) {
    return keyState[keyCode];
  };

  this.KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
  };
};

var Invader = function(center) {
  this.center = center;
  this.size = {x: 15, y: 15};
  this.speedX = 0.3;
  this.patrolX = 0;
};

Invader.prototype = {
  update: function() {
    if (this.patrolX < 0 || this.patrolX > 40) {
      this.speedX = -this.speedX;
    }

    this.center.x += this.speedX;
    this.patrolX += this.speedX;
  },

  draw: function(screen) {
    drawRect(screen, this);
  }
};

var createInvaders = function(game) {
  var invaders = [];
  for (var i = 0; i < 24; i++) {
    var x = 35 + ( i % 8) * 30;
    var y = 35 + ( i % 3) * 30;
    invaders.push(new Invader({ x: x, y: y}));
  }

  return invaders;
};

var isColliding = function(b1, b2) {
  return !(b1 === b2 ||
           b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
           b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
           b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
           b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2 );
};

var drawRect = function(screen, body) {
  screen.fillRect(
    body.center.x - body.size.x / 2,
    body.center.y - body.size.y / 2,
    body.size.x,
    body.size.y
  );
};

new Game('canvas');
