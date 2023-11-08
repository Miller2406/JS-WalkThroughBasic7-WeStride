//จงเขียน Function แทนที่ในช่องว่างด้วยเครื่องหมาย '-'

function rePlaceSp(words) {
    const result = words.replaceAll(' ', '-')
    return result;
}

console.log(rePlaceSp('Hello World'));
console.log(rePlaceSp('Hello MY NAME IS BOB'));