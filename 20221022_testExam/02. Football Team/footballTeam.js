class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.map((p) => {
            let [name, age, playerValue] = p.split("/");
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find((p) => p.name == name);

            if (player) {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        });
        let result = [];

        this.invitedPlayers.map((player) => {
            result.push(player.name);
        });
        return `You successfully invite ${result.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");

        playerOffer = Number(playerOffer);

        let player = this.invitedPlayers.find((p) => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (player.playerValue > playerOffer) {
                let priceDifference = player.playerValue - playerOffer;
                throw new Error(
                    `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
                );
            } else {
                player.playerValue = "Bought";
            }
        }

        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        age = Number(age);

        let player = this.invitedPlayers.find((p) => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (player.age < age) {
                let ageDifference = age - player.age;
                if (ageDifference < 5) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                } else if (ageDifference > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else {
                return `${name} is above age limit!`;
            }
        }
    }

    transferWindowResult() {
        // console.log("this.invitedPlayers", this.invitedPlayers);

        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        // console.log("this.invitedPlayers", this.invitedPlayers);

        let result = [];

        this.invitedPlayers.map((player) => {
            let playerLine = `Player ${player.name}-${player.playerValue}`;

            result.push(playerLine);
        });

        return `Players list:\n${result.join("\n")}`;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
