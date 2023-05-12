const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss') //Identificar el archivo SASS
        .pipe(sass()) //Compilarlo
        .pipe(dest('build/css'));  //Almacenarlo en el disco duro

    done(); //Indica cuando la funcion llega a su fin
}

exports.css = css;