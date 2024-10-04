---
sidebar_position: 1
---

# Services

## gRPC

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

## Thrift

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

**GetPlayerActions** - Get the actions of the players. Each proxy player agent will call this method to get the actions of the players in each cycle of the game.

**GetCoachActions** - Get the actions of the coach. The coach agent will call this method to get the actions of the coach in each cycle of the game.

**GetTrainerActions** - Get the actions of the trainer. The trainer agent will call this method to get the actions of the trainer in each cycle of the game.

TODO: Add more information about the services and messages in the IDL section.

TODO: Add mermaid diagram to show the work flow of the services.
