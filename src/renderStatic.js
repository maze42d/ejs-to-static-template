const col = require('colors')
const ejs = require('ejs');
const fs = require('fs');
module.exports = ({path, options}) => {
    fs.readFile(path, 'utf8',  (err, data) => {
        if (err) {
            console.log(err)
            return false
        }
        
        options = Object.assign({ filename: path }, options);

        const ejs_string = data
        let template, html
        try {
            template = ejs.compile(ejs_string, options)
            html = template(options)
        } catch (e) {
            console.error(e)
            console.error(' ✕ '.red + path.red)
            return
        }

        const newPath = path.replace('/views/', '/public/').replace('.ejs', '.html')
        fs.writeFile(newPath, html, (err) => {
           if(err) {
               console.log(err)
               console.error(' ✕ '.red + path.red)
               return false
           }
            console.log(` ${'✔'.green} ${path.blue} => ${newPath.green}`)
        return true;
        });  
    });
}
