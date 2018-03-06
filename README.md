# Boomtown Starter

## Installation

Download the repo, then run:

```bash
cd client && npm install
```

## Start-up

From inside the `client` directory, run:

```bash
npm run dev
```

to open json-server
json-server --watch db.json -p 4000

npm install apollo-client-preset react-apollo graphql-tag graphql --save
ApolloProvider

query getItem($itemid:ID){
item(id:$itemid) {
title
available
}
}

query getUser($userid:ID) {
user(id:$userid)
{
fullname
}
}
query getUsers {
users {
fullname
}
}
query getItems{
items{
title
}
}
{
"userid": "LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2",
"itemid": "3"
}

const mapStateToProps = state => ({
isLoading: state.profile.isLoading,
itemsData: state.profile.itemsData,
error: state.profile.error
});
Happy coding :)

INSERT INTO items (id, title, description, imageurl) VALUES (1, 'Miscellaneous Dishes', 'Eat off of real plates and bowls at your next dinner party. Adulting FTW.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fmisc-dishes.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (2, 'Camp Stove', 'All you need to cook gourmet meals on your next trek into the wild.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fcamp-stove.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (3, 'Flute', 'Like-new flute to lend. Cmon, you know you want to play it...','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fflute.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (4, 'Hatchet', 'Chop things down, show nature who is boss. But be safe—alcoholic beverage not included..','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fhatchet.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (5, 'Mix-Tape', 'What is on it? Who knows! Borrow it and find out. Tape deck not included.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fmix-tape.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (6, 'Learn To Code Books', 'Learn HTML, CSS, JavaScript, and jQuery in 800 pages or less.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fcode-books.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (7, 'Keyboard', 'Teach your cat to tickle these elephant-friendly (plastic) ivories.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fkeyboard.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (8, 'Baseball', 'Lightly-used baseball for you and your friend to enjoy at your next ball tournament.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fbaseball.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (9, 'Skateboard', 'Relive your youth! And try not to seriously injure yourself while doing it!','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fskateboard.jpg?alt=media');
INSERT INTO items (id, title, description, imageurl) VALUES (10,'Iron and Ironing Board', 'Dress for the job you want, not the one you have, with freshly pressed shirts and slacks.','https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Firon-and-board.jpg?alt=media');
