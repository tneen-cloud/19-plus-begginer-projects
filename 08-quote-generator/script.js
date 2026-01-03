const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success.", author: "Unknown" },
    { text: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuote');
const tweetQuoteBtn = document.getElementById('tweetQuote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

tweetQuoteBtn.addEventListener('click', () => {
    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + ' ' + authorText)}`;
    window.open(tweetUrl, '_blank');
});

// Display initial quote
displayQuote();

