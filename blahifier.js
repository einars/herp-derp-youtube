function change() {
  $(this).addClass('blah')

  var ALLOWED_WORDS = [
    'is', 
    'a',
    'I',
    'the', 
    'by',
    'not',
    ' ',
    '\ufeff'
  ]

  return $(this).html().split(' ').map((i) => {
    if (ALLOWED_WORDS.indexOf(i) !== -1) return i
    return i[0] === i[0].toUpperCase() ? 'Blah' : 'blah'     
  }).join(' ')
}

setInterval(function() {
  $('.comment-renderer-text-content').not('.blah').html(change)
}, 3000)