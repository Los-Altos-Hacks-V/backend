const fetch = require('node-fetch');

module.exports = (frontenddata) =>{

   /*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      "https://altego-db.hasura.app/v1/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName,
          headers:{
            "content-type": "application/json",
            "x-hasura-admin-secret/x-hasura-access-key": "l55V5g7keBcsF2OYNjONIQpIzbMs2HDpE39Y7Xm6siPeYj1XSAmoYiXMy9gGEWcc"
          }
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQuery {
      users(where: {id: {_eq: "${frontenddata.userdata.id}"}}) {
        id
      }
    }
  `;
  
  function fetchMyQuery() {
    return fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    if(data.users = []){
        console.log('yooo epic')
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchMyQuery();
    // const kNearest = (testSong) => {
    //     const perdictions = dataSet.map((song) => {
    
    //         let intensity = Math.pow(song['tempo'] - testSong['tempo'], 2)
    
    //         let tempo = Math.pow(song['intensity'] - testSong['intensity'], 2)
    
    //         let perdiction = Math.sqrt(tempo + intensity)
    
    //         return {
    //             "perdiction": perdiction,
    //             "like": song['like']
    //         }
    //     })
    
    //     const count = Math.round(perdictions.length / 2)
    
    //     let likes = 0;
    //     let dislikes = 0;
    
    
    //     perdictions.sort((a, b) => {
    //         return a.perdiction - b.perdiction;
    //     })
    
    //   console.log(perdictions)
    
    //     for (i = 0; i < count; i++) {
    //         if (perdictions[i]['like'] == true) {
    //             likes++
    //         } else {
    //             dislikes++
    //         }
    //     }
    
    //     if (likes > dislikes) {
    //         console.log("Based on past opinions it is likely that the person will enjoy this")
    //     } else {
    //         console.log("Based on past opinions it is likely that the person will dislike this")
    //     }
    // }
}