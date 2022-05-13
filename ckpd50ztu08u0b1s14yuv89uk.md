## Diving Back into Development and the Cloud: Command Line Basics

![B594DA44-BA13-476D-9AEB-F795568276FD.JPG](https://cdn.hashnode.com/res/hashnode/image/upload/v1622493763188/pqlTD1Uml.jpeg)

## This all started...
This is all started when a buddy of mine and I had been talking about ways to pivot our security compliance backgrounds into "different" roles after looking at the plethora of opportunities out there in the cloud and crypto space. We came to the conclusion that we should start putting together a portfolio of sorts to document this journey and to have proof of concepts for future employers and teams.

Around last spring I had begun deeply diving into the cloud even securing several sought after cloud certs and then breaking myself into python too. However, in the last 6 months (or more) I haven't done much in terms of playing and building in this cloud or development space. I even found that I was struggling to remember certain things that I had down pact before when I was regularly using these tools.

## Use it or lose it?
This was an "ah ha" moment for me because I know (and you probably also know) that skills degrade if you are not regularly using them. In my day to day job as a cyber security consultant I've assessed a few cloud systems here and there but the daily practice of using and manipulating a cloud service and code is not there.

So the long weekend began and we were determined to start on building these portfolios up.
And we started with the basics.

## What is the Command Line?
We referenced this quick and dirty video from https://www.freecodecamp.org/
It can be found here: https://youtu.be/yz7nYlnXLfE

The command line is pretty much an all text based alternative to the GUI (Graphical User Interface) we are used to. The benefit of it is that we can often do things we cannot do from the GUI but also that we can do things even more efficiently than the GUI once a basic familiarity has been built. Once you see how easy somethings become from the command line, the point and click thing just doesn't cut it anymore. So it was clear from the begging that these were important skills to work on no matter the future cloud or development direction. 

Okay sweet then we logged into Github to see the blank space of all the commits we haven't made recently. 🤣
But back to the command line we go!

## What is Git?

Git is the most popular version control system.
You can control git from the command line.
Some commands you might use:

* git init
* git clone
* git status
* git add
* git commit -m 'Commit Message'
* git push

We will use git a little later to manipulate a test repo and to upload our first python project.

## Create Files and Directories

There are many useful commands for the command line. Some of them  are:

* man = think manual, lets you look up the details on any commands you aren't sure about

![Screen Shot 2021-05-31 at 5.18.37 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1622497050728/7AyLvQzJJ.png)

* touch file_1.txt = creates the file file_1.txt
* echo "hello textfile"> file_2.txt = this will actually write what you echo into the text file without you having to create the file
* nano file_3.txt = I like nano a lot, it's pretty useful in editing documents right from the command line
* echo "more hello" >> file_2.txt = this will make an addition to the file without overwriting what's already in there
* vim file_3.txt = vim is another editor but I'm not too familiar with it at this time since I usually use nano
* mkdir mydir = this will make a folder in the current path with the chosen name of "mydir"
* mkdir -p mydir/test = makes more that one directory at once

## Navigate Files

* ls = lists all the files and folders in the current path
* ls -lah (list all human readable)
* cd mydir/hello = change your directory
* cd .. = this will take you back down the file ladder
* cd ../..
* find / -name catpic
* find . -name catpic

## Connect to a Server
We're going to need to know how to do this for later when we set up a portfolio blog with digital ocean.

* ssh root@1.2.3.4

## Process Management

* pidof program = this will spit back the process ID of program
* kill 9378 = once you know the process ID you can just end the program from the command line

So that's just a quick run thru of some of, but not all of, the commands and features we messed around with in the terminal. Now on to more magic!

## Install Brew.sh

1. Go to brew.sh
2. Run: 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
``` 
Homebrew or Brew lets us do all sorts of stuff with some simple command line words. These things can be installing python (which we did) or downloading a YouTube video to a specific folder and many other useful things.
You can just go to brew.sh website and search the documentation to see all it can do for you.

And then we took a break because I got hungry. Sigh.

But when we come back we throwing up a blog.

