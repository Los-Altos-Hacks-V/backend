
module.exports = (genres) =>{
    let newList = []

    let newGenres = genres.genrecount

    let total = Object.values(newGenres)

    total = total.reduce(function(a, b){return a+b;})

    // console.log(genres.length)
    for(var i=0; i< Object.keys(newGenres).length; i++){
    
        newList.push(JSON.parse(`{"${Object.keys(newGenres)[i]}":"${(Object.values(newGenres)[i]/total)*100}"}`))
    }

    genres.genrecount = newList
    
    return genres
}