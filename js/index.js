// quote generator


var quotesArr = [];
quotesArr[0] = '"Playfully doing something difficult, whether useful or not, that is hacking." <br><br> Richard Stallman';
quotesArr[1] = '"Sharing is good, and with digital technology, sharing is easy." <br><br> Richard Stallman';
quotesArr[2] = '"Most good programmers do programming...because it is fun to program." <br><br> Linus Torvalds';
quotesArr[3] = '"Talk is cheap. Show me the code." <br><br> Linus Torvalds';
quotesArr[4] = '"There are only two kinds of languages: the ones people complain about and the ones nobody uses." <br><br> Bjarne Stroustrup';
quotesArr[5] = '"I think it&apos;s a new feature. Don&apos;t tell anyone it was an accident." <br><br> Larry Wall';
quotesArr[6] = '“Obsolete comments are worse than no comments.” <br><br> Douglas Crockford';
quotesArr[7] = '"One of my most productive days was throwing away 1,000 lines of code." <br><br> Ken Thompson';
quotesArr[8] = '"Design and programming are human activities; forget that and all is lost." <br><br> Bjarne Stroustrup';
quotesArr[9] = '"Just take it slow and do not hurt your brain." <br><br> Zed Shaw';
quotesArr[10] = '"I realized that the feeling of making progress is just as important as making actual progress." <br><br> John Resig';
quotesArr[11] = '"Clearly, I reject the view that there is only one way that is right for everyone and for every problem." <br><br> Bjarne Stroustrup';

// cycle through the quotes
setInterval(displayDetails, 3500);

function displayDetails(){
	var randomQuote = Math.floor(Math.random() * (quotesArr.length - 0));
	document.getElementById("quote").innerHTML = quotesArr[randomQuote];
	};





	







