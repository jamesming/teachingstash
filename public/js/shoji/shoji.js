//http://bootsnipp-env.elasticbeanstalk.com/iframe/VXbQV

Shoji = function (element) {
    this.offset = 0;
    var shoji = $(element);
    var door = shoji.find('.shoji-door');
    this.getDoor = function() { return door; };
    var leftPanel = shoji.find('.shoji-panel-left');
    this.getLeftPanel = function() { return leftPanel; };
    var rightPanel = shoji.find('.shoji-panel-right');
    this.getRightPanel = function() { return rightPanel; };
};

Shoji.prototype.slide = function (direction, width, duration, complete) {
    var operator;
    var offset;
    switch (direction) {
    case 'left':
        operator = '-=';
        offset = -width;
        break;
    case 'right':
        operator = '+=';
        offset = width;
        break;
    default:
        return;
    }
    this.getDoor().animate({ left: operator + width }, duration, 'linear', complete);
    this.offset += offset;
};

Shoji.prototype.toggle = function (direction, duration) {
    var offset = this.offset;
    var leftPanel = this.getLeftPanel();
    var rightPanel = this.getRightPanel();

    switch (direction) {
    case 'left':
        if (offset < 0) { // left
            this.slide('right', -offset, duration, function() { rightPanel.hide(); });
        } else if (offset == 0) { // docked
            rightPanel.show();
            this.slide('left', rightPanel.width(), duration);
        } else if (offset > 0) { // right
            this.slide('left', offset, duration, function() {
                leftPanel.hide();
                rightPanel.show();
                this.slide('left', rightPanel.width(), duration);
            });
        }
        break;
    case 'right':
        if (offset < 0) { // left
            this.slide('right', -offset, duration, function() {
                rightPanel.hide();
                leftPanel.show();
                this.slide('right', leftPanel.width(), duration);
            });
        } else if (offset == 0) { // docked
            leftPanel.show();
            this.slide('right', leftPanel.width(), duration);
        } else if (offset > 0) { // right
            this.slide('left', offset, duration, function() { leftPanel.hide(); });
        }
        break;
    }
};