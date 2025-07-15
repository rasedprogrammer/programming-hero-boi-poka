import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStroredReadList, getStroredWishList } from "../utility/addToDb";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedBookList = getStroredReadList();
    const storedBookListInt = storedBookList.map((id) => parseInt(id));
    const listedReadBooks = allBooks.filter((book) =>
      storedBookListInt.includes(book.bookId)
    );
    setReadList(listedReadBooks);

    // Similar logic can be applied for wishList if needed
    const storedWishList = getStroredWishList();
    const listedWishBooks = allBooks.filter((book) =>
      storedWishList.includes(book.bookId)
    );
    setWishList(listedWishBooks);
  }, []);

  return (
    <div>
      <h2 className="text-4xl my-4">Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-4xl my-4">My Read Book List {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-4xl my-4">My Wish List {wishList.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
