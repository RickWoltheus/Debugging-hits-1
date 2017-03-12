function randomPosition(low, high)
{
    // Input:
    // Return:
    // Description:
    return Math.floor(Math.random()*(high-low+1)) + low;
}

function characterFromString(str)
{
    return str.charAt(randomPosition(0, str.length-1));
}

function generateWord(len, letters)
{
    var i, seq = "";
    for (i = 1; i <= len; i = i + 1) {
        seq += characterFromString(letters);
    }
    return seq;
}

function arrayContains(array, string)
{
var contains = (array.indexOf(string) > -1);
if (contains != "" ) {
  return 0;
}
}

function generateWords(words, len, letters) {
    // Input: number of words, length of returned word, input string
    /*
    Description:
        Creates a number of words with given length and input characters
        Output to generated words to HTML
        Output number of function counts to HTML
     */
    var multiDimensional = Array.multi(words, 2, 0);
    var sequence = '';
    var checkWord = 1;
    for (i = 0; i < words; i++) {

        /*
         TODO:
         De woorden die opgeslagen worden zijn nu niet uniek, zorg ervoor dat je meerdere functies aanpast of nieuw maakt.
         */

        sequence += generateWord(len, letters);
        checkWord += arrayContains(multiDimensional, sequence);
        if (checkWord != 0) {
          sequence += '-';
          multiDimensional[i][0] = sequence;
        }else {
          sequence += generateWord(len, letters);
          checkWord += arrayContains(multiDimensional, sequence);
        }
        /*
        TODO:
        Er mag geen koppelstreep aan het eind van de uitvoer string aanwezig zijn.
         */

    }
    document.getElementById("wordList").innerHTML = sequence;
    /*
    TODO:
    Onderstaande waarde moet vervangen woorden door het aantal keren dat de functie is aangeroepen
    om een uniek aantal woorden te genereren.
    */

    document.getElementById("totalFunctionCalls").innerHTML = words;

    /*
    TODO:
    Probeer of je de boodschap ook op een andere plek in de HTML file en met een andere tag kunt weergeven.
     */
    appendMessage("p", sequence);
}
