class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    static distance(point1, point2){
        let x_dif = point1.x - point2.x;
        let y_dif = point1.y - point2.y;
        return Math.sqrt(x_dif ** 2 + y_dif ** 2);
    };

};

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
