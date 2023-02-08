import "@progress/kendo-theme-material/dist/all.css";
import {useState, React} from 'react'
import './Dashboard.css'

const WidgetOne = () => <div>Widget one</div>;
const WidgetTwo = () => <div>Widget two</div>;

const initialPositions = [
    {
      col: 1,
      colSpan: 2,
      rowSpan: 2,
    },
    {
      col: 3,
      colSpan: 1,
      rowSpan: 1,
    },
  ];

const Dashboard = () => {
    const [positions, setPositions] = useState(initialPositions);

    const widgets = [
         {
        header: "Widget one header",
        body: <WidgetOne />,
      },
      {
        header: "Widget two header",
        body: <WidgetTwo />,
      },
    ];
  
    const handleReposition = e => {
      setPositions(e.value);
    };

    return (
        <div className="Dashboard">
          <h1>Angaza Dashboard</h1>
          <TileLayout
            className="tileLayout"
            columns={4}
            rowHeight={255}
            gap={{ rows: 10, columns: 10 }}
            positions={positions}
            items={widgets}
            onReposition={handleReposition}
          />
        </div>
      );
  
}

export default Dashboard
