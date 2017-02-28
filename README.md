alvo
=======

> *alvo is our* ***Quest*** *is to* ***codify*** *the* ***vocabulary*** *that* ***people***
*use when teaching* ***each other*** *how to* ***interact*** *with the* ***web***.

![placeholder image](http://i.imgur.com/uQughKi.jpg)

**alvo** (pronounced "*al vu*!") enables ***non-technical people*** to ***understand*** and ***test*** the **web**.

## Why?


workflow:
+ watchify files in `/lib`
+ browserify files in `/lib`
pre-commit:
+ uglify build.js


### Story

We all have a ***personal story*** of teaching someone how to use the internet.
I have taught *many* people how to use the web (including how to write HTML/CSS/JS/PHP/etc)
but one that stands out as meaningful was in the winter of 2005 when I sat down and taught my (retired-journalist) *father*
how to get online, Search (Goolge) and send/read email. At the time I produced
a *bespoke* 30 page manual with detailed screenshots of each step he would need to perform to accomplish his desired task because I
*knew* he was was going to need to refer back to it after I left to go back to
university [a thousand miles away](http://www.wolframalpha.com/input/?i=distance+edinburgh+to+lisbon+as+the+crow+flies).
I did not publish this user manual because it contained passwords and photos of
my dad's actual equipment, but I wish I had kept it for posterity...
Anyway, what if there was a simpler way of doing that?
What if you could record a "Macro"

### Pain Point

As [***Creative Technologist***](https://markavnet.wordpress.com/2010/06/22/what-the-heck-is-a-creative-technologist/)
we *love* speaking to the ***people*** that *use* our products to get their *feedback*.  
Often the people *using* our products are non-technical and thus showing them *code* is *futile*.  
Non-technical people are not "*stupid*"
(many of the "product owners" and "end users" we've worked with are *insanely smart*!),  
they just don't have [***time***](https://github.com/ideaq/time)
to know *everything* (*who does*?!) and thus learning to code (*in addition to their existing workload*)
is *impractical*.

So, we are on a *mission* to simplify web creativity for everyone!

## Features

### Plain English*

We want this to be as *simple* as possible, so we are
building it *from scratch* to look/read like English (*not code*).

A ***simple example*** of submitting a contact form using Liso:

```yml
visit /contact
input #text  "I want to know more about alvo!"
input #email "jenny.macawesome@email.net"
click #submit
```

That's it! it reads like english!

**Q**: *What* are the **#** (*hash*) simbols?  
**A**: They are the id's of the form elements on the *contact* page.  
(hint: *Scroll down* to the ***glossary*** to learn more)


### *Easily* Record How you *Use* a Website or Web Application

When the page loads we register:

+ Client's Browser + Version (full user-agent string & short name)
+ Page URL
+ Client ViewPort (width/height of browser window) dimensions
+ IP address of the client (all server logs store this)

Track/record actions performed on the page

- Page scroll (distance scrolled from the top)
- Click/Touch events [x,y], element type and class, id and name

What happens to this data?

- Save this data to local storage / cookie so a person can track their *own* history.
- Send data over WebSocket to server
+ Relay event log to connected obeservers (with permission)

## Project Name

> "*All the good names are taken.*"

[***alvo***](https://translate.google.com/#auto/en/alvo) means "target".
And since we are
