export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Oscar"
}

const passenger2: Passenger = {
    name: "Oscar2",
    children: ['Aggie', 'Marcelo']
}

const printChildren = (passenger: Passenger): number => {

    // const howMayChildren = passenger.children?.length || 0;
    const howMayChildren = passenger.children!.length;
    console.log(howMayChildren);

    return howMayChildren;
}

printChildren(passenger2);

