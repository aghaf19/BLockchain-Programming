class Product 
{
    constructor(_name, _price) 
    {
        this.name = _name;
        this.price = _price;
    }
    get Name() 
    {
        return this.name;
    }
    get Price() 
    {
        return this.price;
    }
}
class Basket 
{
    constructor() 
    {
        this.products = [];
    }

    addProduct(amount, product) 
    {
        //this.products.push(...Array(amount).fill(product));
        console.log(this.products.push(...Array(amount).fill(product)));
    }
    get calculateTotal() 
    {
        return this.products.map(function (product) 
        {
            return product.Price
        })
            .reduce(function (a,b)
            {
                return a + b;
            }, 0);
    }
    get printShoppingInfo() 
    {
        let total = this.calculateTotal;
        console.log('One has to pay in total: ' + total);
    }
}
const TShrits = new Product('T-Shrits',800);
const Shoes = new Product('Shoes',6000);
const Jacket = new Product('Jacket',9000);
const Shrits = new Product('Shrits',2700);
const Jeans = new Product('Jeans',2700);
const basket = new Basket();
basket.addProduct(3,T-Shrits);
basket.addProduct(3,Shrits);
basket.addProduct(3,Jeans);
basket.addProduct(2,Shoes);
basket.addProduct(5,Jacket);

basket.printShoppingInfo;
