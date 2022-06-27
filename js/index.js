
class Products { // clase
    constructor(id, name, price, description, image, category, stock) { //funcion contructora producto
        this.id = id //atributos
        this.name = name //atributos
        this.price = price //atributos
        this.description = description //atributos
        this.image = image //atributos
        this.category = category //atributos
        this.stock = stock //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getImage() { //funciones o metodos
        return this.image
    }
    getCategory() { //funciones o metodos
        return this.category
    }
    getStock() { //funciones o metodos
        return this.stock
    }
    getCalcularPrecio() { //funciones o metodos 
        return this.price * this.stock
    }
    getIva() { //funciones o metodos
        return this.price * this.stock * 0.19   //funciones o metodos
    }
}

//crear lista de products en arreglo
const CreateNewProducts =[]
CreateNewProducts.push(new Products(101,"Anillo Oro",80000,"anillo de oro",'./img/anillo_oro.jpg',1,10))
CreateNewProducts.push(new Products(102,"Anillo Plata",10000,"anillo de plata","./img/anillo_plata.jpg",1,20))
CreateNewProducts.push(new Products(103,"Anillo Platino",50000,"Anillo de platino","./img/anillo_platino.jpeg",1,30))
CreateNewProducts.push(new Products(104,"Collar Oro",80000,"Collar de Oro","./img/collar_oro.jpeg",2,40))
CreateNewProducts.push(new Products(105,"Pulsera Oro",10000,"Pulsera de oro","./img/pulsera_oro.jpeg",3,50))
CreateNewProducts.push(new Products(106,"Pulsera Plata",80000,"Pulsera de Plata","./img/pulsera_plata.jpeg",3,60))

let containerProducts = document.getElementById('containerProducts')  //pintar la pantalla del html vía JS
CreateNewProducts.map((el) => containerProducts.innerHTML+= `<div> 
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <p> <h1>${el.name}</h1></p> 
                <p> <img class="item-image" src=${el.image}></p> 
                    <div class="item-details">
                        <p><h3> c/u: $${el.price.toLocaleString()} </h3> Cant:${el.stock} </p>
                        <button id=${el.id} class="boton" >Agregar a carrito </button> 
                    </div>
            </div>
        </div>
    </div>
</div>`)

//esto es solo para el ejemplo del localStorage
let carrito;
if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito =JSON.parse(localStorage.getItem('carrtio'))
}


let boton = document.getElementsByClassName("boton");

class CartElements{
    constructor(name, price, stock){ 
        this.name = name;
        this.price = price; 
        this.stock = stock;
    }
}
const cart = [];

function cartLoad(name, price, stock){
    cart.push(new CartElements(name, price, stock))
}

for (let i = 0; i <= CreateNewProducts.length; i++){
    let name = CreateNewProducts[i].name;
    let price = CreateNewProducts[i].price;   
    let stock = CreateNewProducts[i].stock;

    boton[i].addEventListener("click", () => { cartLoad(name, price, stock) 
         console.log(cart)} )
}

//mostrar el stock por pantalla cuando presiono el boton agregar a carrito.
let containerShoppingCart = document.getElementById('containerShoppingCart')  //pintar la pantalla del html vía JS
cart.map((el) => containerShoppingCart.innerHTML+= `
            <div> 
                <p> ${el.name}</p> 
                <p> $${el.price.toLocaleString()}</p>
                <p>Cant:${el.stock} </p>
             </div>`)





