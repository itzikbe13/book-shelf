var bookslocal;
if (json.parse(localstorage.getItem(bookslocal)){
	"[]"
}
else {
	
}
}
}

function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function reset(){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function addBook(){
if(document.getElementById('bookName').value == 0) {
alert("you stupid you forgot to write book name!!");
return;
}
if(document.getElementById('authorName').value == 0) {
alert("you stupid you forgot to write author name!!");
return;
}
if(document.getElementById('score').value <= 0) {
alert("you stupid you forgot to write score!!");
return;
}
if(document.getElementById('score').value > 10) {
alert("you stupid your score is higher than expected!!");
return;
}
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);
	addToList(book);
	reset();
}

function addToList(book) {
		var newElement = document.createElement("li");
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		if(book.score == 1) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'red';
		}
		if(book.score == 2) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'blue';
		}
		if(book.score == 3) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'green';
		}
		if(book.score == 4) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'black';
		}
		if(book.score == 5) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'yellow';
		}
		if(book.score == 6) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'gray';
		}
		if(book.score == 7) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'lime';
		}
		if(book.score == 8) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'orange';
		}
		if(book.score == 9) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'pink';
		}
		if(book.score == 10) {
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement).style.background = 'magenta';
		}
		newElement.onclick = function resetarow() {
			var li = document.getElementById('bookList');
			li.lastChild.remove()
		}
		}
}
function resetal(book) {
	var ul = document.getElementById("bookList");
	ul.innerHTML = '';
}

function resetarow() {
var li = document.getElementById("bookList");
	li.lastChild.remove()
	}
