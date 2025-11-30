import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  category: 'milestone' | 'release' | 'conflict';
}

const events: TimelineEvent[] = [
  { date: '2022-11-30', title: 'ChatGPT Released', description: 'The spark that started the war.', category: 'milestone' },
  { date: '2023-03-14', title: 'GPT-4 Launch', description: 'The peak of dense models.', category: 'release' },
  { date: '2024-12-11', title: 'Gemini 2.0 Agentic Era', description: 'Hassabis defines the new rules.', category: 'milestone' },
  { date: '2024-12-25', title: 'DeepSeek V3', description: '$5.5M training cost shock.', category: 'conflict' },
  { date: '2025-04-01', title: 'Llama 4 MoE', description: 'Meta abandons dense architecture.', category: 'release' },
  { date: '2025-07-01', title: 'Kimi K2', description: 'China takes the lead in cost-efficiency.', category: 'release' },
  { date: '2025-11-15', title: 'Gemini 3', description: 'The new order established.', category: 'milestone' },
];

const InteractiveTimeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#111')
      .style('overflow', 'visible');

    // Clear previous renders
    svg.selectAll('*').remove();

    // Scales
    const timeScale = d3.scaleTime()
      .domain([new Date('2022-10-01'), new Date('2026-01-01')])
      .range([margin.left, width - margin.right]);

    // Axis
    const xAxis = d3.axisBottom(timeScale)
      .ticks(d3.timeMonth.every(6))
      .tickFormat(d3.timeFormat('%Y-%m') as any);

    svg.append('g')
      .attr('transform', `translate(0, ${height / 2})`)
      .attr('class', 'axis text-gray-400')
      .call(xAxis)
      .select('.domain')
      .attr('stroke', '#444');

    // Events
    const eventGroups = svg.selectAll('.event')
      .data(events)
      .enter()
      .append('g')
      .attr('class', 'event cursor-pointer')
      .attr('transform', d => `translate(${timeScale(new Date(d.date))}, ${height / 2})`);

    // Event Markers
    eventGroups.append('circle')
      .attr('r', 8)
      .attr('fill', d => {
        if (d.category === 'milestone') return '#fbbf24'; // Yellow
        if (d.category === 'release') return '#3b82f6'; // Blue
        return '#ef4444'; // Red
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .transition()
      .duration(1000)
      .attr('r', 12);

    // Labels
    eventGroups.append('text')
      .attr('y', (d, i) => i % 2 === 0 ? -30 : 40)
      .attr('text-anchor', 'middle')
      .text(d => d.title)
      .attr('fill', '#eee')
      .style('font-size', '12px')
      .style('font-weight', 'bold');

    // Hover Interaction
    eventGroups.on('mouseover', function(event, d) {
      d3.select(this).select('circle').attr('r', 16);
      // Tooltip logic would go here
    }).on('mouseout', function() {
      d3.select(this).select('circle').attr('r', 12);
    });

  }, []);

  return (
    <div className="w-full overflow-x-auto py-10 bg-gray-900">
      <svg ref={svgRef} className="mx-auto"></svg>
    </div>
  );
};

export default InteractiveTimeline;
