import React from 'react';
import { v1 } from 'uuid';


test('should filter people over 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should select courses cheaper than 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ];
    const cheapCourses = courses.filter(course => course.price < 160);
    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('React');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: v1(), title: 'bread', isDone: false},
        {id: v1(), title: 'milk', isDone: true},
        {id: v1(), title: 'salt', isDone: false},
        {id: v1(), title: 'sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('milk')
    expect(completedTasks[1].title).toBe('sugar')
})

test('get only non-completed tasks', () => {
    const tasks = [
        {id: v1(), title: 'bread', isDone: false},
        {id: v1(), title: 'milk', isDone: true},
        {id: v1(), title: 'salt', isDone: false},
        {id: v1(), title: 'sugar', isDone: true},
    ]

    const noncompletedTasks = tasks.filter(task => !task.isDone)

    expect(noncompletedTasks.length).toBe(2)
    expect(noncompletedTasks[0].title).toBe('bread')
    expect(noncompletedTasks[1].title).toBe('salt')
})