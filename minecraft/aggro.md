---
title: Aggro in Minecraft
description: An analysis of the enmity systems that hostile mobs use in Minecraft.
---

<mark class="note">The information on this page is up-to-date to Minecraft Java Edition version 1.21.10.</mark>

Aggro (also known as threat, hatred, and enmity) is what determines the target of each mob in a game. More complex games tend to have mobs that track the threat level of each player they can target, and attacking the one with the highest threat. However, Minecraft's enmity system is a lot more simplistic.

{% include toc.md %}

# Basic overview

Minecraft does not exactly have an enmity system for mobs. Mobs instead select their target according to a priority list based on their target's behavior. This behavior is mostly uniform across most common mobs, but there are a few groups of mobs which behave differently.

# Behaviors

The behaviors here are *not* individual systems attached to the mobs, but rather they are targeting strategies that the mobs use and these categories are simply bundling together mobs who have generally similar, if not identical, strategies.

## Traditional behavior
<span>Revenge lock-on then nearest lock-on</span>

This is the most common lock-on behavior that nearly every classic mob has. It appears in **skeletons** and their variations, **spiders** and cave spiders, **zombies** and variations including zombie villagers, **pillagers, vindicators, evokers, illusioners and ravagers**, **blazes**, **endermites**, **silverfish** and **shulkers**. The aggro is as follows:

1. Prioritize the entity that first attacked the mob and lock onto them until they die or it loses sight of them, regardless of type. If other entities attack the mob, it will ignore them as long as it can track the entity that first hurt them. (Revenge lock-on)
2. If the mob doesn't want revenge on anything for being attacked, it will find the nearest player it can find and it will lock onto them. It will not be distracted by other players walking closer, nor by its target going further away. (Nearest lock-on)

Some mobs still behave as described above but with slight alterations. They are as follows:

- **Vindicator**: if there are no targets dictated by rules 1 and 2, and the vindicator is Johnny, then it will try to find anything living to kill.
- **Witches**: witches will attack in retaliation, but before finding any other target, they will try to carry out raid objectives first.
- **Vex**: if it does not have a revenge target, it'll try attacking the target of its spawner evoker first, regardless if that target is for revenge or nearest target, before it searches for a target.

Some mobs, when attacked, alert its nearby allies (usually mobs of the same time). This alerting is only effective on mobs that don't already have a target, be it for revenge or the nearest mob. This group revenge mechanics applies for the following mobs:

- Blazes cover for other blazes,
- Endermite cover for other endermites,
- Evokers, illusioners, pillagers, ravagers, vindicators, vexes, and witches cover for each other. Witches, interestingly, will be submissive and will not themselves ask for help, making them easier picks in pillager raids.
- Shulkers will cover for other shulkers,
- Silverfish will cover for other silverfish,
- Zombies and their variations will cover for each other of the same variant, including zombie pigmen.

## Nearest player lock-on only

A couple of classic mobs do not seek out to hurt those who have hurt them, and instead will lock on to the nearest target, and will only change when they die. This behavior is presented by **ghasts**, **guardians** and elder guardians, **slimes** and **magma cubes**, **creepers**. The aggro rule is as follows:

- If there is a nearby target, then lock onto it until it is dead, out of range or sufficiently out of sight while ignoring all distractions, including damage from entities other than the target.

Creepers additionally have a lock-on revenge mechanic. This is intended for creepers to attack skeletons who have hit them. If you hit the creeper and then it gets shot by a skeleton, you'll have triggered its revenge mechanic for you and will never target the skeleton.

Slimes and Magma Cubes do not inherit the original target when splitting.

## Revenge lock-on only

This behavior appears only on neutral classic mobs. Effectively, if they are hurt, they will hunt down whoever hit them until they are dead. Present only on **endermen** and **zombie pigmen**. More precisely:

- If any entity has hurt the mob while it was idle, prioritize them and lock onto them until they die, are out of range, or it loses sight of them, regardless of type. If other entities attack the mob while it is chasing the original attacker, it will ignore them as long as it can track the entity that first hurt them, and will forget about any other attackers after the chased entity is forgotten.

Additionally, both endermen and zombie pigmen, after their target dies, will search a nearby player if the universal anger gamerule is enabled.

## Non-locking traditional behavior

The mobs in the Nether Update (1.16) have a new system compared to older mobs. What this entails in practice is that they do not hyperfixate on one target as hard. **Piglins**, **piglin brutes**, **hoglins** and **zoglins** are the only mobs that demonstrate this kind of behavior. The exact rules are as follows:

1. Pursue and attack the last entity that attacked the mob. If a different entity attacks the mob while pursuing an attacker, switch to that entity instead.
2. If not seeking revenge for attacking, then target the immediately nearest player. If another player comes closer, target them instead.

This differs from classic mobs in that they can switch targets freely instead of having to kill its target. Two sufficiently skilled players can juggle the attention of one of those mobs without neither of them getting hurt.

## Phantom

I haven't figured out how the phantom targets exactly but. From what I could gather, it's jank, and all the rules are as follows:

- Enumerate the entities in an area around the phantom.
- Out of all the players found in range, pick the first one.

This causes the phantom to *always* target the player that __joined the server the earliest__, because internally they come first. This means that, there is no determinate way to distract a phantom other than running away from it. The only way to distract a phantom is for a player to approach who's been online for longer than the player targeted by the phantom.

If you have joined the server later than them, you cannot tank phantom attacks for them.

## Breeze, Creaking, and Warden

These mobs use the system added in 1.16. I did not test them thoroughly since I'm not interested in boss fights, but it seems, from a very quick glance, that rules are as follows:

- Breeze: Prioritize getting revenge, otherwise attack nearest player.
- Creaking: Attack the nearest player with line of sight.
- Warden: I don't know. I didn't bother. An iron golem and two stacks of iron ingots do the job.

I would expect it that these newer mobs do not lock-on very tightly onto one target and can switch targets.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>