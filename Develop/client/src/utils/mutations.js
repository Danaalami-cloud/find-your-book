import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email,password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token 
        user {
            _id
            username
        }
    }
}
`;

export const Save_BOOK = gql`
mutation saveBook($description: String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
    saveBook(description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
        token
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook()