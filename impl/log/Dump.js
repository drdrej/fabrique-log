
var _ = require( "underscore" );
var fs = require('fs');

/**
 * @author A.Siebert / ask@touchableheroes.com
 *
 * @param json structure you want to store. [required]
 * @param inPath [required]
 * @param toFile name of a file, where you want to store your json structure. [optional]
 */
exports.dump = function( json, inPath, toFile ) {

    if( !_.isString(inPath) ) {
        throw new Error( "Couldn't dump JSON to file. Needs inPath-param." );
    }

    if( !_.isString(toFile) ) {
        toFile = randomFile();
    }

    var fileName = (inPath + "/" + toFile);
    var str = JSON.stringify(json, null, 4);

    fs.writeFile(fileName, str,
        function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("-- dump JSON to file: " + toFile );
            }
        }
    );
};


function randomFile( ) {
    var namePrefix = Math.floor( Math.random() * 10 );

    return "dump_" + namePrefix + ".json";

}