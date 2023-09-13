import React from "react";
import BookCard from "../BookCard/BookCard";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {nanoid} from "nanoid";
const LatestRelease = ({fantasyBooks, historyBooks, horrorBooks, scifiBooks, romanceBooks}) => {

    const books = [
        ...fantasyBooks,
        ...historyBooks,
        ...horrorBooks,
        ...scifiBooks,
        ...romanceBooks
     ]
    console.log(typeof(books))

    return (
        <Container>
            <Row>
                <Col className='d-flex flex-wrap gap-4'>
                    {
                        books.map((book) => (
                            <BookCard key={nanoid()}
                                      img={book.img}
                                      title={book.title}
                                      category={book.category}
                            />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default LatestRelease