"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OurProcess() {
  const steps = [
    "Ideation",
    "Analytics & Market Research",
    "App Platform Selection",
    "UI/UX Design",
    "App Development",
    "Testing",
    "Deployment to App Store",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section className="py-12 bg-white px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          7 Steps of Mobile App Development Process
        </h2>

        {isMobile ? (
          <MobileView steps={steps} />
        ) : (
          <DesktopView steps={steps} />
        )}
      </div>
    </section>
  );
}

function MobileView({ steps }) {
  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="w-48 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-md">
          <span className="w-full h-full relative">
            <Image
              src="/web-app.png"
              alt="App Mockup"
              layout="fill"
              className="object-cover rounded-xl"
            />
          </span>
        </div>
      </div>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4 mt-1">
              {index + 1}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex-1 text-left shadow-sm">
              <h3 className="font-semibold text-blue-800">{step}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopView({ steps }) {
  // Wider arc placement for better horizontal spread
  const radius = 390; // circle radius
  const centerX = 320; // SVG center X
  const centerY = 410; // SVG center Y
  const startAngle = -180; // arc start angle (wider)
  const endAngle = 0; // arc end angle (wider)

  const angleStep = (endAngle - startAngle) / (steps.length - 1);

  return (
    <div className="relative flex items-center justify-center min-h-[600px]">
      {/* Center Image */}
      <div className="relative z-10 w-56 h-72">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-gray-600 font-medium">App Mockup Image</span>
        </div>
      </div>

      {/* Steps arranged in arc */}
      <svg
        viewBox="0 0 640 640"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-label="App development process steps"
      >
        {steps.map((step, index) => {
          const angle = startAngle + angleStep * index;
          const rad = (angle * Math.PI) / 180;

          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);

          return (
            <g key={index}>
              {/* Step circle indicator */}
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#2563eb"
                stroke="white"
                strokeWidth="3"
              />
              
              {/* Step number */}
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                {index + 1}
              </text>
              
              {/* Step box */}
              <rect
                x={x - 80}
                y={y - 20}
                width="160"
                height="40"
                rx="20"
                ry="20"
                fill="#2563eb"
                className="drop-shadow-md"
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-semibold text-sm"
              >
                {step.length > 20 ? (
                  <>
                    <tspan x={x} dy="-0.5em">{step.substring(0, step.lastIndexOf(" ", 20))}</tspan>
                    <tspan x={x} dy="1.5em">{step.substring(step.lastIndexOf(" ", 20) + 1)}</tspan>
                  </>
                ) : (
                  step
                )}
              </text>
            </g>
          );
        })}

        {/* Curved path with smaller arrows */}
        <path
          d={`M ${centerX + radius * Math.cos(startAngle * Math.PI / 180)} ${centerY + radius * Math.sin(startAngle * Math.PI / 180)} 
              A ${radius} ${radius} 0 0 1 ${centerX + radius * Math.cos(endAngle * Math.PI / 180)} ${centerY + radius * Math.sin(endAngle * Math.PI / 180)}`}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="5, 5"
          markerStart="url(#arrowstart)"
          markerMid="url(#arrowmid)"
          markerEnd="url(#arrowend)"
        />

        <defs>
          {/* Smaller arrow markers */}
          <marker
            id="arrowstart"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
          </marker>
          <marker
            id="arrowmid"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
          </marker>
          <marker
            id="arrowend"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
          </marker>
        </defs>
      </svg>
    </div>
  );function DesktopView({ steps }) {
  const radius = 320; // Reduced radius for wider arc
  const centerX = 320;
  const centerY = 300; // Move center up to make arc less tall
  const startAngle = -170; // Wider arc
  const endAngle = 10; // Wider arc

  const angleStep = (endAngle - startAngle) / (steps.length - 1);

  return (
    <div className="relative flex items-center justify-center min-h-[500px]">
      {/* Center Image */}
      <div className="relative z-10 w-56 h-72">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-gray-600 font-medium">App Mockup Image</span>
        </div>
      </div>

      {/* Steps arranged in arc */}
      <svg
        viewBox="0 0 640 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-label="App development process steps"
      >
        {steps.map((step, index) => {
          const angle = startAngle + angleStep * index;
          const rad = (angle * Math.PI) / 180;

          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);

          return (
            <g key={index}>
              {/* Step circle indicator */}
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#2563eb"
                stroke="white"
                strokeWidth="3"
              />
              
              {/* Step number */}
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-bold text-xs"
              >
                {index + 1}
              </text>
              
              {/* Step box */}
              <rect
                x={x - 80}
                y={y - 20}
                width="160"
                height="40"
                rx="20"
                ry="20"
                fill="#2563eb"
                className="drop-shadow-md"
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-semibold text-sm"
              >
                {step.length > 20 ? (
                  <>
                    <tspan x={x} dy="-0.5em">{step.substring(0, step.lastIndexOf(" ", 20))}</tspan>
                    <tspan x={x} dy="1.5em">{step.substring(step.lastIndexOf(" ", 20) + 1)}</tspan>
                  </>
                ) : (
                  step
                )}
              </text>
            </g>
          );
        })}

        {/* Draw arrows between steps */}
        {steps.map((_, index) => {
          if (index === steps.length - 1) return null;
          
          const currentAngle = startAngle + angleStep * index;
          const nextAngle = startAngle + angleStep * (index + 1);
          
          // Calculate midpoint between current and next step
          const midAngle = (currentAngle + nextAngle) / 2;
          const midRad = (midAngle * Math.PI) / 180;
          
          const midX = centerX + (radius - 30) * Math.cos(midRad);
          const midY = centerY + (radius - 30) * Math.sin(midRad);
          
          // Calculate direction for arrow
          const arrowAngle = (midAngle * Math.PI) / 180;
          const arrowLength = 20;
          const arrowHeadX = midX + arrowLength * Math.cos(arrowAngle);
          const arrowHeadY = midY + arrowLength * Math.sin(arrowAngle);
          
          return (
            <g key={`arrow-${index}`}>
              {/* Arrow line */}
              <line
                x1={midX - arrowLength * 0.7 * Math.cos(arrowAngle)}
                y1={midY - arrowLength * 0.7 * Math.sin(arrowAngle)}
                x2={arrowHeadX}
                y2={arrowHeadY}
                stroke="#2563eb"
                strokeWidth="3"
              />
              
              {/* Arrow head */}
              <polygon
                points={`${arrowHeadX},${arrowHeadY} ${arrowHeadX - 10 * Math.cos(arrowAngle - 0.3)},${arrowHeadY - 10 * Math.sin(arrowAngle - 0.3)} ${arrowHeadX - 10 * Math.cos(arrowAngle + 0.3)},${arrowHeadY - 10 * Math.sin(arrowAngle + 0.3)}`}
                fill="#2563eb"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
}