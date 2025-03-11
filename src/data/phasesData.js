// data/phasesData.js
import phase1Image from '../assets/phase1.jpg';

export const phasesData = [
  {
    id: 1,
    image: phase1Image,
    title: "Phase 1: Project Proposal",
    overview:
      "In this phase, we conduct our preliminary research into modeling pedestrian, vehicle, and micro-mobility interaction. \
      We provide slides for our project proposal presentation delivered on 3/11/2025. ",
    mainContentTitle: "Research Process",
    mainContent: `
      #TODO
    `,
    techStack: ["Google Slides"],
    concepts: [
      "Traffic Flow Theory",
      "Pedestrian Dynamics",
      "Agent-Based Modeling",
      "Collision Avoidance",
      "Jaywalking Behavior",
      "Social Force Model",
      "Traffic Simulation"
    ],
    resources: {
      papers: [
        { title: "CityFlowER", link: "https://arxiv.org/abs/2402.06127" },
        { title: "CARLA", link: "https://arxiv.org/pdf/1711.03938" },
        { title: "Data-Driven Traffic Simulation: A Comprehensive Review", link: "https://ieeexplore.ieee.org/document/10440492" },
        { title: "A review of Crowd Simulation...", link: "https://www.sciencedirect.com/science/article/pii/S1524070320300242?ref=pdf_download&fr=RR-2&rr=91eb16e01a3c0812" },
        { title: "Analysing the Impact of Jaywalking Pedestrians on Mainstream Traffic Flow... ", link: "https://engineer.sljol.info/articles/7548/files/submission/proof/7548-1-26024-1-10-20230216.pdf" }
      ],
      // notion: [
      //   { name: "Hilbert Geometry Documentation", link: "https://notion.so/hilbert-docs" },
      //   { name: "Experimental Setup Guide", link: "https://notion.so/experimental-setup" }
      // ],
      videos: [
        { name: "Rush hour at Bay and Richmond is 'absolutely terrifying", link: "https://youtu.be/GbSI3MbL4ZY?si=_QeJb-rfk0M9kYrN" },
        { name: "Carla Simulator - Traffic simulation", link: "https://youtu.be/L8LcyV12Cxs?si=-AVkyfA0jvC0jWOH" },
        { name: "SUMO (\"Simulation of Urban MObility\") Tutorial", link: "https://youtu.be/zQH1n0Fvxes?si=UN1wIEKPCy9uDDSs"}
      ],
      links: [
        { name: "Proposal Presentation", link: "https://docs.google.com/presentation/d/1gApqdJvMFKOUfmHvyR2qz3B0SKY8hatd/edit?usp=sharing&ouid=101171572429129279927&rtpof=true&sd=true" },
        { name: "CARLA Simulator Docs", link: "https://carla.readthedocs.io/en/latest/adv_traffic_manager/" }
      ]
    },
    color: "#FF3B30",
    deliverables: [
      {
        title: "Project Proposal Presentation",
        description:
          "Slides from our project proposal presentation on (3/11/2025)",
        actions: [
          {
            type: "google-slides",
            name: "Project Proposal Presentation",
            link: "https://docs.google.com/presentation/d/1gApqdJvMFKOUfmHvyR2qz3B0SKY8hatd/edit?usp=sharing&ouid=101171572429129279927&rtpof=true&sd=true"
          },
        ],
      },
    ],
  },
];