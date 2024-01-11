import { Box } from "@mui/material";
import React from "react";
import Hero from "../Componenst/Hero";
import Heroservices from "../assest/Solutionhero.jpg";
import image1 from "../assest/assetmg.jpg";
import image2 from "../assest/fleetmg.jpg";
import image3 from "../assest/IOT.jpg";
import Solutioncon from "../Componenst/solutioncon";
function Services() {
  return (
    <>
      <Box>
        <Hero
          Hero={Heroservices}
          Heading={
            <spam>
              Solutio<span style={{ color: "#34E129" }}>ns</span>
            </spam>
          }
          Pera=""
        />
      </Box>
      <Solutioncon
        cimg={image2}
        conthead="Fleet Management"
        contbody="Quanta's Fleet Management Solutions, where we redefine the logistics landscape with a comprehensive approach to vehicle optimization, driver efficiency, and scheduling. Our tailored solutions go beyond traditional fleet management, encompassing logistics intelligence and pilot compass technology to provide a holistic view of your operations.
        Quanta's Fleet Management Solutions provide real-time tracking of your vehicles, ensuring precise location monitoring. With GPS technology and advanced analytics, you gain instant visibility into the whereabouts of your fleet, optimizing routes and minimizing delays. Our solutions delve into driver analytics, providing insights into driver details and ensure compliance with industry regulations.
        We provide predictive maintenance insights in addition to tracking. Reduce unplanned downtime and increase the fleet's lifespan by proactively scheduling maintenance based on vehicle health data. The Pilot Compass feature from Quanta can be used to effectively plan and schedule vehicle services. 
        Quanta's Fleet Management Solutions redefines the logistics landscape, offering a holistic approach that goes beyond mere tracking. Experience the future of fleet management with our innovative features designed
        "
      />
      <Solutioncon
        cimg={image3}
        conthead="Internet Of Thinking  "
        contbody="We seamlessly integrate devices, sensors, and data analytics to create a connected ecosystem that enhances decision-making, efficiency, and productivity. Quanta's IoT-driven surveillance solutions offer intelligent, real-time monitoring for enhanced security. From AI-powered analytics to automated alerts, our surveillance systems are designed to keep your premises secure and provide actionable insights for proactive decision-making. Our systems provide safe, practical, and dependable access control by utilizing cutting-edge biometric technologies including iris scanning, facial recognition, and fingerprint recognition. Access management systems powered by the Internet of Things from Quanta completely change how you manage and keep an eye on facility access. "
      />
      <Solutioncon
        cimg={image1}
        conthead="Asset Management "
        contbody="Quanta's Asset Management Solutions, where we redefine efficiency and optimization for your logistics-related assets. Our tailored approach is designed to comprehensively manage a diverse range of assets, including vehicles, machinery, and mobile cargo units. Quanta ensures seamless tracking, maintenance, and optimization of your vehicle fleet. Efficiently managing mobile cargo units with Quanta's advanced tracking and monitoring solutions. Real-time insights into cargo locations, conditions, and movement."
      />


      {/* <Solutioncon
        cimg={image1}
        conthead="Asset Management "
        contbody="Quanta's Asset Management Solutions, where we redefine efficiency and optimization for your logistics-related assets. Our tailored approach is designed to comprehensively manage a diverse range of assets, including vehicles, machinery, and mobile cargo units. Quanta ensures seamless tracking, maintenance, and optimization of your vehicle fleet. Efficiently managing mobile cargo units with Quanta's advanced tracking and monitoring solutions. Real-time insights into cargo locations, conditions, and movement."
      /> */}
    </>
  );
}

export default Services;
