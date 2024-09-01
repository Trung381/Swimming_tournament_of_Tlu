import './banner.css'

function Banner() {
    return (
        <>
            <div className="card mb-3 text-center border-0 mt-3">
                <img src="/image/banner.jpg" className="card-img-top w-75" alt="..." style={{ margin: '0 auto' }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
                
            </div>


            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/image/boi1.jpg" className="d-block w-75" alt="Slide 1" style={{ margin: '0 auto' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/boi2.jpg" className="d-block w-75" alt="Slide 2" style={{ margin: '0 auto' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/boi3.jpg" className="d-block w-75" alt="Slide 3" style={{ margin: '0 auto' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{ color: 'black' }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{ color: 'black' }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </>
    );
}

export default Banner;