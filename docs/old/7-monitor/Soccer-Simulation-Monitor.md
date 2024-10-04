# Soccer Simulator Monitor

### Build from source, install, and run (Linux, WSL)

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

### Use AppImage (Linux, WSL)

You can download the AppImage of the Soccer Simulator Monitor from the #### and run it.

```bash
```
