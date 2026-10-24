import osuLogo from '../assets/osuLogo.png'

export default function Home() {
    return (
        <main>
            <div id="fullScreenContainer">
                <h1>OSU Roller Hockey Club</h1>
                <img id="fullScreenLogo" src={osuLogo} height="100%" alt="Ohio State logo" />
                <i id="fullScreenArrow" className="fa fa-chevron-down" aria-label="Scroll down" role="button" tabIndex={0} onClick={() => document.getElementById('mainSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        document.getElementById('mainSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                }}></i>
                    {/* <img className="homeScreenImage" src="/assets/noImage.png" style={{transform: 'rotate(20deg)',  right: '8%', top: '5%'}} />
                    <img className="homeScreenImage" src="/assets/noImage.png" style={{transform: 'rotate(-15deg)',  left: '8%', top: '15%'}} />
                    <img className="homeScreenImage" src="/assets/noImage.png" style={{transform: 'rotate(10deg)',  right: '8%', top: '55%'}} />
                    <img className="homeScreenImage" src="/assets/noImage.png" style={{transform: 'rotate(-5deg)',  left: '8%', top: '65%'}} /> */}
            </div>
            <div id="mainSection">
                <h2>About</h2>
                <p>The Ohio State Roller Hockey Club is a student-run club for those wishing to play roller hockey 
                competitively during their time at The Ohio State University. We compete as a member of the <a className="leagueLink" href="https://www.mcrhl.com/" target="_blank">Midwest Collegiate Roller Hockey League</a> (MCRHL), a part of the <a className="leagueLink" href="https://www.ncrha.org/" target="_blank">National Collegiate Roller Hockey Association</a> 
                (NCRHA), against collegiate teams from across the region and the country. Currently, our club fields 
                both a Division 2 team as well as a AA team. We welcome players regardless of experience levels, from 
                those transitioning from ice hockey to those discovering roller hockey for the first time.<br /><br />

                Currently, those in the club can expect to practice once a week, with dates and times varying on 
                availability, at the recently opened <a className="leagueLink" href="https://www.heatwavearena.com/" target="_blank">Heatwave Arena</a>. For our games, we typically travel around 3-4 
                weekends per semester to other locations around the region, including St. Louis, Detroit, Chicago, 
                Indianapolis, and Pittsburgh. We will likely have 1-2 weekends take place at Heatwave Arena over the 
                course of the season. We will also travel to Nationals if we qualify, which may be held anywhere in 
                the US. <br /><br />

                If you are interested in joining the club, please fill out the interest form on our website, and we 
                will reach out to you with more information. We look forward to seeing you on the rink!</p>
            </div>
        </main>
    )
}