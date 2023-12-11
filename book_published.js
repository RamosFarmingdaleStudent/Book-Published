function makeClass(){
    class Book{
        constructor(author, title, release){
            this._author = author;
            this._title = title;
            this._release = release;
        }
    
        get writer(){
            return this._author;
        }
    
        set writer(updatedAuthor){
            this._author = updatedAuthor;
        }
    
        get name(){
            return this._title;
        }
    
        set name(updatedTitle){
            this._title = updatedTitle;
        }
    
        get year(){
            return this._release;
        }
    
        set year(updatedRelease){
            this._release = updatedRelease;
        }
    }
    return Book;
}

const Book = makeClass();
const book = new Book('Yann Martel','Life of Pi',2001);
console.log(book);