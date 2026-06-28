import { Joystick } from "react-joystick-component";

function Teleoperation() {

    const cmdVel = new window.ROSLIB.Topic({
        ros: ros.current,
        name: "/cmd_vel",
        messageType: "geometry_msgs/msg/Twist"
    });

    function handleMove(event) 
    {

        console.log(event);
        const twist = new window.ROSLIB.Message({

            linear: {
                x: event.y / 100,
                y: 0,
                z: 0
            },

            angular: {
                x: 0,
                y: 0,
                z: -event.x / 100
            }

        });
        cmdVel.publish(twist);
    }

    function handleStop() {
        const twist = new window.ROSLIB.Message({
            linear: {
                x: 0,
                y: 0,
                z: 0
            },
            angular: {
                x: 0,
                y: 0,
                z: 0
            }
        });
        cmdVel.publish(twist);
    }

    return (
        <div>

            <Joystick
                size={100}
                baseColor="black"
                stickColor="#68D391"
                move={handleMove}
                stop={handleStop}
            />

        </div>
    );
}

export default Teleoperation;