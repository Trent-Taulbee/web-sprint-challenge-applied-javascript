import axios from "axios";
import { response } from "express";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const cardDiv = document.createElement('div');
const headlineDiv = document.createElement('div');
const authorDiv = document.createElement('div');
const imgContainerDiv = document.createElement('div');
const authorNameSpan = document.createElement('span');
const authorImage = document.createElement('img');

cardDiv.appendChild(headlineDiv);
cardDiv.appendChild(authorDiv);
authorDiv.appendChild(imgContainerDiv);
authorDiv.appendChild(authorNameSpan);
imgContainerDiv.appendChild(authorImage);


cardDiv.classList.add('card');
headlineDiv.classList.add('headline');
authorDiv.classList.add('author');
imgContainerDiv.classList.add('img-container');
authorImage.classList.add('img');

headlineDiv.textContent = article.headline;
authorNameSpan.textContent = article.authorName;
authorImage.src=article.authorPhoto;


return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const API_URL = 'http://localhost:5001/api/articles';
const style = document.querySelector(selector);

  async function getArticles() {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.message);

    json.message.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add(style);

      const cardElement = document.createElement('div')
      cardElement.classList.add(Card);
      articleElement.appendChild(Card);
    })
  }
 return getArticles(API_URL);
  }


export { Card, cardAppender }
