/*We are preparing three types of content for a website:

Articles
Ads
Vacancies
All of those have a title and text. When showing the title, they are modified as follows: 
articles remain as they are, ads are shown in all caps and vacancies are appended with " - apply now!". 
The original title should still be retrievable, so no modification is permanent.

Have an array with two articles, one ad and one vacancy. Use this array to show all content types (title + text).

Bonus: an article can be marked as "breaking news". If this is the case, the title is prepended with "BREAKING: ". 
Extra bonus: display all the content with the appropriate html tags.*/
class content {
  newTitle;
  constructor(title, text, type, news = false) {
    this.title = title;
    this.text = text;
    this.type = type;
    this.news = news;
  }
  modifyTitle() {
    if (!this.news) {
      switch (this.type) {
        case "ad":
          return (this.newtitle = this.title.toUpperCase());
          break;
        case "vacancy":
          return (this.newtitle = this.title + " - apply now!");
          break;
        case "article":
          return (this.newtitle = this.title);
          break;
      }
    } else {
      switch (this.type) {
        case "ad":
          return (this.newtitle = "BREAKING: " + this.title.toUpperCase());
          break;
        case "vacancy":
          return (this.newtitle = "BREAKING: " + this.title + " - apply now!");
          break;
        case "article":
          return (this.newtitle = "BREAKING: " + this.title);
          break;
      }
    }
  }
}
const article1 = new content("Article 1", "bli bla blou", "article");
const article2 = new content("Article 2", "bli bla blou bli", "article");
const ad = new content("Revolutionnary product", "buy buy buy", "ad");
const vacancy = new content("Vacancy", "blou bla bla bli", "vacancy", true);
console.log(ad.modifyTitle());
const array = [article1, article2, ad, vacancy];

array.map((item) => console.log(item.modifyTitle(), item.text));
