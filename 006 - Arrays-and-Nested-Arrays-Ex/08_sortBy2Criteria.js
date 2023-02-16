function sortBy2Criteria(input) {
    input.sort(twoCritSort);

    function twoCritSort(curr, next) {
        if (curr.length === next.length) {
            return curr.localeCompare(next);
        }

        return curr.length - next.length;
    }

    console.log(input.join(`\n`));
}

sortBy2Criteria(["alpha", "beta", "gamma"]);
sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortBy2Criteria(["test", "Deny", "omen", "Default"]);
