import noImage from '../assets/noImage.png'

type Player = {
    firstName: string
    lastName: string
    major: string
    year: string
    hometown: string
    yearsWithTeam: string
    position: string
    leadership: string
    favoriteTeam: string
    favoritePlayer: string
}

const players: Player[] = [
    { firstName: 'Joshua', lastName: 'Tidd', major: 'Finance, Sport industry', year: 'Senior', hometown: 'Westerville, Ohio', yearsWithTeam: '3', position: 'Forward', leadership: 'President', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Josh Anderson' },
    { firstName: 'Tanner', lastName: 'Buck', major: 'Political Science', year: 'Senior', hometown: 'Toledo, Ohio', yearsWithTeam: '4', position: 'Forward', leadership: 'Vice President', favoriteTeam: 'Detroit Red Wings', favoritePlayer: 'Pavel Datsyuk' },
    { firstName: 'Mateo', lastName: 'Perales', major: 'Electrical Engineering', year: 'Junior', hometown: 'St. Louis, Missouri', yearsWithTeam: '3', position: 'Defense', leadership: 'Fundraising', favoriteTeam: 'St Louis Blues', favoritePlayer: 'Nathan Walker' },
    { firstName: 'Cadyn', lastName: 'Cole', major: 'Accounting', year: 'Junior', hometown: 'Holland, Ohio', yearsWithTeam: '3', position: 'Forward', leadership: 'Treasurer', favoriteTeam: 'Detroit Red Wings', favoritePlayer: 'Pavel Datsyuk' },
    { firstName: 'Yi Ting', lastName: 'Chiu', major: 'Pharmaceutical Science', year: 'Junior', hometown: 'Taipei, Taiwan', yearsWithTeam: '2', position: 'Goalie', leadership: 'Social Media Manager & Secretary', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Zach Werenski' },
    { firstName: 'Will', lastName: 'Kapszukiewicz', major: 'Industrial & Systems Engineering', year: 'Junior', hometown: 'Toledo, Ohio', yearsWithTeam: '2', position: 'Goalie', leadership: 'Risk Manager', favoriteTeam: 'Chicago Blackhawks', favoritePlayer: 'Spencer Knight' },
    { firstName: 'Ryan', lastName: 'Surdek', major: 'Marketing, Sport Industry', year: 'Senior', hometown: 'Dallas, Texas', yearsWithTeam: '4', position: 'Forward', leadership: 'Member', favoriteTeam: 'Dallas Stars', favoritePlayer: 'Miro Heiskanen' },
    { firstName: 'Jackson', lastName: "O'Hara", major: 'Aerospace Engineering', year: 'Junior', hometown: 'Woodridge, Illinois', yearsWithTeam: '2', position: 'Defense', leadership: 'Member', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Sergei Bobrovsky' },
    { firstName: 'Jack', lastName: 'Turk', major: 'Mechanical Engineering', year: 'Freshman', hometown: 'Dublin, Ohio', yearsWithTeam: '1', position: 'Defense', leadership: 'Recruiting Chair', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Jack Johnson' },
    { firstName: 'Harrison', lastName: 'DeChristopher', major: 'Integrated Social Studies', year: 'Freshman', hometown: 'Delaware, Ohio', yearsWithTeam: '1', position: 'Defense', leadership: 'Member', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Alexandre Texier' },
    { firstName: 'Ben', lastName: 'Kehrier', major: 'Mechanical Engineering', year: 'Junior', hometown: 'Cleveland, Ohio', yearsWithTeam: '1', position: 'Defense', leadership: 'Member', favoriteTeam: 'Boston Bruins', favoritePlayer: 'Tyler seguin' },
    { firstName: 'Nathan', lastName: 'Adilman', major: 'Industrial/Systems Engineering', year: 'Sophomore', hometown: 'Lincolnshire, Illinois', yearsWithTeam: '2', position: 'Defense', leadership: 'Member', favoriteTeam: 'Chicago Blackhawks', favoritePlayer: 'Patrick Sharp' },
    { firstName: 'Henry', lastName: "D'Antignac", major: 'Mechanical Engineering', year: 'Freshman', hometown: 'Columbus Ohio', yearsWithTeam: '1', position: 'Defense', leadership: 'Member', favoriteTeam: 'Chicago Blackhawks', favoritePlayer: 'Duncan Keith' },
    { firstName: 'Evan', lastName: 'Weiss', major: 'Sports Industry', year: 'Freshman', hometown: 'Westerville OH', yearsWithTeam: '1', position: 'Defense', leadership: 'Member', favoriteTeam: 'Detroit Red Wings', favoritePlayer: 'Niklas Lindstrom' },
    { firstName: 'Vince', lastName: 'Valentine', major: 'Marketing', year: 'Senior', hometown: 'Holland Ohio', yearsWithTeam: '1', position: 'Forward', leadership: 'Member', favoriteTeam: 'Chicago Blackhawks', favoritePlayer: 'Alex Vlasic' },
    { firstName: 'Luke', lastName: 'Gilbert', major: 'Exercise Science', year: 'Freshman', hometown: 'Thornwood, New York', yearsWithTeam: '1', position: 'Forward', leadership: 'Member', favoriteTeam: 'New York Rangers', favoritePlayer: 'Connor Bedard' },
    { firstName: 'Alex', lastName: 'Nakamura', major: 'Aviation', year: 'Freshman', hometown: 'Dublin, Ohio', yearsWithTeam: '1', position: 'Forward', leadership: 'Member', favoriteTeam: 'Anaheim Ducks', favoritePlayer: 'Macklin Celebrini' },
    { firstName: 'Nicholas', lastName: 'Vlachos', major: 'Sports industry', year: 'Junior', hometown: 'Dumont, New Jersey', yearsWithTeam: '1', position: 'Forward', leadership: 'Member', favoriteTeam: 'New York Rangers', favoritePlayer: 'Henrik Lundqvist' },
    { firstName: 'Ben', lastName: 'Birmingham', major: 'Mechanical Engineering', year: 'Sophomore', hometown: 'Winnetka Illinois', yearsWithTeam: '1', position: 'Forward', leadership: 'Member', favoriteTeam: 'Boston Bruins', favoritePlayer: 'Brad Marchand' },
    { firstName: 'Nate', lastName: 'Lee', major: 'Psychology', year: 'Junior', hometown: 'Ohio', yearsWithTeam: '1', position: 'Goalie', leadership: 'Member', favoriteTeam: 'Columbus Blue Jackets', favoritePlayer: 'Sergei Bobrovsky' },
]

export default function Team() {
    return (
        <main>
            <h1>Meet the Team</h1>
            <div id="teamContainer">
                {players.map((player) => (
                    <article className={`player${player.leadership === 'Member' ? ' playerWithoutLeadership' : ''}`} key={`${player.firstName} ${player.lastName}`}>
                        <div className="playerImage">
                            <img src={noImage} alt="" />
                        </div>
                        <div className="playerInfo">
                            <div className="playerName">{player.firstName} {player.lastName}</div>
                            <div className="playerPosition">{player.position}</div>
                            {player.leadership !== 'Member' && <div className="playerLeadership">{player.leadership}</div>}
                            <div className="playerBio">
                                Home Town: {player.hometown}<br />
                                Grade: {player.year}<br />
                                Major: {player.major}<br />
                                Years with the Team: {player.yearsWithTeam}<br />
                                Favorite NHL Team: {player.favoriteTeam}<br />
                                Favorite Player: {player.favoritePlayer}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    )
}