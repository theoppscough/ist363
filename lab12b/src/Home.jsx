function Home({ pioneers, onSelect }) {
    return (
      <div>
        <h2 className="mb-4">Internet Pioneers Bios</h2>
        <div className="d-flex gap-3">
          {pioneers.map((pioneer) => (
            <div key={pioneer.id} className="card" style={{ width: "14rem" }}>
              <div className="position-relative">
                <img
                  src={pioneer.image}
                  className="card-img-top"
                  alt={pioneer.name}
                  style={{ height: "240px", objectFit: "cover" }}
                  onClick={() => onSelect(pioneer.id)}
                />
                {pioneer.viewed && (
                  <span
                    className="badge bg-danger position-absolute top-0 start-0 m-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    VIEWED
                  </span>
                )}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{pioneer.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;
  