import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function Connection() {

    const [connected, setConnected] = useState(false);
    const [ros, setRos] = useState(null);

    function init_connection() {

        console.log("Trying to connect...");

        const rosConnection = new window.ROSLIB.Ros();

        setRos(rosConnection);

        rosConnection.connect("ws://localhost:9090");

        rosConnection.on("connection", () => {

            console.log("Connection Established!");

            setConnected(true);

        });

        rosConnection.on("close", () => {

            console.log("Connection Closed!");

            setConnected(false);

            // Try again after 2 seconds
            setTimeout(() => {
                init_connection();
            }, 2000);

        });

        rosConnection.on("error", (error) => {

            console.log("Connection Error!");

            console.error(error);

            setConnected(false);

            // Close the socket (important)
            rosConnection.close();

            // Try again after 2 seconds
            setTimeout(() => {
                init_connection();
            }, 2000);

        });

    }

    useEffect(() => {
        init_connection();
    }, []);

    return (
        <div>

            <h1>Hello It is Connection Components</h1>

            <Alert
                className="text-center m-3"
                variant={connected ? "success" : "danger"}
            >
                {connected ? "Robot Connected" : "Robot Disconnected"}
            </Alert>

        </div>
    );
}

export default Connection;