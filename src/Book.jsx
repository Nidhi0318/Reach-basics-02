function Book(props) {
  return (
    <div className="container">
      <header>
        <h1>Book Details</h1>
      </header>
      <h2>Book Information</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{props.title}</td>
          </tr>

          <tr>
            <th>Author</th>
            <td>{props.author}</td>
          </tr>

          <tr>
            <th>Price</th>
            <td>{props.price}</td>
          </tr>

          <tr>
            <th>Language</th>
            <td>{props.language}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Book;