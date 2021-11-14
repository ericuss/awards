import { FC, useEffect, useState } from "react";
import { Book } from '../../types';

type BookDetailProps = {
    book: Book;
}

export const BookDetail: FC<BookDetailProps> = ({ book }) => {
    return <div className="book card">
        <img src={book.image} ></img>
        <div className="container">
            <h4><b>{book.displayName}</b></h4>
        </div>
    </div>

}