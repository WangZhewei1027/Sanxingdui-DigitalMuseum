import * as THREE from "three";
import { useEffect, useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { MeshBasicMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Roboto from "../assets/fonts/Roboto_Bold.json";
import Anton from "../assets/fonts/Anton_Regular.json";
import { FBXLoader } from "three/examples/jsm/Addons.js";

function MyThree({ ...props }) {
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(0);

  const handlePointerMove = (event) => {
    mousePositionRef.current = { x: event.clientX, y: event.clientY };
    //console.log("Mouse Position:", event.clientX, event.clientY);
  };

  function lerp(start, end, t) {
    return start + t * (end - start);
  }

  useEffect(() => {
    function main() {
      const canvas = document.querySelector("#threejs-canvas-02");
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        alpha: true,
      });

      const fov = 75;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(-3.45, 0, 2);

      const scene = new THREE.Scene();

      const color = "rgb(255, 255, 255)";
      const intensity = 7;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-2, 2, 4);
      scene.add(light);

      const fontLoader = new FontLoader();
      console.log(Roboto);
      const f = fontLoader.parse(Anton);
      console.log(f);

      const texture = new THREE.TextureLoader().load(
        require("../assets/gold-texture.jpg"),
        function (texture) {
          // in this example we create the material when the texture is loaded
          const material = new THREE.MeshBasicMaterial({
            map: texture,
          });
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function (err) {
          console.error("An error happened.");
        }
      );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(0.3, 0.3);
      console.log(texture);

      const textGeometry = new TextGeometry("DIGITAL SANXINGDUI", {
        font: f,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.001,
        bevelSize: 0.002,
        bevelOffset: 0,
        bevelSegments: 1,
      });

      textGeometry.translate(-2.5, 0, 0);

      const textMaterial = new THREE.MeshPhysicalMaterial({
        map: texture,
        color: "rgb(240, 204, 108)",
      });

      const text = new THREE.Mesh(textGeometry, textMaterial);
      text.position.x -= 3.5;
      text.position.y += 0.2;
      scene.add(text);

      // Create border line
      const edgesGeometry = new THREE.EdgesGeometry(textGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Black color for the border line
      const borderLine = new THREE.LineSegments(edgesGeometry, lineMaterial);
      borderLine.position.copy(text.position); // Match the position of the text mesh
      scene.add(borderLine);

      const bronzeTexture = new THREE.TextureLoader().load(
        require("../assets/bronze-texture.jpg"),
        function (texture) {
          // in this example we create the material when the texture is loaded
          const material = new THREE.MeshBasicMaterial({
            map: texture,
          });
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function (err) {
          console.error("An error happened.");
        }
      );
      bronzeTexture.wrapS = THREE.RepeatWrapping;
      bronzeTexture.wrapT = THREE.RepeatWrapping;
      bronzeTexture.repeat.set(0.3, 0.3);
      console.log(texture);

      const fbxLoader = new FBXLoader();

      // const model = fbxLoader.load(
      //   require("../assets/daliren.fbx"),
      //   (object) => {
      //     const scale = 0.01;
      //     object.scale.set(scale, scale, scale);
      //     object.position.set(-2.7, 1, 0);
      //     scene.add(object);
      //     object.traverse((child) => {
      //       if (child.isMesh) {
      //         child.material.map = bronzeTexture;
      //       }
      //     });
      //   }
      // );

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }

        return needResize;
      }

      //const controls = new OrbitControls(camera, renderer.domElement);
      //controls.update();

      function render(time) {
        time *= 0.001;
        let angle = 0;

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        //text.rotation.y = time * 0.5;
        light.position.x = lerp(-2, 6, Math.sin(time * 0.5));
        //console.log("Light position x: " + light.position.x);

        let limit = 0.04;
        let targetRotation = lerp(
          -limit,
          limit,
          mousePositionRef.current.x / window.innerWidth
        );
        rotationRef.current = lerp(rotationRef.current, targetRotation, 0.01);
        text.rotation.set(0, rotationRef.current, 0);
        borderLine.rotation.set(0, rotationRef.current, 0);

        renderer.render(scene, camera);

        requestAnimationFrame(render);
        //controls.update();
      }

      requestAnimationFrame(render);
    }

    main();
  }, []);
  return (
    <canvas
      id="threejs-canvas-02"
      style={{
        width: "100%",
        display: "block",
        position: "inherit",
        ...props,
      }}
      onPointerMove={handlePointerMove}
    ></canvas>
  );
}

export default MyThree;
