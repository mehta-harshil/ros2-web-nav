# [ROS2-WEB-NAV]

Web-based navigation interface for a ROS2 robot. Drive and monitor the robot from a browser instead of a separate native app.

## Features
- Web UI built with React/JS
- Connects to ROS2 to send commands and receive robot status
- [add more]

## Setup

```bash
# ROS2 side
cd app/ros2-ws
colcon build
source install/setup.bash
ros2 launch [your_package] [your_launch_file].launch.py

# Web side
cd app/web-client
npm install
npm run dev
```

Open `http://localhost:[port]` in your browser.

## Folder structure
- `lab/` – experiments and learning code
- `app/` – actual working project
- `versions/` – older versions of the code
- `docs/` – documentation of project
- `reference/` – learning resources, notes, books

## Status
End-to-end working — web UI can drive the robot.