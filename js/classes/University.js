import Dom from "./Dom.js";
export default class University extends Dom {
  constructor(name, web_pages) {
    super();
    this.name = name;
    this.web_pages = web_pages;

    this.render();
  }
  render() {
    const article = this.createMarkup("article", "", document.querySelector("#universities"),[{name:"class", value:"border p-3 col-md-3"}]);
    this.createMarkup("h2", this.name, article);
    this.createMarkup("p", this.web_pages, article);
  }
}