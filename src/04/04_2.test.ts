import { v1 } from 'uuid';
import {CityType} from '../02/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04_2';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: v1(),
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'White street',
                        },
                },
            },
            {
                id: v1(),
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street:
                        {
                            title: 'Happy street',
                        },
                },
            },
            {
                id: v1(),
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street:
                        {
                            title: 'White street',
                        },
                },
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {street: {title: 'Central Str'}}
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: 'South Str'}}
            },
        ],
        citizensNumber: 1000000,
    }
})

test('Houses should be demolished', () => {
    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(2);
    expect(city.houses[1].address.street.title).toBe('White street');
})

test('Staff count check', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})