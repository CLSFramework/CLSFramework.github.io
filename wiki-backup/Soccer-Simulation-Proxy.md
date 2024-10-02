RoboCup is an international competition aimed at advancing autonomous robotics and AI through tasks like soccer and rescue. The RoboCup Soccer Simulation 2D league focuses on developing intelligent agents that play soccer in a simulated 2D environment. This league is ideal for testing and developing AI and ML algorithms, including reinforcement learning and multi-agent systems. [more details](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Definitions)

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/7b0b1d49-7001-479c-889f-46a96a8802c4)


To run a game in the RoboCup Soccer Simulation 2D, you need to operate the rcssserver for hosting games, rcssmonitor to display them, and engage 12 agents (11 players and a coach) per team. Each cycle, agents receive data from the server and must execute actions such as dash and kick. Developing a team can be complex due to the environment's intricacy, typically necessitating C++ programming. However, our framework allows for other languages development, leveraging the helios-base features. By using SoccerSimulationProxy, you can develop a team in any language supported by gRPC, such as C#, C++, Dart, Go, Java, Kotlin, Node, Objective-C, PHP, Python, and Ruby. You just need to develop a gRPC server based on proto messages and gRPC services ([protofile](https://github.com/CLSFramework/soccer-simulation-proxy/blob/master/grpc/protos/service.proto), check [wiki](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Protobuf) to be more familier with messages and services) to receive data from the SoccerSimulationProxy and send actions back to it. This way, you can focus on developing your team's strategy and AI algorithms without worrying about the server's complexity. If you would like to develop a team or research in this area by using Python, C# or JavaScript you can check the following links:
- [Playmaker-Server-Python](https://github.com/CLSFramework/playmaker-server-python)
- [Playmaker-Server-CSharp](https://github.com/CLSFramework/playmaker-server-csharp)
- [Playmaker-Server-NodeJs](https://github.com/CLSFramework/playmaker-server-nodejs)

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/d152797b-53f0-490f-a8dd-b8c0ef667317)

To find more information about the framework, you can visit the [CLSFramework Wiki Pages](https://github.com/CLSFramework/cross-language-soccer-framework/wiki)


![Screenshot 2024-04-07 012226](https://github.com/Cyrus2D/SoccerSimulationProxy/assets/25696836/abb24e0c-61b9-497d-926f-941d1c90e2ee)

This new base code is powered by Helios-Base code and gRPC to help researcher developing a soccer simulation 2D team or researching in this area by using any languages supported by gRPC: 
 - [C#](https://grpc.io/docs/languages/csharp/) 
   - [Playmaker-Server-CSharp](https://github.com/CLSFramework/playmaker-server-csharp)
 - [C++](https://grpc.io/docs/languages/cpp/)
 - [Dart](https://grpc.io/docs/languages/dart/)
 - [Go](https://grpc.io/docs/languages/go/)
 - [Java](https://grpc.io/docs/languages/java/)
 - [Kotlin](https://grpc.io/docs/languages/kotlin/)
 - [Node](https://grpc.io/docs/languages/node/)
   - [Playmaker-Server-NodeJs](https://github.com/CLSFramework/playmaker-server-nodejs)
 - [Objective-C](https://grpc.io/docs/languages/objective-c/)
 - [PHP](https://grpc.io/docs/languages/php/)
 - [Python](https://grpc.io/docs/languages/python/)
   - [Playmaker-Server-Python](https://github.com/CLSFramework/playmaker-server-python)
 - [Ruby](https://grpc.io/docs/languages/ruby/)

## How To Use it?

To use this framework, you need to run rcssserver to host a game, run SoccerSimulationProxy (Agents) to connect to the rcssserver to receive information and send actions, and run Playmaker-Server (gRPC-Server) to receive information from agents and send appropriate actions back. To watch the game, you can run rcssmonitor or SoccerWindow2.

To run the rcssserver and rcssmonitor, you can follow the instructions in the [rcssserver](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/RoboCup-Soccer-Simulation-Server) and [rcssmonitor](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Soccer-Simulation-Monitor).

To run the SoccerSimulationProxy, there are some different ways such as using Docker, building from source, or using AppImage.

## Use AppImage (Linux, WSL)

### Download
You can download the AppImage of the Soccer Simulation Proxy from the [release page](https://github.com/CLSFramework/soccer-simulation-proxy/releases).

Or download the latest version by using the following command:
```bash
wget $(curl -s "https://api.github.com/repos/clsframework/soccer-simulation-proxy/releases/latest" | grep -oP '"browser_download_url": "\K[^"]*' | grep "soccer-simulation-proxy.tar.gz")
```

### Extract
```bash
tar -xvf soccer-simulation-proxy.tar.gz
```

### Run
```bash
cd SoccerSimulationProxy
./start.sh
```

You can download the AppImage of the Soccer Simulation Proxy from the #### and run it.

## Build from source, install, and run (Linux, WSL)

To build the soccer simulation proxy, you need to install the following dependencies:

#### LibRCSC

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

#### gRPC - follow the instructions provided in the [repository](https://grpc.io/docs/languages/cpp/quickstart/)

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

#### SoccerSimulationProxy

```bash
git clone git@github.com:CLSFramework/soccer-simulation-proxy.git
cd soccer-simulation-proxy
mkdir build
cd build
cmake ..
make
```

Troubleshooting

If you saw an error about the different version of GRpc
You should delete src/grpc/service.pb.cc and src/grpc/service.pb.h
Then, generate them again by going to the base root directory and

```bash
cd grpc/proto
protoc --proto_path=. --cpp_out=../../src/grpc/ --grpc_out=../../src/grpc/ --plugin=protoc-gen-grpc=$HOME/.local/bin/grpc_cpp_plugin service.proto
```

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
| `--g-ip GRPC IP`            | Specifies grpc IP                                                                                 | `localhost`          |
| `--g-port GRPC PORT`        | Specifies grpc port                                                                               | `50051`              |
| `--diff-g-port`             | Specifies different grpc port for each player                                                     | `false`              |
| `--gp20`                    | Add 20 to GRPC Port if team run on right side                                                     | `false`              |

## Use Docker (Linux, WSL, Windows)
