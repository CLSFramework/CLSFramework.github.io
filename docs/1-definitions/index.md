---
sidebar_position: 1
---

# Definitions

## [RoboCup](https://www.robocup.org/)

RoboCup is an international robotics competition that focuses on promoting research and development in the field of autonomous robots. The competition aims to advance the state of the art in robotics and artificial intelligence by challenging teams to develop robots capable of playing soccer, rescue, and other tasks against other teams in a real-world or simulated environment.

## [RoboCup Soccer Simulation 2D](https://rcsoccersim.github.io/)

RoboCup Soccer Simulation 2D is a league in the RoboCup competition that focuses on developing autonomous soccer-playing agents. The goal of the league is to develop intelligent agents that can play soccer in a simulated environment. The agents must be able to perceive the game state, make decisions based on that information, and execute actions to play the game effectively.

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/7b0b1d49-7001-479c-889f-46a96a8802c4)

## [RoboCup Soccer Simulation Server](https://github.com/rcsoccersim/rcssserver)

The RCSSServer is a soccer server for the RoboCup Soccer Simulation 2D. It is a program that simulates a soccer game between two teams of eleven players and one coach each. The server provides a complete simulation of the game, including the physics of the ball, the field, and the players, as well as the dynamics of the game, such as the rules, the referee, and the game clock.

## [RoboCup Soccer Simulator Monitor](https://github.com/rcsoccersim/rcssmonitor)

RoboCup Soccer Simulator Monitor (rcssmonitor) is used to view the simulation as it takes place by connecting to the RoboCup Soccer Simulator Server (rcssserver) or to view the playback of a simulation by loading game log files.

## [Helios Base Code](https://github.com/helios-base/helios-base)

The Helios Base Code is a framework for the RoboCup Soccer Simulation 2D. It is a collection of software components that provide a common infrastructure for developing soccer simulation 2D teams. The base code is designed to be easy to use and extend, and it provides a number of features that make it easier to develop teams.

## [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call)

A remote procedure call (RPC) is an inter-process communication that allows a computer program to cause a subroutine or procedure to execute in another address space (commonly on another computer on a shared network) without the programmer explicitly coding the details for this remote interaction.

## [gRPC](https://grpc.io/docs/what-is-grpc/)

gRPC is a high-performance, open-source, general-purpose RPC framework that puts mobile and HTTP/2 first. gRPC is based on the HTTP/2 standard, which is the next generation of HTTP. HTTP/2 is a binary protocol that is more efficient than HTTP/1.1, which is the current version of HTTP. HTTP/2 is also more secure than HTTP/1.1, because it uses TLS encryption by default.

## [Thrift](https://thrift.apache.org/)

Apache Thrift is a software framework for scalable cross-language services development. It combines a software stack with a code generation engine to build services that work efficiently and seamlessly between C++, Java, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, OCaml, Delphi, and other languages.

## Cross Language Soccer Framework

Cross Language Soccer Framework is a new approach to enhance the flexibility and interoperability of RoboCup Soccer Simulation 2D (SS2D). The Soccer Simulation Proxy is an extended version of the Helios base that can send decision-making information to the PlayMaker Server. It can receive high-level actions from the PlayMaker Server and send them to RoboCup Soccer Simulation Server and/or SoccerWindow2.
On the other hand, the PlayMaker Server receives information from the client and selects the appropriate actions to be sent back to the client. We have implemented some sample servers in C\#, Python, and JavaScript, but it can also be implemented in other languages to make use of their features.

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/d152797b-53f0-490f-a8dd-b8c0ef667317)

## [Soccer Simulation Proxy](https://github.com/Cross-Language-Soccer-Framework/soccer-simulation-proxy)

We have modified the Helios base code to enhance its interaction capabilities with the gRPC server. Specifically, the base code now transmits detailed information about each game cycle to the server, which in response, sends back a series of potential actions. This bidirectional communication enables the PlayMaker Server to effectively process and make strategic decisions based on the incoming data.

To facilitate this enhanced functionality, the client is designed to serialize various data types—such as the WorldModel, FullState WorldModel, Server Parameters, Player Parameters, and Player Types—into gRPC messages during each game cycle. Conversely, it also deserializes incoming gRPC action messages back into Helios base actions.

These improvements ensure that the Helios base maintains its inherent efficiency and performance, while now being able to seamlessly interact with a diverse array of programming languages through gRPC. This modification not only preserves the robustness of the original system but also expands its utility and applicability in multi-language research environments.

## Playmaker Server

The Playmaker Server acts as the decision-making hub within our framework, receiving and processing messages from the Soccer Simulation Proxy. Based on the detailed information conveyed in these messages, it evaluates the current game state and strategically generates corresponding actions to be executed in the simulation.

To demonstrate the versatility and language-agnostic design of our framework, we have developed initial implementations of the Playmaker Server in three different programming languages: C#, Python, and JavaScript. These examples serve to showcase the server’s capability to operate effectively across diverse programming environments. Looking ahead, we aim to extend this functionality by developing additional server implementations in other languages, further broadening the framework's accessibility and appeal to a global research community.

- [Sample Playmaker Server - CSharp - gRPC](https://github.com/CLSFramework/playmaker-server-csharp)
- [Sample Playmaker Server - Python - gRPC](https://github.com/CLSFramework/sample-playmaker-server-python-grpc)
- [Sample Playmaker Server - Python - Thrift](https://github.com/CLSFramework/sample-playmaker-server-python-thrift)
- [Sample Playmaker Server - NodeJs - gRPC](https://github.com/CLSFramework/playmaker-server-nodejs)

![image](https://github.com/Cross-Language-Soccer-Framework/cross-language-soccer-framework/assets/25696836/8ae17787-8bf8-4796-92f2-e20066e3175f)
