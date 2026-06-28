function Body() {

    return (

        <div className="container-fluid mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    Live Navigation Map
                </div>

                <div
                    className="card-body p-0"
                    style={{ height: "700px" }}
                >

                    <div
                        className="d-flex justify-content-center align-items-center bg-light"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "2px dashed #ccc"
                        }}
                    >

                        <h4 className="text-muted">
                            RViz / Map Viewer will be displayed here
                        </h4>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Body;