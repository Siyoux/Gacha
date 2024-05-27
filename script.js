const people = [
    "Orang 1", "Orang 2", "Orang 3", "Orang 4", "Orang 5", "Orang 6",
    "Orang 7", "Orang 8", "Orang 9", "Orang 10", "Orang 11", "Orang 12",
    "Orang 13", "Orang 14", "Orang 15", "Orang 16", "Orang 17", "Orang 18",
    "Orang 19", "Orang 20", "Orang 21", "Orang 22", "Orang 23", "Orang 24",
    "Orang 25", "Orang 26", "Orang 27", "Orang 28", "Orang 29", "Orang 30",
    "Orang 31", "Orang 32", "Orang 33", "Orang 34", "Orang 35", "Orang 36"
];

document.getElementById('gachaButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    const selectedPerson = people[randomIndex];
    document.getElementById('result').textContent = `Anda mendapatkan: ${selectedPerson}`;
});
