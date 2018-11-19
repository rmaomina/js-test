class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} stopped.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit ('White Rabbit');

rabbit.run(10);  //White rabbit runs 
rabbit.stop();