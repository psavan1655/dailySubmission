class a{
constructor(id,name){
    this.id= id;
    this.name= name;
   }  
}
class b extends a{
    constructor(id1,name1){
        super(id1);
       
      
        this.name1= name1;  
        
    }  

}


const ma= new a("hiral",2011);
const mb= new b("hiralll",2000);
console.log(ma,mb);

// function
var x = myFunction(4, 3);
console.log(x);

function myFunction(a, b) {
  return a * b;
}

    const  person={
        fname: "hir",
        lname: "patew",
        fullName : function()
        {
            return this.fname + this.lname;
        }
    };
      console.log(person.fullName() ); 

    // class b extends a{
    //     constructor(id1,name1){
    //         super(id1);
           
          
    //         this.name1= name1;  
            
    //     }  
    
    // }
    
    
    // const ma= new a("hiral",2011);
    // const mb= new b("hiralll",2000);
    // console.log(ma,mb);