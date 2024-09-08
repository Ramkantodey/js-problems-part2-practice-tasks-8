// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findFriend(friends){
    let name = friends[0];
    for(const friend of friends){
        if(friend.length < name.length){
            name = friend;
        }
    }
    return name;
}

const result = findFriend(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(result);