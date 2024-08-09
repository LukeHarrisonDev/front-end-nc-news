function ErrorPage({error}) {
    if(error) {
        return (
            <section>
                <h1>{error.status}</h1>
                <h2>{error.data.message}</h2>
            </section>
        )
    } else {
        return (
            <section>
                <h1>404</h1>
                <h2>Not found</h2>
            </section>
        )
    }
}

export default ErrorPage