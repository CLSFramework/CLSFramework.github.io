---
sidebar_position: 1
---

# Build From Source

## Build from source, install, and run (Linux, WSL)

To build the soccer simulation proxy, you need to install the following dependencies:

### LibRCSC

```bash
git clone git@github.com:helios-base/librcsc.git
cd librcsc
git checkout 19175f339dcb5c3f61b56a8c1bff5345109f22ef
mkdir build
cd build
cmake ..
make
make install
```

### gRPC - follow the instructions provided in the [repository](https://grpc.io/docs/languages/cpp/quickstart/)

```bash
export MY_INSTALL_DIR=$HOME/.local
mkdir -p $MY_INSTALL_DIR
export PATH="$MY_INSTALL_DIR/bin:$PATH"
sudo apt install -y build-essential autoconf libtool pkg-config
git clone --recurse-submodules -b v1.62.0 --depth 1 --shallow-submodules https://github.com/grpc/grpc
cd grpc/
mkdir -p cmake/build
pushd cmake/build
cmake -DgRPC_INSTALL=ON       -DgRPC_BUILD_TESTS=OFF       -DCMAKE_INSTALL_PREFIX=$MY_INSTALL_DIR       ../..
make -j 4
make install
```

then, add the following lines at the end of $HOME/.bashrc

```bash
export MY_INSTALL_DIR=$HOME/.local
export PATH="$MY_INSTALL_DIR/bin:$PATH"
```

then, run the following command

```bash
source $HOME/.bashrc
```

To test grpc, go to grpc directory (in this example it is in $HOME/grpc) and run the following commands:

```bash
cd examples/cpp/helloworld
mkdir -p cmake/build
cd cmake/build/
cmake -DCMAKE_PREFIX_PATH=$MY_INSTALL_DIR ../..
make
run ./greeter_server in one tab
run ./greeter_client in another tab
```

### Thirft

TODO

### SoccerSimulationProxy

```bash
git clone git@github.com:CLSFramework/soccer-simulation-proxy.git
cd soccer-simulation-proxy
mkdir build
cd build
cmake ..
make
```

## Run Soccer Simulation Proxy

To run the Soccer Simulation Proxy, you can use the following command: (You should run the Soccer Simulation Server and a PlayMaker Server before running the Soccer Simulation Proxy)

```bash
cd build/bin
./start.sh
```

To run the Soccer Simulation Proxy in debug mode, you can use the following command:

```bash
cd build/bin
./start-debug.sh
```

To run the Soccer Simulation Proxy with different configuration, you can pass the following parameters to start.sh or start-debug.sh:

| Option                      | Description                                                                                       | Default Value        |
|-----------------------------|---------------------------------------------------------------------------------------------------|----------------------|
| `-h, --host HOST`           | Specifies server host                                                                             | `localhost`          |
| `-p, --port PORT`           | Specifies server port                                                                             | `6000`               |
| `-P, --coach-port PORT`     | Specifies server port for online coach                                                            | `6002`               |
| `-t, --teamname TEAMNAME`   | Specifies team name                                                                               | -                    |
| `-n, --number NUMBER`       | Specifies the number of players                                                                   | -                    |
| `-u, --unum UNUM`           | Specifies the uniform number of players                                                           | -                    |
| `-C, --without-coach`       | Specifies not to run the coach                                                                    | -                    |
| `-f, --formation DIR`       | Specifies the formation directory                                                                 | -                    |
| `--team-graphic FILE`       | Specifies the team graphic xpm file                                                               | -                    |
| `--offline-logging`         | Writes offline client log                                                                         | `off`                |
| `--offline-client-mode`     | Starts as an offline client                                                                       | `off`                |
| `--debug`                   | Writes debug log                                                                                  | `off`                |
| `--debug_DEBUG_CATEGORY`    | Writes `DEBUG_CATEGORY` to debug log                                                              | -                    |
| `--debug-start-time TIME`   | The start time for recording debug log                                                            | `-1`                 |
| `--debug-end-time TIME`     | The end time for recording debug log                                                              | `99999999`           |
| `--debug-server-connect`    | Connects to the debug server                                                                      | `off`                |
| `--debug-server-host HOST`  | Specifies debug server host                                                                       | `localhost`          |
| `--debug-server-port PORT`  | Specifies debug server port                                                                       | `6032`               |
| `--debug-server-logging`    | Writes debug server log                                                                           | `off`                |
| `--log-dir DIRECTORY`       | Specifies debug log directory                                                                     | `/tmp`               |
| `--debug-log-ext EXTENSION` | Specifies debug log file extension                                                                | `.log`               |
| `--fullstate FULLSTATE_TYPE`| Specifies fullstate model handling                                                                | -                    |
| `--rpc-ip RPC IP`           | Specifies grpc IP                                                                                 | `localhost`          |
| `--rpc-port RPC PORT`       | Specifies grpc port                                                                               | `50051`              |
| `--rpc-port-step`         | Specifies different grpc port for each player                                                     | `false`              |
| `----rpc-add-20-to-port-for-right`                 | Add 20 to GRPC Port if team run on right side                                                     | `false`              |
| `--rpc-type RPC_TYPE`       | Specifies rpc type [grpc, thrift]                                                                 | `thrift`             |