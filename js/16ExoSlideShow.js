class SlideShow {
  constructor(nb_images, width, height, speed) {
    // paramètres
    this.nb_images = nb_images;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.images = [];
    // Appel des méthodes
    this.feedSlideshow();

    // Rendu
    this.render();

    // Animation
    this.animateSlideShow();
  }
  feedSlideshow() {
    // Création des images
    for (let i = 0; i < this.nb_images; i++) {
      this.images.push(this.createImage());
    }
  }
  createImage() {
    // création d'une image
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://picsum.photos/${this.width}/${this.height}?id=${
        Math.random() * 1000
      }`
    );
    return img;
  }
  render() {
    const sectionSlideshow = this.createMarkup("section", "", document.body, [
      { name: "id", value: "slideshow" },
    ]);
    // Rendre les images visibles en les ajoutant à ma section d'id slideshow
    this.images.forEach((image, index) => {
      // seule la première image ne sera pas cachée (utilisation de hidden)
      if (index != 0) image.hidden = true;
      sectionSlideshow.appendChild(image);
    });
    console.log(`this`, this);
  }
  createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    attributes.forEach((attribute) => {
      if (
        attribute &&
        attribute.hasOwnProperty("name") &&
        attribute.hasOwnProperty("value")
      ) {
        markup.setAttribute(attribute.name, attribute.value);
      }
    });

    return markup;
  }
  animateSlideShow() {
    setInterval(() => {
      // récupère l'index de l'image actuellement affichée et mettre hidden à true
      let current_index_image = this.getCurrentImageIndex();
      //console.log(`current_index_image`, current_index_image);
      // Récupère l'index de l'image qu'il va falloir afficher et mettre hidden à false
      let next_index_image = (current_index_image + 1) % this.nb_images;
      console.log(`next_index_image`, next_index_image);
      this.images[current_index_image].hidden = true;
      this.images[next_index_image].hidden = false;
    }, this.speed);
  }
  getCurrentImageIndex() {
    let current_index = 0;
    this.images.forEach((image, index) => {
      if (!image.hidden) {
        current_index = index;
      }
    });
    return current_index;
  }
}
const firstSlideshow = new SlideShow(10, 1200, 800, 1500);
