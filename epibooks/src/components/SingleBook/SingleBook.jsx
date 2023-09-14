import BookCard from "../BookCard/BookCard";

const SingleBook = ({book}) => {
    return (
        <>
            <BookCard
                title={book.title}
                img={book.img}
            />
        </>
    );
}

export default SingleBook