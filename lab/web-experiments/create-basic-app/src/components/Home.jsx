import { useState } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";


function Home() {

    const [count, setCount] = useState(0);

    return (

        <div className="container-fluid mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                    <span>Live Navigation Map</span>

                    <div>

                        <button
                            className="btn btn-light btn-sm me-2"
                            onClick={() => setCount(count + 1)}
                        >
                            Increase Counter
                        </button>

                        <span className="fw-bold">
                            Count : {count}
                        </span>

                    </div>

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
                            <Connection />
                            <Teleoperation />
                        </h4>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;