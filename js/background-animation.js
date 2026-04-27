if (typeof THREE === "undefined") {
    console.error("Three.js nao foi carregado.");
} else {
    document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.getElementById("hearts-canvas");
        if (!canvas) {
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 22;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        const hearts = [];
        let isActive = false;

        const heartShape = new THREE.Shape();
        const x = -2.5;
        const y = -5;
        heartShape.moveTo(x + 2.5, y + 2.5);
        heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2.0, y, x, y);
        heartShape.bezierCurveTo(x - 3.0, y, x - 3.0, y + 3.5, x - 3.0, y + 3.5);
        heartShape.bezierCurveTo(x - 3.0, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
        heartShape.bezierCurveTo(x + 6.0, y + 7.7, x + 8.0, y + 5.5, x + 8.0, y + 3.5);
        heartShape.bezierCurveTo(x + 8.0, y + 3.5, x + 8.0, y, x + 5.0, y);
        heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

        const geometry = new THREE.ShapeGeometry(heartShape);
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xf8e0b3, transparent: true, opacity: 0.7 }),
            new THREE.MeshBasicMaterial({ color: 0xe38ba1, transparent: true, opacity: 0.62 }),
            new THREE.MeshBasicMaterial({ color: 0xffdbe3, transparent: true, opacity: 0.52 })
        ];

        function createHeart(index) {
            const material = materials[index % materials.length];
            const heart = new THREE.Mesh(geometry, material);
            resetHeart(heart, true);
            hearts.push(heart);
            scene.add(heart);
        }

        function resetHeart(heart, randomizeY = false) {
            const scale = Math.random() * 0.08 + 0.035;
            heart.scale.set(scale, scale, scale);
            heart.position.x = (Math.random() - 0.5) * 34;
            heart.position.y = randomizeY ? (Math.random() - 0.5) * 24 : -16;
            heart.position.z = (Math.random() - 0.5) * 8;
            heart.rotation.z = Math.random() * Math.PI * 2;
            heart.userData = {
                speedY: Math.random() * 0.022 + 0.008,
                driftX: (Math.random() - 0.5) * 0.01,
                spin: (Math.random() - 0.5) * 0.01
            };
        }

        for (let index = 0; index < 64; index += 1) {
            createHeart(index);
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isActive) {
                renderer.render(scene, camera);
                return;
            }

            hearts.forEach((heart) => {
                heart.position.y += heart.userData.speedY;
                heart.position.x += heart.userData.driftX;
                heart.rotation.z += heart.userData.spin;

                if (heart.position.y > 16) {
                    resetHeart(heart, false);
                }
            });

            renderer.render(scene, camera);
        }

        window.setHeartBackgroundActive = (active) => {
            isActive = active;
            canvas.classList.toggle("canvas-active", active);
        };

        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    });
}
