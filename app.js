var Bitly = require('bitly');
var bitly;

/**
* Instantiating the bitly object with username and api_key
*/
bitly = new Bitly('avainsh', 'R_3d1e9fa48b077d5cc24c790593eb390b');


/**
* Global url
*/
var url;

/**
 * Helper function to get command-line arguments
 *
 *
 * @method getWeatherQuery
 * @public
 * @chainable
 * @param after -u for url
 * @param after -p for path
 *
 */
process.argv.forEach(function(e,i)
{
    if(process.argv[i] == '-u')
    {
        url = process.argv[i+1];
    }
    else if (process.argv[i] == '-p')
    {
        path = process.argv[i+1];
    }
});

/**
 * Bitly - shorten function for getting the shortened URL.
 *
 * @example
 *      `bitly.shorten(url, callback)
 *
 * @method bitly.shorten
 * @public
 * @chainable
 * @param url url to be shortened
 * @param callback {Function} callback The function to call when ready
 *
 */
bitly.shorten(url, function(err, res)
{
    if(err)
    {
        return console.log('Well, looks like something went wrong. Connectivity Issue?');
    }
    console.log('You can access your short url at ' + res.data.url);
});
