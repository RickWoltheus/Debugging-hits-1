// "use strict"

// Variabele declaratie
var breedte;
// Declaratie en initialisatie
var breedte = 100;  //Initialization

// Declaratie
var hoogte;
// Assignment, waarde toekennen
hoogte = 10;

// Meerdere variabelen in 1 keer (single var keyword)
var breedte, lengte;

// Meerdere variabelen declareren en initializeren in 1 regel
var breedte = 10, lengte = 10;

//Nieuwe variabelen initialiseren met de inhoud van bestaande variabelen
var inhoud = breedte * lengte * hoogte;

document.write('<h2>' + 'Variabelen declaratie en initialisatie voorbeelden')
document.write('<h4>' + 'Lengte: ' + lengte);
document.write('<h4>' + 'Breedte: ' + breedte);
document.write('<h4>' + 'Hoogte: ' + hoogte);

document.write('<h4>' + 'Inhoud: ' + inhoud);
document.write('<h4>' + 'Type van inhoud: ' + typeof (inhoud));

// Dit is een foute manier, het werkt wel maar niet in de strict mode
document.write('<h2>' + 'Hoe het niet moet')
fout = 'fout';

document.write('<h4>' + fout);


// Voorbeelden van primitive en object variabelen
var tekstLiteral = "tekst";                     // (primitive)
var tekstObject = new String("tekst");          // (Object)

document.write('<h2>' + 'Introspection')
document.write('<h4>' + 'Object type: ' + typeof tekstObject);
document.write('<h4>' + 'Primitive type: ' + typeof tekstLiteral);

document.write('<h2>' + 'Coercion')
document.write('<h4>' + 'Object waarde: '  + tekstObject.length );
document.write('<h4>' + 'Primitive waarde: '  + tekstLiteral.length);


// Aan een object kun je methods of properties toevoegen aan een primitive niet!
tekstObject.toevoeging = "test";
tekstLiteral.toevoeging = "test";

document.write('<h2>' + 'Wijzigen van object en primitive')
document.write('<h4>' + 'Object property toevoegen: ' + tekstObject.toevoeging);
document.write('<h4>' + 'Primitive property toevoegen: ' + tekstLiteral.toevoeging);



x = 2;