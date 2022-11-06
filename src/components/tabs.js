import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

for (let i = 0; i < topics.length; i++) {
  const topicsElem = document.createElement('div');
  topicsElem.classList.add('tab');
  topicsDiv.appendChild(topicsElem);
  topicsElem.textContent = topics[i];
}
return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  function divCreate(input) {
const tabsArr = []
for (let i = 0; i <input.length; i++){
  tabsArr.push(Object.assign(document.createElement('div'), {
    className:input[i],
    textContent:input[i]
  }))
}
return tabsArr;
  }


const arrTopics = (topics) => {
  const topicsDiv = Object.assign(document.createElement('div'), {
    className: 'topics'
  })
  for (let i = 0; i < topics.length; i++){
    topicsDiv.appendChild(topics[i]);
  }
  return topicsDiv
}
const style = document.querySelector(selector);

axios.get(`http://localhost:5001/api/topics`)
  .then((resp) => {
    const topicsInfo = arrTopics(divCreate(resp.data.topics))
    style.appendChild(topicsInfo)
  })


}

export { Tabs, tabsAppender }
