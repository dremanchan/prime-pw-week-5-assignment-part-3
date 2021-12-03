console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, yearPublished, artist ) {
    const album = {
        title: title,
        yearPublished: yearPublished,
        artist: artist
    }
    collection.push (album);
    return album;
}


addToCollection('Modal Soul', 2005, 'Nujabes');
addToCollection('Impression', 2004, 'Nujabes');
addToCollection('Recto Verso', 2016, 'Paradis');
addToCollection('Tuxedo', 2015, 'Tuxedo');
addToCollection('Between Us', 2019, 'Hayden James');
addToCollection('Lucid', 2019, 'Raveena');

console.log(collection);

function showCollection(array) {
    console.log('number of items:', collection.length);
    for(i = 0; i < collection.length; i++){
        console.log(`${collection[i].title}  by ${collection[i].artist}  published in ${collection[i].yearPublished}`);
    }
}

showCollection('Between Us');
showCollection(2016);
showCollection('Nujabes');

function findByArtist( artist ) {
    let array = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            array.push (collection[i]);
        }
    } return array;
}

console.log(findByArtist('Paradis'));