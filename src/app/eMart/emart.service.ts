import { Injectable, DebugEventListener } from '@angular/core';
import { SubCategory } from './sub-category';
import { Category } from './category';
import { Item } from './item';
import { isNgTemplate } from '@angular/compiler';
import { Cart } from './cart';
import { Bill } from './bill';
import { Buyer } from './buyer';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class EmartService {
  
  categories : Category[];
  subCategories : SubCategory[];
  allItems : Item[];
  cartItems : Item[]; 
  items : Item[];
  cart: Cart;
  allBills: Bill[];
  allBuyers:  Buyer[];
  allSellers: Seller[];
  constructor() {
    this.categories = [{
                          id : 101,
                          name : 'Electronics',
                          brief : 'varieties of electronics like tv, ac,fridge etc'
                       },
                       {
                          id : 102,
                          name : 'Footwear',
                          brief : 'varieties of footwear slippers,flipflops etc'
                        },
                        {
                          id : 103,
                          name : 'Clothes',
                          brief : 'varieties of clothes like sarees,tops,kurthies etc'
                        }
                        ];
this.subCategories = [{
        id : 501,
        name :'TV',
        categoryId : 101,
        brief : 'LED HD',
        gstPercent : 10
      },
      {
        id : 502,
        name :'Mobile',
        categoryId : 101,
        brief : 'Liquid Retina display',
        gstPercent : 10
      },
      {
        id : 503,
        name :'Shoes',
        categoryId : 102,
        brief : 'shoes from nike',
        gstPercent : 5
      },
      {
        id : 504,
        name :'Slippers',
        categoryId : 102,
        brief : 'smooth and water proof',
        gstPercent : 2
      },
      {
        id : 505,
        name :'Winterwear',
        categoryId : 103,
        brief : 'Leather coated',
        gstPercent : 20
      },
      {
        id : 506,
        name :'Saree',
        categoryId : 103,
        brief : 'Cotton fabric',
        gstPercent : 18
      }];
this.allItems = [{
      id : 701,
      name : 'Samsung TV',
      categoryId : 101,
      subCategoryId : 501,
      price : 50000,
      description : 'Smart HD TV',
      stock : 74,
      remarks : 'good',
      image : 'https://images.unsplash.com/photo-1580897275296-87979517bd4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
   },
  {
    id : 702,
    name : 'Sony TV',
    categoryId : 101,
    subCategoryId : 501,
    price : 60000,
    description : 'Smart HD TV,with 3d display',
    stock : 80,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 703,
    name : 'iphone XR',
    categoryId : 101,
    subCategoryId : 502,
    price : 50000,
    description : 'Liquid Retina display',
    stock : 38,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 704,
    name : 'OnePlus 7T',
    categoryId : 101,
    subCategoryId : 502,
    price : 34999,
    description : 'Dual Core processor',
    stock : 75,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1564878964095-8e73a3ab690d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 705,
    name : 'Sparx Canvas shoes',
    categoryId : 102,
    subCategoryId : 503,
    price : 6999,
    description : 'Cushioned footbed',
    stock : 96,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1579446565308-427218a2c60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 706,
    name : 'Hybrid NX Ozone',
    categoryId : 102,
    subCategoryId : 503,
    price : 7999,
    description : 'Textured and patterned outsole',
    stock : 58,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1553610851-294a26d51514?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 707,
    name : 'Earton slippers',
    categoryId : 102,
    subCategoryId : 504,
    price : 389,
    description : 'Trending and Unique Style Flip Flops',
    stock : 36,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1543420629-5350879dd4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 708,
    name : 'Kreuzer slippers',
    categoryId : 102,
    subCategoryId : 504,
    price : 559,
    description : 'Men Synthetic Leather Flip Flops',
    stock : 85,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1529447105779-c529acf6d60b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 709,
    name : 'Fuzzy Chunky Knit Sweater',
    categoryId : 103,
    subCategoryId : 505,
    price : 559,
    description : 'Wine Floral Asymmetric Hem Shrug',
    stock : 21,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1521060413616-2a0cf7c2b98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 710,
    name : 'Fleece Jackets',
    categoryId : 103,
    subCategoryId : 505,
    price : 1499,
    description : 'Fog Grey Plain Puffer Jacket',
    stock : 20,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1581056325587-d6c4020d4a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 711,
    name : 'Tikhi Imli',
    categoryId : 103,
    subCategoryId : 506,
    price : 1998,
    description : 'Black Embellished Poly Georgette Saree',
    stock : 15,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1578681140818-d89e3f986631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id : 712,
    name : 'GoSriKi',
    categoryId : 103,
    subCategoryId : 506,
    price : 1998,
    description : 'Black & Grey Art Silk Colourblocked Mysore Silk Saree',
    stock : 10,
    remarks : 'good',
    image : 'https://images.unsplash.com/photo-1559548160-f30d317a4e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
  }];
  this.allBuyers = [{
    id:101,
    username:'Shan',
    password:'sha',
    email:'shan@gmailcom',
    mobile:7729880770,
    date:'19/02/2020'
  },
  {
    id:102,
    username:'Gaayi',
    password:'gaa',
    email:'gaayi@gmailcom',
    mobile:6303799615,
    date:'19/02/2022'
  }
];
this.allSellers = [{
    id:201,
    username:'Ashu',
    password:'ashu',
    company:'abc',
    gst:6,
    brief:"description",
    address:'Chennai',
    email:'ashu@gmail.com',
    website:'alibaba.com',
    contact:9876543210
  },
  {
    id:202,
    username:'Sana',
    password:'sana',
    company:'xyz',
    gst:7,
    brief:"description",
    address:'Chennai',
    email:'sana@gmail.com',
    website:'shaik.com',
    contact:8974561320
  }
];
  this.cartItems = [];
  this.allBills = [];
}  
getAllItems():Item[]{
return [].concat(this.allItems);
}                  
getCategories():Category[]{
return [].concat(this.categories);
}
getSubCategories():SubCategory[]{
return [].concat(this.subCategories);
} 
getItem(itemId: string): Item{
  let item: Item;
  let size = this.allItems.length;
  for(let i=0;i<size;i++){
    if(this.allItems[i].id == +itemId){
       // item = this.allItems[i];
       item = {
                id : this.allItems[i].id,
                name : this.allItems[i].name,
                categoryId : this.allItems[i].categoryId,
                subCategoryId : this.allItems[i].subCategoryId,
                price : this.allItems[i].price,
                description : this.allItems[i].description,
                stock : this.allItems[i].stock,
                remarks : this.allItems[i].remarks,
                image : this.allItems[i].image
              };
        break;
    }
}
return item;
}
addToCart(itemId: number){
  let item:Item = this.getItem(itemId+'');
  this.cartItems.push(item);
}
getAllCart(){
 return [].concat(this.cartItems);
}
deleteCartItem(itemId: number)
{
  let size = this.cartItems.length;
  for(let i=0; i<size; i++)
  {
    if(this.cartItems[i].id == itemId)
    {
      this.cartItems.splice(i,1);
    }
  }
}
addBill(buyerId: string, buyerDate: string, amt: number) {
  let billSize = this.allBills.length;
  let bill: Bill = {
    id: ++billSize,
    buyerId: +buyerId,
    type: 'Debit',
    date: buyerDate,
    remarks: 'good',
    item: this.cartItems,
    amount: amt
  }
  this.allBills.push(bill);
  this.cartItems = [];

}
getAllBills()
  {
        return [].concat(this.allBills);
  }
  validateBuyer(username:string,password:string){
    let buyer: Buyer;
    let size = this.allBuyers.length;
    for(let i=0;i<size;i++)
    {
      if(this.allBuyers[i].username==username && this.allBuyers[i].password==password)
      {
        buyer = {
                  id:this.allBuyers[i].id,
                  username: this.allBuyers[i].username,
                  password: this.allBuyers[i].password,
                  email: this.allBuyers[i].email,
                  date: this.allBuyers[i].date,
                  mobile: this.allBuyers[i].mobile
        }
        break;
      }
    }
    return buyer;

  }
  validateSeller(username:string,password:string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0;i<size;i++)
    {
      if(this.allSellers[i].username==username && this.allSellers[i].password==password)
      {
        seller = {
                  id:this.allSellers[i].id,
                  username: this.allSellers[i].username,
                  password: this.allSellers[i].password,
                  email: this.allSellers[i].email,
                  company:this.allSellers[i].company,
                  gst:this.allSellers[i].gst,
                  brief:this.allSellers[i].brief,
                  address:this.allSellers[i].address,
                  website:this.allSellers[i].website,
                  contact:this.allSellers[i].contact
        }
        break;

      }
    }
    return seller;
  }
}