const col = require('colors')
const chokidar = require('chokidar');
const e2h = require('./src/renderStatic')

const d = __dirname + '/views'
const watcher = chokidar.watch(d, { persistent: true });
console.log(' > Watching ' + d.green + ' for changes')

/*

So here's how it works. Put your ejs files in the views folder,
run this script and we're going. It's gonna keep watching
the views folder and rebuild every time something changes.

The resulting static files will magically appear in ./public.

Just don't forget to put every file you want it to compile
into the compile function bellow.

Someday i'm gonna make this a bit smarter and flexible,
just not today.
*/



// Here's your job; just make it compile every page you need in the e2h function.
// Pro tip: Loops are also a thing, just in case there's a bit too many pages.

/* -------------------------------------------------------- */
const compile = () => {

  const funnyNumber = 69

  e2h({
    path: d+'/index.ejs',
    options: {funnyNumber}
  })

  e2h({ // for reference compile one file twice, i didn't feel like writing a second file
    path: d+'/index.ejs',
  })
}

/* -------------------------------------------------------- */
compile()
watcher.on('change', () => {
  console.log(' > Views folder changed; Rebuilding'.cyan)
  compile()
})
