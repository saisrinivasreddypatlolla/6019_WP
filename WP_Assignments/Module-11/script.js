var pass = "nivas";
var commentbox = [];

var comments = {
    init: function(){
        this.name=name;
        this.comment=comment;
    },
    discribe: function(){
        var disc = this.comment+"\n"+this.name;
        return disc;

    }
}
// comment();
function required(){
    var empt = document.forms["form1"]["field3"].value;
    if(pass===empt){
        alert("Your comment is successfully added");
        var a=Object.create(comments);
        a.init(document.getElementById('userInput').value,document.getElementById('field5"').value);
        commentbox.push(a);
        comment();
        
        
    } else{
        alert("Password is Invalid!");
    }
    // document.getElementById("form1").reset();
    return false;
}
function comment(){
    
    for(i=commentbox.length-1;i>=0;i++){
        document.getElementById("comm").value=commentbox[i].discribe();
    }
    
}

