const getStroredReadList = () => {
  const storedReadListStr = localStorage.getItem("readList");
  if (storedReadListStr) {
    return JSON.parse(storedReadListStr);
  } else {
    return [];
  }
};

const addToStroredReadList = (id) => {
  const storedReadList = getStroredReadList();
  if (storedReadList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedReadList.push(id);
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem("readList", storedReadListStr);
    console.log(id, "added to the read list");
  }
};

// Add To Wish List functionality can be implemented similarly
const getStroredWishList = () => {
  const storedWishListStr = localStorage.getItem("wishList");
  if (storedWishListStr) {
    return JSON.parse(storedWishListStr);
  } else {
    return [];
  }
};

const addToStroredWishList = (id) => {
  const storedWishList = getStroredWishList(); // Assuming similar structure for wishlist
  if (storedWishList.includes(id)) {
    console.log(id, "already exists in the wishlist");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wishList", storedWishListStr);
    console.log(id, "added to the wishlist");
  }
};

export { addToStroredReadList, addToStroredWishList };
