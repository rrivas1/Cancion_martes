export const Acerca = () => {
    return (
      <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">CONOCENOS!!</h1>
              <p className="lead text-body-secondary">
                Aqui puedes saber acerca de nosotros
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Artista #1"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="aqua"></rect>
                    <text x="50%" y="50%" fill="#000000" dy=".3em">
                      Que somos
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae 
                      ipsam nisi omnis, asperiores aut est labore excepturi itaque.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-body-secondary"><i className="bi bi-music-note fa-2x"></i></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="aqua"></rect>
                    <text x="50%" y="50%" fill="#00000" dy=".3em">
                      Nuestro objetivo
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae 
                    ipsam nisi omnis, asperiores aut est labore excepturi itaque.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-body-secondary"><i className="bi bi-music-note fa-2x"></i></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="aqua"></rect>
                    <text x="50%" y="50%" fill="#00000" dy=".3em">
                      Nuestra vision
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae 
                    ipsam nisi omnis, asperiores aut est labore excepturi itaque.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-body-secondary"><i className="bi bi-music-note fa-2x"></i></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    );
  };
  