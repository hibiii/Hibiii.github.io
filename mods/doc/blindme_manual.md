---
mod: BlindMe
title: BlindMe User's Manual
permalink: /mods/blindme/documentation
icon: /assets/icon/blindme.png
color: "#000000"
---

{% include toc.md %}

# Intent

BlindMe's purpose is to give the player a novel challenge of not being able to see very much around them, but in a way that is compatible with multiplayer at large, and also using the vanilla Blindness effect since it frequently goes underused.

I started developing it for myself after a long displeasure with the current vanilla and vanilla-adjacent style of multiplayer gameplay, as well as the very high visibility of [LudoCrypt's Movement Vision mod](https://modrinth.com/mod/movement-vision). Since then I've figured out said displeasure, but this is a byproduct of trying to discover it. I quite like the idea, and it has become a mainstay of my Minecraft instance, even if it's turned off for most worlds.

This mod is **not** intended to raise awareness for people with vision impairments, and instead is purely an exercise of existing game mechanics.

# How to Use

BlindMe automatically applies the Blindness or Darkness effect onto your player character when you load a singleplayer world or join a multiplayer server, as configured. If it's the first time on said world or server, BlindMe defaults to Blindness, the most restrictive setting.

If you want to change the active effect for the world you are playing in, or would like to disable BlindMe for it altogether, you can either use the `/blindme` command, or use the settings screen accessible only by Mod Menu.

BlindMe has three settings for worlds:
 - **Blindness** (default): a very restrictive effect that drastically reduces the player's range of vision to a radius of four blocks around themselves. All else is rendered in pure black.
 - **Darkness**: a disorienting effect that isn't as restrictive as Blindness as it reduces the range of vision to a radius of approximately 14 blocks, but comes with a pulsating subeffect that severely darkens the world gamma every few seconds (this pulsating can be turned off in the vanilla accessibility settings).
- **Off**: the player does not receive any vision-impairing effects, and can interact with the game as if BlindMe wasn't installed.

BlindMe also has the capability to automatically remove effects when the player switches to a different gamemode, namely Creative Mode, and Spectator Mode. These are intended for server administrators, and can only be changed at the mod's settings screen. By default, Creative Mode does not grant a bypass for the effects mostly because vision impairments can significantly affect building style, while Spectator Mode does mainly so server administrators can quickly spectate players without vision impairments.

## The `/blindme` Command

The `/blindme` command is an in-game command to quickly change the active effect for the world you are connected to. While not recommended for survival gameplay, it can be of use in creative environments, or in cases where visibility is a must, such as moderating a server.

The command takes a single, mandatory argument, the setting for the server which can be one of the following:

 - `blindness`: sets the effect for the current world to Blindness.
 - `darkness`: sets the effect for the current world to Darkness.
 - `off`: disables effects for the current world.

When the command is run, the old effect is immediately stopped and the new effect is immediately applied. The change is not temporary, and persists across world loads or joins.

## The Settings Screen

BlindMe also provides a settings screen, accessible through [Terraformers' Mod Menu](https://modrinth.com/mod/modmenu). To open it, select the mod in the mod list, and press the "Configure..." button.

The settings screen provides three buttons:

- **Disable in Creative Mode** (default OFF): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Creative Mode, and reinstated once they leave Creative Mode. If set to OFF, Creative Mode will follow the setting for the world. This button reflects the creative bypass feature.
- **Disable in Spectator Mode** (default ON): If set to ON, the player will have vision impairing effects removed when they start spectating, and reinstated once they leave Spectator Mode. If set to OFF, spectating will follow the setting for the world. This button reflects the spectator bypass feature.
- **Effect for the current world / server** (default Blindness): This button reflects the setting for the currently-joined world. If the player is not in any world or server, this button will be disabled. There is currently no way to change the settings of servers and worlds that are not the active one.

The settings are saved once the player presses the "Done" button.

# Gameplay Changes

Other than the obvious addition of the enforcement of the Blindness or Darkness effect, BlindMe also includes a change to the underlying vanilla gameplay.

## Players can now sprint if they have the Blindess effect

Mojang's design and implementation of the Blindness effect includes the side-effect of not being able to sprint, as demonstrated many tickets opened on their Jira instance about specifically that and being closed as "working as intended".

This change is done because swimming is activated by sprinting underwater, and it has become instrumental in underwater player movement post 1.13. Without it, the player becomes slow to move in water and thus extremely vulnerable with reduced sight.

Implementation detail: the check for whether or not players can sprint is done for any instances of the Blindness effect. BlindMe's solution lies about the player having the Blindness effect and always claim the player doesn't have it. The consequence of this is that, if the server forces the player to have the Blindness, the player, by mere technnicality, will be cheating as they will still be able to sprint. The vanilla server does not enforce the inability to sprint.

# Additional Notes

The Darkness effect has a fade-in animation. Currently, BlindMe does not account for that, neither when switching effects, or when loading into a world. It is entirely possible to get a clear view of the world for a brief moment either when you join, or you switch from Blindness to Darkness.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
