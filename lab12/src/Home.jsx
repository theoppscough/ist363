function Home({ pioneers, onSelect }) {
    return (
        <>
        <h2>Internet Pioneers Bios</h2>
        <div className="d-flex gap-4">
            {pioneers.map((p) => (
                <div key={p.id} className="card" style={{ width: "14rem" }}>
                    <div className="position-relative">
                        <img src={p.image} className="card-img-top" alt="{p.name" />
                        {p.viewed && (
                            <span className="badge bg-danger position-absolute top-0 start-0 m-1">
                                VIEWED
                            </span>
                        )}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{p.name}</h5>
                        <button className="btn btn-outline-primary w-100" onClick={() => onSelect(p.id)}
                        >
                            View Bio
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Home;