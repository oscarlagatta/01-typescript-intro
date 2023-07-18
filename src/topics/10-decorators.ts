


function classDecorator<T extends { new (...args:any[]): {} }>(constructor: any) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = 'Ab123';

    print() {
        console.log('hello worlds')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
