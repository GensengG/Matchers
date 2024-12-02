import { charactersSort } from "../src/game.js";

const charactersList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'лучник', health: 50},
    {name: 'маг', health: 45},
    {name: 'мечник', health: 90},
];

const charactersSortTest = test.each(charactersList);


charactersSortTest("testing charactersSort function", () => {
    const rightArray = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 45},
        {name: 'лучник', health: 50},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 90},
        {name: 'маг', health: 100},
    ];

    const existingArray = charactersSort(charactersList);

    expect(rightArray).toEqual(existingArray); 
})
