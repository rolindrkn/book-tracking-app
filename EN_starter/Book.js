export class Book {
  constructor(title, author,description,currentPage,pages,read = false){
    this.title = title;
    this.author = author;
    this.description = description;
    this.currentPage= currentPage;
    this.pages = pages;
    this.read= read;
  }
  readBook(page){
    if (page < 1 || page > this.pages){
      return 0;
    }else if (page >= 1 && page < this.pages){
      this.currentPage = page;
      return 1;
     }else if(page === this.pages){
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}
const book1 =new Book ("Life 3.0", "Max Tegmark","Non-fiction", 300,384);
const book2 = new Book ("Think with Socrates", "Paul Herrick", "Non-fiction",414,414);
const book3 = new Book ("The Power Of Habit", "Charles Duhigg","Self-Help",0,375);

export const books = [book1, book2, book3];
