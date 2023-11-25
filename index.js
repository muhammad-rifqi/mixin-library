class Mixin {
    
    static async toInt(string) {    
        return parseInt(string);
    }

    static async toInt(num) {    
        return num.toString();
    }

    
}
module.exports = Mixin;
