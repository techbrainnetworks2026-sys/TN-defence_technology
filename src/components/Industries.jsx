import React from 'react';
import { 
  Plane, Wheat, Car, FlaskConical, Shield, GraduationCap, Zap, Film, 
  Banknote, Utensils, Stethoscope, Building2, Truck, Factory, Waves, 
  Droplets, Pill, ShoppingBag, Trophy, Cpu, PhoneCall, Scissors, Bus, Globe 
} from 'lucide-react';
import './Industries.css';

const industries = [
  { name: 'Aerospace', description: 'Advanced aviation and space exploration solutions.', icon: Plane },
  { name: 'Agriculture', description: 'Innovative technologies for sustainable farming.', icon: Wheat },
  { name: 'Automotive', description: 'Next-generation mobility and vehicle systems.', icon: Car },
  { name: 'Chemical', description: 'Specialized chemical engineering and manufacturing.', icon: FlaskConical },
  { name: 'Defence Technology', description: 'State-of-the-art security and defense systems.', icon: Shield },
  { name: 'Education', description: 'Digital learning and educational infrastructure.', icon: GraduationCap },
  { name: 'Energy & Utilities', description: 'Sustainable power and resource management.', icon: Zap },
  { name: 'Entertainment and Media', description: 'Cutting-edge digital content and media solutions.', icon: Film },
  { name: 'Finance', description: 'Secure financial technologies and banking systems.', icon: Banknote },
  { name: 'Food Technology', description: 'Advanced food processing and safety solutions.', icon: Utensils },
  { name: 'Healthcare', description: 'Modern medical tech and healthcare infrastructure.', icon: Stethoscope },
  { name: 'Infrastructure', description: 'Smart city and large-scale urban development.', icon: Building2 },
  { name: 'Logistics', description: 'Efficient supply chain and distribution networks.', icon: Truck },
  { name: 'Manufacturing', description: 'Precision engineering and industrial automation.', icon: Factory },
  { name: 'Ocean Technology', description: 'Deep-sea exploration and marine infrastructure.', icon: Waves },
  { name: 'Oil and Gas', description: 'Advanced extraction and energy processing.', icon: Droplets },
  { name: 'Pharmaceutical', description: 'Biotechnology and advanced medicine production.', icon: Pill },
  { name: 'Retail', description: 'Modern digital commerce and retail systems.', icon: ShoppingBag },
  { name: 'Sports', description: 'Performance analytics and sports technology.', icon: Trophy },
  { name: 'Technology', description: 'Core software and hardware innovation.', icon: Cpu },
  { name: 'Telecommunication', description: 'Global connectivity and network solutions.', icon: PhoneCall },
  { name: 'Textile', description: 'Advanced fabric tech and fashion manufacturing.', icon: Scissors },
  { name: 'Transportation', description: 'Integrated transit and logistics systems.', icon: Bus },
  { name: 'Travel', description: 'Digital hospitality and travel management.', icon: Globe }
];

const Industries = () => {
  return (
    <section className="industries-section" id="industries">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">Industrial <span className="logo-accent">Sectors</span></h2>
          <p className="section-subtitle">Delivering specialized technology across 24 diverse global industries.</p>
        </div>
        
        <div className="industries-grid">
          {industries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={item.name} className="industry-card glass-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
                <div className="industry-icon-wrapper">
                  <IconComponent className="industry-icon" size={32} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-name">{item.name}</h3>
                  <p className="industry-desc">{item.description}</p>
                  <div className="industry-indicator"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
