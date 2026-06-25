---
mod: BlindMe
title: BlindMe User's Manual
permalink: /mods/blindme/documentation
icon: /assets/icon/blindme.png
color: "#000000"
---

This manual is up-to-date with version 2.0 of BlindMe.

{% include toc.md %}

# Intent

BlindMe's purpose is to give the player a novel challenge of not being able to see very much around them, but in a way that is compatible with multiplayer at large, using the vanilla Blindness effect as the base since it frequently goes underused.

I started developing it for myself after a long displeasure with the current vanilla and vanilla-adjacent style of multiplayer gameplay, as well as the very high visibility of [LudoCrypt's Movement Vision mod](https://modrinth.com/mod/movement-vision). Since then I've figured out said displeasure, but this is a byproduct of trying to discover it. I quite like the idea, and it has become a mainstay of my Minecraft instance, even if it's turned off for most worlds.

This mod is **not** intended to raise awareness for people with vision impairments, and instead is purely an exercise of game mechanics.

# How to Use

BlindMe automatically applies a fog much like the ones from Blindness or Darkness effects onto your player character when you load a singleplayer world or join a multiplayer server, as configured. If it's the first time on said world or server, BlindMe defaults to not applying a vision-impairing effect, as is the most convenient option for most existing worlds and servers.

If you want to change the active effect for the world you are playing in, or would like to disable BlindMe for it altogether, you can either use the `/blindme` command, or use the settings screen, which itself is accessible via Mod Menu.

BlindMe has four preset settings for worlds:
- **Blindness**: a very restrictive effect that drastically reduces the player's range of vision to a radius of four blocks around themselves. All else is rendered in pure black.
- **Darkness**: an easier version of the previous effect that isn't as restrictive as Blindness as it reduces the range of vision to a radius of approximately 14 blocks.
- **Truly Blind**: the most restrictive effect, the player's range of vision is reduced to hauntingly short 1.9 blocks. The vast majority of things within touching distance are hidden and cannot be seen.
- **Silent Hill**: designed to resemble the fog from Silent Hill. Added as a joke as so many people see BlindMe gameplay and instinctively say that the game is Silent Hill.
- **Off** (default): the player does not receive any vision-impairing effects, and can interact with the game as if BlindMe wasn't installed.

BlindMe also has the capability to automatically disable when the player switches to a different gamemode, namely Creative Mode, and Spectator Mode. These are intended for server administrators, and can only be changed at the mod's settings screen.

By default, Creative Mode does not grant a bypass for the effects mostly because vision impairments can significantly affect building style, while Spectator Mode does by default, mainly so server administrators can quickly spectate players without vision impairments.
Additionally, these specific bypasses can be set on a per-world/server basis as well.

## The `/blindme` Command

The `/blindme` command is an in-game command to quickly change the active effect for the world you are connected to. While not recommended for survival gameplay, it can be of use in creative environments, or in cases where visibility is a must, such as moderating a server.

When run without any arguments, the command will open its setting screen.

By running with `set` as an option, you may specify the setting for the world or server you're currently playing in, which can be one of the following:

 - `blindness`: sets the effect for the current world to Blindness.
 - `darkness`: sets the effect for the current world to Darkness.
 - `truly_blind`: sets the effect for the current world to Truly Blind.
 - `silent_hill`: sets the effect for the current world to Silent Hill.
 - `off`: disables effects for the current world.
 - `default`: use the global setting, set in the settings screen.

When the command is run, the old effect is immediately discarded and the new effect is immediately applied. The change is not temporary, and persists across world loads or joins (but does not carry over to a different world). You cannot set custom effects with the command and you must use the configuration screen instead.

When running with `query`, the command will report the currently active effect.

## The Settings Screen

BlindMe also provides a settings screen by running the command without any options, or accessible through [Terraformers' Mod Menu](https://modrinth.com/mod/modmenu). To open it, select the mod in the mod list, and press the "Configure..." button.

The settings has two tabs, global defaults and world-specific options. These two tabs are nearly identical and have nearly the same functionality, with the only difference being that world-specific options can be selected to default to the global settings.

- **Disable in Creative** (default OFF): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Creative Mode as defult behaviour, and reinstated once they leave Creative Mode. If set to OFF, Creative Mode will follow the setting for the world.
- **Disable in Spectator** (default ON): If set to ON, the player will have vision impairing effects removed when they have gamemodes switched to Spectator Mode as defult behaviour, and reinstated once they leave Spectator Mode. If set to OFF, Spectator Mode will follow the setting for the world.
- **Lock world options**: (*world-specific tab only*, default OFF) If set to ON, the world settings will be locked and they cannot be changed again unless they are unlocked. This is an extra layer to help enforce a self-imposed challenge.
- **Enable vision-impairing effect** (default OFF): If set to ON, BlindMe's visual effect will be active and take place. This option works regardless of fog settings.
- **Start of fog** (default 1.25 blocks): This numerical input controls how thick the fog is up until the point you can no longer see through it. The lower the number, the closer to the player will the fog start obscuring blocks.
- **End of fog** (default 5 blocks): This numerical input controls how far you can see through the fog. The further the distance, the more visibility in-game.
- **Fog color** (default pure black, `#000000`): This option controls the color of the fog. It does not need to be pure black and can be a bright pink if so desired. It can be changed with the color picker or by inputting a 6-digit hex color code.

After these options, there is a collapsible section (collapsed by default) that contains buttons to load fog presets more conveniently than inputting values manually.

The settings are saved once the player presses the "Save Changes" button, can be undone, or can be discarded by pressing the "Cancel" button.

# World-specific settings

Under the hood, BlindMe uses a system of world-specific settings that can refer to global settings. This means that you can have full vision on most worlds, but have some of them where you're forced to have Blindness, or vice-versa!

When a world-specific option is set to "default", it's set to use the global settings for that option. For example: if the effect for the world _A_ is set to default, then it uses the default effect for new or unconfigured worlds. If you then disconnect, open world _B_, and change the default setting to be Darkness, the effect on world _A_ will change to Darkness as well purely _by proxy_. The effect on world _A_ will not be _set_ to Darkness, but rather, it'll continue to be set to default to the global setting, which itself is Darkness.

The exceptions for Creative Mode and Spectator Mode can also be set independently of the global settings. This is so because vision-impairing effects have a great impact in building style, and thus, a long-term creative world with BlindMe active could be made "spoiled" by accident if these options didn't exist.

Additionally, world settings can be locked. Locking a world's settings makes you unable to change any of its settings, either via the settings screen, or the `/blindme` command. Locking exists in order to facilitate upkeep on a challenge for a world, such as a survival world with Blindness enabled. Locked world settings can also be unlocked at the settings screen, if needed.

# Additional technical notes

BlindMe is designed to have no impact on vanilla gameplay, and tries to undo any gameplay restrictions it, and only it alone, is causing.

The only negative effect it has is the fog possibly being further away when the server requests it to be closer to the camera, and thus, if BlindMe did not mitigate it, the fog of Blindness and Darkness would be overriden.

Despite BlindMe having options to set the color of the fog, Blindness and Darkness darken that color to be pure black.

Adventure Mode is not considered as its own mode and is clumped as if it was Survival Mode. Technically: BlindMe does not consider any other gamemodes outside Creative Mode and Spectator Mode, and with the sole purpose of enabling exceptions per gamemode.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
