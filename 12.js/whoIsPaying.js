function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        const numOfNames = names.length;
        let randNameIndex = Math.floor(Math.random()*numOfNames);
        return `${names[randNameIndex]} is going to buy lunch today!`;
    
    /******Don't change the code below*******/    
    }