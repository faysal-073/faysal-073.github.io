var i;

for (i = 1; i<=30; i++){
    if( i%2 == 1){
        document.write(i,"<br>");
    }
}

function oddName (){
    var i;

for (i = 1; i<=30; i++){
    if( i%2 == 0){
        document.write(i,"<br>");
    }
}
}
oddName()


var y = custom(8,8);
function custom(a,b){
    return(a*b)

}
document.getElementById("demo").innerHTML=y;