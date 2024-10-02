## Contents
- [Definitions](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Definitions)
- [Soccer Simulation Server](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Soccer-Simulation-Server)
- [Soccer Simulation Monitor](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Soccer-Simulation-Monitor)
- [Soccer Window 2](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/SoccerWindow2)
- [Soccer Simulation Proxy](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Soccer-Simulation-Proxy)
- [PlayMaker Server (Python)](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/PlayMaker-Server-Python)
- [PlayMaker Server (C#)](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/PlayMaker-Server-CSharp)
- [PlayMaker Server (NodeJs)](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/PlayMaker-Server-NodeJs)
- [Environment Messages](https://github.com/CLSFramework/cross-language-soccer-framework/wiki/Environment-Messages)

# Cross Language Soccer Framework

Cross Language Soccer Framework is a new approach to enhance the flexibility and interoperability of RoboCup Soccer Simulation 2D (SS2D). The Soccer Simulation Proxy is an extended version of the Helios base that can send decision-making information to the PlayMaker Server. It can receive high-level actions from the PlayMaker Server and send them to RoboCup Soccer Simulation Server and/or SoccerWindow2.
On the other hand, the PlayMaker Server receives information from the client and selects the appropriate actions to be sent back to the client. We have implemented some sample servers in C\#, Python, and JavaScript, but it can also be implemented in other languages to make use of their features.

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/7b0b1d49-7001-479c-889f-46a96a8802c4)

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/d152797b-53f0-490f-a8dd-b8c0ef667317)

## How To Use The Framework?

To run a normal soccer simulation 2D game without using the proxy, you need to run the Soccer Simulation Server (RCSSServer) and the Soccer Simulator Monitor (RCSSMonitor). The Soccer Simulation Server will host the game, and the Soccer Simulator Monitor will display the game. Also, you need to run two teams to play the game. Each team should have a coach and eleven players (and trainer for training proposes and controlling the server). All of the clients connect to the RCSSServer by using UDP to send action and receive information.

To run a game by using the framework, you need to run the Soccer Simulation Server to host a game, the Soccer Simulator Monitor, Soccer Simulation Proxy, and a Playmaker Server. We provide some different solution to build, install, and run these components on Linux(Ubuntu) [Build From Source, AppImage, Docker] and Windows[WSL, Docker]. Also, there are some solutions that you can run some of the components together.

## Related Repositories

- [Soccer Simulation Server](https://github.com/rcsoccersim/rcssserver)
- [SoccerSimulationProxy](https://github.com/CLSFramework/soccer-simulation-proxy)
- [PlaymakerServer-Python](https://github.com/CLSFramework/playmaker-server-python)
- [PlaymakerServer-CSharp](https://github.com/CLSFramework/playmaker-server-csharp)
- [PlaymakerServer-NodeJs](https://github.com/CLSFramework/playmaker-server-nodejs)
