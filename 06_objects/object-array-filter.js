function filter(mass, property, meaning) {
    let resultmass = [];
    for (let object of mass) {
        if (object[property] === meaning)
            resultmass.push(object);
    }
    return resultmass;
}
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

console.log(filter(objects, 'name', 'Иван'));
// export default filter;

