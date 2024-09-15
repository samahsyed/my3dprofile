import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D Designer",
      icon: web,
    },
    {
      title: "Motion Graphics Artist",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Video Editor",
      company_name: "Nkoda Global",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Creating short form content for social media",
        "Creating visual narratives",
        "Adding VFX",
        "Be a part of shoots",
      ],
    },
    {
      title: "3D Animation",
      company_name: "Nkoda Global, Zeesh, Atralia Perfumes",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "January 2024 - Present",
      points: [
        "Creating visual narratives for short form content on social media",
        "Creating environments",
        "3D animation and camera movements",
        "Modelling and texturing custom products for clients",
      ],
    },
    {
      title: "Motion Graphics and VFX",
      company_name: "Nkoda Global, Zeesh, Atralia Perfumes",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Creating visual narratives for short form content",
        "Using keyframe animation to showcase products",
        "Announcement posts using keyframe animation",
        "Mixing animation with video, using tracking, cameras, and VFX",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "The output was outstanding and was delivered on time",
      name: "Lena Carter",
      designation: "CFO",
      company: "Vertex Innovations",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      testimonial:
        "I found it very efficient to work with Samah. She has great attention to detail for her work",
      name: "Evan Mitchell",
      designation: "COO",
      company: "Nexus Dynamics",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      testimonial:
        "After Samah began being involved in creating digital brand content, there was significant increase in engagement on our pages.",
      name: "Isla Thompson",
      designation: "CTO",
      company: "PulseTech Solutions",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Motion Graphic Video",
      description:
        "1 minute portfolio compilation video made for a digital marketing agency, uses complex motion graphic elements to highlight different sectors",
      tags: [
        {
          name: "AfterEffects",
          color: "blue-text-gradient",
        },
        {
          name: "PremierePro",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.playbook.com/s/samah-s/J8TAx5vnD7c5PPYD2Uty4qMN?assetToken=aPCuKyBSB2Fjjo5uPRktzV8Y",
    },
    {
      name: "PPF Car Showcase",
      description:
        "Made for instagram and other social media platforms. Rigged modified version of a car, created environments and lighting and animation. To create a carefully crafted image of the brand",
      tags: [
        {
          name: "AfterEffects",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "3dAnimation",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.playbook.com/s/samah-s/8iCCJC9ZzFsDZ8g1ebQCHjLJ?assetToken=LvYLqWraPZ4kaRZv1uute8FN",
    },
    {
      name: "Bag Product Showcase",
      description:
        "Made for instagram and other social media platforms. Product modelled and animated from scratch",
      tags: [
        {
          name: "AfterEffects",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "3dAnimation",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.playbook.com/s/samah-s/4xhkjJRqPvxSR74v82K5X1Jg?assetToken=j2LUJPogwSeJBGHUgwnzb5wv",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };