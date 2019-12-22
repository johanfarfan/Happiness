//preparing a variable to contain the json file info
var transfer;
var maxIndex;

//declaring a new connection
var jsonConn = new XMLHttpRequest;

//preparing function for a state change, and filling up the variable when the connection is ready
jsonConn.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        transfer = JSON.parse(jsonConn.responseText);
        maxIndex = transfer.content.length;
        console.log('json connection ready, max index of the file ' + maxIndex);
        
        //transfer from json to html
        for (var i = 0; i < maxIndex; i++){
            if (transfer.content[i].id == "banner"){ document.getElementById('banner').innerHTML = transfer.content[i].content; }
            if (transfer.content[i].id == "social-interactions-header"){ document.getElementById('social-interactions-header').innerHTML = transfer.content[i].content; }
            if (transfer.content[i].id == "religion-header"){ document.getElementById('religion-header').innerHTML = transfer.content[i].content; }
            if (transfer.content[i].id == "wealth-header"){ document.getElementById('wealth-header').innerHTML = transfer.content[i].content; }
            if (transfer.content[i].id == "identity-header"){ document.getElementById('identity-header').innerHTML = transfer.content[i].content; }
            console.log(transfer.content[i].id);
        }
    }
}

//opening a file and sending the data
jsonConn.open('GET', 'js/content.json', true);
jsonConn.send();

