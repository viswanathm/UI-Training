function Foo(){
    var z = 10; //private variable, becoz 'var' is used
    var y = function(){ return z }; //private variable, becoz 'var' is used

    this.a = 20; //public variable, becoz 'this.' is used
    this.b = function(){ return this.a }; //public variable, becoz 'this.' is used
    this.getZ = function(){ return z }; //public function, which accesses private variable
}

var f = new Foo();


// ------------


function Student(){
    var marks = 10; //private variable, becoz 'var' is used
    this.name = "";


    this.getMarks = function(){ return marks }; //public function, which accesses private variable
    this.getName = function(){ return this.name }; //public function, which accesses private variable
}

var viswanath = new Student();