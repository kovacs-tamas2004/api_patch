function frissit(){
    let postId = document.getElementById("poszt_szam").value;
    let cim = document.getElementById("poszt_cim").value;
    let tartalom = document.getElementById("poszt_tartalma").value;
    let obj = {};
    if(cim != ""){
        obj.title = cim;
    }

    if(tartalom != ""){
        obj.body = tartalom;
    }

    if(obj == {}){
        console.log("hiba");
    }
    else{
        console.log(obj);
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId, {method: 'PATCH',  body: JSON.stringify({  
        obj
    }), 
    headers: { 'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log("Valami hiba történt " + error));
    }
}