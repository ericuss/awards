import { FC, useEffect, useState } from "react";
import { Book, Vote } from '../../types';
import { BookDetail } from './BookDetail';

// const tenantDefault = '3a88c5e5-a6e1-4898-b72b-103e4eed1731';
// export const TokenDetails: FC<TokenDetailsProps> = ({ env, settings }) => {
type VoteDetailProps = {
    vote: Vote;
}

export const VoteDetail: FC<VoteDetailProps> = ({ vote }) => {
    const [books, setBooks] = useState<Book[]>();
    console.log(books);
    useEffect(() => {
        setBooks(vote.data);
    }, [vote])

    return <div className="vote">
        {/* <div>Número de votos: {vote.votes}</div> */}
        <div className="books">{books?.map((x: Book) => <BookDetail key={x.displayName} book={x}></BookDetail>)}</div>
    </div>

}