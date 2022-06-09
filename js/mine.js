var quote = document.getElementById('quote')
var author = document.getElementById('author')
var quotes = [
  '“Be yourself; everyone else is already taken.”',
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  '“So many books, so little time.”',
  '“A room without books is like a body without a soul.”',
]
var authors = [
  '― Oscar Wilde',
  '― Albert Einstein',
  '― Frank Zappa',
  '― Marcus Tullius Cicero',
]

function generateQuote() {
  var numOfQuote = Math.floor(Math.random() * quotes.length)
  var randomQuote = quotes[numOfQuote]
  var theAuthor = authors[numOfQuote]
  quote.innerHTML = randomQuote
  author.innerHTML = theAuthor
}
