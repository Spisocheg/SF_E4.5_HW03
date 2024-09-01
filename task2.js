const parent = {
    field1: 'field1',
    field2: 99
};

const child = Object.create(parent);
child.ownField1 = 'own field1';
child.ownField2 = 30;


function task2(str, obj) {
    for (let key in obj) {
        if (key == str) {       
            return true;
        }
    }

    return false;
}


console.log(task2('field2', child));
// true
