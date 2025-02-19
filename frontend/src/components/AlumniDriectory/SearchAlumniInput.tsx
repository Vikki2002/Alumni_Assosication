import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor: lighten(theme.palette.primary.light, 0.85),
  fontWeight: "bold",
  ...theme.applyStyles?.("dark", {
    backgroundColor: darken(theme.palette.primary.main, 0.8),
  }),
}));

const GroupItems = styled("ul")({
  padding: 0,
  listStyle: "none",
});

export default function SearchAlumniSelector() {
  const options = collegeBranches.flatMap((category) =>
    category.branches.map((branch) => ({
      category: category.name,
      title: branch,
    }))
  );

  return (
    <Autocomplete
      options={options.sort((a, b) => a.category.localeCompare(b.category))}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.title}
      sx={{ width: "60%", }}
      renderInput={(params) => <TextField {...params} label="Select Branch" />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}

// ✅ **Complete List of College Branches**
const collegeBranches = [
  {
    name: "Engineering",
    branches: [
      "Computer Science and Engineering (CSE)",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics and Communication Engineering (ECE)",
      "Information Technology (IT)",
      "Automobile Engineering",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Biotechnology Engineering",
      "Mining Engineering",
      "Metallurgical Engineering",
      "Petroleum Engineering",
      "Robotics Engineering",
      "Artificial Intelligence & Machine Learning (AI & ML)",
      "Data Science and Engineering",
      "Cyber Security",
      "Mechatronics Engineering",
      "Environmental Engineering",
      "Agricultural Engineering",
    ],
  },
  {
    name: "Medical and Health Sciences",
    branches: [
      "MBBS",
      "BDS (Dental Surgery)",
      "BAMS (Ayurvedic Medicine)",
      "BHMS (Homeopathic Medicine)",
      "BUMS (Unani Medicine)",
      "BPT (Physiotherapy)",
      "BPharm (Pharmacy)",
      "DPharm (Diploma in Pharmacy)",
      "BSc Nursing",
      "MSc Nursing",
      "BVSc (Veterinary Science)",
      "BMLT (Medical Lab Technology)",
      "BMRIT (Medical Radiology & Imaging Technology)",
      "Bachelor of Occupational Therapy",
    ],
  },
  {
    name: "Management",
    branches: [
      "MBA (Master of Business Administration)",
      "BBA (Bachelor of Business Administration)",
      "PGDM (Post Graduate Diploma in Management)",
      "Hotel Management",
      "Event Management",
      "Retail Management",
      "Sports Management",
      "International Business",
    ],
  },
  {
    name: "Law",
    branches: [
      "LLB (Bachelor of Laws)",
      "BA LLB (Integrated Law)",
      "BBA LLB (Integrated Law with Business Administration)",
      "BCom LLB (Integrated Law with Commerce)",
      "LLM (Master of Laws)",
      "Cyber Law",
      "Intellectual Property Law",
    ],
  },
  {
    name: "Science",
    branches: [
      "BSc (Bachelor of Science)",
      "MSc (Master of Science)",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biotechnology",
      "Microbiology",
      "Environmental Science",
      "Zoology",
      "Botany",
      "Forensic Science",
      "Genetics",
    ],
  },
  {
    name: "Commerce and Banking",
    branches: [
      "BCom (Bachelor of Commerce)",
      "MCom (Master of Commerce)",
      "CA (Chartered Accountancy)",
      "CFA (Chartered Financial Analyst)",
      "CS (Company Secretary)",
      "BBA in Banking & Finance",
    ],
  },
  {
    name: "Arts and Humanities",
    branches: [
      "BA (Bachelor of Arts)",
      "MA (Master of Arts)",
      "History",
      "Political Science",
      "Psychology",
      "English Literature",
      "Sociology",
      "Anthropology",
      "Philosophy",
      "Geography",
      "Economics",
      "Public Administration",
    ],
  },
  {
    name: "Design and Architecture",
    branches: [
      "BArch (Bachelor of Architecture)",
      "MArch (Master of Architecture)",
      "BDes (Bachelor of Design)",
      "MDes (Master of Design)",
      "Interior Design",
      "Fashion Design",
      "Graphic Design",
      "Product Design",
      "Game Design",
    ],
  },
  {
    name: "Media and Mass Communication",
    branches: [
      "BJMC (Bachelor of Journalism & Mass Communication)",
      "MJMC (Master of Journalism & Mass Communication)",
      "Film and Television Production",
      "Advertising & Public Relations",
      "Photography",
      "Animation & VFX",
    ],
  },
  {
    name: "Education",
    branches: [
      "BEd (Bachelor of Education)",
      "MEd (Master of Education)",
      "D.El.Ed (Diploma in Elementary Education)",
      "Special Education",
    ],
  },
  {
    name: "Physical Education and Sports",
    branches: [
      "BPEd (Bachelor of Physical Education)",
      "MPEd (Master of Physical Education)",
      "Sports Science",
      "Yoga and Naturopathy",
    ],
  },
  {
    name: "IT & Computer Applications",
    branches: [
      "BCA (Bachelor of Computer Applications)",
      "MCA (Master of Computer Applications)",
      "BSc IT (Information Technology)",
      "MSc IT (Information Technology)",
      "Cloud Computing",
      "Cyber Security",
      "Blockchain Technology",
      "Data Science & Big Data Analytics",
    ],
  },
  {
    name: "Agriculture and Veterinary Sciences",
    branches: [
      "BSc Agriculture",
      "MSc Agriculture",
      "BVSc (Veterinary Science)",
      "Animal Husbandry",
      "Horticulture",
      "Dairy Science & Technology",
    ],
  },
];

