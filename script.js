document.getElementById('fullScreenArrow').addEventListener('click', function() {
    document.getElementById('mainSection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


function loadRoster(){
    const roster = [
['9/29/2026 16:34:25', 'Joshua', 'Tidd', 'Finance, Sport industry', 'Senior', 'Westerville, Ohio', '3', 'Forward', 'President', 'Columbus Blue Jackets', 'Josh Anderson'],
['9/27/2026 15:57:01', 'Tanner', 'Buck', 'Political Science', 'Senior', 'Toledo, Ohio', '4', 'Forward', 'Vice President', 'Detroit Red Wings', 'Pavel Datsyuk'], 
['9/27/2026 18:06:33', 'Mateo', 'Perales', 'Electrical Engineering', 'Junior', 'St. Louis, Missouri', '3', 'Defense', 'Fundraising', 'St Louis Blues', 'Nathan Walker'], 
['9/27/2026 15:58:51', 'Cadyn', 'Cole', 'Accounting', 'Junior', 'Holland, Ohio', '3', 'Forward', 'Treasure','Detroit Red Wings', 'Pavel Datsyuk'], 
['9/29/2026 16:36:19', 'Yi Ting', 'Chiu', 'Pharmaceutical Science', 'Junior', 'Taipei, Taiwan','2', 'Goalie', 'Social Media Manager & Secretary', 'Columbus Blue Jackets', 'Zach Werenski'],
['9/29/2026 16:44:26', 'Will', 'Kapszukiewicz', 'Industrial & Systems Engineering', 'Junior', 'Toledo, Ohio', '2', 'Goalie', 'Risk Manager', 'Chicago Blackhawks', 'Spencer Knight'], 
['9/29/2026 16:46:09', 'Ryan', 'Surdek', 'Marketing, Sport Industry', 'Senior', 'Dallas, Texas', '4', 'Forward', 'Member', 'Dallas Stars', 'Miro Heiskanen'], 
['9/29/2026 16:33:55', 'Jackson', "O'Hara", 'Aerospace Engineering', 'Junior', 'Woodridge, Illinois', '2', 'Defense', 'Member', 'Columbus Blue Jackets', 'Sergei Bobrovsky'], 
['9/27/2026 15:50:09', 'Jack', 'Turk', 'Mechanical Engineering', 'Freshman', 'Dublin, Ohio', '1', 'Defense', 'Recruiting Chair', 'Columbus Blue Jackets', 'Jack Johnson'], 
['9/27/2026 15:54:11', 'Harrison', 'DeChristopher', 'Integrated Social Studies', 'Freshman', 'Delaware, Ohio', '1', 'Defense', 'Member', 'Columbus Blue Jackets', 'Alexandre Texier'], 
['9/27/2026 15:53:02', 'Ben', 'Kehrier', 'Mechanical Engineering', 'Junior', 'Cleveland, Ohio', '1', 'Defense', 'Member', 'Boston Bruins', 'Tyler seguin'], 
['9/27/2026 15:53:07', 'Nathan', 'Adilman', 'Industrial/Systems Engineering', 'Sophomore', 'Lincolnshire, Illinois', '2', 'Defense', 'Member', 'Chicago Blackhawks', 'Patrick Sharp'], 
['9/29/2026 16:38:43', 'Henry', "D'Antignac", 'Mechanical Engineering', 'Freshman', 'Columbus Ohio', '1', 'Defense', 'Member', 'Chicago Blackhawks', 'Duncan Keith'], 
['9/30/2026 11:42:57', 'Evan', 'Weiss', 'Sports Industry', 'Freshman', 'Westerville OH', '1', 'Defense', 'Member', 'Detroit Red Wings', 'Niklas Lindstrom'], 
['9/27/2026 15:53:12', 'Vince', 'Valentine', 'Marketing', 'Senior', 'Holland Ohio', '1', 'Forward', 'Member', 'Chicago Blackhawks', 'Alex Vlasic'], 
['9/27/2026 16:00:24', 'Luke', 'Gilbert', 'Exercise Science', 'Freshman', 'Thornwood, New York', '1', 'Forward', 'Member', 'New York Rangers', 'Connor Bedard'], 
['9/27/2026 16:02:09', 'Alex', 'Nakamura', 'Aviation', 'Freshman', 'Dublin, Ohio', '1', 'Forward', 'Member', 'Anaheim Ducks', 'Macklin Celebrini'], 
['9/27/2026 23:35:43', 'Nicholas', 'Vlachos', 'Sports industry', 'Junior', 'Dumont, New Jersey', '1', 'Forward', 'Member', 'New York Rangers', 'Henrik Lundqvist'], 
['9/29/2026 12:19:00', 'Ben', 'Birmingham', 'Mechanical Engineering', 'Sophomore', 'Winnetka Illinois', '1', 'Forward', 'Member', 'Boston Bruins', 'Brad Marchand'], 
['9/29/2026 19:27:26', 'Nate', 'Lee', 'Psychology', 'Junior', 'Ohio', '1', 'Goalie', 'Member', 'Columbus Blue Jackets', 'Sergei Bobrovsky']]
    const team = document.getElementById('teamContainer');
    roster.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        const playerImageDiv = document.createElement("div");
        playerImageDiv.classList.add("playerImage");
        playerImageDiv.appendChild(document.createElement("img")).src = "/assets/noImage.png";
        playerDiv.appendChild(playerImageDiv);
        const playerInfoDiv = document.createElement("div");
        playerInfoDiv.classList.add("playerInfo");
        const playerNameDiv = document.createElement("div");
        playerNameDiv.classList.add("playerName");
        playerNameDiv.textContent = player[1] + " " + player[2];
        playerInfoDiv.appendChild(playerNameDiv);
        const playerPositionDiv = document.createElement("div");
        playerPositionDiv.classList.add("playerPosition");
        playerPositionDiv.textContent = player[7];
        playerInfoDiv.appendChild(playerPositionDiv);
        const playerBioDiv = document.createElement("div");
        playerBioDiv.classList.add("playerBio");
        if(player[7] == "Coach"){
            playerBioDiv.innerHTML = "Home Town: " + player[5] + "<br>Years with the Team: " + player[6] + "<br>Favorite NHL Team: " + player[9] + "<br>Favorite Player: " + player[10];   
        }
        playerBioDiv.innerHTML = "Home Town: " + player[5] + "<br>Grade: " + player[4] + "<br>Major: " + player[3] + "<br>Years with the Team: " + player[6] + "<br>Favorite NHL Team: " + player[9] + "<br>Favorite Player: " + player[10];
        playerInfoDiv.appendChild(playerBioDiv);
        playerDiv.appendChild(playerInfoDiv);
        team.appendChild(playerDiv);
    });
}