class Facts {
    constructor(name, population, continent) {
        this.Name = name,
            this.Population = population,
            this.Continent = continent
    }
}

function cityFacts(fact) {
    console.log(`${fact.Name} has a population of ${fact.Population} and is situated in ${fact.Continent}`);
}

let city = new Facts("Paris", "2,140,526", "Europe");
cityFacts(city);