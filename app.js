let address = {
    street: 'XD Street',
    city: 'XD',
    zipCode: 6969
};

function showAddress(address){
    for (let key in address)
        console.log(`${key}, ${address[key]}`);
}

showAddress(address);