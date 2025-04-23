// data/phasesData.js
import phase1Image from '../assets/phase1.jpg';
import phase2Image from '../assets/crowd-background.jpg';

export const phasesData = [
  {
    id: 1,
    image: phase1Image,
    title: "Phase 1: Project Proposal",
    overview:
      "In this phase, we conduct our preliminary research into modeling pedestrian, vehicle, and micro-mobility interaction. \
      We provide slides for our project proposal presentation delivered on 3/11/2025. ",
    mainContentTitle: "Research",
    mainContent: `
      Traditional state-of-the-art simulators (SUMO, VISSIM, and CARLA)  model vehicle and pedestrian behavior using rule-based systems or stochastic distributions, often failing to capture irregular, unsafe, or emergent behaviors typical in real-world scenarios—particularly in urban or campus-like environments. This motivates the integration of RL to simulate more human-like decision-making. Recently, efforts have been made to integrate RL into existing traffic simulators and develop new ones. Wu, et al. developed Flow, an open-source framework that addresses the complexity of mixed autonomy traffic systems, where a fraction of vehicles are autonomous for AV testing. It builds upon SUMO by integrating deep learning libraries Ray RLlib for RL methods and OpenAI gym for the MDP interface. Suo, et al. created TrafficSim which enhances the realism of simulated behaviors by learning directly from real-world human demonstrations, enabling it to capture more naturalistic driving styles. 
      \n\n
      Experiments have demonstrated that TrafficSim generates significantly more realistic traffic scenarios compared to various baselines, including heuristic, motion forecasting, and imitation learning models. Da, et al.  improved on CityFlow, a traditional rule-based simulator, with CityFlowER by allowing individual vehicles to utilize either rule-based or ML models, significantly reducing data transmission time and improving scalability. Experimental results demonstrate that CityFlowER accurately replicates behaviors from CityFlow and SUMO, achieving low final displacement and travel time errors.  While these frameworks successfully utilize RL to generate more human-like interactions for vehicles over rule-based simulators, they lack functionality for examining risky pedestrian or MMV behaviors that occur in the real-world such as jaywalking or crossing without looking for cars. There is also ongoing research on the use of RL for traffic flow optimization by adjusting traffic light cycles and mitigating phantom jams by introducing AVs to smooth congestion, however, this is not the main goal of our project.
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
  {
    id: 2,
    image: phase2Image,
    title: "Phase 2: UI/UX Design & 3D Environment Rendering",
    overview:
      "In this phase, we design and implement the user interface for our simulator. We develop Layout Studio, a 2D layout editor for creating custom layouts and rendering them in 3D.",
    mainContentTitle: "Code Development Progress",
    mainContent: `
      We share progress on code development. Thus far, we have designed and implemented an intuitive user interface for adjusting values for density and risk tolerance hyper-parameters and creating new layouts. Additionally, we began 3D environment rendering having solidified our 2D to 3D mapping strategy.

      Since our simulator employs interactive-based methods, we provide sliders for adjusting density and risk tolerance values. This adjustment will be reflected in real time when the simulation is live. Note: for a better user experience, we also added info icons that display tooltips when the cursor hovers over them.

      In our project proposal, we described three layouts or locations on campus that will be used as environments for simulating unsafe mobility behaviors. To model these locations, we decided to adopt a grid-based approach where tile pieces represent different terrains including grass, sidewalk, road, and road with crosswalk. These tiles will be used to define the action space of different agents in the reinforcement learning process (i.e only pedestrians and MMVs can enter a sidewalk tile). On the development side, one way to implement this approach would be to discretize a grid using a pre-determined resolution, into fixed-size cells reflecting the layout of each on-campus location. Each cell contains metadata about the terrain type and agent constraints. This method, however, presents two limitations. First, because the grid resolution is pre-determined, users who require a more detailed layout are forced to work with the preset resolution which may not align with their needs. Second, offering the user only three layouts to study severely limits generalization of insights to different layouts. Users interested in other uncommon layouts found at different universities will find our simulator lacking.

      To address these issues, we've developed Layout Studio. Layout Studio is a 2D canvas where users can craft custom layouts by placing tiles (grass, sidewalk, road, and road w/ crosswalk)  in a fixed 512px by 512px grid. Users are able to choose between two levels of resolution, 64px and 32px, yielding 8x8 and 16x16 configurations, click and drag to place multiple tiles in a row or column, delete or replace placed tiles, clear the canvas to restart, save created layouts as json files, and upload layouts.

      In addition to custom layouts made in Layout Studio, we also provide presets. Since we adopted a grid based approach, modeling roundabouts proves to be a challenge, so, we swap out our proposed roundabout layout for a three-way intersection. Our simulator currently offers three layouts, four-way intersection, two-way road, and three way intersection all of which were made using Layout Studio. Any 2D layout (custom or preset) is then mapped to a corresponding 3D element. (Note: all components of Layout studio and other UI have been fully implemented on the front and backend).
    `,
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "Three.js"],
    concepts: [
      "UI/UX Design",
      "Markov Game",
      "Reinforcement Learning",
    ],
    // papers, notion, videos, links
    resources: {
      links: [
        { name: "Three.js Docs", link: "https://threejs.org/manual/#en/creating-a-scene" },
        { name: "TypeScript Docs", link: "https://www.typescriptlang.org/docs/" },
        { name: "TS Doc tutorial", link: "https://medium.com/suyeonme/ts-what-is-tsdoc-6e11427c9704" },
      ]
    },
    // only hex values
    color: "#228B22",
    deliverables: [
      {
        title: "Layout Studio Demo",
        description:
          "Demonstrates how to create custom layouts using Layout Studio",
        actions: [
          {
            type: "video",
            name: "Layout Studio Demo",
            link: "https://youtu.be/22qrLhMcuCg"
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: phase2Image,
    title: "Phase 3: Kinematics",
    overview:
      "In this phase, we implement kinematic equations to simulate Pedestrian, MMV, and Vehicle movement",
    mainContentTitle: "Implementation Details",
    mainContent: `
      # TODO
    `,
    techStack: ["TypeScript", "Three.js"],
    concepts: [
      "Kinematics",
      "Numerical Methods",
    ],
    // papers, notion, videos, links
    resources: {
      links: [
        { name: "Three.js Docs", link: "https://threejs.org/manual/#en/creating-a-scene" },
        { name: "TypeScript Docs", link: "https://www.typescriptlang.org/docs/" },
        { name: "TS Doc tutorial", link: "https://medium.com/suyeonme/ts-what-is-tsdoc-6e11427c9704" },
      ]
    },
    // only hex values
    color: "#967BB6",
    deliverables: [
      {
        title: "Kinematic Equations for Pedestrian, MMV, and Vehicle Movement",
        // description:
        //   "Latex document going over kinematic equations for Pedestrian, MMV, and Vehicle movement",
        actions: [
          {
            type: "pdf",
            name: "Kinematic Equations for Pedestrian, MMV, and Vehicle Movement",
            link: "https://youtu.be/22qrLhMcuCg"
            // replace with google drive link ^
          },
        ],
      },
    ],
  },
];