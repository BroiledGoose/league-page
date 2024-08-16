/*   STEP 1   */
export const leagueID = "914246399137734656"; // your league ID
export const leagueName = "We Be Keepin"; // your league name
export const dues = 40; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p><strong>We Be Keeping Rules</strong>
</p>
<ul>
    <li>
        <p><strong>2024 Schedule</strong>
        </p>
        <ul>
            <li>
                <p>July 20 - Entry Fees Due</p>
            </li>
            <li>
                <p>Aug 1 - Rule Change Submission</p>
            </li>
            <li>
                <p>Aug 10 - Voting on Rule Changes</p>
            </li>
            <li>
                <p>Aug 15 - Draft Order Selection</p>
            </li>
            <li>
                <p>August 22 - Keeper Selection Deadline</p>
            </li>
            <li>
                <p>Between August 22 &amp; Sep 5 - Draft Date (to be selected later)</p>
            </li>
            <li>
                <p>Sep 5 - Week 1 begins</p>
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        <p><strong>Draft Date:&nbsp;</strong>
        </p>
        <ul>
            <li>
                <p><strong>&nbsp;2024 - TBD</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Draft Order:&nbsp;</strong>
        </p>
        <ul>
            <li>
                <p><strong>2024 - TBD</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>League buy-in/Prizes:&nbsp;</strong>
        </p>
        <ul>
            <li>
                <p><strong>Buy-in: $40</strong>
                </p>
            </li>
            <li>
                <p><strong>Prizes:</strong>
                </p>
                <ul>
                    <li>
                        <p><strong>1st Place: 55% of prize pool</strong>
                        </p>
                    </li>
                    <li>
                        <p><strong>2nd Place: 25% of prize pool</strong>
                        </p>
                    </li>
                    <li>
                        <p><strong>3rd Place: 10% of prize pool</strong>
                        </p>
                    </li>
                    <li>
                        <p><strong>Regular Season Champion: 10% of prize pool</strong>
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>3 keeper spots each year</strong>
        </p>
        <ul>
            <li>
                <p><strong>Keepers cost round of draft pick the player was originally selected minus each year that has passed since that draft pick was made</strong>
                </p>
                <ul>
                    <li>
                        <p><strong>Ex: Draft Antonio Gibson Round 7 2023. You can keep him in the 2024 draft in exchange for your Round 6 pick being removed. If you keep him again in the 2025 draft it will be in exchange for your Round 5 pick being removed, etc.</strong>
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <p><strong>Keepers must be selected 2 weeks before the draft</strong>
                </p>
            </li>
            <li>
                <p><strong>Players added from waivers will cost you their upcoming year ADP according to Sleeper 1 month before draft + 2 rounds to reward you for finding the diamond in the rough</strong>
                </p>
                <ul>
                    <li>
                        <p><strong>Ex: You pick up Kendre Miller week 6 of 2023, you decide you want to keep him for the 2024 draft. His ADP on Sleeper 1 month before draft is a 3rd round pick after a breakout season. To keep him, it will be in exchange for your Round 5 (3 + 2) pick being removed.</strong>
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <p><strong>All players not dedicated to your keeper spot will be put back in the draft pool for the upcoming draft</strong>
                </p>
            </li>
            <li>
                <p><strong>If you have multiple players with the same pick penalty value (ex: they both would cost you a 1st round pick), the pick removed will shift down by 1 round.</strong>
                </p>
            </li>
            <li>
                <p><strong>The keeper category (waiver/draft) is about how you acquired the player. If you trade for the player you inherit the category of how the person you traded with acquired the player. If you draft, drop, and re-add the player they will count as a waiver, as it’s the most recent acquisition that matters.</strong>
                </p>
                <ul>
                    <li>
                        <p><strong>Ex: If a player is drafted then dropped and you add them to waivers, you will have the chance to keep the player for the waiver category of keeper cost not the draft category</strong>
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Roster Construction Rules:</strong>
        </p>
        <ul>
            <li>
                <p><strong>See sleeper app this info</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Scoring Format:</strong>
        </p>
        <ul>
            <li>
                <p><strong>See sleeper app this info</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Waiver Format:</strong>
        </p>
        <ul>
            <li>
                <p><strong>Daily waivers with $100 FAB budget</strong>
                </p>
                <ul>
                    <li>
                        <p><strong>This means all waivers go through the bidding process, with players eligible to be added 2 days after being dropped (players with games played&nbsp;</strong>
                        </p>
                    </li>
                    <li>
                        <p><strong>This system is useful because there’s no “first to check wins” type of system as all players go through the overnight waiver process every day</strong>
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Playoffs:</strong>
        </p>
        <ul>
            <li>
                <p><strong>6 teams make the playoffs (2 teams get a bye), with playoffs being 1 week for each round (Week 14, 15, 16)</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Draft Order:</strong>
        </p>
        <ul>
            <li>
                <p><strong>Each year draft picks will be randomly assigned</strong>
                </p>
            </li>
            <li>
                <p><strong>Consolation bracket winner will be able to select their draft position 2 weeks before the draft</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Last Pick Punishment:</strong>
        </p>
        <ul>
            <li>
                <p><strong>Each year the team name and logo for the last place regular season finisher of the prior year will be selected by the first place regular season finisher the prior year</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Rule Changes</strong>
        </p>
        <ul>
            <li>
                <p><strong>Can be pitched yearly in the off-season, requiring 75% vote for changes made.&nbsp;</strong>
                </p>
            </li>
            <li>
                <p><strong>Rule change votes may be vetoed if there’s significant long term advantage/disadvantage given to certain teams (ex: changing amount of keepers)</strong>
                </p>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Pick Trading</strong>
        </p>
        <ul>
            <li>
                <p><strong>Before the draft, you can trade any pick for the upcoming year that you own (cannot trade the pick that was a cost for your keeper selection).</strong>
                </p>
            </li>
        </ul>
    </li>
</ul>
<p>
    <br>
    <br>
    <br>
</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
