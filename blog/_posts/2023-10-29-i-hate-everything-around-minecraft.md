---
title: I hate everything around Minecraft.
tags: [minecraft]
---

Forget about Blåhaj, we are cutting our losses and we are pulling out.

<mark class="note">Note: this blog post contains strong language. Reader discretion is advised.</mark>

I don't know how to structure this, so i will only lash out (hopefully responsibly).

# community lead

I feel extremely negative about minecraft and mojang. While i would love to have a game led entirely by the community, and corporate only being a non-demanding sponsor (the image that i get from minecraft promotional material), minecraft is not it. Games like that are like OpenTTD, Xonotic, OpenRCT2. This isn't the first time i've seen this image, Team Fortress 2 is a classic "community-led" game with a corporate sponsor, and it is a very clear farce.

If minecraft was *truly* community-led, then mojang would have realized the need for an extensive and stable modding API. And they did that on the version of the game with **FUCKING MICROTRANSACTIONS**. This isn't community orientation. This is profiteering. It's enabling profiteers, not the community. The community isn't bedrock, it's java.

# capes

There's also capes. mojang is aware of the black market around capes, mojang employees even said multiple times that capes need to be devalued. So what does mojang do in its infinite wisdom? They make more capes with limited availability, because of course! That's exactly how you reduce vanity, with more limited availability items! Nevermind the idea of mojang actually making past capes actually available, oh no.

And you don't even have the option to *not* receive them either. You're either forced to do something and have a cape as a reward for your cooperation, or you partake in an extremely minor action and you receive a cape which you did not even know you would receive a cape or were warned of, and it's given to you silently. And if you want the cherry on top of the cake: if you enable a cape, your account is quite literally put on multiple watchlists if you're caught. Damned be anyone with a 2011 or a cobalt cape.

I know i contributed to the problem with kappa, but when i made it, i was still caught in the vanity of them. I am genuinely glad OptiFine staff themselves gave me an exit strategy on a silver platter, and mojang followed it up with a snapshot that broke kappa immediately after.

# updates

Another thing that gets me angry is the way mojang handles updates. Their major updates are legitimately minor updates, and their minor updates have a lot of breakages. What i mean is basically the "major" updates are just another point update but they permanently enable a funny datapack. A minor update introduces very large changes under the hood, changes which previously would only happen in the development cycle for a major update.

This killed modding for me, personally. I could track latest rather easily because, while the changes were numerous, they were all in one go, and it was for a major update and stuff. It did not require constant attention thorough the entire year.

Now you have a funny situation where "1.XX.Y Pre-release 1" is quite possibly a condemnation for your mods. Not because they added your firearm and military materiel mod into the game, oh no, but because large swathes of code that you were relying on got changed.

I saw the writing on the wall when they announced this change to updates in minecon 2022. It was going to kill modding and it has killed modding.

## updates and mods

I tried to keep going but i noticed that i couldn't just simply write once for multiple code bases. And given that i started out with fabric, and then quilt, i grew a bad habit on relying on my own typewriting capabilities rather than stuffing the most libraries under my dependency tree, because fabric api doesn't offer a lot.

And this is where i've come to the conclusion that modding minecraft in any real capability is no longer a personal task. If you have a really small mod with very limited scope, then you can get away with doing it in your free time, like BoatHud. If, however, you feel daring enough to do something as outrageous and as absurd as a mere block entity, you're taking on the responsibility of watching over other mods' code safety.

It's all fine and dandy when you make your "Reader's Own Block Entity" mod, but then someone files a bug report that create crashes your mod. You investigate it and it's because create removes the block without removing the block entity, or some crap like that. An invariant that is not broken in vanilla. You eat your hat that you already had to eat a couple dozen times, and fix it.

And if you track latest only (like some faker named hibi), you're absolutely fucked because you'll get bombarded with requests to backport the fix.

Anyway about updates to the game, I don't want to learn a multiversion library because then i wouldn't be doing minecraft modding. I'd be doing architectury modding. And I'd still have to write code that tears through the abstraction to get the behavior just right. And there are no guarantees that the sorry folks maintaining architectury won't get fed up with the videogame either.

# minecon

I don't like minecon. I didn't like having to sit through literally hours of advertising just to get the annual 15 minutes of news for a videogame. At least before those 15 minutes were grandiose and exciting, but now not anymore.

Nowadays it's just a sad display of "here's what we did in our free time!" and instead of having a thousand features, they were too busy on cinematics and showmanship that they forgot to develop a game and only did some stuff in the previous night.

I know what i said just now was harsh, but that's the impression i have. I had zero excitement for 20 because the impression i had of it, and still have now, is that it's a shitty "better bamboo" mod, even though it added cherry blossoms (also a feature present in a thousand mods). I have zero excitement for 21 because the impression that i have of 21 is that it's a shitty "better 1.17 additions" mod that doesn't integrate very well with vanilla blocks. The only redeeming feature, autocrafting is too little, too late.

And don't get me started on mob votes either. They divide the community instead of uniting it. All without actually giving community control of the game.

# support for the community

And speaking of community control, you know what mojang says about a modding API? They don't want to do it because the community has it figured out **(SUPPOSEDLY)** **[INDEPENDENT SOURCE NEEDED]**.

Yeah, because shimming along obfuscated classes, very very large code changes without a changelog or update guide, and developers burning out left and right, that is definitely what "having it figured out" means.

In many ways, modding minecraft is like modding the Discord client, but with one very big difference. Both are very large, obfuscated, monolithic codebases, both do not come with modding APIs, both do very large changes at will, both accuse you of skill issue if your code doesn't work.

Unlike minecraft, however, Discord doesn't care if you mod the client, in fact it even has provisions on its terms of service that they can ban you for modding, but as long as you don't for nefarious reasons, you're safe. The approach towards modding Discord is "do it at your own peril".

Meanwhile with minecraft, however, they're trying to give an image of supporting modding but none of their actions reflect that. One refactor and internal APIs get closed, you can no longer use them without using modded APIs (if you crowbar your way in, you break the mods that use said APIs). They break large amounts of code that mods rely on, on a point release. Clearly updating from 20.1 to 20.2 isn't that big of a deal, right?

And when they let you do literally anything minecraft related, they see it as a commercial endeavour, by all means if you want to use minecraft as the canvas for your artistic expression, do it but prepare for unforseen consequences.

And it's not just minecraft mods either, it's *literally anything* minecraft.

<mark class="note">NOT AN OFFICIAL MINECRAFT BLOG POST. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</mark>

And even with all that, the community's approach to modding minecraft is "me want content now, no want bug, me version, me loader".

Remember what I said about the new update cycle killing modding? We already have a victim. None other than Quilt's stdlib. Usually, QSL gets released relatively fast for new versions, but it's been more than a month that 1.20.2 has been released, and no signs of QSL for 1.20.2.

This is not me accusing Quilt of laziness, I literally called them a victim.

# conclusion

I want to get away from this hellhole.

I dislike very much when people follow me on GitHub, and i look at their profile and it's literally because of my minecraft mods.

Anyway, I don't have high hopes for minecraft modding, at least not without some insulation from everything else. I'm awfully aware that the cost of minecraft modding is paid in the mental health of mod developers, and i don't want to be a part of it.

At least not without some kind of support. It's kill or be killed, there's no surviving. That's what i've come to believe, and i think that's enough.

Anyway, here's the final stats for my time as a minecraft modder:

Excitement rating: 2.20 (Low)    
Intensity rating: 39.51 (Ultra-Extreme)    
Nausea rating: 7.59 (High)

---
I hope this is the last time I post swear words on the wider public web.
