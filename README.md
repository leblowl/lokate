# Lokate

Lokate is a little cross-platform web app for tracking location-based resources, originally developed for tracking bee hives for Bee Friendly Honey.

The app is similar to google maps but with a simple management layer on top. You can create a collection (think folder) & then within that collection you can add units (pins on the map with associated data). You can then create resources & add them to your units for tracking (ex: ["drawers w/ honey" 1]). And you can also create resource blocks, which are just groups of resources, for simplified adding of multiple resources to new units. 

For tracking the data, I decided to go with an immutable commit style workflow (git is awesome). So when you want to update unit resources, you "check-in" your unit, update any values and then commit the dataset with an optional commit message and pin status color. Each commit gets pushed onto a history stack for the unit. This makes tracking data over time for a particular unit really easy, which is the end goal. Ideally you'd want to collect your data, analyze it, & then makes some decisions based on that data. This app only does the collecting.

In the field, you don't always have access to the internet. Local storage allows users to work offline and eliminates the cost of hosting a database. At the moment, persistent data storage is handled through remoteStorage (https://remotestorage.io/). 

Check out the demo on Heroku @ http://lokate-demo.herokuapp.com/. Expect updates & experimental areas.

# Build

Lokate uses the boot build tool (https://github.com/boot-clj/boot). With this installed, in the project directory, you can run ```boot dev``` to get a localhost dev server setup or run ```boot prod``` to package the app as a standalone jar. Always a work in progress, enjoy :)

## License

Copyright © 2014 Lucas Leblow
