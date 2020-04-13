import React from 'react';
import {Formik, Form, Field} from 'formik';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';


const Search = ({history, location}) => {
    const parsedSearchObj = queryString.parse(location.search).search;
    
    const handleSearch = (values) => {
        history.push(`${location.pathname}?search=${values.search}`);
    }
    return (
        <Formik
            initialValues={{search: parsedSearchObj}}
            onSubmit= {handleSearch}
        >
            <Form>
                <div className="form-group">
                    <label>Search</label>
                    <Field
                        className="form-control"
                        placeholder="Search..."
                        type="search"
                        name="search"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(Search);

