---
title: Scooters Mod integration makes me want to dye
tags: [minecraft, modding, code]
---

What do you do when an entire ecosystem that does not yet exist assumes a
reasonable thing and you need compatibility with it, but you need to do some
unreasonably insolent garbage?


I've been updating one of the mods of mine, [Scooters Mod](/mods/scooters), for
[Blanketcon 23][bc23]. I've had to hurry and implement fixes, things I've wanted
to add, etc. One of those things is customizing scooters!

![A screenshot of a few painted scooters](/assets/screenshots/colorful_scooters_ingame.png)

It's fine and dandy, I take a look at the wolf collar rendering code, learn how
vanilla does it, implement it, etc. It uses the internal IDs of the dye colors,
0 through 15, and those are pretty standard colors because they've been in the
game since early 2011. I find it no biggie but a little odd that it does map
and enum lookups on rendering.

But with this simplicity, my mind was empty enough that I could think about the
next feature, and I came up with the idea of making the handles on the handlebar
colorable. I had to think of a way to differentiate applying color to the
scooter body vs the handles, I settled on dye for the body and colored wool for
the handles.

Then one night (16 July), someone mentioned that if the Scooter item implemented
an interface `DyeableItem` (in <abbr title="Quilt Mappings">QM</abbr>) then it
would be automatically compatible with an item of theirs that lets the player
have arbitrary colors. I thought that was an interesting approach and I took a
look at it, but I noticed an unwritten assumption:

`DyeableItem` assumes only one color on the item, and mods that add custom dyes
would rely on this assumption. I had to change my scooters.

Then I took a look at the code for wool blocks expecting to find something akin,
and discovered something worse: wool blocks don't hold color data, I'd have to
hardcode the colors for the vanilla wool blocks, damned be custom colored wools.

Then I was disappointed and went to sleep.


The Backburner is OP
====================

The next day (17 July), I was perusing the code but I was blocked, how should I
design scooter item code so it's easily integrated in a modded environment with
custom dyes with custom colors? I couldn't write a single semicolon. I decided
to continue work on [Frakturia][frakturia] instead, a Linux virtual terminal
font of mine, and leave the code design in the back of my mind, the backburner.

As I was designing glyphs, I was still thinking about it, some questions
surfaced in my mind. If I made the scooter items `DyeableItem`s, then it would enforce only a single colorable part, or so my thought went.

If I make scooters not a `DyeableItem`, then I'd have the freedom to do what I
please, but then compatibility would be shot as I wouldn't be relying on a
well-known interface for recoloring items, or so my thought went.

Maybe perhaps I'd have to look for another method for customization, like how
vanilla added armor trims for use with trim templates. I realized that I'd have
to make a compromise. This is when I decided it was a difficult decision for me
and that I should write more than a few quick notes about it.

I did quite a few glyphs with Frakturia and my day was quite productive, and I
was combining ideas together in my mind. I wanted to use dyes for the
scooter body, and wool for the handles, maybe I should use arbitrary colors and
`DyeableItem` for the body but use the 16 IDs for the wool. I'd have to make a
function to reverse lookup wool colors, I wouldn't have compatibility with
wool with custom colors, but I'd be able to get something done. I kept thinking.

After some brainstorming I decided that yeah, this was a good compromise:

  - Vanilla already has color mixing with Leather Armor, and it uses
    `DyeableItem`.

  - Mods that add dyes can very, very easily integrate with painting the scooter
    body, as all they'd have to make sure is that they work with leather armor.

  - You, the player, could achieve very bright colors like neon pink
    (`#FA2FBD`), or neon chartreuse (`#DFFA55`) with commands.

  - You don't get as much customization with handles, however, since you can't
    mix wool colors in vanilla.

  - Mods that add their own wool colors are left out too, sadly.


Back to work
============

I made scooter entities use arbitrary colors and implemented `DyeableItem` on my
scooter item, and I was pleasantly surprised to discover that the vanilla
crafting recipe for dyeing leather armor worked perfectly straight out of the
box. I had to fix the scooter renderer because it got a different color from
somewhere else, but I fixed that and the body part of scooter customization is
done.

All of this niceness however doesn't remove the other problem, I still have to
make the handles colorable, reminder that my solution would need to match on
vanilla wool blocks, rejecting everything else. As I was making scooters be
recolorable, I was thinking how nice it would be to have a color API, how nice
it would be to just ask "does this item have a color?" and "I want the color of
this wool block." I wanted to write about this possible color API.

I had a realization as I was writing this a few paragraphs earlier: use the map
color for the wool block! Blocks in Minecraft store the color of their pixels to
display on a map, and anyone that makes a custom colored block would make sure
their block is represented on a map.

This isn't a perfect solution because the map color data could be a different
shade, but it sounds like a nice alternative because it can approximate colors
from *any* block, modded or not.

A Work in Progress
==================

Scooters mod still needs a lot of work to get ready for Blanketcon. As much as
I'd like to talk more about the dev process, I need to be mindful of my time!
I've yet to try it out but the idea sounds promising so far, but I'll update
this post in time.

[bc23]: https://blanketcon.modfest.net/
[frakturia]: https://github.com/hibiii/frakturia

<mark class="note">NOT AN OFFICIAL MINECRAFT BLOG POST. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>