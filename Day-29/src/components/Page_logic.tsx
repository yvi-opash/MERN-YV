import { useState } from "react";
import '../index.css'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Button,

} from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

interface data {
  name: string;
  age: number;
  email: string;
  percentage: number;
}

const data1: data[] = [
  { name: "Aarav", age: 21, email: "aarav.shah@gmail.com", percentage: 78 },
  { name: "Vivaan", age: 22, email: "vivaan.patel@gmail.com", percentage: 82 },
  { name: "Aditya", age: 23, email: "aditya.mehta@gmail.com", percentage: 69 },
  {  name: "Krishna",  age: 24, email: "krishna.joshi@gmail.com", percentage: 91,},
  { name: "Ishaan", age: 25, email: "ishaan.verma@gmail.com", percentage: 74 },

  { name: "Rohan", age: 26, email: "rohan.singh@gmail.com", percentage: 88 },
  { name: "Aryan", age: 27, email: "aryan.malhotra@gmail.com", percentage: 65 },
  { name: "Kunal", age: 28, email: "kunal.kapoor@gmail.com", percentage: 72 },
  { name: "Sahil", age: 22, email: "sahil.gupta@gmail.com", percentage: 84 },
  { name: "Mohit", age: 23, email: "mohit.aggarwal@gmail.com", percentage: 79 },

  { name: "Neha", age: 21, email: "neha.sharma@gmail.com", percentage: 90 },
  { name: "Priya", age: 22, email: "priya.mishra@gmail.com", percentage: 86 },
  { name: "Ananya", age: 24, email: "ananya.iyer@gmail.com", percentage: 92 },
  { name: "Pooja", age: 25, email: "pooja.nair@gmail.com", percentage: 73 },
  { name: "Kavya", age: 23, email: "kavya.reddy@gmail.com", percentage: 81 },

  { name: "Rahul", age: 27, email: "rahul.chopra@gmail.com", percentage: 68 },
  { name: "Amit", age: 28, email: "amit.bansal@gmail.com", percentage: 75 },
  { name: "Suresh", age: 29, email: "suresh.yadav@gmail.com", percentage: 64 },
  { name: "Nikhil", age: 26, email: "nikhil.saxena@gmail.com", percentage: 87 },
  { name: "Deepak", age: 30, email: "deepak.tiwari@gmail.com", percentage: 71 },

  { name: "Sneha", age: 22, email: "sneha.kulkarni@gmail.com", percentage: 89 },
  { name: "Ritika", age: 23, email: "ritika.jain@gmail.com", percentage: 85 },
  { name: "Manish", age: 27, email: "manish.thakur@gmail.com", percentage: 67 },
  { name: "Harsh", age: 24, email: "harsh.dave@gmail.com", percentage: 76 },
  { name: "Varun", age: 25, email: "varun.arora@gmail.com", percentage: 83 },
];

const Page_logic = () => {
  const [rowperpage, setrowperpage] = useState(5);
  const [currentpage, setcurrentpage] = useState(0);

  const [Search, setSearch] = useState("");
  const [user, setuser] = useState(data1)

  let starting = currentpage * rowperpage;
  let ending = starting + rowperpage;

  function handleSearch() {
    if (Search === ""){
      setuser(data1);
      return;
    }
  
    const filter = data1.filter((item) =>
      item.name.toLowerCase().includes(Search.toLowerCase())
    );
    setuser(filter);
  }

  return (
    <>

      <div>
        <input 
          value={Search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>age</TableCell>
                <TableCell>email</TableCell>
                <TableCell>%</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {user.slice(starting, ending).map((elem, id) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{id + starting + 1}</TableCell>
                    <TableCell>{elem.name}</TableCell>
                    <TableCell>{elem.age}</TableCell>
                    <TableCell>{elem.email}</TableCell>
                    <TableCell>{elem.percentage}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>
                                    <span>Rows per page:</span>
                                    <input
                                        type="number"
                                        value={rowperpage}
                                        onChange={(e) => {
                                            setrowperpage(Number(e.target.value));
                                            setcurrentpage(0);
                                        }}
                                        min="1"
                                        max={user.length}
                                        style={{width: '60px'}}
                                    />
                                    
                                    <span>
                                        {starting + 1}-{Math.min(ending, user.length)} of {user.length}
                                    </span>
                                    
                                    <Button
                                        onClick={() => setcurrentpage(currentpage - 1)}
                                        disabled={currentpage === 0}
                                    >
                                        <ChevronLeftRounded />
                                    </Button>
                                   
                                    <Button
                                        onClick={() => setcurrentpage(currentpage + 1)}
                                        disabled={ending >= user.length}
                                    >
                                        <ChevronRightRounded />
                                    </Button>
                                </TableCell>
                                 
                            </TableRow>
                        </TableFooter>

            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <span>Rows per page:</span>

                  <Select
                    value={rowperpage}
                    onChange={(e) => {
                      setrowperpage(Number(e.target.value));
                      setcurrentpage(0);
                    }}
                    size="small"
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={data1.length}>All</MenuItem>
                  </Select>

                  <span>
                    {starting + 1}-{Math.min(ending, data1.length)} of{" "}
                    {data1.length}
                  </span>

                  <Button
                    onClick={() => setcurrentpage(currentpage - 1)}
                    disabled={currentpage === 0}
                    style={{marginLeft:'90%'}}
                  >
                    <ChevronLeftRounded />
                  </Button>

                  <Button
                    onClick={() => setcurrentpage(currentpage + 1)}
                    disabled={ending >= data1.length}
                  >
                    <ChevronRightRounded />
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Page_logic;


