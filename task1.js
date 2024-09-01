const parent = {
    field1: 'field1',
    field2: 99
};

const child = Object.create(parent);
child.ownField1 = 'own field1';
child.ownField2 = 30;


function task1(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, ':', obj[key]);
        }
    }
}


task1(child);
// ownField1 : own field1
// ownField2 : 30
