$(document).ready(function(){

    $('select').material_select();

    //Auto complete

    $('input.autocomplete').autocomplete({
    data: {
     'Bulbasaur': 'http://www.pokestadium.com/sprites/xy/bulbasaur.gif',
     'Ivysaur': 'http://www.pokestadium.com/sprites/xy/ivysaur.gif',
     'Venusaur': 'http://www.pokestadium.com/sprites/xy/venusaur.gif',
     'Charmander': 'http://www.pokestadium.com/sprites/xy/charmander.gif',
     'Charmeleon': 'http://www.pokestadium.com/sprites/xy/charmeleon.gif',
     'Charizard': 'http://www.pokestadium.com/sprites/xy/charizard.gif',
     'Squirtle': 'http://www.pokestadium.com/sprites/xy/squirtle.gif',
     'Wartortle': 'http://www.pokestadium.com/sprites/xy/wartortle.gif',
     'Blastoise': 'http://www.pokestadium.com/sprites/xy/blastoise.gif',
     'Caterpie': 'http://www.pokestadium.com/sprites/xy/caterpie.gif',
     'Metapod': 'http://www.pokestadium.com/sprites/xy/metapod.gif',
     'Butterfree': 'http://www.pokestadium.com/sprites/xy/butterfree.gif',
     'Weedle': 'http://www.pokestadium.com/sprites/xy/weedle.gif',
     'Kakuna': 'http://www.pokestadium.com/sprites/xy/kakuna.gif',
     'Beedrill': 'http://www.pokestadium.com/sprites/xy/beedrill.gif',
     'Pidgey': 'http://www.pokestadium.com/sprites/xy/pidgey.gif',
     'Pidgeotto': 'http://www.pokestadium.com/sprites/xy/pidgeotto.gif',
     'Pidgeot': 'http://www.pokestadium.com/sprites/xy/pidgeot.gif',
     'Rattata': 'http://www.pokestadium.com/sprites/xy/rattata.gif',
     'Raticate': 'http://www.pokestadium.com/sprites/xy/raticate.gif',
     'Spearow': 'http://www.pokestadium.com/sprites/xy/spearow.gif',
     'Fearow': 'http://www.pokestadium.com/sprites/xy/fearow.gif',
     'Ekans': 'http://www.pokestadium.com/sprites/xy/ekans.gif',
     'Arbok': 'http://www.pokestadium.com/sprites/xy/arbok.gif',
     'Pikachu': 'http://www.pokestadium.com/sprites/xy/pikachu.gif',
     'Raichu': 'http://www.pokestadium.com/sprites/xy/raichu.gif',
     'Sandshrew': 'http://www.pokestadium.com/sprites/xy/sandshrew.gif',
     'Sandslash': 'http://www.pokestadium.com/sprites/xy/sandslash.gif',
     'Nidoran♀': 'http://www.pokestadium.com/sprites/xy/nidoranf.gif',
     'Nidorina': 'http://www.pokestadium.com/sprites/xy/nidorina.gif',
     'Nidoqueen': 'http://www.pokestadium.com/sprites/xy/nidoqueen.gif',
     'Nidoran♂': 'http://www.pokestadium.com/sprites/xy/nidoranm.gif',
     'Nidorino': 'http://www.pokestadium.com/sprites/xy/nidorino.gif',
     'Nidoking': 'http://www.pokestadium.com/sprites/xy/nidoking.gif',
     'Clefairy': 'http://www.pokestadium.com/sprites/xy/clefairy.gif',
     'Clefable': 'http://www.pokestadium.com/sprites/xy/clefable.gif',
     'Vulpix': 'http://www.pokestadium.com/sprites/xy/vulpix.gif',
     'Ninetales': 'http://www.pokestadium.com/sprites/xy/ninetales.gif',
     'Jigglypuff': 'http://www.pokestadium.com/sprites/xy/jigglypuff.gif',
     'Wigglytuff': 'http://www.pokestadium.com/sprites/xy/wigglytuff.gif',
     'Zubat': 'http://www.pokestadium.com/sprites/xy/zubat.gif',
     'Golbat': 'http://www.pokestadium.com/sprites/xy/golbat.gif',
     'Oddish': 'http://www.pokestadium.com/sprites/xy/oddish.gif',
     'Gloom': 'http://www.pokestadium.com/sprites/xy/gloom.gif',
     'Vileplume': 'http://www.pokestadium.com/sprites/xy/vileplume.gif',
     'Paras': 'http://www.pokestadium.com/sprites/xy/paras.gif',
     'Parasect': 'http://www.pokestadium.com/sprites/xy/parasect.gif',
     'Venonat': 'http://www.pokestadium.com/sprites/xy/venonat.gif',
     'Venomoth': 'http://www.pokestadium.com/sprites/xy/venomoth.gif',
     'Diglett': 'http://www.pokestadium.com/sprites/xy/diglett.gif',
     'Dugtrio': 'http://www.pokestadium.com/sprites/xy/dugtrio.gif',
     'Meowth': 'http://www.pokestadium.com/sprites/xy/meowth.gif',
     'Persian': 'http://www.pokestadium.com/sprites/xy/persian.gif',
     'Psyduck': 'http://www.pokestadium.com/sprites/xy/psyduck.gif',
     'Golduck': 'http://www.pokestadium.com/sprites/xy/golduck.gif',
     'Mankey': 'http://www.pokestadium.com/sprites/xy/mankey.gif',
     'Primeape': 'http://www.pokestadium.com/sprites/xy/primeape.gif',
     'Growlithe': 'http://www.pokestadium.com/sprites/xy/growlithe.gif',
     'Arcanine': 'http://www.pokestadium.com/sprites/xy/arcanine.gif',
     'Poliwag': 'http://www.pokestadium.com/sprites/xy/poliwag.gif',
     'Poliwhirl': 'http://www.pokestadium.com/sprites/xy/poliwhirl.gif',
     'Poliwrath': 'http://www.pokestadium.com/sprites/xy/poliwrath.gif',
     'Abra': 'http://www.pokestadium.com/sprites/xy/abra.gif',
     'Kadabra': 'http://www.pokestadium.com/sprites/xy/kadabra.gif',
     'Alakazam': 'http://www.pokestadium.com/sprites/xy/alakazam.gif',
     'Machop': 'http://www.pokestadium.com/sprites/xy/machop.gif',
     'Machoke': 'http://www.pokestadium.com/sprites/xy/machoke.gif',
     'Machamp': 'http://www.pokestadium.com/sprites/xy/machamp.gif',
     'Bellsprout': 'http://www.pokestadium.com/sprites/xy/bellsprout.gif',
     'Weepinbell': 'http://www.pokestadium.com/sprites/xy/weepinbell.gif',
     'Victreebel': 'http://www.pokestadium.com/sprites/xy/victreebel.gif',
     'Tentacool': 'http://www.pokestadium.com/sprites/xy/tentacool.gif',
     'Tentacruel': 'http://www.pokestadium.com/sprites/xy/tentacruel.gif',
     'Geodude': 'http://www.pokestadium.com/sprites/xy/geodude.gif',
     'Graveler': 'http://www.pokestadium.com/sprites/xy/graveler.gif',
     'Golem': 'http://www.pokestadium.com/sprites/xy/golem.gif',
     'Ponyta': 'http://www.pokestadium.com/sprites/xy/ponyta.gif',
     'Rapidash': 'http://www.pokestadium.com/sprites/xy/rapidash.gif',
     'Slowpoke': 'http://www.pokestadium.com/sprites/xy/slowpoke.gif',
     'Slowbro': 'http://www.pokestadium.com/sprites/xy/slowbro.gif',
     'Magnemite': 'http://www.pokestadium.com/sprites/xy/magnemite.gif',
     'Magneton': 'http://www.pokestadium.com/sprites/xy/magneton.gif',
     'Farfetch': 'http://www.pokestadium.com/sprites/xy/farfetch.gif',
     'Doduo': 'http://www.pokestadium.com/sprites/xy/doduo.gif',
     'Dodrio': 'http://www.pokestadium.com/sprites/xy/dodrio.gif',
     'Seel': 'http://www.pokestadium.com/sprites/xy/seel.gif',
     'Dewgong': 'http://www.pokestadium.com/sprites/xy/dewgong.gif',
     'Grimer': 'http://www.pokestadium.com/sprites/xy/grimer.gif',
     'Muk': 'http://www.pokestadium.com/sprites/xy/muk.gif',
     'Shellder': 'http://www.pokestadium.com/sprites/xy/shellder.gif',
     'Cloyster': 'http://www.pokestadium.com/sprites/xy/cloyster.gif',
     'Gastly': 'http://www.pokestadium.com/sprites/xy/gastly.gif',
     'Haunter': 'http://www.pokestadium.com/sprites/xy/haunter.gif',
     'Gengar': 'http://www.pokestadium.com/sprites/xy/gengar.gif',
     'Onix': 'http://www.pokestadium.com/sprites/xy/onix.gif',
     'Drowzee': 'http://www.pokestadium.com/sprites/xy/drowzee.gif',
     'Hypno': 'http://www.pokestadium.com/sprites/xy/hypno.gif',
     'Krabby': 'http://www.pokestadium.com/sprites/xy/krabby.gif',
     'Kingler': 'http://www.pokestadium.com/sprites/xy/kingler.gif',
     'Voltorb': 'http://www.pokestadium.com/sprites/xy/voltorb.gif',
     'Electrode': 'http://www.pokestadium.com/sprites/xy/electrode.gif',
     'Exeggcute': 'http://www.pokestadium.com/sprites/xy/exeggcute.gif',
     'Exeggutor': 'http://www.pokestadium.com/sprites/xy/exeggutor.gif',
     'Cubone': 'http://www.pokestadium.com/sprites/xy/cubone.gif',
     'Marowak': 'http://www.pokestadium.com/sprites/xy/marowak.gif',
     'Hitmonlee': 'http://www.pokestadium.com/sprites/xy/hitmonlee.gif',
     'Hitmonchan': 'http://www.pokestadium.com/sprites/xy/hitmonchan.gif',
     'Lickitung': 'http://www.pokestadium.com/sprites/xy/lickitung.gif',
     'Koffing': 'http://www.pokestadium.com/sprites/xy/koffing.gif',
     'Weezing': 'http://www.pokestadium.com/sprites/xy/weezing.gif',
     'Rhyhorn': 'http://www.pokestadium.com/sprites/xy/rhyhorn.gif',
     'Rhydon': 'http://www.pokestadium.com/sprites/xy/rhydon.gif',
     'Chansey': 'http://www.pokestadium.com/sprites/xy/chansey.gif',
     'Tangela': 'http://www.pokestadium.com/sprites/xy/tangela.gif',
     'Kangaskhan': 'http://www.pokestadium.com/sprites/xy/kangaskhan.gif',
     'Horsea': 'http://www.pokestadium.com/sprites/xy/horsea.gif',
     'Seadra': 'http://www.pokestadium.com/sprites/xy/seadra.gif',
     'Goldeen': 'http://www.pokestadium.com/sprites/xy/goldeen.gif',
     'Seaking': 'http://www.pokestadium.com/sprites/xy/seaking.gif',
     'Staryu': 'http://www.pokestadium.com/sprites/xy/staryu.gif',
     'Starmie': 'http://www.pokestadium.com/sprites/xy/starmie.gif',
     'Mr Mime': 'http://www.pokestadium.com/sprites/xy/mr-mime.gif',
     'Scyther': 'http://www.pokestadium.com/sprites/xy/scyther.gif',
     'Jynx': 'http://www.pokestadium.com/sprites/xy/jynx.gif',
     'Electabuzz': 'http://www.pokestadium.com/sprites/xy/electabuzz.gif',
     'Magmar': 'http://www.pokestadium.com/sprites/xy/magmar.gif',
     'Pinsir': 'http://www.pokestadium.com/sprites/xy/pinsir.gif',
     'Tauros': 'http://www.pokestadium.com/sprites/xy/tauros.gif',
     'Magikarp': 'http://www.pokestadium.com/sprites/xy/magikarp.gif',
     'Gyarados': 'http://www.pokestadium.com/sprites/xy/gyarados.gif',
     'Lapras': 'http://www.pokestadium.com/sprites/xy/lapras.gif',
     'Ditto': 'http://www.pokestadium.com/sprites/xy/ditto.gif',
     'Eevee': 'http://www.pokestadium.com/sprites/xy/eevee.gif',
     'Vaporeon': 'http://www.pokestadium.com/sprites/xy/vaporeon.gif',
     'Jolteon': 'http://www.pokestadium.com/sprites/xy/jolteon.gif',
     'Flareon': 'http://www.pokestadium.com/sprites/xy/flareon.gif',
     'Porygon': 'http://www.pokestadium.com/sprites/xy/porygon.gif',
     'Omanyte': 'http://www.pokestadium.com/sprites/xy/omanyte.gif',
     'Omastar': 'http://www.pokestadium.com/sprites/xy/omastar.gif',
     'Kabuto': 'http://www.pokestadium.com/sprites/xy/kabuto.gif',
     'Kabutops': 'http://www.pokestadium.com/sprites/xy/kabutops.gif',
     'Aerodactyl': 'http://www.pokestadium.com/sprites/xy/aerodactyl.gif',
     'Snorlax': 'http://www.pokestadium.com/sprites/xy/snorlax.gif',
     'Articuno': 'http://www.pokestadium.com/sprites/xy/articuno.gif',
     'Zapdos': 'http://www.pokestadium.com/sprites/xy/zapdos.gif',
     'Moltres': 'http://www.pokestadium.com/sprites/xy/moltres.gif',
     'Dratini': 'http://www.pokestadium.com/sprites/xy/dratini.gif',
     'Dragonair': 'http://www.pokestadium.com/sprites/xy/dragonair.gif',
     'Dragonite': 'http://www.pokestadium.com/sprites/xy/dragonite.gif',
     'Mewtwo': 'http://www.pokestadium.com/sprites/xy/mewtwo.gif',
     'Mew': 'http://www.pokestadium.com/sprites/xy/mew.gif'
     },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

}); // end of document ready
 // end of jQuery name space
