class Bob {

    constructor(x, y, width, height) {

        this.body = Bodies.rectangle(x, y, width, height)

        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        noFill();
        strokeWeight(4);
        ellipseMode(CENTER)
        stroke("white");
        ellipse(pos.x, pos. y, this.width, this.height)


    }





}