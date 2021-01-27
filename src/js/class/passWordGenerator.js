class PassWordGenerator{
    constructor(n = 10) {
        this.password = [];
        this.numberOfPasswordCharacters = n;
    }

    init() {
        for(let i = 0; i < this.numberOfPasswordCharacters; i++) {
            this.password.push(this.generate());
        }
        
        return this.password.join("");
    }

    randomLetter() {
        let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        return alphabet[PassWordGenerator.getRandomArbitrary(0,alphabet.length + 1)];
    }

    randomSignal() {
        let signals = ['!','@','#','$','%','&','*','(',')','-','+','.',',',';','?','{','[','}',']','^','>','<',':'];
        
        return signals[PassWordGenerator.getRandomArbitrary(0,signals.length + 1)];
    }

    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generate() {
        let functions = [this.randomLetter(), this.randomSignal(), PassWordGenerator.getRandomArbitrary(0, 10)];

        return functions[PassWordGenerator.getRandomArbitrary(0,3)];
    }
    
}

export {PassWordGenerator};