import dandinisLogo from './assets/dandinis.avif';
import keegsLogo from './assets/keegs.jpeg';
import fiveHoleLogo from './assets/fivehoel.png';
import './style.css';

export default function Footer() {
    return (
        <div id="footer">
          <div className="footerSponsors">
              <div className="sponsor">
                  <a href="https://www.dandinis.com/" target="_blank">
                      <img className="sponsorLogoImage" src={dandinisLogo} alt="Dandinis logo" style={{backgroundColor: 'white'}} />
                  </a>
              </div>
              <div className="sponsor">
                  <a href="https://www.keegshockey.com/" target="_blank">
                      <img className="sponsorLogoImage" src={keegsLogo} alt="KEEGS Sharpening logo" style={{backgroundColor: 'black'}} />
                  </a>
              </div>
              <div className="sponsor">
                  <a href="https://www.5ivehole.com/" target="_blank">
                      <img className="sponsorLogoImage" src={fiveHoleLogo} alt="5ivehole logo" style={{backgroundColor: 'black'}} />
                  </a>
              </div>
          </div>
          <br />
          <p className="footerThanks">Thank you to our supporters.</p>
          <br />
          <p className="footerDisclaimer">
              We, The Ohio State University Roller Hockey Club, are a registered student 
              organization at The Ohio State University. Registration shall not be construed as 
              Ohio State's approval, endorsement, or sponsorship of our registered student 
              organization's publications, activities, purposes, actions or positions.
          </p>
          <br />
          <p className="footerMeta">© 2026 OSU Roller Hockey Club</p>
      </div>
    );
}