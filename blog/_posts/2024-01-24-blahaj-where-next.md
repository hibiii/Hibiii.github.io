---
title: "Blåhaj Mod: Where I'm Headed With It"
tags: [minecraft, modding, blåhaj mod]
---

I feel my absence has been long enough that it warrants an explainer. Why have
I been gone for so long? What am I going to do with Blåhaj Mod?

What happened?
==============

A lot of things happened. Before even 0.3.0 release, I was already starting to
fold under the pressure of Blåhaj Mod's success, I was scared of what I wanted
to do with the mod, but I hadn't yet noticed by then. Over the coming months,
things became a quite unstable for me: having to deal with uncomfortable
real-life situations to which I had no guide for, amidst discomfort in myself
and skepticism from others, and also emotional problems, too.

The fears I had during the 1.19 update cycle, about more frequent updates
hurting the modding scene, started to get proof behind them. I was trying to
stay away from negativity surrounding Minecraft, but it became extremely
difficult when I saw some popular mods I used not being updated for 1.20.2.

I had a depressive episode, too. That's why I archived the Blåhaj Mod's source
code. To help me cheer up from it, I started working on a reboot of
[BlindMe](/mods/blindme) completely from scratch, it previously used to be a
private mod with no source control and poor code quality. I also worked on a
few, smaller, experimental mods, testing not only my skills in modding
Minecraft, but also learning how Gradle works.

It worked! It helped not only distract me, it reminded me that I can be
productive with Minecraft mods, and also helped improve my mood in regards to
modding. I started seeing loaders and libraries more clearly, and, importantly,
the people behind them and using them, and my own projects too.

The Plans for the Future
========================

Support for Newer Versions
--------------------------

Ok, so! First order of business: compatibility for 1.20.2 and 1.20.4. These
will be _just_ 0.3.0 with no additions. Simple, straight ports of 0.3.0 to
those versions. Also, these will use a custom written build.gradle instead of
copying, over the build system of the previous version, reason behind it is so
I'm fully aware of what's going on in the build process.

A Spectrum of Colors
--------------------

The original Blåhaj is closer to Minecraft's light blue wool, isn't it? The
Klapparhaj is closer to light gray wool too. And lots of Blåhaj Mod forks
include shark toys in all of Minecraft's 16 dye colors, so I may as well.

This will be a little bit of a technical challenge, because I'll have to learn
to use DataFixerUpper, Mojang's own library for incremental data updates,
because the current ID's conflict with future ID's.

Placeable Items as Entities
---------------------------

Another trend I also saw among forks and something I myself wanted to do before
them was to have toys that you could place down in the world, because
that's something you do when you're not cuddling or playing with plushies. You
don't hide them in a chest, you leave them on your bed, sofa, desk, etc.

Although, there's something that bothers me about using Blåhaj Mod items are
pure blocks: they're always aligned to the block grid and can't be rotated into
more natural angles. This is something that I think doing entities would
massively help, because they can be misaligned with the block grid, they can be
angled in any way, even rolled. And they can sit on top of your bed without
hovering above it.

Tentative, Single Source Tree
-----------------------------

I've thought about how the Blåhaj Mod code base is fragmented and that it's
unsustainable for long-term maintenance and development. If I want to implement
a feature, Blåvingad for example, not only do I have to do boilerplate multiple
times (which is prone to errors), but also I have to write the functionality
multiple times for different versions of the game, with different environments
and circumstances. I want to do a port of it to 1.16 but I have no idea where
to start because bundle mechanics weren't a thing in 1.16.

Using a single source tree would not only reduce the chance for human error,
but also heavily cut down on boilerplate. Using a solution that allows for a
multi-version core, even with version-specific implementation details, would be
a lot more appealing to me than the current solution.

Tentative Forge and NeoForge Support
------------------------------------

This is a goal I may drop, depending on the difficulty. Forge support has been
a very requested feature pretty much ever since Blåhaj went public. I don't
know how to write mods for Forge Loader, but I can learn how to do it, even
though I don't fully agree with Forge's dev team. I'd do it mostly for the
people that want to use Blåhaj Mod on Forge.

I'll likely go for a more automated multi-loader solution, like using
[Architectury](https://github.com/architectury) but I don't know how easy it'll
be while keeping single source tree multi-version support. I will definitely
investigate deeper when the time is near.

Heart Plushies!
---------------

Yes! I'll add them only, and exactly only when I've done everything I wanted to
do with Blåhaj Mod. Hearts wouldn't mean the end of it but instead would be a
mark of my definitive return to keeping the mod alive and updated.

<mark class="note">NOT AN OFFICIAL MINECRAFT BLOG POST. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>
