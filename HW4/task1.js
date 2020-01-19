function numToObject(number) {
    if (typeof(number) != "number" || number < 0 || number > 999 || !Number.isInteger(number)) {
        return {}
    } else {
        return {'hundreds': Math.floor(number / 100), 
                'tens': Math.floor((number / 10) % 10),
                'units': number % 10
            };
    }
}

my_num = numToObject(714)
console.log(my_num)