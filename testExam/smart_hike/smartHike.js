class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        const listedPeaks = Object.keys(this.goals);

        const searchResult = listedPeaks.find((p) => p == peak);

        if (!searchResult) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {
        const listedPeaks = Object.keys(this.goals);

        const searchResult = listedPeaks.find((p) => p == peak);

        if (!searchResult) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error(
                `You don't have enough resources to start the hike`
            );
        }
        if (time * 10 > this.resources) {
            throw new Error(
                `You don't have enough resources to complete the hike`
            );
        } else {
            this.resources -= time * 10;
            const currentHike = [peak, time, difficultyLevel];
            this.listOfHikes.push(currentHike);
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    // rest(time) {}

    // showRecord() {}
}

const user = new SmartHike("Vili");
console.log(user.addGoal("Musala", 2925));
console.log(user.addGoal("Rui", 1706));
console.log(user.hike("Musala", 8, "hard"));
console.log(user.hike("Rui", 3, "easy"));
console.log(user.hike("Everest", 12, "hard"));
