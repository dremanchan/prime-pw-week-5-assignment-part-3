console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, yearPublished, artist ) {
    collection.push(
        title,
        yearPublished,
        artist
    );
}


addToCollection('Modal Soul', 2005, 'Nujabes');
addToCollection('Impression', 2004, 'Nujabes');
addToCollection('Recto Verso', 2016, 'Paradis');
addToCollection('Tuxedo', 2015, 'Tuxedo');
addToCollection('Between Us', 2019, 'Hayden James');
addToCollection('Lucid', 2019, 'Raveena');

console.log(collection);

function showCollection( title, yearPublished, artist ) {
    for(i = 0; i < collection.length; i++){
        console.log((title), ' by ',(artist), ' published in ', (yearPublished));
    }
    console.log(collection.length);
    }

showCollection('Between Us');
showCollection(2016);
showCollection('Nujabes');