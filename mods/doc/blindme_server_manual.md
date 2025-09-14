---
mod: BlindMe
title: Server Operator's Manual for BlindMe
description: "Server Operator's Manual and Technical Reference"
permalink: /mods/blindme/server_documentation
icon: /assets/icon/blindme.png
color: "#000000"
---

This manual is up-to-date with version 1.2 of BlindMe.

{% include toc.md %}

# Quick Start Guide

1. [Install Quilt Loader](https://quiltmc.org/en/install/) or [install Fabric Loader](https://fabricmc.net/use/installer/) for your server. Either works since they are mostly cross-compatible with each other. They are mod loaders and are what BlindMe relies on.
2. On the folder of your server, create the subfolder `mods` if it doesn't exist. [Download BlindMe](https://github.com/hibiii/BlindMe/releases) and place it in `mods`.
3. Run the server or restart it. BlindMe will realize it's the first time it's being run and will drop its default configuration in the `config` folder as `blindme.server.properties`.
4. Edit `blindme.server.properties` to your preferences and restart the server. That is all the setup needed!

# General information

BlindMe on the server, despite having mechanisms for causing vision-impairing effects on players without the client mod, works best with it. The mechanisms for effect enforcement is known as the fallback, and is relatively primitive. It does not support gamemode-specific bypasses and server-hosted permissions for operators. OPs are expected to also run BlindMe in their clients.

## Setting Synchronization and the Fallback Mechanism

The server side of BlindMe was made to spread the gameplay of BlindMe to an entire server, with the fallback mechanism being simply a compatibility layer for players who don't have the mod installed. The server becomes aware of players with BlindMe installed by inquiring them for the mod's presence during the configuration phase, and disabling the fallback upon a response. The response from the client is only sent when it has perfectly understood the server's intentions and can enforce them.

If the client does not respond to the server's inquiry, it's considered to not have BlindMe installed. In that case, the server keeps the fallback mechanism enabled. It works by sending an extra, phantom effect when the server sends all the status effects normally, and prevents updates related to the phantom effect.

## Configuration File

When the mod initializes, it tries to read the configuration file. If it's not found, it drops a new one with the default settings. This means that, if you're setting up a new server, you can skip writing that file for yourself at the cost of having to restart the server once more for the settings to take effect.

The configuration file is a Java Properties file located at `<server root>/config/blindme.server.properties`. It supports the following options:

- `effect`: Controls the effect that the server imposes on players. This also affects players which do not have BlindMe installed. The following values are allowed: `blindness` and `darkness`. (Defaults to blindness)
- `creative_bypass`: Controls whether or not players with BlindMe will have their vision impairing effect temporarily removed when they have their gamemode changed to creative. This only works for players with the mod installed in their client. Allowed values are: `true` and `false`. (Defaults to false)
- `spectators_bypass`: Controls whether or not players with BlindMe will have their vision impairing effect temporarily removed when they have their gamemode changed to spectator. This only works for players with the mod installed in their client. Allowed values are: `true` and `false`. (Defaults to true)
- `ops_bypass`: Controls whether or not server operators with permission level 2 can change their BlindMe settings and freely disregard the server settings. This only works for players with the mod installed in their client. Allowed values are: `true` and `false`. (Defaults to true)

### Format

The basic rules for Java Properties files are as follows:
- Comments use their own line and start with `#`.
- Keys must not use space in them.
- Key-value pairs are separated with `=`, surrounding spaces optional.

# Troubleshooting

If you have a persistent problem not in this troubleshooting, feel free to [create an issue on BlindMe's GitHub page](https://github.com/hibiii/BlindMe/issues/new).

## Injection failure in...

- `PlayerManagerMixin`: Please check mods that interact very heavily with status effects. This mixin interacts with code that sends status effects to players and does not modify the behavior of it, merely adds to it.
- `ServerCommonNetworkHandlerAccessor`: Please check any mods that interact with connections. This mixin allows BlindMe to see the underlying connection between the server and players, which it uses to keep track of players that are using BlindMe on their games.
- `ServerPlayerEntityMixin`: Please check any mods that may manipulate the protocol or status effects. This mixin intercepts client-bound packets about status effect changes regarding the enforced effect before they are sent, but it does not replace code for sending the packets.

## `IllegalArgumentException` when initializing

Please double check [the configuration file](#configuration-file). It is possible you may have a bad value; have a missing key-value pair, or you have mispelled a key or value.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>