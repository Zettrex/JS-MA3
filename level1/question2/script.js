//Console.log out elements in JSON file
var jsonObj =  {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
};
for (i in jsonObj.video[0]){
    console.log(i + ": " + jsonObj.video[0][i]);
}
for (i in jsonObj.video[0].author.data[0]){
    console.log(i + ": " + jsonObj.video[0].author.data[0][i]);
}
