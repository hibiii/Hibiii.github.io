---
title: "Idea: A plugin for BVE Trainsim that lets you use Lua"
tags: [bve, code, backburner, idea]
---

I like Lua and this one very old train simulator from the 2000's, so why not?

BVE, since version 4, has had an API for implementing custom safety systems.
Unlike most game APIs, it's a C API, using shared libraries (DLLs), I even made
[a template for BVE plugins][template-ats].

That's very cool and all but that hinders rapid prototyping since you can't
hotreload code very easily - not only do you have to recompile, you also have
to reload the entire scenario, including objects and sounds and track
geometry - fine on test scenarios, not so much when testing in production.

What's a safety system?
-----------------------

A safety system is basically a system that prevents accidents. It can be as
simple as a grabber on the track connected to a signal to complex IT systems,
with every train being aware of every other train on the track, track geometry,
junctions, etc. They are network wide systems and wouldn't make sense placing
them on a single train on a single line, it would be green from terminal to
terminal.

Safety systems can also be designed without other trains in mind, such as
making sure the train respects the speed limit, or the train doesn't go runaway
with no one at the controls.

So, why not add a simulated safety system into a train simulator where it's
only a single train on a single line? Well... BVE does some work to make it
seem like there's other trains in your line but it's rudimentary, it's more an
emulation than a simulation.

A little context
----------------

BVE 4, comparatively speaking, is a _very_ barebones train simulator. It has a
very large amount of things that it doesn't support. Comparing to newer
versions of itself and OpenBVE, it doesn't support animated 3D objects, or
animated textures, no moving trains, no 3D cabs, no model for the player's
train, manual door controls... and definitely doesn't support more advanced
development features, such as route file inclusion, preprocessor conditionals,
scripted markers, render-to-texture (not seen anywhere), debug screens, etc.

If a scenario developer wants their scenario to have more advanced features,
they'll have to use clever trickery (like block occlusion, signal state
animation), or use an external program to preprocess the route (like BVE Route
Randomizer), or implementing it themselves with the trainborne plugin.

A lot of plugins out there emulate things that more sophisticated train
simulators provide freely: cab lighting, headlight controls, power supply gaps,
pantograph controls, manual door controls and PA system, and even rain droplets
on the windshield and wipers (!!!).

Why?
====

As I said, I like Lua.

There's technical and practical aspects to it though:

  - The Lua plugin could be hotreloaded. BVE itself doesn't have a facility for
    detecting the scenario is being restarted, but a solution for hotreloading
    can be engineered.

  - There's no compilation step, all changes are immediately reflected.
    Depending on the setup, no compilation could make development not just fast
    but also viable.

  - All the logic code would be not only easily readable and modifiable, but
    also easy to understand, and they'd be open. Openness is *the* number 1
    reason I got into the technical side of BVE.

  - Could work with modules making it so you would only need to make a dead
    man's switch module instead of refactoring a monolithic plugin,
    [something akin exists][detailmg] but DetailManager uses traditional C++
    plugins. (and of course, it was [rewritten in Rust™][plugin-multiplex])

Why not?
--------

Obviously, if you use an interepreted language, you will have to pay for the
overhead of it. This can be somewhat mitigated using LuaJIT, but still not as
performant as a bare C++ plugin.

Likewise, if you have a rather complicated plugin and you'd like people not to
be able to read its code, then this wouldn't be for you either.

Then make it!
=============

I want to! But I don't have a need for it. I'll still make it, but I won't be
able to dogfood myself effectively. I'd love to make a a plugin that implements
full GoA2 automation, with "working" platform CCTV, etc. I want to make a
subway scenario where the trains are full of technology and push BVE 4 to its
limit!

Sure, it would be a herculean task, but it's something I'd be willing to spend
my free time on. I'd do it a lot more, if I had a convenient way to play BVE 4.
It's a really old game and last time I tried on Wine, it didn't work properly.

Plus, I'm doing the plugin just because I think Lua is neat.

[template-ats]: https://github.com/hibiii/template-ats-plugin
[detailmg]: https://github.com/mikangogo/DetailManager
[plugin-multiplex]: https://github.com/magicant/bve-plugin-multiplexer