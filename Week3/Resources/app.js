// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({
	title:'Movie',
	backgroundColor:'#fff'
});

var view = Ti.UI.createView({
	top:20,
	bottom:20,
	left:20,
	right:20,
	backgroundColor:'#fff'
});

win.add(view);

var data = '{"name":["12 Angrey Men","The Dark Knight","Fight CLub","The Godfather","The Good The Bad The Ugly","Lord of the Rings Fellowship of the Ring","Lord of the Rings Return of the King","Pulp Fiction","Shawshank Redemption","Schindlers List"],"genre":["Drama","Drama Crime","Drama","Drama Crime","Western","Action Adventure","Action Adventure","Drama Crime","Drama Crime","Drama History"],"actor":["Martin Balsam","Christian Bale","Bradd Pitt","Marlo Brando","Ali Wallach","Elijah Wood","Elijah Wood","John Travolta","Tim Robins","Liam Neeson"],"rating":["8.9","9.0","8.9","9.2","8.9","8.9","8.9","9.0","8.9","9.2"],"banned":["No","No","No","No","No","No","No","No","Yes, In modern","No"],"Plot":["The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case of murder soon becomes a mini-drama of each of the jurors prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.","Batman raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as The Joker.","A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.","The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding with his wife Wendy. His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family. Don Vito lives his life in the way of the old country, but times are changing and some dont want to follow the old ways and look out for community and family. An up and coming rival of the Corleone family wants to start selling drugs in New York, and needs the Dons influence to further his plan. The clash of the Dons fading old world values and the new ways will demand a terrible price, especially from Michael, all for the sake of the family.","Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tucos bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco comes across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie meet with Carson and knows they know the location of the gold. All he needs is for the two to.","An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!","While Frodo & Sam continue to approach Mount Doom to destroy the One Ring, unaware of the path Gollum is leading them, the former Fellowship aid Rohan & Gondor in a great battle in the Pelennor Fields, Minas Tirith and the Black Gates as Sauron wages his last war against Middle-Earth.","Jules Winnfield and Vincent Vega are two hitmen who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace. Wallace has also asked Vincent to take his wife Mia out a few days later when Wallace himself will be out of town. Butch Coolidge is an aging boxer who is paid by Wallace to lose his next fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.","Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.","Oskar Schindler is a vainglorious and greedy German businessman who becomes unlikely humanitarian amid the barbaric Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp. A testament for the good in all of us."],"imageName":["12 Angrey Men","The Dark Knight","Fight CLub","The Godfather","The Good The Bad The Ugly","Lord of the Rings Fellowship of the Ring","Lord of the Rings Return of the King","Pulp Fiction","Shawshank Redemption","Schindlers List"]}';
var newData = JSON.parse(data);

var btnName = Titanium.UI.createButton({
	title:'Name',
	top:10,
	width:'100%'	
});

btnName.addEventListener("click",function(e){
	Ti.UI.setBackgroundColor('#000');
	var win = Ti.UI.createWindow({
	  backgroundColor: 'black',
	  exitOnClose: true,
	  fullscreen: false,
	  title: 'Movie Name'
	});
	
	var tableData = [];
	
	for (var i=0;i<10;i++) {
		var row = Ti.UI.createTableViewRow({
			rowIndex:i, 
		    height:50
		});
	  
		var labelName = Ti.UI.createLabel({
    		text:newData.name[i],
    		top: 10
  		});
		row.add(labelName);

  		tableData.push(row);
	}
	
	var tableView = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data:tableData
	});
	
	win.add(tableView);
	win.open();	
});

var btnGenre = Titanium.UI.createButton({
	title:'Genre',
	top:100,
	width:'100%'	
});

btnGenre.addEventListener("click",function(e){
	var sectionDramaCrime = Ti.UI.createTableViewSection({headerTitle: 'Drama Crime'});
	var sectionDrama = Ti.UI.createTableViewSection({headerTitle: 'Drama'});
	var sectionActionAdventure = Ti.UI.createTableViewSection({headerTitle: 'Action Adventure'});
	var sectionDramaHistory = Ti.UI.createTableViewSection({headerTitle: 'Drama History'});
	var sectionWestern = Ti.UI.createTableViewSection({headerTitle: 'Western'});		

	for (var i = 0;i<10;i++) {
		if(newData.genre[i] == "Drama Crime") {
			sectionDramaCrime.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.genre[i] == "Drama") {
			sectionDrama.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.genre[i] == "Action Adventure") {
			sectionActionAdventure.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.genre[i] == "Drama History") {
			sectionDramaHistory.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.genre[i] == "Western") {
			sectionWestern.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		}
	}
	
	var table = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data: [sectionDramaCrime,sectionDrama,sectionActionAdventure,sectionDramaHistory,sectionWestern]
	});
	
	win.add(table);
	win.open();	
});

var btnActor = Titanium.UI.createButton({
	title:'Main Actor/Actress',
	top:200,
	width:'100%'	
});

btnActor.addEventListener("click",function(e){
	
});

var btnIMDB = Titanium.UI.createButton({
	title:'IMDB Rating',
	top:300,
	width:'100%'	
});

btnIMDB.addEventListener("click",function(e){
	var section92 = Ti.UI.createTableViewSection({headerTitle: "9.2"});
	var section90 = Ti.UI.createTableViewSection({headerTitle: "9.0"});
	var section89 = Ti.UI.createTableViewSection({headerTitle: "8.9"});

	for (var i=0;i<10;i++) {
		if(newData.rating[i] == "9.2"){
			section92.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.rating[i] == "9.0") {
			section90.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		} else if(newData.rating[i] == "8.9") {
			section89.add(Ti.UI.createTableViewRow({title: newData.name[i]}));
		}
	}
	
	var table = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data: [section92,section90,section89]
	});
	
	win.add(table);
	win.open();	
});

view.add(btnName);
view.add(btnGenre);
view.add(btnActor);
view.add(btnIMDB);

win.open();