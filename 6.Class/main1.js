var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Point1.prototype.draw = function () {
        console.log('X:' + this.x + 'Y:' + this.y);
    };
    Object.defineProperty(Point1.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cant be less than zero');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point1;
}());
var point1 = new Point1(5, 2);
point1.draw();
point1.X = 10;
