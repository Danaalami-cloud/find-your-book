import { gql } from '@apollo/client';

export const Query_Book = gql`
query book {
    book {
        bookId
        title
        link
        image
        description
        authors 
    }
}
`;

export const QUERY_MATCHUPS = gql`
query matchups($_id: String) {
    matchups(_id: $_id) {
        addUser
        login
        removeBook
        saveBook
        addThought
    }
}
`;

