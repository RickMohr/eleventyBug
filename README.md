This simple project demonstrates an 11ty issue:

If you run 11ty in "watch" mode and change  a template file, a rebuild is triggered but the changed template is not used.

(11ty 2.0.1 on Windows 10)

To demonstrate the issue:

1. `npm install`
1. `npx eleventy --serve`
1. Browse to `localhost:8080` -- you should see "Hello Bug!"
1. Change `src/includes/world.hbs` to contain "World!" instead of "Bug!" -- a rebuild is triggered and the page is reloaded, but it still says "Hello Bug!"
1. Restart `npx eleventy --serve` and reload the page -- now you correctly see "Hello World!"
