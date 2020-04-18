const menu ={
  
  
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizersIn){
    this._courses.appetizers.push(appetizersIn);
  },
  set mains(mainsIn){
    this._courses.mains.push(mainsIn);
  },
  set desserts(dessertsIn){
    this._courses.desserts.push(dessertsIn);
  },
  
  get courses(){
    
    return{
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    };
  //or return this._courses;
  },
  addDishToCourse(courseName,dishName,dishPrice)
  {

    const dish={
      dishName:dishName,
      dishPrice:dishPrice
    };
    
 
    if(courseName==='appetizers'){
      
      this.appetizers=dish;
    }
    else if(courseName==='mains'){
      this.mains=dish;
    }
    else if(courseName==='desserts'){
      this.desserts=dish;
    }
     
  },
  getRandomDishFromCourse(courseName){

	let dish=this.courses[courseName];
	let randomIndex=Math.floor(Math.random()*dish.length);
  console.log(dish[randomIndex]);
	return dish[randomIndex];
	

	},

	generateRandomMeal(){

		let appetizer=this.getRandomDishFromCourse('appetizers');
		let mains=this.getRandomDishFromCourse('mains');
		let desserts=this.getRandomDishFromCourse('desserts');

		let totalPrice=appetizer.dishPrice+mains.dishPrice+desserts.dishPrice;
		
		return `Your meal is ${appetizer.dishName},${mains.dishName},${desserts.dishName} and the total price is ${totalPrice}`;

	},


	



};


menu.addDishToCourse('appetizers','Caesar Salad',4.25);
menu.addDishToCourse('appetizers','Biryani',6.25);
menu.addDishToCourse('appetizers','chicken',8.25);


menu.addDishToCourse('mains','A',5.25);
menu.addDishToCourse('mains','B',6.25);
menu.addDishToCourse('mains','C',7.25);


menu.addDishToCourse('desserts','Vaneela',5.25);
menu.addDishToCourse('desserts','Pineapple',6);
menu.addDishToCourse('desserts','mix fruit',12);



let meal=menu.generateRandomMeal();
console.log(meal);