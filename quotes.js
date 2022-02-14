let quotes = [
	"I used to love the way everyone talked about food as if it were one of the most important things in life. And, of course, it is. Without it we would die. Each of us eats about one thousand meals each year. It is my belief that we should try and make as many of these meals as we can truly memorable.",
	"Mathematics has the completely false reputation of yielding infallible conclusions. Its infallibility is nothing but identity. Two times two is not four, but it is just two times two, and that is what we call four for short. But four is nothing new at all. And thus it goes on and on in its conclusions, except that in the higher formulas the identity fades out of sight.", 	"No enterprise can exist for itself alone. It ministers to some great need, it performs some great service, not for itself, but for others; or failing therein, it ceases to be profitable and ceases to exist",
	"It seems to me that those songs that have been any good, I have nothing much to do with the writing of them. The words have just crawled down my sleeve and come out on the page.",
	"Mathematics is the cheapest science. Unlike physics or chemistry, it does not require any expensive equipment. All one needs for mathematics is a pencil and paper.",
	"You must be careful how you walk, and where you go, for there are those following you who will set their feet where yours are set.",
	"The great composer ... does not set to work because he is inspired, but becomes inspired because he is working. Beethoven, Wagner, Bach, and Mozart settled down day after day to the job in hand with as much regularity as an accountant settles down each day to his figures. They didn't waste time waiting for inspiration.",
	"You do not examine legislation in the light of the benefits it will convey if properly administered, but in the light of the wrongs it would do and the harms it would cause if improperly administered.",
	"We have a problem for those who advocate competitive equality of opportunity: the prizes won in the competitions of the first generation will tend to defeat the requirements of equality of opportunity for the next.",
	"To sleep: perchance to dream: ay, there's the rub; For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause.",
	"Those herbs which perfume the air most delightfully, not passed by as the rest, but, being trodden upon and crushed, are three; that is, burnet, wild thyme and watermints. Therefore, you are to set whole alleys of them, to have the pleasure when you walk or tread.",
	"We should be as careful of the books we read, as of the company we keep. The dead very often have more power than the living.",
	"A man watches his pear tree day after day, impatient for the ripening of the fruit. Let him attempt to force the process, and he may spoil both fruit and tree. But let him patiently wait, and the ripe fruit at length falls into his lap.",
	"Some things arrive in their own mysterious hour, on their own terms and not yours, to be seized or relinquished forever.",
	"To live with beauty is not only to give oneself a joy, it is o have the power of beauty at one's call. A man's life would be in a deep and manly way purified and sweetened if each day he could gain a little of the inspiration that poets fuse into their verse and have it share his visions for that day. The wise poet was right who advised us, daily to see a beautiful picture, daily to read a beautiful poem. He was right, he was practical.",
	"Public money ought to be touched with the most scrupulous conscientiousness of honor. It is not the produce of riches only, but of the hard earnings of labor and poverty. It is drawn even from the bitterness of want and misery. Not a beggar passes, or perishes in the streets, whose mite is not in that mass.",
	"The holy passion of Friendship is of so sweet and steady and loyal a nature that it will last through a whole lifetime, if not asked to lend money.",
	"If the garden of Eden really exists it does so moment by moment, fragmented and tough, cropping up like a fan of buddleia high up in the gutter of a deserted warehouse, or in a heap of frozen cabbages becoming luminous in the reflected light of roadside snow.",
	"The measure of a man is not the number of his servants but in the number of people whom he serves.",
	"For what is love itself, for the one we love best? An enfolding of immeasurable cares which yet are better than any joys outside our love.",
	"War will stop when we no longer praise it, or give it any attention at all. Peace will come wherever it is sincerely invited. Love will overflow every sanctuary given it. Truth will grow where the fertilizer that nourishes it is also truth.",
	"You cannot do away with the competitive system so long as trademarks remain to distinguish one product from another. You cannot cut out large-scale manufacture so long as there are established brands which breed consumer confidence and thus make mass production not only possible and profitable, but also economical.",
	"Home is the one place in all this world where hearts are sure of each other. It is the place of confidence. It is the spot where expressions of tenderness gush out without any dread of ridicule.",
	"If I am unaware of love, I live drably. If I become intoxicated with love, I live in dreamland. If I recognize love, and shake his hand then comfort, dreams, and sometimes intoxication become mine to drench in and give away as well."
];

var newQuote;
setNewQuote();

function removeOldQuote(){
	for (let i = quote.length-1; i >= 0; i--) {
		quote[i].remove();
	}
}

function setNewQuote(){
	newQuote = quotes[Math.floor(Math.random() * quotes.length)];

	for(let i = 0; i < newQuote.length; i++){
		addElement("span", newQuote[i], "quote", []);
	}
}