var intern_postings = {"WA": {"names": ["Copy editing intern at The Seattle Times", "Associate Client Manager at Point It"]}, "DC": {"names": ["Public affairs intern at U.S. Department of Defense", "Digital Politics reporting intern at CNN", "Social Media Strategist at Beutler Ink"]}, "WI": {"names": ["Weekend Anchor/Multimedia Journalist at WAOW-TV", "Implementation Consultant at Epic", "Sales Account Representative at Schneider National", "Creative Programming Team Member at Timber-lee Ministries"]}, "FL": {"names": ["Data team intern at Tampa Bay Times", "Account Coordinator at Pinnacle Advertising and Marketing Group"]}, "WY": {"names": ["High school sports coordinator at Casper Star-Tribune"]}, "NJ": {"names": ["Assistant Editor at NorthStar Travel Media/TravelAge West Magazine"]}, "TX": {"names": ["Associate Country Manager at Indeed", "Brand Ambassador at Mr. Delivery USA", "AT&T Sponsorship Intern at The Marketing Arm"]}, "ND": {"names": ["General News Assignment Reporter at Grand Forks Herald"]}, "NY": {"names": ["Editorial Intern/Social Media at Business Insider", "Retail Sales Associate; Future Leadership Program at PepsiCo", "Sales Associate at PepsiCo", "Copy editing intern at New York Times", "Editorial Intern at Fitness Magazine", "Editorial Assistant at InStyle", "Reporter at Granite Broadcasting", "Assistant Editor at Topix Media Lab/Media Lab Books", "Account Management Intern at BBDO", "Copywriting Intern at Cline, Davis & Mann", "New Business Intern at DDB", "Assistant Digital Planner at Horizon Media", "Digital Assistant Media Planner at Maxus", "Summer Copywriting Intern at Night Agency", "Account Management Intern at Ogilvy & Mather", "Assistant Account Executive at Optimum Sports", "Assistant Brand Strategist at Horizon Media"]}, "PA": {"names": ["Account Manager at Gelli Goods LLC", "Associate Account Strategist at Andculture"]}, "VA": {"names": ["Copy editing intern at Roanoke Times", "Copywriting intern at Matrix Partners"]}, "CA": {"names": ["Associate Reporter at MLB.com", "Associate Reporter at MLB.com", "Associate Reporter at MLB.com", "International Marketing Intern at Warner Brothers Records", "Media Sales Assistant at Disney", "Campaign Manager at AdKarma", "Business Apprentice at Conversant", "Sales Development Program, Retail Sales Rep. at Nestle USA", "Talent Assistant at PMK-BNC", "Account Management Intern at Swirl", "Media Relations Specialist at Walker Sands", "Public Relations Intern at Walker Sands", "Copywriting Intern at Walton Isaacson"]}, "IL": {"names": ["Associate Reporter at MLB.com", "Editorial Intern at The News-Gazette", "Municipal government reporter at The News-Gazette", "Copy/source editor at The Chicago Tribune", "News reporter at Daily Herald Media Group", "Production Assistant at 120 Sports", "Desk/Production Assistant at ABC News", "Production Assistant at Big Ten Network", "Production Assistant/Photographer at Fox Illinois 55/27", "Senior Video Editor at Richard Roeper Media", "Web Producer/Associate Producer at WAND-TV NewsCenter 17", "Videographer at WCIA 3", "Assistant Editor at 22nd Century Media", "Editor at Law Bulletin Publishing Company", "Publicist at Monika Dixon Public Relations", "Deputy Editor at Northwest Quarterly Magazine", "News Reporter at The Northwest Herald", "Account Coordinator at Accuen", "Project Manager at Allstate", "Digital Marketing Manger at Earthsafe Systems Inc.", "Sales and Customer Service Intern at Entertainment Cruises", "Digital Marketing Intern at FCB Chicago", "Assistant Account Executive at FBC Chicago", "Business Management Associate at General Mills", "Marketing Manager at GT Universe", "Associate Media Strategist at Initiative", "Associate Digital Strategist at Kelly Scott Madison", "Production Intern at Leo Burnett", "Freelance Copywriter at Logica3 Ltd.", "Manager of College Persistence at OneGoal", "Associate Media Manager at Performics", "Digital Media Manager at Performics", "Public Affairs/Public Relations Intern at Res Publica Group", "Apprentice, Client Services at rEvolution", "Assistant Account Executive at SPM Marketing & Communications", "Digital Activation Associate at Starcom MediaVest Group", "Digital Media Liaison at Starcom MediaVest Group", "Digital Tech. & Operations Platform Solutions Associate at Starcom MediaVest Group", "Drive Project Management Intern at Starcom MediaVest Group", "National Billing Liaison  at Starcom MediaVest Group", "Business Development Representative at Sun Chemical", "Director of Art + Design at TedxUIUC", "Account Management Intern at Trisect", "Sales Associate at Crate & Barrell", "Production Apprentice at Jellyvision", "Videographer at Neutral Design Studio", "Media Associate at Spark SMG", "And many more..."]}, "GA": {"names": ["Intern at HD Supply", "Associate, Account Services at OOHA-Wilkins Media"]}, "IN": {"names": ["Pulliam Fellow at The Indianapolis Star", "Copy editing intern at Evansville Courier Press", "Reporter at WSBT"]}, "IA": {"names": ["Producer at KTIV"]}, "MA": {"names": ["News and Content Writer at Brafton", "Fellow at Baroo", "Intern at SHIFT Communcations"]}, "AZ": {"names": ["Pulliam Fellow at The Arizona Star"]}, "CT": {"names": ["Copy editing intern at Central Connecticut Communications", "Content associate at ESPN"]}, "MD": {"names": ["Professional Services at Aerotek"]}, "OK": {"names": ["Producer at KJRH-TV"]}, "OH": {"names": ["Copy editing intern at Cox Media Group"]}, "MO": {"names": ["Associate Reporter at MLB.com", "Staff writer at Riverfront Times", "Assistant Account Executive at Noble Communications", "District Sales Manager at Monsanto Company"]}, "MN": {"names": ["Copy editing intern at St. Paul Pioneer Press"]}, "MI": {"names": ["Sportswriter at The Herald-Palladium"]}, "KS": {"names": ["News reporter at Marion County Record", "Marketing Assistant at CZ-USA"]}}

