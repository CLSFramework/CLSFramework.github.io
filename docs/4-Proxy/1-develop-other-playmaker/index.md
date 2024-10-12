# Develop a New Playmaker Server

To develop a Playmaker server, you need to creat a gRPC or Thrift server that receives data from the Soccer Simulation Proxy and sends actions back to it. This way, you can focus on developing your team's strategy and AI algorithms without worrying about the server's complexity.

## Services

The new Playmaker server should provide the following services:

### gRPC

```protobuf
service Game {
  rpc GetPlayerActions(State) returns (PlayerActions) {}
  rpc GetCoachActions(State) returns (CoachActions) {}
  rpc GetTrainerActions(State) returns (TrainerActions) {}
  rpc SendInitMessage(InitMessage) returns (Empty) {}
  rpc SendServerParams(ServerParam) returns (Empty) {}
  rpc SendPlayerParams(PlayerParam) returns (Empty) {}
  rpc SendPlayerType(PlayerType) returns (Empty) {} //should be PlayerTypes
  rpc Register(RegisterRequest) returns (RegisterResponse) {}
  rpc SendByeCommand(RegisterResponse) returns (Empty) {}
  rpc GetBestPlannerAction(BestPlannerActionRequest) returns (BestPlannerActionResponse) {}
}
```

### Thrift

```thrift
service Game {
  PlayerActions GetPlayerActions(1: State state),
  CoachActions GetCoachActions(1: State state),
  TrainerActions GetTrainerActions(1: State state),
  Empty SendInitMessage(1: InitMessage init_message),
  Empty SendServerParams(1: ServerParam server_param),
  Empty SendPlayerParams(1: PlayerParam player_param),
  Empty SendPlayerType(1: PlayerType player_type),
  RegisterResponse Register(1: RegisterRequest request),
  Empty SendByeCommand(1: RegisterResponse register_response),
  BestPlannerActionResponse GetBestPlannerAction(1: BestPlannerActionRequest best_planner_action_request)
}
```

You can find more information about the services and messages in the IDL section.
