---
mod: Blåhaj
title: Blåhaj User's Manual
permalink: /mods/blahaj/manual
icon: /assets/icon/blahaj.png
color: "#548b9d"
---

<mark class="note">Note: The user's manual refers to the latest version of Blåhaj Mod for the latest version of Minecraft, unless otherwise noted.</mark>

{% include toc.md %}

# Intent

The Blåhaj Mod was designed to bring the comfort of cuddling your favorite plushie into Minecraft. If there is any plushie you'd like to see added, let me know!

# How to use

The requirements for Blåhaj Mod are Fabric Loader or Quilt Loader, and Fabric API, and is required on _both_ the server and client. If you only play in singleplayer, it only needs to be installed once. If you are a server operator, you need to install it on the server, and tell your players to install it on their games as well.

Fabric API is embedded in Quilt Standard Libraries, and is aptly branded "Quilted Fabric API". If you already have QSL installed (which Quilt mods are likely to themselves require), then you don't need to install Fabric API.

# Version support

The Blåhaj Mod should always targets the latest version of the video game, to the extent of what's possible. If there is demand for a specific version, it shall be supported until said demand disappears, (considered as very little downloads after a prolonged amount of time).

Forge and NeoForge are not yet supported due to not only profound loader differences, but also insecurity as platforms. Unless you are willing to take on the burden of continually developing and maintaining for it, do not make a pull request adding support for Forge or NeoForge.

The 1.19.3 and the 1.18.x ports of Blåhaj Mod are being considered to have support ended due to low download numbers. Versions unsupported will still have precompiled binaries available but they will be out-of-date with new features as the version dependent code will be removed from the Blåhaj code repository. This code will always be available due to the fact that Blåhaj Mod uses Git for version control, which can rewind a code repository to a previous state.

# Items

All items added by this mod, whenever you craft, trade for, or rename, get your username attached to them. The player will also do a hugging pose when it is in either hand, and mining blocks directly with these items on the main hand will make mining 4 times slower because they are soft.

## Soft Toy Shark

Also known as the Blåhaj, this is a soft, shark-shaped plushie that the player can hold on their hands. It has no practical use and is purely cosmetic. Its ID is `blahaj:blue_shark`. Blåhaj can obtained only by crafting, using a vaguely shark-shaped recipe:

<center>
<img src="https://raw.githubusercontent.com/Hibiii/Blahaj/main/.pretty_readme/recipe_blue_shark.png" alt="Crafting recipe for a Soft Toy Shark">
</center>

## Gray Toy Shark

Also known as the Klappar Haj, this is a gray version of the Blåhaj, and represents a much older version of it, previously sold at IKEA. It is identical in every other way. Its ID is `blahaj:gray_shark`. It can obtained only by trading with sheperd villagers at master level, or in chests of village houses in plains, taiga, and snow biomes, or in stronghold chests.

<center>
    <img src="https://raw.githubusercontent.com/Hibiii/Blahaj/main/.pretty_readme/trade_gray_shark.png" alt="Trade offer for a Gray Toy Shark">
</center>

## Soft Toy Blue Whale

Also known as the Blåvingad, this is a soft plushie shaped like a blue whale, with a zippered pocket for its mouth, sold at IKEA. Its ID is `blahaj:blue_whale`. Blåvingad can be obtained by crafting, using a vaguely whale-shaped recipe:

<center>
    <img src="https://raw.githubusercontent.com/Hibiii/Blahaj/main/.pretty_readme/recipe_blue_whale.png" alt="Crafting recipe for a Soft Toy Blue Whale">
</center>

Blåvingad in-game have the ability to hold a stack of items. To store a stack in a Blåvingad, right click on the stack with the whale on the cursor, while in the inventory. The reverse also works, right clicking on the whale with a stack on the cursor. To remove an item stack from a Blåvingad, right click on an empty slot with the whale on the cursor.

Unlike bundles, Blåvingad can only have one stack of one item. For example, you cannot store 32 andesite and 32 granite in the same whale.

Note that, because there are no facilities in the vanilla code to merge two stacks with optional remainder, the item storage mechanic does not work with partial stacks. If the Blåvingad has a stack, it can only be taken out to an empty slot only; additional items cannot be placed in the plush.

## Bread Pillow

This is a long, baguette shaped item that is also purely cosmetic. It represents various bread-themed pillows sold at various stores. Its ID is `blahaj:bread`. It can be obtained by crafting, using a vaguely bread-shaped recipe of orange wool:

