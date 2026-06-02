import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product3.css';

const Product3 = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-detail-page">
      <div className="product-detail-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1 className="product-title">Autonomous Surveillance and Reconnaissance Systems</h1>
        <div className="product-meta">
          <span className="product-category-badge">UAV</span>
          <span className="product-id-badge">ID: 003</span>
        </div>
      </div>
      <div className="product-banner">
        <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800" alt="Autonomous Surveillance" />
      </div>
      <div className="product-content-sections">

        <section className="detail-section">
          <h2>🔍 Introduction</h2>
          <ul className="product-points-list">
            <li>The Autonomous Surveillance and Reconnaissance System (ASRS) is a fully unmanned, AI-piloted platform that delivers persistent, wide-area intelligence gathering without risking human crews.</li>
            <li>It operates in contested, GPS-denied environments using onboard inertial navigation, visual odometry, and terrain-mapping algorithms to navigate autonomously.</li>
            <li>The system integrates electro-optical, infrared, synthetic aperture radar (SAR), and signals intelligence (SIGINT) payloads into a single, reconfigurable platform.</li>
            <li>Capable of operating as a coordinated swarm of up to 50 units, it can blanket a 5,000 square kilometer area with continuous, overlapping sensor coverage.</li>
            <li>Its onboard edge-AI processes sensor data in real-time, distinguishing military targets from civilians with greater than 99.7% accuracy to minimize collateral intelligence errors.</li>
            <li>Proven in operational deployments across Arctic, desert, maritime, and urban environments where manned reconnaissance assets cannot safely operate.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>📋 Background & Problem Statement</h2>
          <ul className="product-points-list">
            <li>Manned reconnaissance aircraft are extraordinarily expensive to operate and place irreplaceable human crew at unacceptable risk over heavily defended airspace.</li>
            <li>Satellite imagery, while valuable, provides only intermittent coverage windows of 2-15 minutes per day over any given location, leaving massive temporal blind spots.</li>
            <li>Ground-based human intelligence networks are slow, vulnerable to counter-intelligence, and cannot provide the real-time, wide-area coverage required for modern maneuver warfare.</li>
            <li>Existing small drones suffer from extremely limited endurance (typically under 90 minutes), insufficient range, and inability to operate in adverse weather conditions.</li>
            <li>Manual drone piloting requires one operator per drone, making large-scale, multi-drone operations logistically impossible with limited personnel resources.</li>
            <li>Current ISR assets cannot autonomously identify, classify, and track targets without constant human oversight, creating dangerous latency in the kill chain.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>⚡ Problem & Solution</h2>
          <ul className="product-points-list">
            <li>Problem: Limited flight endurance. Solution: Hydrogen fuel cell propulsion system delivers 96+ hours of continuous loitering capability, 8x longer than battery-electric alternatives.</li>
            <li>Problem: GPS jamming over denied airspace. Solution: Proprietary Visual-Inertial Odometry (VIO) navigation using terrain feature matching for GPS-independent guidance.</li>
            <li>Problem: One operator per drone. Solution: A single operator can supervise a swarm of 50 autonomous drones simultaneously using the AI-driven swarm management interface.</li>
            <li>Problem: Low image resolution at altitude. Solution: A 500-megapixel wide-area motion imagery (WAMI) sensor captures text-level detail across a 100km² area simultaneously.</li>
            <li>Problem: Weather vulnerability. Solution: All-weather fuselage design rated to operate in winds up to 80 knots, icing conditions, and temperatures from -55°C to +70°C.</li>
            <li>Problem: High radar signature. Solution: Non-metallic composite airframe and radar-absorbent coating reduces radar cross-section to below that of a large bird.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>⚙️ Core Functionalities</h2>
          <ul className="product-points-list">
            <li>Persistent Wide-Area Motion Imagery (WAMI) providing continuous coverage of a 100km² area with enough resolution to track individual personnel and vehicles.</li>
            <li>Autonomous Target Identification and tracking using computer vision AI trained on a database of thousands of military vehicles, weapons systems, and personnel types.</li>
            <li>Signals Intelligence (SIGINT) payload intercepts, records, and geo-locates all radio frequency emissions within a 150km radius, including mobile phones, tactical radios, and radar systems.</li>
            <li>Change detection algorithms that automatically flag any object or structure that has been added, removed, or moved since the previous overflight.</li>
            <li>Cooperative swarm behavior enabling multiple drones to automatically share coverage areas, hand off tracked targets between units, and reposition when one unit needs to refuel.</li>
            <li>Encrypted, real-time video and data streaming to multiple command echelons simultaneously with less than 200ms latency via a Low-Probability-of-Intercept (LPI) data link.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🔄 Workflow</h2>
          <ul className="product-points-list">
            <li>Step 1 — Mission Planning: The operator defines the area of interest, surveillance orbit parameters, and target priority lists using a digital map interface on the ground control station.</li>
            <li>Step 2 — Autonomous Launch: The drone autonomously completes all pre-flight checks, calculates the optimal flight route, and launches without further operator input.</li>
            <li>Step 3 — Persistent ISR Orbit: The drone establishes a stable loitering pattern and begins streaming multi-sensor data back to analysts and directly into the C2 system.</li>
            <li>Step 4 — AI-Triggered Cueing: When the onboard AI detects a target of interest, it automatically cues and slews all sensors to the target and broadcasts a priority alert.</li>
            <li>Step 5 — Precision Tracking: The system locks onto and persistently tracks the designated target, maintaining geolocation accuracy to within 1 meter even at maximum altitude.</li>
            <li>Step 6 — Autonomous Recovery: Upon mission completion or low-fuel warning, the drone autonomously navigates to the pre-designated recovery zone and executes a precision autonomous landing.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🏗️ Architecture</h2>
          <ul className="product-points-list">
            <li>The airframe is constructed from carbon-fiber reinforced polymer (CFRP) composites, providing structural strength while maintaining a remarkably low weight-to-payload ratio.</li>
            <li>A distributed avionics architecture with triple-redundant flight computers ensures the drone continues to fly safely even if two of the three computers experience simultaneous failures.</li>
            <li>The modular payload bay can be reconfigured in the field in under 20 minutes using a hot-swap mechanism, allowing ISR, SIGINT, or communications relay payloads to be exchanged without tools.</li>
            <li>An onboard NVIDIA Jetson AGX Orin GPU cluster provides the raw computational power needed to run multiple deep learning inference models simultaneously for target detection.</li>
            <li>The communication system architecture supports both line-of-sight (LOS) UHF/SHF links and beyond-line-of-sight (BLOS) SATCOM links, providing uninterrupted connectivity at any range.</li>
            <li>The ground control station is built on a hardened laptop platform that can be rapidly integrated into any military C2 vehicle or fixed command post environment.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>💻 Technologies</h2>
          <ul className="product-points-list">
            <li>Deep Learning-powered computer vision models trained on over 50 million annotated military imagery samples for unprecedented target recognition accuracy.</li>
            <li>Hydrogen Fuel Cell energy system providing triple the energy density of lithium-polymer batteries for extended endurance operations.</li>
            <li>Wide-Area Motion Imagery (WAMI) sensor capable of capturing, processing, and transmitting 1 terabyte of imagery per flight hour.</li>
            <li>Synthetic Aperture Radar (SAR) for all-weather, day/night ground imaging that penetrates clouds, smoke, and foliage concealment.</li>
            <li>Swarming algorithms based on bio-inspired flocking behavior (Boids model), adapted for tactical military environments with obstacle avoidance and threat zone deconfliction.</li>
            <li>Laser Communication System (LaserCom) providing a 10 Gbps undetectable, unjammable data link for high-bandwidth video streaming in ultra-secure environments.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🎯 Applications</h2>
          <ul className="product-points-list">
            <li>Pre-Operation Intelligence Preparation: Systematic area surveys of planned operational areas prior to ground force insertion to build comprehensive enemy order-of-battle pictures.</li>
            <li>Battle Damage Assessment (BDA): Immediate post-strike overflight to assess destruction levels and determine whether re-strike is required.</li>
            <li>Maritime Patrol and Anti-Submarine Warfare: Persistent coverage of vast ocean areas to detect surface vessels and submarine periscope masts using SAR and electro-optical sensors.</li>
            <li>Border Security and Anti-Smuggling: Continuous surveillance of thousands of kilometers of land and maritime borders to detect illegal crossings and narco-trafficking routes.</li>
            <li>Special Operations Support: Providing real-time, overhead ISR to small special forces units executing raids in denied or restricted areas without exposing supporting aircraft.</li>
            <li>Force Protection: Autonomous establishment of a protective surveillance bubble around forward operating bases (FOBs) to detect and track approaching enemy forces or IED-placers.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>✅ Benefits</h2>
          <ul className="product-points-list">
            <li>Provides persistent, around-the-clock ISR coverage at a fraction (less than 3%) of the cost of manned reconnaissance aircraft like the U-2 or Global Hawk.</li>
            <li>Completely eliminates the risk to human pilots and crew by removing them from the threat envelope entirely.</li>
            <li>Delivers actionable, near-real-time intelligence directly from the drone's AI to the commander's display, collapsing the traditional exploitation chain from hours to seconds.</li>
            <li>Operates continuously for 96+ hours without requiring crew rotation, overcoming the fundamental human endurance limitations of manned operations.</li>
            <li>The swarm architecture provides inherent redundancy; the loss of individual drones does not degrade overall mission coverage or capability.</li>
            <li>Significantly lower logistics and maintenance footprint compared to manned platforms, enabling rapid deployment to remote or austere operating locations with minimal support infrastructure.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>⚠️ Challenges</h2>
          <ul className="product-points-list">
            <li>Ensuring the AI target identification system performs with consistent accuracy against adversaries using camouflage, deception, and decoy techniques specifically designed to confuse machine learning models.</li>
            <li>Managing the complex legal and ethical frameworks surrounding autonomous surveillance systems operating over sovereign territories and potentially civilian-populated areas.</li>
            <li>Developing robust beyond-line-of-sight communication architectures for swarms operating over areas where satellite coverage is degraded or denied.</li>
            <li>Preventing hostile forces from physically capturing intact drone units, which would allow reverse-engineering of sensitive onboard technology.</li>
            <li>Achieving certification for routine operation in shared international airspace without compromising the covert nature of military intelligence collection.</li>
            <li>Managing the massive data volumes generated by WAMI sensors — each drone can produce over 1TB of imagery per hour, requiring substantial ground-side processing and storage infrastructure.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🔭 Future Scope</h2>
          <ul className="product-points-list">
            <li>Development of a stratospheric variant operating at 70,000+ feet altitude for persistent, country-wide surveillance from a single aircraft beyond the reach of most air defense systems.</li>
            <li>Integration of hyperspectral sensors capable of identifying chemical and biological contamination from altitude, supporting NBC reconnaissance missions.</li>
            <li>Fully autonomous counter-surveillance behavior where the drone detects when it is being targeted by enemy air defenses and autonomously executes evasive maneuvers and employs electronic countermeasures.</li>
            <li>Development of cooperative ISR-strike integration where the reconnaissance drone autonomously hands off targeting coordinates directly to a loitering munition for immediate engagement.</li>
            <li>Miniaturization of the swarm capability to micro-drone variants (10cm wingspan) deployable from artillery shells for covert urban reconnaissance.</li>
            <li>Implementation of onboard AI analyst capable of generating complete intelligence reports, including imagery exploitation, SIGINT analysis, and threat assessment, without any human analyst involvement.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🌍 Industry Impact</h2>
          <ul className="product-points-list">
            <li>Fundamentally disrupts the reconnaissance aircraft industry, replacing platforms that cost hundreds of millions of dollars with autonomous systems costing a fraction of the price.</li>
            <li>Establishes autonomous swarming as a viable, primary ISR methodology, driving rapid adoption across all major military aviation programs globally.</li>
            <li>Forces adversaries to invest billions in new counter-drone air defense systems, radar technologies, and electronic warfare capabilities specifically designed to address this threat.</li>
            <li>Accelerates the commercial drone industry by pioneering advanced technologies like hydrogen fuel cells, AI-driven visual navigation, and swarm coordination algorithms.</li>
            <li>Creates new operational concepts for persistent surveillance that will redefine military doctrine around intelligence collection and targeting timelines.</li>
            <li>Positions Techbrain Networks as the world leader in autonomous aerial intelligence collection, a domain that will only increase in strategic importance over the coming decades.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>🏁 Conclusion</h2>
          <ul className="product-points-list">
            <li>The Autonomous Surveillance and Reconnaissance System represents a revolutionary step change in military intelligence collection capability.</li>
            <li>By combining extraordinary endurance, multi-sensor fusion, and autonomous AI-driven analysis, it delivers a quality and quantity of intelligence previously unachievable.</li>
            <li>Its swarm architecture provides a scalable, resilient, and affordable solution to the persistent ISR requirements of modern multi-domain operations.</li>
            <li>The system's proven performance across diverse operational environments confirms its suitability for deployment by the most demanding and discerning military forces.</li>
            <li>Techbrain Networks' ongoing investment in this platform ensures it will remain operationally relevant against evolving threats throughout its entire service life.</li>
            <li>For any force that demands intelligence dominance as a prerequisite for operational success, the ASRS is an indispensable, mission-critical asset.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Product3;
