class Rectangle {
    constructor(length, width) {
        if (length <= 0 || width <= 0) {
            throw new Error("Invalid input. Both length and width must be positive numbers.");
        }
        this.length = length;
        this.width = width;
    }

    get area() {
        return this.length * this.width;
    }

    get perimeter() {
        return 2 * (this.length + this.width);
    }

    isSquare() {
        return this.length === this.width;
    }

    toString() {
        return `Length: ${this.length} cm, Width: ${this.width} cm, Area: ${this.area} square units, Perimeter: ${this.perimeter} units`;
    }
}

class Plant {
    constructor(type, length, width) {
        this.type = type;
        this.rectangle = new Rectangle(length, width);
        this.notes = '';
    }

    toString() {
        return `${this.type}: ${this.rectangle.toString()}\nNotes: ${this.notes}`;
    }
}

class Garden {
    constructor(length, width) {
        this.rectangle = new Rectangle(length, width);
        this.plants = [];
    }

    addPlant(plant) {
        this.plants.push(plant);
    }

    get totalArea() {
        return this.rectangle.area;
    }

    get totalPerimeter() {
        return this.rectangle.perimeter;
    }

    toString() {
        return `Garden Size: ${this.rectangle.toString()}\nTotal Area of All Plants: ${this.totalArea} square units\nTotal Perimeter of All Plants: ${this.totalPerimeter} units`;
    }
}

function getUserInput() {
    const gardenLength = parseFloat(prompt("Enter the length of your garden (in cm):"));
    const gardenWidth = parseFloat(prompt("Enter the width of your garden (in cm):"));

    const garden = new Garden(gardenLength, gardenWidth);

    while (true) {
        const type = prompt("Enter the type of plant (or 'done' to finish):");
        if (type.toLowerCase() === 'done') {
            break;
        }

        const length = parseFloat(prompt(`Enter the length of ${type} (in cm):`));
        const width = parseFloat(prompt(`Enter the width of ${type} (in cm):`));

        const plant = new Plant(type, length, width);

        const notes = prompt(`Enter any notes or descriptions for ${type}:`);
        if (notes) {
            plant.notes = notes;
        }

        garden.addPlant(plant);
    }

    return garden;
}

try {
    const garden = getUserInput();

    console.log("Your Garden Information:");
    console.log(garden.toString());

    if (garden.plants.length > 0) {
        console.log("\nPlant Care Recommendations:");

        garden.plants.forEach((plant, index) => {
            console.log(`Plant ${index + 1} (${plant.type}):`);
            console.log(plant.notes ? `Notes: ${plant.notes}` : "No notes available.");
            console.log(`Recommended care instructions for ${plant.type}.`);
            console.log('-----------------------------------------');
        });
    }
} catch (error) {
    console.error(error.message);
}
