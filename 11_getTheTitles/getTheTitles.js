const getTheTitles = function(books) {
    const arrayTitles = [];
    //loop through array
    for(let book of books){
        console.log(book.title);
        if(book.title){
            arrayTitles.push(book.title)
        }
    }
    return arrayTitles;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
