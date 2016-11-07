function change() {
  $(this).addClass('blah')
  var randomEl = function(arr) {
    // wondering why i'm appending a string? this is a weird 
    // thing in javascript. pending a blog post for more.
    return arr[Math.floor(Math.random() * arr.length)] + ''
  }

  var getWord = function(i) {
    var words = {
      1: [ 'a', 'i', 'o' ],
      2: [ 'on', 'my', 'by', 'do', 'go' ],
      3: [ 'you', 'but', 'kin', 'age', 'ago', 'tin', 'wax', 'win', 'amp', 'bin', 
        'cow', 'cop', 'emu', 'elm', 'fir', 'fey', 'gob', 'god', 'hex', 'koi', 
        'mac', 'map', 'max', 'min' ],
      4: [ 'back', 'hill', 'camp', 'form', 'duck', 'glib', 'idea', 'ails', 'ajar', 
        'alps', 'bind', 'bunt', 'bird', 'edge', 'edit', 'flux', 'eons', 'foot', 
        'ford', 'hype', 'inch' ],
      5: [ 'peace', 'crowd', 'awful', 'agree', 'legal', 'stake', 'frets', 'anima',
        'anvil', 'bison', 'boost', 'board', 'chewy', 'chick', 'filth', 'fitly', 
        'fixit', 'imped', 'inker' ],
      6: [ 'icicle', 'somber', 'battle', 'search', 'edible', 'boomer', 'abacus',
        'bailer', 'babies', 'icecap', 'ignite', 'ignore', 'fridge', 'fraise', 'haggis',
        'lancer', 'lapels' ],
      7: [ 'respect', 'disarms', 'bumbles', 'eatable', 'orderer', 'abalone', 'amentia',
        'classer', 'caustic', 'fairest', 'foamers', 'ironist', 'islands', 'laments', 
        'mongols', 'octadic', 'argents', 'buyable', 'cabaret', 'chorizo', 'damping', 
        'damsons',  'dishpan', 'disease', 'asserts', 'eyebeam', 'gambled', 'goodbye',
        'gorilla', 'helicon', 'idolize', 'itchier', 'krakens', 'labeled' ]
    } 

    return i <= 7 ? randomEl(words[i]) : randomEl(words[7])
  }

  return $(this).html().split(' ').map(function(i) {
    return getWord(i.length)
  }).join(' ')
}

setInterval(function() { 
  $('.comment-renderer-text-content').not('.blah').html(change) 
}, 2000)