
module.exports = (genres) =>{
    let newList = []

    let total = Object.values(genres)

    total = total.reduce(function(a, b){return a+b;})

    // console.log(genres.length)
    for(var i=0; i< Object.keys(genres).length; i++){
    
        newList.push(JSON.parse(`{"${Object.keys(genres)[i]}":"${(Object.values(genres)[i]/total)*100}"}`))
    }
    console.log(newList)
}