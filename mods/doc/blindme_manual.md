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

This mod is **not** intended to raise awareness for people with vision impairments, and instead is purely an exercise of game mechanics.

# How to Use

BlindMe automatically applies the Blindness, Darkness or Truly Blind effect onto your player character when you load a singleplayer world or join a multiplayer server, as configured. If it's the first time on said world or server, BlindMe defaults to Blindness, the most balanced setting between restrictive and playable.

If you want to change the active effect for the world you are playing in, or would like to disable BlindMe for it altogether, you can either use the `/blindme` command, or use the settings screen accessible only by Mod Menu.

BlindMe has four settings for worlds:
- **Blindness** (default): a very restrictive effect that drastically reduces the player's range of vision to a radius of four blocks around themselves. All else is rendered in pure black.
- **Darkness**: a disorienting effect that isn't as restrictive as Blindness as it reduces the range of vision to a radius of approximately 14 blocks, but comes with a pulsating subeffect that severely darkens the world gamma every few seconds (this pulsating can be turned off in the vanilla accessibility settings).
- **Truly Blind**: the most restrictive effect, the player's range of vision is reduced to hauntingly short 1.9 blocks. The vast majority of things within touching distance are hidden and cannot be seen. The player is expected to use the Touching mechanic in order to get a sense of the world around them.
- **Off**: the player does not receive any vision-impairing effects, and can interact with the game as if BlindMe wasn't installed.

BlindMe also has the capability to automatically remove effects when the player switches to a different gamemode, namely Creative Mode, and Spectator Mode. These are intended for server administrators, and can only be changed at the mod's settings screen. By default, Creative Mode does not grant a bypass for the effects mostly because vision impairments can significantly affect building style, while Spectator Mode does mainly so server administrators can quickly spectate players without vision impairments.

## The Touching mechanic

The Truly Blind mode is so restrictive that the majority of things the player can interact with are outside of their range of vision. To counteract this, BlindMe provides a mechanic that reveals, in text form, what the player is aiming at. When activated, the player swings their arm, and the name and distance of the thing aimed at is displayed in the center of their screen.

The player can touch blocks and entities by activating their touch button, bound to Mouse 4 by default.

Unfortunately, due to the way some servers are aggressive with their anti-cheats, the hand swinging animation can cause issues, and the player may get erroneously flagged as a cheater. There's a setting in the configuration screen that disables the animation, which will also disable the animation on the client side, too.

## The `/blindme` Command

The `/blindme` command is an in-game command to quickly change the active effect for the world you are connected to. While not recommended for survival gameplay, it can be of use in creative environments, or in cases where visibility is a must, such as moderating a server.

The command takes a single, mandatory argument, the setting for the server which can be one of the following:

 - `blindness`: sets the effect for the current world to Blindness.
 - `darkness`: sets the effect for the current world to Darkness.
 - `truly_blind`: sets the effect for the current world to Truly Blind.
 - `off`: disables effects for the current world.

When the command is run, the old effect is immediately stopped and the new effect is immediately applied. The change is not temporary, and persists across world loads or joins.

## The Settings Screen

BlindMe also provides a settings screen, accessible through [Terraformers' Mod Menu](https://modrinth.com/mod/modmenu). To open it, select the mod in the mod list, and press the "Configure..." button.

The settings screen provides three buttons:

- **Disable in Creative Mode** (default OFF): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Creative Mode, and reinstated once they leave Creative Mode. If set to OFF, Creative Mode will follow the setting for the world. This button reflects the creative bypass feature.
- **Disable in Spectator Mode** (default ON): If set to ON, the player will have vision impairing effects removed when they start spectating, and reinstated once they leave Spectator Mode. If set to OFF, spectating will follow the setting for the world. This button reflects the spectator bypass feature.
- **Swing Hand when Touching** (default ON): If set to ON, the player character will swing their hand when the player activates the Touching mechanic, which is then relayed by the server to other players. If set to OFF, the player character will not swing the hand, and the only feedback from Touching will be the information text. This setting does not disable the Touching mechanic.
- **Effect for the current world / server** (default Blindness): This button reflects the setting for the currently-joined world. If the player is not in any world or server, this button will be disabled. There is currently no way to change the settings of servers and worlds that are not the active one.

The settings are saved once the player presses the "Done" button.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
