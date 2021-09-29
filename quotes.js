let quotes = [
	"I used to love the way everyone talked about food as if it were one of the most important things in life. And, of course, it is. Without it we would die. Each of us eats about one thousand meals each year. It is my belief that we should try and make as many of these meals as we can truly memorable.",
	"Mathematics has the completely false reputation of yielding infallible conclusions. Its infallibility is nothing but identity. Two times two is not four, but it is just two times two, and that is what we call four for short. But four is nothing new at all. And thus it goes on and on in its conclusions, except that in the higher formulas the identity fades out of sight.", 	"No enterprise can exist for itself alone. It ministers to some great need, it performs some great service, not for itself, but for others; or failing therein, it ceases to be profitable and ceases to exist",
	"It seems to me that those songs that have been any good, I have nothing much to do with the writing of them. The words have just crawled down my sleeve and come out on the page.",
	"Mathematics is the cheapest science. Unlike physics or chemistry, it does not require any expensive equipment. All one needs for mathematics is a pencil and paper.",
	"You must be careful how you walk, and where you go, for there are those following you who will set their feet where yours are set.",
	"The great composer ... does not set to work because he is inspired, but becomes inspired because he is working. Beethoven, Wagner, Bach, and Mozart settled down day after day to the job in hand with as much regularity as an accountant settles down each day to his figures. They didn't waste time waiting for inspiration."
];

document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
