import { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit} id="search-form" className="w-100">
            <i className={`fas fa-search position-absolute fs-5 ps-3 pt-2`} />
            <Form.Control
                id="search-bar"
                type="text"
                placeholder="Search Posts"
                className="rounded-pill d-block mw-100 mx-0 ps-5"
                value={query}
                onInput={({ target }) => setQuery(target.value)}
            />
        </Form>
    );
};
    

export default SearchBar;