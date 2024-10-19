---
sidebar_position: 1
---

# Soccer Simulation Monitor

![image](https://github.com/user-attachments/assets/3cf14841-7607-47cb-8000-60f074f1cee2)


Soccer Simulation Monitor is a graphical tool that allows you to monitor the soccer simulation server. It is a part of the Soccer Simulation 2D project. The monitor is used to visualize the soccer field, players, and the ball. It is also used to monitor the game state, such as the score, time, and the game mode. You can find more information about the monitor in the [repository](https://github.com/rcsoccersim/rcssmonitor).

## Use AppImage (Linux, WSL)

You can download the AppImage of the Soccer Simulator Monitor from the [release page](https://github.com/rcsoccersim/rcssmonitor/releases) and run it.

## Build from source, install, and run (Linux, WSL)

```bash
sudo apt update
sudo apt install build-essential qt5-default libfontconfig1-dev libaudio-dev libxt-dev libglib2.0-dev libxi-dev libxrender-dev git
git clone git@github.com:rcsoccersim/rcssmonitor.git
cd rcssmonitor
mkdir build
cd build
cmake ..
make
sudo make install
```

To run the Soccer Simulator Monitor, you can use the following command:

```bash
rcssmonitor
```

- if you installed the monitor on WSL, you need to install an X server on Windows.


