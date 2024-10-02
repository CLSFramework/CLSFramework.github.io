---
sidebar_position: 3
---

# Run the Soccer Simulation Proxy

## Arguments

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

## start.sh vs start-debug.sh

- `start.sh`: Starts the Soccer Simulation Proxy in normal mode. This script runs 11 players and a coach.
- `start-debug.sh`: Starts the Soccer Simulation Proxy in debug mode. This script runs 11 players and a coach and writes debug logs, also it connects the agents to soccerwindow2 to show the logs.
