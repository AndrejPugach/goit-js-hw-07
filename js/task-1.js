// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Parsley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>


const categories = document.querySelector('#categories');
const totalCaregories = categories.querySelectorAll('li.item');

  console.log(`Number of categories: ${totalCaregories.length}`);

totalCaregories.forEach(i => {
  const title = i.querySelector('h2').textContent;
  const count = i.querySelectorAll('ul li').length
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
  
}
)