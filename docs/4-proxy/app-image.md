---
sidebar_position: 2
---

# Use App Image

## Download

You can download the AppImage of the Soccer Simulation Proxy from the [release page](https://github.com/CLSFramework/soccer-simulation-proxy/releases).

Or download the latest version by using the following command:

```bash
wget $(curl -s "https://api.github.com/repos/clsframework/soccer-simulation-proxy/releases/latest" | grep -oP '"browser_download_url": "\K[^"]*' | grep "soccer-simulation-proxy.tar.gz")
```

## Extract

```bash
tar -xvf soccer-simulation-proxy.tar.gz
```

## Run

```bash
cd SoccerSimulationProxy
./start.sh
```

You can download the AppImage of the Soccer Simulation Proxy from the #### and run it.