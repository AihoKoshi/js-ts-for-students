import React from 'react';

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => age > 90;

const oldAges = [100]; // >90

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

// < 160
const cheapPredicate = (course: CoursesType) => course.price < 160;

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150},
]

