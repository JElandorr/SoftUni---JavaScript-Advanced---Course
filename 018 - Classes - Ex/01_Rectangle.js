class Rectangle{
    constructor(width, height, color){
        if(typeof(width) == 'number'){
            this.width = width;    
        }else{
            throw new Error('Width must be a number value!');
        };
        if(typeof(height) == 'number'){
            this.height = height;
        }else{
            throw new Error('Heigth must be a number value!');
        };
        if(typeof(color) == 'string'){
            this.color = color;
        }else{
            throw new Error('Color must be a string value!');
        };
    }

    calcArea(){
        return this.width * this.height;
    }
};

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
