class Alfabet{
    constructor(){
        this.ALFABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.cont = null;
    }

    especNumberAlfabet(num){
        let arrPrint = [];

        if(num > 26){
            return "It's expecting a number between 1_26";
        }
        if(num < 1){
            return "It's expecting a number between 1_26";
        }

        this.cont = num;
        for(let i=0; i<this.cont; i++){
            arrPrint[i] = this.ALFABET[i];
        }
        this.cont = null;
        return arrPrint;
    }
}

module.exports = Alfabet;