const log = (...x) => console.log(...x);
function champions(teams) {
	// win = 3, draw = 1, loss = 0
	// for each team: point, goal diff math; add to object
	teams.forEach(team => {
		team.points = (team.wins * 3) + team.draws
		team.goalDiff = team.scored - team.conceded
	})
	// sort teams by points
	const sorted = teams.sort((a, b) => b.points - a.points)
	// if points tie, sort by goal diff
	if(sorted[0].points === sorted[1].points) {
		return sorted[0].goalDiff < sorted[1].goalDiff ? sorted[1].name : sorted[0].name
	}
}

log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
	{
    name: "goalDiff Test",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 85,
    conceded: 20,
  },
	{
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]),
 "Manchester United")