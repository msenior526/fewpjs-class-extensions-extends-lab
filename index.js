// Your code here
class Polygon {
    constructor(arrayOfSides) {
        this.arrayOfSides = arrayOfSides;
    }

    get countSides() {
        return this.arrayOfSides.length;
    }

    get perimeter() {
        return this.arrayOfSides.reduce((element, total) => {
            return total += element;
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [s1, s2, s3] = this.arrayOfSides;
        if (s1 + s2 > s3) {
            return true;
        } else if (s2 + s3 > s1) {
            return true;
        } else if (s3 + s1 > s2) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let [s1, s2, s3, s4] = this.arrayOfSides;
        return true;
    }

    get area() {
        return this.arrayOfSides[0] * this.arrayOfSides[1];
    }
}