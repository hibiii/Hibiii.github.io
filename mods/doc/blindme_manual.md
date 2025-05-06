---
mod: BlindMe
title: BlindMe User's Manual
permalink: /mods/blindme/documentation
icon: /assets/icon/blindme.png
color: "#000000"
---

This manual is up-to-date with version 1.1 of BlindMe.

{% include toc.md %}

# Intent

BlindMe's purpose is to give the player a novel challenge of not being able to see very much around them, but in a way that is compatible with multiplayer at large, and also using the vanilla Blindness effect since it frequently goes underused.

I started developing it for myself after a long displeasure with the current vanilla and vanilla-adjacent style of multiplayer gameplay, as well as the very high visibility of [LudoCrypt's Movement Vision mod](https://modrinth.com/mod/movement-vision). Since then I've figured out said displeasure, but this is a byproduct of trying to discover it. I quite like the idea, and it has become a mainstay of my Minecraft instance, even if it's turned off for most worlds.

This mod is **not** intended to raise awareness for people with vision impairments, and instead is purely an exercise of game mechanics.

# How to Use

BlindMe automatically applies the Blindness or the Darkness effect onto your player character when you load a singleplayer world or join a multiplayer server, as configured. If it's the first time on said world or server, BlindMe defaults to not applying a vision-impairing effect, as is the most convenient option for most existing worlds and servers.

If you want to change the active effect for the world you are playing in, or would like to disable BlindMe for it altogether, you can either use the `/blindme` command, or use the settings screen, which itself is accessible via Mod Menu.

BlindMe has three settings for worlds:
- **Blindness**: a very restrictive effect that drastically reduces the player's range of vision to a radius of four blocks around themselves. All else is rendered in pure black.
- **Darkness**: a disorienting effect that isn't as restrictive as Blindness as it reduces the range of vision to a radius of approximately 14 blocks, but should the player so wish, it comes with a pulsating subeffect that severely darkens the world gamma every few seconds.
- **Off** (default): the player does not receive any vision-impairing effects, and can interact with the game as if BlindMe wasn't installed.

BlindMe also has the capability to automatically remove effects when the player switches to a different gamemode, namely Creative Mode, and Spectator Mode. These are intended for server administrators, and can only be changed at the mod's settings screen.

By default, Creative Mode does not grant a bypass for the effects mostly because vision impairments can significantly affect building style, while Spectator Mode does by default, mainly so server administrators can quickly spectate players without vision impairments.
Additionally, these specific bypasses can be set on a per-world/server basis as well.

## The `/blindme` Command

The `/blindme` command is an in-game command to quickly change the active effect for the world you are connected to. While not recommended for survival gameplay, it can be of use in creative environments, or in cases where visibility is a must, such as moderating a server.

When run without any arguments, the command will report the setting active for the world you're playing in.

You may specify the setting for the world or server you're currently playing in, which can be one of the following:

 - `blindness`: sets the effect for the current world to Blindness.
 - `darkness`: sets the effect for the current world to Darkness.
 - `off`: disables effects for the current world.
 - `default`: use the global setting, set in the settings screen.

When the command is run, the old effect is immediately stopped and the new effect is immediately applied. The change is not temporary, and persists across world loads or joins (but does not carry over to a different world).

## The Settings Screen

BlindMe also provides a settings screen, accessible through [Terraformers' Mod Menu](https://modrinth.com/mod/modmenu). To open it, select the mod in the mod list, and press the "Configure..." button.

The settings screen provides the following buttons:

- **Disable in Creative** (default OFF): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Creative Mode as defult behaviour, and reinstated once they leave Creative Mode. If set to OFF, Creative Mode will follow the setting for the world.
- **Disable in Spectator** (default ON): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Spectator Mode as defult behaviour, and reinstated once they leave Spectator Mode. If set to OFF, Spectator Mode will follow the setting for the world.
- **Disable Darkness pulsing effect** (default ON): If set to ON, the pulsing visual effect from the Darkness effect will be removed if, and only if, the copy of Darkness inflicted on the player is controlled by BlindMe. If the player receives Darkness while this is active, pulsing will happen since it would happen anyway in vanilla. If set to OFF, there is no distinction and the self-inflicted Darkness will always visually pulse.
- **Default effect for worlds** (default OFF): This button represents the default behavior of BlindMe on new worlds or worlds which have been explicitly set to use the default effect. Changing the default effect will change the effect for all new or unconfigured worlds.

After a separator, the following settings apply only to the currently joined world:

- **Effect for current world**: Changing this button to a value other than default will make it so the current world will have its own setting enforced, regardless of the default behavior. Possible values are default, OFF, Blindness, and Darkness. When set to default, it uses the effect selected in *Default effect for worlds*.
- **Disable in Creative here**: Akin to *Disable in Creative*, but specific to the current world. When set to default, the Creative Mode bypass for BlindMe refers to the global setting.
- **Disable in Spectator here**: Akin to *Disable in Spectator*, but specific to the current world. When set to default, the Spectator Mode bypass for BlindMe refers to the global setting.
- **Lock world options**: A button that, after a confirmation prompt, will lock the world settings, and turn this button into *Unlock world options*. Once the world settings are locked, they cannot be changed again unless they are unlocked. Additionally, the *Unlock world settings* button will not be active, and in order to press it, you must hold the shift key as additional confirmation before unlocking.

The settings are saved once the player presses the "Done" button.

# World-specific settings

Under the hood, BlindMe uses a system of world-specific settings that can refer to global settings. This means that you can have full vision on most worlds, but have some of them where you're forced to have Blindness, or vice-versa!

When a world-specific option is set to "default", it's set to use the global settings for that option. For example: if the effect for the world _A_ is set to default, then it uses the default effect for new or unconfigured worlds. If you then disconnect, open world _B_, and change the default setting to be Darkness, the effect on world _A_ will change to Darkness as well purely _by proxy_. The effect on world _A_ will not be _set_ to Darkness, but rather, it'll continue to be set to default to the global setting, which itself is Darkness.

The exceptions for Creative Mode and Spectator Mode can also be set independently of the global settings. This is so because vision-impairing effects have a great impact in building style, and thus, a long-term creative world with BlindMe active could be made "spoiled" by accident if these options didn't exist.

Additionally, world settings can be locked. Locking a world's settings makes you unable to change any of its settings, either via the settings screen, or the `/blindme` command. Locking exists in order to facilitate upkeep on a challenge for a world, such as a survival world with Blindness enabled. Locked world settings can also be unlocked at the settings screen, if needed.

# Additional technical notes

BlindMe is designed to have no impact on vanilla gameplay, and tries to undo any gameplay restrictions it, and only it alone, is causing. It does it by doing "deep checks": the primary status effect instance is checked if it's only the mod's managed instance.

In vanilla, sprinting (and by extension swimming) is entirely disabled when the player has Blindness. BlindMe changes this such that the player can sprint if the Blindness applies is only from BlindMe.
Technically: BlindMe makes it so, when checking if the player is elligible to sprint, the game ignores Blindness _if_ the instance of Blindness is the one managed by BlindMe _and_ said instance doesn't shadow any other instances of Blindness.

In vanilla, Darkness has a pulsing effect. It has no gameplay effects but can be disorienting when applied for long periods of time. BlindMe disables the pulsing effect optionally, only if the Darkness is self-inflicted.
Technically: BlindMe overrides the pulse strength to 0% _if_ the instance of darkness is the one managed by BlindMe _and_ said instance doesn't shadow any other instances of Darkness.

Adventure Mode is not considered as its own mode and is clumped as if it was Survival Mode. Technically: BlindMe does not consider any other gamemodes outside Creative Mode and Spectator Mode, and with the sole purpose of enabling exceptions per gamemode.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
