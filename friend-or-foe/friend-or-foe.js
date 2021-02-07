// Find friends in an array of names.
// A friend of yours is a name, or word, of exactly 4 characters.

function friend(friends){
    return friends.filter(f => f.length === 4).filter(f => f.match(/[a-z]/gi))
}