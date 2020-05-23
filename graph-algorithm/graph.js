//https://fireship.io/courses/javascript/interview-graphs/
// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');



const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    // ['LAX', 'BKK'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


//adjacency list

const airPortMap = new Map();

function addAirport(name){
	airPortMap.set(name,[]);
}

function addRoute(origin,dest){
	airPortMap.get(origin).push(dest);
	airPortMap.get(dest).push(origin);
}

//add airports to application
airports.forEach(addAirport);
routes.forEach(r=>addRoute(...r));

//let’s try to determine if a route exists between PHX and BKK.
function bfs(startingPortName){

	const checkedPortNames = new Set();
	const toCheck  = [startingPortName];

	while (toCheck.length>0){
		const curr = toCheck.shift();
		const destinations = airPortMap.get(curr);
		console.log(curr)

		for( var dest of destinations){
			if(dest == "BKK"){
				console.log("Bkk found!!!");
			}

			
			if(!checkedPortNames.has(dest)){
				checkedPortNames.add(dest);
				toCheck.push(dest)
			}
		}


	}
	console.log("-----------x------------")
}
// bfs('PHX');

function dfs(startingPortName,visited  = new Set()){

	visited.add(startingPortName);
	
	const destinations = airPortMap.get(startingPortName);
	console.log(startingPortName,"=>",destinations.join(","))

	for(const dest of destinations){
		if(dest == "BKK"){
			console.log("Bkk found!!!");
		}

	if(!visited.has(dest)){
		dfs(dest,visited)
	}
	}
}

dfs('PHX')