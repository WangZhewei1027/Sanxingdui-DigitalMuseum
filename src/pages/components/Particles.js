import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ParticleSystem = () => {
  const mountRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Load image and create particles
    const image = new Image();
    image.src = "../assets/opening.jpg"; // Replace with your image path
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, image.width, image.height);
      const { data } = imageData;
      const particles = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];

      for (let y = 0; y < image.height; y++) {
        for (let x = 0; x < image.width; x++) {
          const index = (y * image.width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];

          if (a > 128) {
            // Filter out transparent pixels
            const px = ((x - image.width / 2) / image.width) * 10;
            const py = ((y - image.height / 2) / image.height) * -10;
            const pz = 0;

            positions.push(px, py, pz);
            colors.push(r / 255, g / 255, b / 255);
          }
        }
      }

      particles.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      particles.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        vertexColors: true,
        size: 0.05,
      });
      const particleSystem = new THREE.Points(particles, particleMaterial);

      scene.add(particleSystem);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.001;

        // Mouse interaction
        particleSystem.rotation.x = mouse.y * 0.0005;
        particleSystem.rotation.y = mouse.x * 0.0005;

        renderer.render(scene, camera);
      };

      animate();
    };

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 0.5,
        y: -(event.clientY / window.innerHeight) * 2 + 0.5,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ParticleSystem;
