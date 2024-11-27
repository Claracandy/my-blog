import { useState, useEffect } from 'react';
const GoogleBooks = () =>{
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=subject:politics")
            .then((response) => response.json())
            .then((json) => {
                setBooks(json.items);
                setLoading(false);
            })
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Political Books.</h1>
            <div className="grid grid-cols-2 gap-6">
                {books.map(book => (
                    <div key={book.id} className="mb-6 border-b pb-4">
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                        <p>Kind: {book.kind}</p>
                        <p>ID: {book.id}</p>
                        <p>etag: {book.etag}</p>
                        <p>SelfLink: {book.selfLink}</p>
                        <p>Title: {book.volumeInfo.title}</p>
                        <p>Authors: {book.volumeInfo.authors}</p>
                        <p>Publisher: {book.volumeInfo.publisher}</p>
                        <p>Published Date: {book.volumeInfo.publishedDate}</p>
                        <p>Description: {book.volumeInfo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default GoogleBooks;