//Sets fills depending on number of athletes from state
for (item in intern_postings) {
	var num = intern_postings[item].names.length;
  	console.log(item, num);
	//var value = paletteScale(num);
	if(num == 0){
		intern_postings[item].fillkey = 'none';
	}
	else if(num >= 1 && num < 3){
		intern_postings[item].fillKey = 'low';
	}
	else if(num >= 3 && num < 6){
		intern_postings[item].fillKey = 'lo-med';
	}
	else if(num >= 6 && num < 10){
		intern_postings[item].fillKey = 'med';
	}
	else if(num >= 10 && num < 20){
		intern_postings[item].fillKey = 'hi-med';
	}
	else if(num >= 20 || item == 'IL'){
		intern_postings[item].fillKey = 'hi';
	}
	else{
		intern_postings[item].fillKey = 'none';
	}
}

function htmlizeNames(names){
		//console.log(names);
	if(names.length == 1){
		return "&#8226" + names;
	}
	var output = "";
	if(names.length > 1){
		for(var i = 0; i < names.length; i++){
			output += "&#8226" + names[i];
			if(i < names.length-1){
				output += "<br>";
			}
		}
	}
	else{
		for(city in names){
			output += "<strong>" + city + "</strong><br>"
			for(var i = 0; i < names[city].length; i++){
				output += names[city][i] + "<br>"
			}
		}
	}
	return output;
}

var map = new Datamap({
	element: document.getElementById('container'),
	responsive: true,
	scope: "usa",
	data: intern_postings,
	fills: {
		defaultFill: '#E57E00',
		'none': '#E57E00',
		'low': '#E76E26',
		'lo-med': '#895E4C',
		'med': '#5B4F72',
		'hi-med': '#2D3F98',
		'hi': '#0030BF' 
	},
	geographyConfig: {
		popupTemplate: function(geography, data) { //this function should just return a string
	          	if(!data){
	          		return "<div class='hoverinfo'>College of Media alumni haven't worked in <strong>"+ geography.properties.name +"</strong> yet.</div>";
	          	}
	          	else{
	          		if(data.names.length >= 5){
	          			return "<div class='hoverinfo longbox'><strong>"+ geography.properties.name + "</strong><br>" + htmlizeNames(data.names) +"</div>";
	          		}
	          		else{
	          			return "<div class='hoverinfo'><strong>"+ geography.properties.name +"</strong><br>"+ htmlizeNames(data.names) + "</div>";
	          		}
	          	}
        },
        popupOnHover: true
	}

});

	window.addEventListener('resize', function() {
	map.resize();
});
