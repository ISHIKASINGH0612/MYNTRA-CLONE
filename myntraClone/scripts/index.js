let bagItems;
onLoad();

function onLoad()
{
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems=bagItemStr?JSON.parse(bagItemStr):[];
displayItemOnHomepage();
displayBagIcon();
}
function addToBag(itemId)
{
bagItems.push(itemId);
localStorage.setItem('bagItems' , JSON.stringify(bagItems));
displayBagIcon();

}
 function displayBagIcon()
 {
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItems.length>0)
  {bagItemCountElement.innerText=bagItems.length;
    bagItemCountElement.style.visibility='visible';
  }
  else
  {
    bagItemCountElement.style.visibility='hidden';
  }
 }

function displayItemOnHomepage()
{

  let itemContainerElement=document.querySelector('.item-container');


// let item={
//   item_image: 'images/mc1.jpg' ,
//   rating:
//   {
//     stars:4.5,
//     reviews:1.4,
//   } ,
//   company_name: 'Carlton London' ,
//   item_name:'Rhodium-Plated CZ Floral Studs' ,
//   current_price:'Rs. 606' , 
//   orignal_price:'Rs. 1045' ,
//   discount:'(42% OFF)',
// }



let innerHtml='';
items.forEach(item=>
  {
    innerHtml+=` <div class="item1-container">
    
      <img  class="item-image" src=${item.image} alt="item-image">
      <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
      
        <span class="current-price">${item.current_price}</span>
        <span class="orignal-price">${item.original_price}</span>
        <span class="discount">${item.discount_percentage}</span>
      </div>
      <button class="Add-to-bag" onclick="addToBag(${item.id});">Add to bag</button>
    </div>
    </div>`
  }
);

itemContainerElement.innerHTML=innerHtml;
}