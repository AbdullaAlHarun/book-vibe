import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const CustomShapeBarChart = ({ data }) => {
  const chartData = data.map((book, index) => ({
    name: book.bookName,
    totalPages: book.totalPages,
    uv: book.totalPages,
    fill: index < 6 ? colors[index] : colors[index % colors.length],
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Determine width and height based on viewport size
  const width = window.innerWidth > 600 ? 600 : window.innerWidth - 20; // Adjust as needed
  const height = 400;

  return (
    <div>
      <BarChart
        width={width}
        height={height}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 65 }} // Adjusted bottom margin to make space for book names
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" shape={<TriangleBar />} label={{ position: 'top' }}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

CustomShapeBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bookName: PropTypes.string.isRequired,
      totalPages: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CustomShapeBarChart;
