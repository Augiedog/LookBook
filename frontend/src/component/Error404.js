
function Error404(props) {
    console.log(props)
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <p>Error ${props.error}</p>
            <img src="http://localhost:5000/kittykat.jpeg" alt="cute cat pic" width="85%" />
        </main>
    );
}

export default Error404;
