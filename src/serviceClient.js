const palveluurl = '/api/';



export function createuser(user, callback) {
    console.log(user);
    // fetch(palveluurl+'users',  {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    // })
    //     .then((function(response) {
    //         callback();
    //     }));
}

// export function getDiscussion(callback){
//     fetch(palveluurl + 'thread/', {accept: 'application/json'})
//     .then(function(response) {
//         response.json()
//         .then(function(json) {
//             if(response.status >= 400)
//             callback(json, response.status);
//             else
//             callback(json);
//         });
//     });
// }

