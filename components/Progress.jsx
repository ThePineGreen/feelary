import React from "react";

export class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    const color = (percent) => {
      if (percent < 33) {
        return 'stroke-teal-500';
      } else if (percent < 66) {
        return 'stroke-yellow-500';
      }
      return 'stroke-red-500';
    }

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}>
        <circle
          className="dark:stroke-zinc-200 stroke-zinc-100 fill-transparent"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`} />
        <circle
          className={color(this.props.percentage) + " fill-transparent stroke-round"}
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }} />
        <text
          className="dark:fill-zinc-200 fill-zinc-900 text-3xl"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle">
          {`${this.props.percentage}%`}
        </text>
      </svg>
    );
  }
}

Progress.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 8
};
