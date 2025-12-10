import Hero from "../app/components/home"
import CoreArchitecturePage from "../app/components/home"
import Aboutus from "../app/components/aboutus"
import WhatWeDo from "../app/components/whatwedo"
import HowWeWork from "../app/components/howwework"
import ContactForm from "../app/components/contactform"

export default function Home() {
  return (
    <div>
        <CoreArchitecturePage />
        <Aboutus />
        <WhatWeDo />
        <HowWeWork />
        <ContactForm />
    </div>
  );
}
