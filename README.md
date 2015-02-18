# Lokate

Lokate is a little app for tracking location-based resources, originally developed for tracking bee hives for Bee Friendly Honey.

Lokate is super basic at the moment. I had a few goals going into the project, some of which were met, while others are still nice goals which I think would make any mapping app pretty awesome:

1) be able to track data tied to a location (initial use case was tracking data associated with a beehive box)

2) be able to visualize your locations & associated resources on a map

3) have it work on both desktop & mobile devices

4) be able to use it offline

So I think I've adequately met 1, 2, & 3. The app is similar to google maps but with a simple management layer on top. You can create a collection (think folder) & then within that collection you can add units (pins on the map with associated data). You can then create resources & add them to your units for tracking. The resources are super simple at the moment; they only have a name and a count (ex: ["drawers w/ honey" 1]). And you can also create resource blocks, which are just groups of resources, for simplied adding of multiple resources to new units. 

For tracking the data, I decided to go with an immutable commit style workflow (git is awesome). So when you want to update unit resources, you "check-in" your unit, update any values and then commit the dataset with an optional commit message and pin status color. Each commit gets pushed onto a history stack for the unit. This makes tracking data over time for a particular unit really easy, which is the end goal. Ideally you'd want to collect your data, analyze it, & then makes some decisions based on that data. This app only does the collecting.

As for #3 under goals, I decided to make a web app. I think the web app itself is really slick: fully fluid design, lots of inspiration borrowed from google apps, works really well on my htc one. It targets webkit browsers, mostly because I use "display: none" for webkit scrollbars & that's the look I'm going for. In my previous project I hid the scrollbar "facebook style". But the hack wasn't cutting it for me here, I'll have to play with it some more. Making a web app is "ok". I'd love more access to lower level APIs, including access to a soft keyboard event on mobile & persistent data storage to the users device. I'd love the speed of a native app. You also have to "add the site to desktop" in chrome for the best experience on mobile. I'd like to look into building a chrome app, so it can be downloaded completely for offline use.

Regarding offline use, I'd like to implement a caching strategy for saving certain map tiles for offline use. Sometimes when you are collecting data in the field you don't have a network connection and I think it would be awesome if you could continue viewing and working on portions of the map, & then sync once you get into town.

Also at the moment, persistent data storage is handled through remoteStorage (https://remotestorage.io/). I love the idea of offloading the cost of data storage onto the user. It works ok. There are a few bugs in the remoteStorage client library that make it unusable offline at the moment.

Check out the demo on Heroku @ http://lokate-demo.herokuapp.com/. Expect updates & experimental areas.

# Build

Lokate uses the boot build tool (https://github.com/boot-clj/boot). With this installed, in the project directory, you can run ```boot dev``` to get a localhost dev server setup or run ```boot prod``` to package the app as a standalone jar. Always a work in progress, enjoy :)

## License

Copyright © 2014 Lucas Leblow
