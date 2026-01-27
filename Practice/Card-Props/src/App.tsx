import Card from "./Components/Card"



function App() {
  
const Jobs = [
  {
    id: 1,
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    category: "Product",
    employees: 20,
    title: "Project Management of Launch Initiative",
    pay: "$15k",
    location: "Work from anywhere",
    time: "40 hrs/week",
    skills: ["Project Management", "Web3", "Agile"]
  },
  {
    id: 2,
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    category: "Product",
    employees: 35,
    title: "Builder Discord Moderators Program",
    pay: "$13k",
    location: "Work from anywhere",
    time: "40 hrs/week",
    skills: ["Community Strategy", "Discord", "Web3"]
  },
  {
    id: 3,
    logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    category: "Grant",
    employees: 120,
    title: "Senior Business Systems Analyst",
    pay: "$11k",
    location: "Remote",
    time: "Full Time",
    skills: ["Product Strategy", "User Research", "Agile"]
  },
  {
    id: 4,
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    category: "Product",
    employees: 435,
    title: "Blockchain Product Manager",
    pay: "$18k",
    location: "Remote",
    time: "Full Time",
    skills: ["Blockchain", "Scrum", "Leadership"]
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    category: "Job",
    employees: 532,
    title: "Frontend React Developer",
    pay: "$12k",
    location: "Remote",
    time: "40 hrs/week",
    skills: ["React", "TypeScript", "CSS"]
  },
  {
    id: 6,
    logo:  "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    category: "Product",
    employees: 75,
    title: "Backend Node.js Engineer",
    pay: "$14k",
    location: "Remote",
    time: "Full Time",
    skills: ["Node.js", "MongoDB", "API"]
  },
  {
    id: 7,
    logo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    category: "Product",
    employees: 260,
    title: "NFT Platform Manager",
    pay: "$16k",
    location: "Work from anywhere",
    time: "40 hrs/week",
    skills: ["NFT", "Web3", "Product"]
  },
  {
    id: 8,
    logo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    category: "Grant",
    employees: 48,
    title: "Developer Relations Engineer",
    pay: "$17k",
    location: "Remote",
    time: "Full Time",
    skills: ["DevRel", "Community", "Blockchain"]
  },
  {
    id: 9,
    logo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    category: "Job",
    employees: 310,
    title: "Payment Systems Analyst",
    pay: "$19k",
    location: "Remote",
    time: "40 hrs/week",
    skills: ["SQL", "Payments", "Analysis"]
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    category: "Job",
    employees: 95,
    title: "UX Researcher",
    pay: "$20k",
    location: "Remote",
    time: "Full Time",
    skills: ["UX", "Research", "Design"]
  }
];




  return (
    <>
      {
        <div className="cards-container">
  {Jobs.map((elem) => (
    <Card
      key={elem.id}
      logo={elem.logo}
      category={elem.category}
      employees={elem.employees}
      title={elem.title}
      pay={elem.pay}
      location={elem.location}
      time={elem.time}
      skills={elem.skills}
    />
  ))}
</div>
      }
        
      
    </>
  )
}

export default App
