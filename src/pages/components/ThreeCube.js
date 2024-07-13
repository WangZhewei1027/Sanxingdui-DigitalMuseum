// src/ThreeCube.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // the second parameter is the alpha, set it to 0 for transparent
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      metalness: 0.5,
      roughness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeCube;
