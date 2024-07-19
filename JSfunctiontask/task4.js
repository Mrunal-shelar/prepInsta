function calculateCoffeeSupply(age ,cupsperday){
        const maxAge = 80; 
        const yearsRemaining = maxAge - age; 
        const totalCups = Math.round(yearsRemaining * cupsperday * 365); 
    
        console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
    }

    calculateCoffeeSupply(18,3);