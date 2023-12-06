function isAutoBio(number) {
    const numberStr = String(number);
    for (let i=0; i < numberStr.length; i++){
        const digit = Number(numberStr[i]);
        const count = numberStr.split(String(i)).length -1;
        if (count !== digit) {
            return false;
        }

    }
    return true;
}

console.log(isAutoBio(1210));  

console.log(isAutoBio(1220));

//console.log(isAutoBio(2020));


