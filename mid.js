document.addEventListener("DOMContentLoaded", function () {
    const publicationsContainer = document.getElementById("publications-container");
    const api = "https://teresurya.github.io/website/mid.json";
  
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const books = data.books.filter((book) => book.published);
        books.forEach((book) => {
          const publicationElement = document.createElement("div");
          publicationElement.classList.add("publication");
  
          const publicationImage = document.createElement("img");
          publicationImage.src = "vol1_trans_cover.png"; 
          publicationImage.alt = book.title;
  
          const publicationTitle = document.createElement("h3");
          publicationTitle.textContent = book.title;
  
          const publicationDescription = document.createElement("p");
          publicationDescription.textContent = `Year: ${book.year}`;
  
          publicationElement.appendChild(publicationImage);
          publicationElement.appendChild(publicationTitle);
          publicationElement.appendChild(publicationDescription);
  
          publicationsContainer.appendChild(publicationElement);
        });
      })
      .catch((error) => console.error(error));
  });
  