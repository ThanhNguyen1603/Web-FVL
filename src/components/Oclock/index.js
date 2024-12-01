import React, { useEffect, useRef, useState } from 'react';
import styles from './oclockSanTime.module.scss'; // Import CSS Module

function Clock({ utcOffset }) {
  const canvasRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(getLocalTime(utcOffset));
  const [currentDate, setCurrentDate] = useState(getLocalTime(utcOffset));

  function getLocalTime(offset) {
    const now = new Date();
    const utcMilliseconds = now.getTime() + now.getTimezoneOffset() * 60000;
    const localMilliseconds = utcMilliseconds + offset * 3600000;
    return new Date(localMilliseconds);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = Math.min(window.innerWidth * 0.2, window.innerHeight * 0.2);
    canvas.width = size;
    canvas.height = size;

    let radius = size / 2;
    ctx.translate(radius, radius);
    radius = radius * 1;
    setInterval(drawClock, 1000);

    function drawClock() {
      const now = getLocalTime(utcOffset);
      setCurrentTime(now);
      setCurrentDate(now);
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius, now);
    }

    function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        ctx.font = radius * 0.15 + "px Cyrillic";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
       
        const romanNumerals = ["XII","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
        
        for (let num = 0; num < 12; num++) {
          const ang = (num * Math.PI / 6); // Tính góc dựa trên số La Mã (I, II, III, ...)
          const x = radius * 0.87 * Math.sin(ang); // Tính tọa độ x
          const y = -radius * 0.87 * Math.cos(ang); // Tính tọa độ y
          ctx.fillStyle = '#333';
          ctx.fillText(romanNumerals[num], x, y);
        }
      }
      

      function drawTime(ctx, radius, time) {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
      
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) +
          (minute * Math.PI / (6 * 60)) +
          (second * Math.PI / (360 * 60));
      
        // Tạo gradient linear cho kim giờ (màu từ #00a5cf đến #d12bec)
        const hourGradient = ctx.createLinearGradient(0, 0, 0, -radius * 0.5);
        hourGradient.addColorStop(0.0087, "#00a5cf"); // 0.87%
        hourGradient.addColorStop(1, "#d12bec"); // 100%
        ctx.strokeStyle = hourGradient;
        drawHand(ctx, hour, radius * 0.5, radius * 0.04);
      
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      
        // Tạo gradient linear cho kim phút (màu từ #00a5cf đến #d12bec)
        const minuteGradient = ctx.createLinearGradient(0, 0, 0, -radius * 0.7);
        minuteGradient.addColorStop(0.0087, "#00a5cf"); // 0.87%
        minuteGradient.addColorStop(1, "#d12bec"); // 100%
        ctx.strokeStyle = minuteGradient;
        drawHand(ctx, minute, radius * 0.7, radius * 0.04);
      
        // second
        second = (second * Math.PI / 30);
      
        // Tạo gradient linear cho kim giây (màu từ #00a5cf đến #d12bec)
        const secondGradient = ctx.createLinearGradient(0, 0, 0, -radius * 0.8);
        secondGradient.addColorStop(0.0087, "#00a5cf"); // 0.87%
        secondGradient.addColorStop(1, "#d12bec"); // 100%
        ctx.strokeStyle = secondGradient;
        drawHand(ctx, second, radius * 0.8, radius * 0.02);
      }
      
      

    function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
    }

}, [utcOffset]);
const formatDate = { year: 'numeric', month: 'short', day: '2-digit' };
return (
    <div className={styles['clock-container']}> {/* Use CSS Module class names */}
    <canvas ref={canvasRef} className={styles.clock}>
    </canvas>
    </div>
);
}

export default Clock