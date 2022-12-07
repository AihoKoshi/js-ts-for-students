import {createGreetingMessage, ManType} from './05_01';

let people: Array<ManType>
beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Aleksandr Petrov', age: 24},
        {name: 'Dmitriy Sidorov', age: 18},
    ]
})

test('Should get array of greeting messages', () => {
    // let messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

    let messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrey. Welcome to IT-Incubator');
    expect(messages[1]).toBe('Hello Aleksandr. Welcome to IT-Incubator');
    expect(messages[2]).toBe('Hello Dmitriy. Welcome to IT-Incubator');
});