<center>
    <img src="https://raw.githubusercontent.com/Hibiii/Blahaj/main/.pretty_readme/recipe_bread.png" alt="Crafting recipe for a Bread Pillow">
</center>

# Technical Reference

This section includes more implementational details. Any vanilla field and method names will be using [Quilt mapping names](https://github.com/QuiltMC/quilt-mappings) as they're unencumbered.

## Cuddly item

This is the class common to all items defined by this mod. It defines the following:

  - Receiving and storing a "subtitle" when it is initialized in the code (constructor declaration);
  - The NBT key for the username of the "owner", `CuddlyItem.OWNER_KEY = "Owner"`;
  - How to attach the "owner"'s username when it is crafted (`onCraftByPlayer` override, place NBT `{Owner:"<username>"}` in the resulting `ItemStack`);
  - Attaching a tooltip to an `ItemStack` if it has a subtitle or the `ItemStack` has an "owner", and appropriately so if it is renamed (`appendTooltip` override);
  - Divide the mining speed when using a cuddly item to mine by four (`getMiningSpeedMultiplier` override).

### Displaying the username of the owner

Cuddly items can display the name of the "owner". This is an entirely cosmetic feature and does not affect gameplay.

Since there's no ownership system in Minecraft, it uses the same trick as written books do, by storing the username in NBT and displaying it in the tooltip. Items that have been crafted or renamed will have the username of the player that crafted or renamed had at the time of doing so. There is no way to remove a displayed name from an item.

## Item Container Cuddly Item

This is the class behind the blue whale item and is a subclass of Cuddly Item. It is responsible for the following functionality:

  - The NBT key for the item stack being contained, `ItemContainerCuddlyItem.STORED_ITEM_KEY = "Item"`;
  - Loading and unloading item stacks into the NBT data (`onClicked` and `onClikedOnOther` overrides);
  - Appending a tooltip to an item stack if it has a contained item (`appendTooltip` override).

## Loot table additions

For better integration with the vanilla world generation, the Blåhaj mod adds an entry to a few chests in that are generated in the world.

  - **Stronghold crossing** and **Stronghold corridor chests**: 1 Klappar Haj is placed in the chest with a 5/100 chance per chest;
  - **Plains village house chest**: 1 Klappar Haj is placed in the chest with a 1/43 chance per chest;
  - **Taiga** and **Snowy village house chests**: 1 Klappar Haj is placed in the chest with a 5/54 chance per chest;

## Villager trade offer additions

In order to make Klappar Hajs not a finite resource, it's also available as a villager trade.

  - **Profession**: Shepherd
  - **Level**: Master
  - **Price**: 15 emeralds
  - **Multiplier**: 0.1
  - **Selling**: 1 Gray Toy Shark
  - **Limit before restock**: 2 trades
  - **Villager XP**: 30 xp

## Mixins

To complete the functionality of the mod, as well as preventing bugs, mixins were used. The functionality of each is explained below, in a logical order:

  - ### `PlayerEntityRenderer`
    
    This mixin ensures the player has the `CROSSBOW_HOLD` arm pose when holding a cuddly. It takes control of both arms, and points them where the player is looking at. It is similar to how normal bows are held, but has an easier injection point, and makes the render code for normal items (vast majority) untouched.

  - ### `BipedEntityModel`

    This mixin turns the arms down and inwards regardless of pitch if the player holds a cuddly item. The injection point insures that the code is only run when the player's pose is a crossbow hold.

  - ### `AnvilScreenHandler`

    This mixin makes sure that the renamer's username is stored when a cuddly item is renamed, doing so exactly the same as when it is crafted. Additionally, there's a supporting mixin into `ForgingScreenHandler` giving this one access to the player field.

  - ### `AllayEntity`

    This mixin prevents players from giving Allays a cuddly item. This prevents a bug where the Allay would hold sharks through its head. On later examination, it was found that this change prevented players from accidentally giving an Allay the item if they were holding it on their off-hand.

# Known issues

[GH-9: Bread pillow recipe is too generic](https://github.com/Hibiii/Blahaj/issues/9): the shape of the recipe is so vague that there might be conflicts with other mods, it is the same shape as stone walls and wooden trapdoors. The solution for this will be adding a bread without consuming it, once an easy enough solution for recipe remainders becomes available.

<mark class="note">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
