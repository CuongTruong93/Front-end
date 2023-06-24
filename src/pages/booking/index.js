import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MainLayout from "../../components/main-layout";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function createData(menteeId, menteeName, imageUrl, email, dateString) {
  return { menteeId, menteeName, imageUrl, email, dateString };
}

const rows = [
  createData(
    "mentee1",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee2",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee3",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee4",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee5",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee6",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
  createData(
    "mentee7",
    "nguyen trong tai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5iuH9GH49VUAv0qvlrKiFRnsgEC6maRA9g&usqp=CAU",
    "email@gmail.com",
    "08, August, 2023"
  ),
];

const Booking = () => {
  return (
    <MainLayout
      pageTitle="Booking"
      layoutContent={
        <>
          <div className={styles.dbWrapper}>
            <h2>Booking Summary</h2>
            <TableContainer
              sx={{
                background: "#E7E7D7",

                border: "5px solid #B5C49C",
                borderRadius: "10px",
              }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.tableCellHead} align="center">
                      mentee Lists
                    </TableCell>
                    <TableCell className={styles.tableCellHead} align="center">
                      Scheduled Date
                    </TableCell>
                    <TableCell className={styles.tableCellHead} align="center">
                      Scheduled Timings
                    </TableCell>
                    <TableCell className={styles.tableCellHead} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.menteeId}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      hover={true}
                    >
                      <TableCell align="center">
                        <div className={styles.menteeInfoWrapper}>
                          <img src={row.imageUrl} alt="avatar" />
                          <div className={styles.infoLeft}>
                            <h4>{row.menteeName}</h4>
                            <p>{row.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center">{row.dateString}</TableCell>
                      <TableCell align="center">
                        <div className={styles.block}></div>
                      </TableCell>
                      <TableCell align="center">
                        <div>
                          <Link
                            className={styles.customAction}
                            to={`/mentee/${row.menteeId}`}
                          >
                            <RemoveRedEyeOutlinedIcon />
                            <span>View</span>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      }
    />
  );
};

export default Booking;
