const guessGifts = (wishlist, presents) => {
    let matches = [];
    for(let i = 0; i < wishlist.length; i++)
    {
        let {
            name: wishlistName, 
            size: wishlistSize, 
            clatters: wishlistClatters, 
            weight:wishlistWeight
        } = wishlist[i];
        for(let t = 0; t < presents.length; t++)
        {
            let {
                size: presentSize, 
                clatters: presentClatters, 
                weight: presentWeight
            } = presents[t];
            if(presentSize === wishlistSize && presentClatters === wishlistClatters && presentWeight === wishlistWeight)
            {
                matches.push(wishlistName);
            }
        }
    }
    return matches;
}

const guessGifts2 = (wishlist, presents) => {
    return wishlist.filter(wish => {
        return presents.some(present => {
            return Object.keys(present).every(key => {
                return wish[key] === present[key];
            });
        });
    }).map(wish => {
        return wish.name;
    });
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Bicycle", size: "large", clatters: "yes", weight:"heavy"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"},
    {size:"large", clatters:"yes", weight:"heavy"}
];

console.log(guessGifts2(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]