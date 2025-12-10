import CoreArchitecturePage from "../app/components/home"
import Aboutus from "../app/components/aboutus"
import WhatWeDo from "../app/components/whatwedo"
import HowWeWork from "../app/components/howwework"
import ContactForm from "../app/components/contactform"
import Animated from "../app/components/animated"

export default function Home() {
  return (
    <div className="">
        <CoreArchitecturePage />
        <Aboutus />
        <WhatWeDo />
        <Animated />
        <HowWeWork />
        <ContactForm />
    </div>
  );
}
