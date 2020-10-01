import React, { Component } from 'react';
import "./HomepageContent.scss";
import iconCheck from "../../../img/icons/checkwht.png";
import logoHytera from "../../../img/logo_partners/hytera.png";
import logoMotorola from "../../../img/logo_partners/motorola.png";
import logoRadwin from "../../../img/logo_partners/radwin.png";
import logoHikVision from "../../../img/logo_partners/hikvision.png";
import logoPNR from "../../../img/logo_customers/pnr.png";
import logoLRT from "../../../img/logo_customers/lrt.png";
import logoFireProtection from "../../../img/logo_customers/fireprotection.png";
import logoKatihan from "../../../img/logo_customers/katihan.png";
import logoPNP from "../../../img/logo_customers/pnp.png";
import logoPDEA from "../../../img/logo_customers/pdea.png";
import BGsubway from "../../../img/backgrounds/subway.jpeg";

function ServicesContent() {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
      function handleScroll() {
        setOffset(window.pageYOffset)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, []);

    return (
        <div>
            <div className="down-pattern"></div>

            <section className="services-content hero">
                <img
                    src={BGsubway}
                    alt="test"
                    className="parallax"
                    style={{
                    transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
                
                <h2>Our Services</h2>
                <div className="box-content">
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Installation, Comissioning and Integration Services (Turnkey Projects)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply of ancillary materials (Power Systems, Batteries, Grounding, Structured Cabling, Equipment Racks, etc.)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply, Design and Installation of Fiber Optic Cables (FOC)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply, Installation and Commissioning of Digital Radio System (DMR Conventional, DMR Trunking and TETRA System)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Structural Design Engineering and Construction (with PCAB License)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Metal Fabrication i.e. cable ladders, antenna brackets, PT mast and equipment cabinets.</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
  }


export class HomepageContent extends Component {
    render() {
        return (
            <div className="homepage-style">
                <ServicesContent />

                <div className="partners-content">
                    <h2>Our Partners</h2>
                    <div className="box-content">
                        <a href="#"><img src={logoHytera} alt="Hytera" width="145" /></a>
                        <a href="#"><img src={logoMotorola} alt="Motorola" width="145" /></a>
                        <a href="#"><img src={logoRadwin} alt="Radwin" width="145" /></a>
                        <a href="#"><img src={logoHikVision} alt="HikVision" width="145" /></a>
                    </div>
                </div>

                <div className="customers-content">
                    <h2>Our Customers</h2>
                    <div className="box-content">
                        <a href="#"><img src={logoPNR} alt="Philippine National Railway" width="100" /></a>
                        <a href="#"><img src={logoLRT} alt="Light Rail Transit Authority" width="110" /></a>
                        <a href="#"><img src={logoFireProtection} alt="Bureau of Fire Protection" width="100" /></a>
                        <a href="#"><img src={logoKatihan} alt="Hukbong Katihan ng Pilipinas" width="100" /></a>
                        <a href="#"><img src={logoPNP} alt="Philippine National Police" width="70" /></a>
                        <a href="#"><img src={logoPDEA} alt="Philippine Drug Enforcement Agency" width="100" /></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomepageContent;
