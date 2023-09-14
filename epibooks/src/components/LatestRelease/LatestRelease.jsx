import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {nanoid} from "nanoid";
import SingleBook from "../SingleBook/SingleBook";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const LatestRelease = ({fantasyBooks, historyBooks, horrorBooks, scifiBooks, romanceBooks}) => {

    const cat = [
        ...fantasyBooks,
        ...historyBooks,
        ...horrorBooks,
        ...scifiBooks,
        ...romanceBooks
     ]

    const [formValue, setFormValue] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(cat)
    const getValueFromForm = (value) => {
        if (value === "") setFilteredBooks(cat)

        setFormValue(value)

    }

    const submitFiltered = (e) => {
        e.preventDefault();

        const booksFiltered = filteredBooks.filter(book => book.title.toLowerCase().includes(formValue.toLowerCase()))

        setFilteredBooks(booksFiltered)

    }

    return (
        <Container>

            <Form onSubmit={submitFiltered}>
                <Form.Group className="mb-3">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        name="formValue"
                        type="text"
                        placeholder="Search books"
                        onChange={(e) => getValueFromForm(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Row>
                <Col className='d-flex flex-wrap gap-4'>
                    {
                        filteredBooks.map((book) => (
                            <SingleBook key={nanoid()}
                                        book={book}
                            />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default LatestRelease