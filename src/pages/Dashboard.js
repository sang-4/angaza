// import "@progress/kendo-theme-material/dist/all.css";
// import { TileLayout } from "@progress/kendo-react-layout";
// import {useState, React} from 'react'
// import './Dashboard.css'
// import ActiveUsers from "../components/ActiveUsers";
// import FollowUp from "../components/FollowUp";
// import PendingAppointments from "../components/PendingAppointments";

// // const WidgetOne = () => <div>Widget one</div>;
// // const WidgetTwo = () => <div>Widget two</div>;

// const initialPositions = [
//     {
//         col: 1,
//         colSpan: 2,
//         rowSpan: 2,
//       },
//       {
//         col: 3,
//         colSpan: 1,
//         rowSpan: 1,
//       },
//       {
//         col: 4,
//         colSpan: 1,
//         rowSpan: 1,
//       },
//       {
//         col: 3,
//         colSpan: 2,
//         rowSpan: 2,
//       },
//   ];

//   const getPositions = initialPositions => {
//     return (
//         JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
//       );
//     };

// const Dashboard = () => {
//     const [positions, setPositions] = useState(getPositions(initialPositions));

//     const widgets = [
//          {
//         header: "Active Users",
//         body: <ActiveUsers />,
//       },
//       {
//         header: "Appointments",
//         body: <PendingAppointments />,
//       },
//       {
//         header: "Follow Up",
//         body: <FollowUp />,
//       },
//     ];
  
//     const handleReposition = e => {
//       setPositions(e.value);
//       localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
//     };

//     return (
//         <div className="Dashboard">
//           <h1>Angaza Dashboard</h1>
//           <TileLayout
//             className="tileLayout"
//             columns={4}
//             rowHeight={255}
//             positions={positions}
//             gap={{ rows: 10, columns: 10 }}
//             items={widgets}
//             onReposition={handleReposition}
//           />
//         </div>
//       );
  
// }

// export default Dashboard
