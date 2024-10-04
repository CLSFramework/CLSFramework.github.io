---
title: Soccer Simulation Server
sidebar_position: 6
---
# Soccer Simulation Server

**The RoboCup Soccer Simulator Server** (rcssserver) is a research and educational tool for multi-agent systems and artificial intelligence. It allows 11 simulated autonomous robotic players to play soccer (football).

For further reading, please check [the user's manual](https://rcsoccersim.readthedocs.io/).

There are three different solutions to run the RoboCup Soccer Simulator Server.
- Download the AppImage release and run (Linux, Windows WSL)
- Build from source and run (Linux, Windows WSL)
- Use Docker Image

### :gift_heart: Use AppImage (Linux, Windows WSL)

#### Download AppImage

Download "rcssserver-x86_64-?.?.?.AppImage" from the [release page](https://github.com/CLSFramework/rcssserver/releases) (latest version)
or use the below command to download the latest version of AppImage:
```bash
wget $(curl -s https://api.github.com/repos/clsframework/rcssserver/releases/latest | grep -oP '"browser_download_url": "\K(.*rcssserver-x86_64-.*\.AppImage)' | head -n 1)
```

#### Install dependency and update permission

then you need to update the permission of the AppImage and install fuse:
```bash
sudo apt update
sudo apt-get install fuse
chmod +x rcssserver-x86_64-*.AppImage
```

#### Run

to run the AppImage:
```bash
./rcssserver-x86_64-?.?.?.AppImage
```

- Changing configuration is the same as the build from source.

### :notebook: Some notes:

Be aware that the log files of the Soccer Simulation Server will be saved in the current directory.

Also, you can change the configuration of the Soccer Simulation Server from "~/.rcssserver/server.conf" file.
For example, you can change the following parameters:

- server::synch_mode, to change the mode of the server to synchronous or asynchronous. If the synch_mode is true, the server wait to receive actions from all agents before going to the next cycle.

- server::auto_mode, to change the mode of the server to auto or manual. If the auto_mode is true, the server will start the game automatically.

- server::fullstate_l, to change the fullstate mode of the server. If the fullstate_l is true, the server will send the fullstate information (without noise) to the agents.

### :wrench: Build from source, install, and run (Linux, WSL)

To install the Soccer Simulation Server, you can follow the instructions provided in the [repository](https://github.com/rcsoccersim/rcssserver).

```bash
sudo apt update
sudo apt install build-essential automake autoconf libtool flex bison libboost-all-dev cmake git
git clone git@github.com:rcsoccersim/rcssserver.git
cd rcssserver
mkdir build
cd build
cmake ..
make
sudo make install
```

To run the Soccer Simulation Server, you can use the following command:

```bash
rcssserver
```

### Use Docker (Linux, WSL, Windows)
