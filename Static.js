
//********      Static calculator  ********    //
class Point 
{ 
    static displayName = "Point";
    static distance(x,y)
    {
    const dx = x;
    const dy = y;
    return Math.hypot(x, y);
    }
    static distance1(a,b)
    {
        const dx = a;
        const dy = b;
        return Math.pow(a, b);
    }
    static distance2(a)
    {
        const dx = a;
        return Math.sqrt ( a )
    }
    static distance3(a)
    {
        const dx = a;
        return Math.cbrt (a );
    }
    static distance4(a)
    {
        const dx = a;
        return Math.exp ( a ) ;
    }
    static distance5(a)
    {
        const dx = a;
        return Math.log10(a)
    }
    static distance6(a)
    {
        const dx = a;
        return Math.sign( a ) ;
    }
    static distance7(a)
    {
        const dx = a;
        return Math.ceil ( a ) ;
    }
}

console.log(Point.displayName);
console.log(Point.distance(5, 5)); 
console.log(Point.distance1(2, 3));
console.log(Point.distance2(2.2));
console.log(Point.distance3(2.2));
console.log(Point.distance4(2.2));
console.log(Point.distance5(2.2));
console.log(Point.distance6(2.2));
console.log(Point.distance7(2.2));

//********      Static Libaray  ********    //

class library 
{ 
    static displayName = "Shelf1";
    static book1(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book2(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book3(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book4(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book5(x)
    {
    const dx = x;
    return  (x) ;
    }
    static displayName1 = "Shelf2";
    static book1(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book2(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book3(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book4(x)
    {
    const dx = x;
    return  (x) ;
    }
    static book5(x)
    {
    const dx = x;
    return  (x) ;
    }
}
console.log(library.displayName);
console.log(library.book1("math")); 
console.log(library.book2("english"));
console.log(library.book3("physics"));
console.log(library.book4("chemistry"));
console.log(library.book5("accounts"));
console.log(library.displayName1);
console.log(library.book1("math1")); 
console.log(library.book2("english1"));
console.log(library.book3("physics1"));
console.log(library.book4("chemistry1"));
console.log(library.book5("accounts1"));
