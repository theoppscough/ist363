function Pioneer({ pioneer, onReturn }) {
    return (
        <div className="card bg-secondary text-white p-4">
            <h3 className="mb-3">{pioneer.name}</h3>
            <img src={pioneer.image}alt={pioneer.name} className="img-fluid mb-3" style={{ width: "200px" }} />
            <p><strong>Age:</strong> {pioneer.age}</p>
            <p><strong>Known For:</strong> {pioneer.knownFor}</p>
            <button className="btn btn-primary mt-3" onClick={onReturn}>
                Return to Directory
            </button>
        </div>
    )
}

export default Pioneer;