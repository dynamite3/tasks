var inp=["X","O"]
var i=0
var j=0
var arr=[1,2,3,4,5,6,7,8,9]
var ctr=1

function fillData (val){
    ctr++;
    arr[val]=inp[(j++)%2];
    console.log(arr)

    var ne = document.createElement("h1")
    ne.innerText=inp[(i++)%2]
    ne.style.fontSize="100px";
    document.getElementById(val).appendChild(ne)
    

    if(checkwin()){
        alert("ITS PLAYER "+arr[val]+ " WIN")
    }

    if(ctr===10){
        alert("ITS DRAW");
        location.reload();
    }

}

 function checkwin(){
    if( (arr[0]===arr[1] && arr[0]===arr[2]) ||
        (arr[0]===arr[3] && arr[0]===arr[6]) ||
        (arr[0]===arr[4] && arr[0]===arr[8]) ||
        (arr[1]===arr[4] && arr[1]===arr[7]) ||
        (arr[2]===arr[5] && arr[2]===arr[8]) ||
        (arr[2]===arr[4] && arr[2]===arr[6]) ||
        (arr[3]===arr[4] && arr[3]===arr[5]) ||
        (arr[2]===arr[5] && arr[2]===arr[8]) || 
        (arr[6]===arr[7] && arr[6]===arr[8])
        )
        {
        return true;
        }
    else    
        return false;

 }

