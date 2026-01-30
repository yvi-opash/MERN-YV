import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

interface data{
    name: string,
    age: number,
    email: string,
    percentage: number
}

const data1 : data[] = [
    {
        name: "het",
        age: 67,
        email: "XXXXXXXXXXXXXX",
        percentage: 45
    },
    {
        name: "jet",
        age: 45,
        email: "XXXXXXXXXXXXXX",
        percentage: 23
    },
    {
        name: "pet",
        age: 23,
        email: "XXXXXXXXXXXXXX",
        percentage: 87
    },
    {
        name: "let",
        age: 25,
        email: "XXXXXXXXXXXXXX",
        percentage: 88
    }
];

const Table_Compo: React.FC<any> = () => {

    return(
    
        <>
        <div>
        <TableContainer>
            <Table  >
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>nmae</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>%</TableCell>
        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data1.map((elem, id) => {
                        return(
                        <TableRow key={id}>
                            <TableCell>{id+1}</TableCell>
                            <TableCell>{elem.name}</TableCell>
                            <TableCell>{elem.age}</TableCell>
                            <TableCell>{elem.email}</TableCell>
                            <TableCell>{elem.percentage}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        </>
        
    ) 
    
}

export default Table_Compo;