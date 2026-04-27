document.addEventListener("DOMContentLoaded", () => {
    const config = {
        relationshipStartDate: "2026-02-28T22:06:00",
        musicSrc: "",
        gallery: [
            {
                image: "./images/foto27.jpeg",
                label: "Foto 1",
            },
            {
                image: "./images/foto28.jpeg",
                label: "Foto 2",
            },
            {
                image: "./images/foto29.jpeg",
                label: "Foto 3",
            },
            {
                image: "./images/foto30.jpeg",
                label: "Foto 4",
            }
        ],
        totalDurationInSeconds: null,
        finalPauseInSeconds: 4,
        postCreditsSequence: ["postcredits-screen", "gallery-screen", "counter-screen", "surprise-screen"],
        scenes: [
            {
                tag: "Abertura",
                title: "Em um dia completamente normal...",
                text: "Duas vidas estavam prestes a mudar sem fazer ideia do tamanho dessa reviravolta.",
                background: "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 28%), linear-gradient(135deg, rgba(255,122,144,0.35), rgba(122,166,255,0.14)), linear-gradient(180deg, rgba(17,21,34,0.4), rgba(4,5,10,0.88))",
                image: "./images/foto1.png",
                images: [],
                imageFit: "contain",
                imagePosition: "center center",
                duration: 8
            },
            {
                tag: "O começo",
                title: "Foi aqui que tudo começou...",
                text: "Naquele instante, o mundo ainda era o mesmo para todo mundo. Pra mim, ele mudou de eixo.",
                background: "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 28%), linear-gradient(135deg, rgba(242,201,138,0.32), rgba(74,27,58,0.18)), linear-gradient(180deg, rgba(14,16,22,0.34), rgba(4,5,10,0.9))",
                image: "",
                images: ["./images/foto2.jpg","./images/foto3.jpeg"],
                imageFit: "contain",
                imagePosition: "center center",
                duration: 16
            },
            {
                tag: "Intervalo",
                title: "Mas nem toda cena bonita fica leve o tempo inteiro",
                text: "Teve um momento em que a distância apareceu, e o silêncio pareceu maior do que qualquer palavra que a gente queria dizer.",
                background: "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 24%), linear-gradient(135deg, rgba(73,87,131,0.18), rgba(33,37,58,0.24)), linear-gradient(180deg, rgba(10,12,20,0.52), rgba(3,4,8,0.94))",
                duration: 11,
                pausedMoment: {
                    duration: 2200
                }
            },
            {
                tag: "Saudade",
                title: "A saudade mostrou o tamanho do que existia",
                text: "Foi no afastamento que eu entendi ainda mais o quanto você já tinha ocupado um lugar enorme dentro de mim.",
                background: "radial-gradient(circle at center, rgba(199,106,127,0.08), transparent 26%), linear-gradient(135deg, rgba(52,29,44,0.32), rgba(17,16,30,0.2)), linear-gradient(180deg, rgba(13,10,18,0.46), rgba(4,4,8,0.96))",
                duration: 11,
                pausedMoment: {
                    duration: 2200
                }
            },
            {
                tag: "Reencontro",
                title: "E foi olhando para você de novo que tudo voltou a fazer sentido",
                text: "Porque algumas histórias podem ate pausar por um instante, mas quando são reais, encontram o caminho de volta.",
                background: "radial-gradient(circle at top right, rgba(242,201,138,0.14), transparent 26%), linear-gradient(135deg, rgba(255,122,144,0.24), rgba(122,166,255,0.16)), linear-gradient(180deg, rgba(16,18,28,0.34), rgba(4,5,10,0.9))",
                image: "./images/foto4.jpeg",
                images: [],
                duration: 10
            },
            {
                tag: "Memórias",
                title: "As lembranças começaram a ganhar cor",
                text: "As conversas ficaram mais leves, os dias mais bonitos e cada detalhe passou a ter um significado novo.",
                background: "radial-gradient(circle at right top, rgba(122,166,255,0.18), transparent 26%), linear-gradient(135deg, rgba(97,80,229,0.24), rgba(255,122,144,0.2)), linear-gradient(180deg, rgba(14,18,33,0.36), rgba(4,5,10,0.9))",
                image: "",
                images: ["./images/foto5.jpeg","./images/foto6.jpeg"],
                duration: 10
            },
            {
                tag: "Momentos especiais",
                title: "Pequenos momentos viraram cenas favoritas",
                text: "Risos, abraços, olhares e todos aqueles segundos simples que, de algum jeito, ficaram gigantes dentro de mim.",
                background: "radial-gradient(circle at center, rgba(242,201,138,0.16), transparent 24%), linear-gradient(135deg, rgba(255,122,144,0.26), rgba(50,86,151,0.22)), linear-gradient(180deg, rgba(13,17,29,0.34), rgba(3,5,10,0.92))",
                image: "",
                images: ["./images/foto7.jpeg","./images/foto8.jpeg","./images/foto9.jpeg"],
                duration: 15
            },
            {
                tag: "",
                title: "E desde então...",
                text: "Nada mais foi igual. Porque depois de você, tudo passou a fazer mais sentido.",
                background: "radial-gradient(circle at center, rgba(229,75,105,0.14), transparent 24%), linear-gradient(135deg, rgba(17,22,36,0.12), rgba(17,22,36,0.12)), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.96))",
                image: "",
                images: ["./images/foto10.jpeg","./images/foto11.jpeg","./images/foto12.jpeg", "./images/foto13.jpeg","./images/foto14.jpeg","./images/foto15.jpeg", "./images/foto26.jpeg", "./images/foto16.jpeg","./images/foto17.jpeg", "./images/foto18.jpeg"],
                duration: 17
            },
            {
                tag: "Final",
                title: "Você foi a minha melhor decisão",
                text: "Se eu pudesse reviver tudo, escolheria encontrar você de novo, todas as vezes.",
                background: "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 30%), linear-gradient(135deg, rgba(255,122,144,0.38), rgba(242,201,138,0.2)), linear-gradient(180deg, rgba(17,21,34,0.3), rgba(4,5,10,0.9))",
                image: "",
                images: ["./images/foto19.jpeg","./images/foto20.jpeg","./images/foto21.jpeg", "./images/foto22.jpeg","./images/foto23.jpeg","./images/foto24.jpeg", "./images/foto25.jpeg"],
                duration: 25
            }
        ]
    };

    const panels = Array.from(document.querySelectorAll(".panel"));
    const nextButtons = document.querySelectorAll("[data-next]");
    const music = document.getElementById("our-song");
    const musicToggle = document.getElementById("music-toggle");
    const playPauseButton = document.getElementById("play-pause");
    const noButton = document.getElementById("no-button");
    const mysteryChoiceRow = document.getElementById("mystery-choice-row");
    const worldTitle = document.getElementById("world-title");
    const worldLead = document.getElementById("world-lead");
    const worldContinueButton = document.getElementById("world-continue-button");
    const sceneTag = document.getElementById("scene-tag");
    const sceneTitle = document.getElementById("scene-title");
    const sceneText = document.getElementById("scene-text");
    const sceneCopy = document.querySelector(".scene-copy");
    const sceneStage = document.getElementById("scene-stage");
    const sceneBackdrop = document.querySelector(".scene-backdrop");
    const scenePhotoLayer = document.getElementById("scene-photo-layer");
    const scenePhotoLayerAlt = document.getElementById("scene-photo-layer-alt");
    const pauseOverlay = document.getElementById("pause-overlay");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeLabel = document.getElementById("current-time");
    const totalTimeLabel = document.getElementById("total-time");
    const sinceDate = document.getElementById("since-date");
    const counter = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    let currentPanel = "mystery-screen";
    let currentSceneIndex = 0;
    let elapsedSeconds = 0;
    let progressTimer = null;
    let counterTimer = null;
    let sceneTransitionTimer = null;
    let postCreditsTimer = null;
    let pauseResumeTimer = null;
    let sceneSlideshowTimer = null;
    let worldTypingTimer = null;
    let isPlaying = false;
    let isMusicEnabled = false;
    let isProgressPaused = false;
    let lastPausedSceneIndex = -1;
    let activePhotoLayerIndex = 0;
    const totalDurationInSeconds = config.totalDurationInSeconds ?? config.scenes.reduce((sum, scene) => sum + scene.duration, 0);

    if (config.musicSrc) {
        music.src = config.musicSrc;
        music.loop = true;
        music.volume = 0.35;
    } else {
        musicToggle.textContent = "Trilha sonora sem arquivo";
        musicToggle.disabled = true;
    }

    totalTimeLabel.textContent = toClock(totalDurationInSeconds);
    renderGallery();
    setScene(0);
    updateCounter();
    counterTimer = setInterval(updateCounter, 1000);

    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const nextPanel = button.dataset.next;
            if (nextPanel) {
                showPanel(nextPanel);
            }

            if (nextPanel === "player-screen") {
                resetPlayer();
            }
        });
    });

    playPauseButton.addEventListener("click", () => {
        if (isPlaying) {
            pauseStory();
        } else {
            startStory();
        }
    });

    if (!musicToggle.disabled) {
        musicToggle.addEventListener("click", async () => {
            try {
                if (isMusicEnabled) {
                    music.pause();
                    musicToggle.textContent = "Ativar trilha sonora";
                    isMusicEnabled = false;
                } else {
                    await music.play();
                    musicToggle.textContent = "Pausar trilha sonora";
                    isMusicEnabled = true;
                }
            } catch (error) {
                musicToggle.textContent = "Nao foi possivel tocar";
            }
        });
    }

    if (noButton && mysteryChoiceRow) {
        const moveNoButton = () => {
            const rowRect = mysteryChoiceRow.getBoundingClientRect();
            const buttonRect = noButton.getBoundingClientRect();
            const maxX = Math.max(rowRect.width - buttonRect.width, 0);
            const maxY = Math.max(120 - buttonRect.height, 0);
            const nextX = Math.random() * maxX - maxX / 2;
            const nextY = Math.random() * maxY - maxY / 2;

            noButton.style.left = `${nextX}px`;
            noButton.style.top = `${nextY}px`;
        };

        noButton.addEventListener("mouseenter", moveNoButton);
        noButton.addEventListener("pointerdown", (event) => {
            event.preventDefault();
            moveNoButton();
        });
        noButton.addEventListener("click", (event) => {
            event.preventDefault();
            moveNoButton();
        });
    }

    function showPanel(panelId) {
        clearTimeout(postCreditsTimer);

        panels.forEach((panel) => {
            const active = panel.id === panelId;
            panel.classList.toggle("panel-active", active);
            panel.setAttribute("aria-hidden", String(!active));
        });

        currentPanel = panelId;

        if (panelId === "world-screen") {
            startWorldTyping();
        } else {
            resetWorldTyping();
        }

        const shouldShowHeartBackground = config.postCreditsSequence.includes(panelId);
        if (typeof window.setHeartBackgroundActive === "function") {
            window.setHeartBackgroundActive(shouldShowHeartBackground);
        }

        if (panelId !== "player-screen") {
            pauseStory();
        }

        queuePostCreditsAdvance(panelId);
    }

    function startWorldTyping() {
        if (!worldTitle || !worldLead || !worldContinueButton) {
            return;
        }

        clearTimeout(worldTypingTimer);
        worldContinueButton.classList.remove("world-continue-visible");
        typeText(worldTitle, worldTitle.dataset.typeText || "", 64, () => {
            worldTypingTimer = setTimeout(() => {
                typeText(worldLead, worldLead.dataset.typeText || "", 34, () => {
                    worldContinueButton.classList.add("world-continue-visible");
                });
            }, 720);
        });
    }

    function resetWorldTyping() {
        clearTimeout(worldTypingTimer);

        [worldTitle, worldLead].forEach((element) => {
            if (!element) {
                return;
            }

            element.innerHTML = "";
            element.classList.remove("typing-active", "typing-done");
        });

        if (worldContinueButton) {
            worldContinueButton.classList.remove("world-continue-visible");
        }
    }

    function typeText(element, text, speed, onComplete) {
        if (!element) {
            return;
        }

        clearTimeout(worldTypingTimer);
        element.innerHTML = "";
        element.classList.remove("typing-done");
        element.classList.add("typing-active");

        let index = 0;
        const safeText = text || "";

        const step = () => {
            index += 1;
            element.innerHTML = formatTypewriterText(safeText.slice(0, index));

            if (index >= safeText.length) {
                element.classList.remove("typing-active");
                element.classList.add("typing-done");
                if (typeof onComplete === "function") {
                    worldTypingTimer = setTimeout(() => {
                        onComplete();
                    }, 380);
                }
                return;
            }

            const currentCharacter = safeText[index - 1];
            const nextDelay = /[,.!?]/.test(currentCharacter) ? speed * 2.2 : currentCharacter === "\n" ? speed * 3 : speed;
            worldTypingTimer = setTimeout(step, nextDelay);
        };

        worldTypingTimer = setTimeout(step, speed);
    }

    function formatTypewriterText(text) {
        return text.replace(/\n/g, "<br>");
    }

    function resetPlayer() {
        pauseStory();
        elapsedSeconds = 0;
        currentSceneIndex = 0;
        lastPausedSceneIndex = -1;
        isProgressPaused = false;
        clearTimeout(pauseResumeTimer);
        clearInterval(sceneSlideshowTimer);
        progressBar.style.width = "0%";
        currentTimeLabel.textContent = "00:00";
        playPauseButton.textContent = "Play";
        setScene(0);
    }

    function startStory() {
        if (isPlaying) {
            return;
        }

        isPlaying = true;
        playPauseButton.textContent = "Pause";

        if (isMusicEnabled && music.paused) {
            music.play().catch(() => {});
        }

        progressTimer = setInterval(() => {
            if (isProgressPaused) {
                return;
            }

            elapsedSeconds += 1;
            currentTimeLabel.textContent = toClock(elapsedSeconds);
            progressBar.style.width = `${Math.min((elapsedSeconds / totalDurationInSeconds) * 100, 100)}%`;

            syncSceneWithProgress(elapsedSeconds);

            if (elapsedSeconds >= totalDurationInSeconds) {
                pauseStory();
                playPauseButton.textContent = "Rever";
                setTimeout(() => {
                    showPanel("finale-screen");
                    setTimeout(() => {
                        showPanel("postcredits-screen");
                    }, config.finalPauseInSeconds * 1000);
                }, 600);
            }
        }, 1000);
    }

    function pauseStory() {
        isPlaying = false;
        clearInterval(progressTimer);
        progressTimer = null;
        clearTimeout(pauseResumeTimer);
        clearInterval(sceneSlideshowTimer);
        if (currentPanel === "player-screen" && elapsedSeconds < totalDurationInSeconds) {
            playPauseButton.textContent = "Play";
        }
    }

    function syncSceneWithProgress(seconds) {
        let accumulated = 0;

        for (let index = 0; index < config.scenes.length; index += 1) {
            accumulated += config.scenes[index].duration;
            if (seconds <= accumulated) {
                if (index !== currentSceneIndex) {
                    setScene(index);
                }
                return;
            }
        }
    }

    function setScene(index) {
        const previousScene = config.scenes[currentSceneIndex];
        const scene = config.scenes[index];
        const isContinuingPausedMoment = Boolean(previousScene?.pausedMoment && scene.pausedMoment);
        currentSceneIndex = index;
        clearTimeout(sceneTransitionTimer);

        sceneCopy.classList.remove("scene-enter");
        sceneCopy.classList.remove("scene-hold");
        sceneCopy.classList.add("scene-exit");
        if (!isContinuingPausedMoment) {
            sceneStage.classList.remove("stage-paused");
            pauseOverlay.classList.remove("pause-overlay-visible");
            pauseOverlay.setAttribute("aria-hidden", "true");
        }
        sceneBackdrop.style.opacity = "0.3";
        sceneBackdrop.style.transform = "scale(1.12)";
        clearInterval(sceneSlideshowTimer);
        resetScenePhotoLayers();

        sceneTransitionTimer = setTimeout(() => {
            sceneTag.textContent = scene.tag;
            sceneTitle.textContent = scene.title;
            sceneText.textContent = scene.text;
            sceneBackdrop.style.background = scene.background;
            updateScenePhoto(scene);
            sceneCopy.classList.remove("scene-exit");
            sceneCopy.classList.add("scene-enter");
            if (scene.pausedMoment && !isContinuingPausedMoment) {
                sceneCopy.classList.add("scene-hold");
            }
            applyPausedMoment(scene, isContinuingPausedMoment);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    sceneBackdrop.style.opacity = "1";
                    sceneBackdrop.style.transform = "scale(1.06)";
                    if (!scene.pausedMoment || isContinuingPausedMoment) {
                        revealSceneCopy();
                    }
                });
            });
        }, 260);
    }

    function updateScenePhoto(scene) {
        const photos = getSceneImages(scene);

        if (photos.length === 0) {
            resetScenePhotoLayers();
            return;
        }

        activePhotoLayerIndex = 0;
        setPhotoOnLayer(scenePhotoLayer, photos[0], true);
        setPhotoOnLayer(scenePhotoLayerAlt, "", false);

        if (photos.length === 1) {
            return;
        }

        const sceneDurationInMs = Math.max((scene.duration ?? 0) * 1000, 0);
        const imageSwapDelay = Math.max(Math.floor(sceneDurationInMs / photos.length), 1200);
        let photoIndex = 1;

        const showNextPhoto = () => {
            const nextLayer = activePhotoLayerIndex === 0 ? scenePhotoLayerAlt : scenePhotoLayer;
            const previousLayer = activePhotoLayerIndex === 0 ? scenePhotoLayer : scenePhotoLayerAlt;

            setPhotoOnLayer(nextLayer, photos[photoIndex], true);
            previousLayer.classList.remove("photo-visible");
            activePhotoLayerIndex = activePhotoLayerIndex === 0 ? 1 : 0;
            photoIndex += 1;

            if (photoIndex >= photos.length) {
                sceneSlideshowTimer = null;
                return;
            }

            sceneSlideshowTimer = setTimeout(showNextPhoto, imageSwapDelay);
        };

        sceneSlideshowTimer = setTimeout(showNextPhoto, imageSwapDelay);
    }

    function getSceneImages(scene) {
        if (Array.isArray(scene.images) && scene.images.length > 0) {
            return scene.images.filter(Boolean);
        }

        if (typeof scene.images === "string" && scene.images.trim()) {
            return [scene.images.trim()];
        }

        return scene.image ? [scene.image] : [];
    }

    function setPhotoOnLayer(layer, imagePath, visible) {
        if (!layer) {
            return;
        }

        const scene = config.scenes[currentSceneIndex] ?? {};
        const imageFit = scene.imageFit || "contain";
        const imagePosition = scene.imagePosition || "center center";

        if (imagePath) {
            layer.style.backgroundImage = `linear-gradient(rgba(9, 7, 9, 0.12), rgba(9, 7, 9, 0.28)), url("${imagePath}")`;
            layer.style.backgroundSize = `100% 100%, ${imageFit}`;
            layer.style.backgroundPosition = `center center, ${imagePosition}`;
            layer.style.backgroundRepeat = "no-repeat, no-repeat";
        } else {
            layer.style.backgroundImage = "";
            layer.style.backgroundSize = "";
            layer.style.backgroundPosition = "";
            layer.style.backgroundRepeat = "";
        }

        layer.classList.toggle("photo-visible", visible && Boolean(imagePath));
    }

    function resetScenePhotoLayers() {
        setPhotoOnLayer(scenePhotoLayer, "", false);
        setPhotoOnLayer(scenePhotoLayerAlt, "", false);
    }

    function applyPausedMoment(scene, isContinuingPausedMoment = false) {
        if (!scene.pausedMoment) {
            lastPausedSceneIndex = currentSceneIndex;
            revealSceneCopy();
            return;
        }

        sceneStage.classList.add("stage-paused");
        pauseOverlay.classList.add("pause-overlay-visible");
        pauseOverlay.setAttribute("aria-hidden", "false");

        if (isContinuingPausedMoment) {
            lastPausedSceneIndex = currentSceneIndex;
            return;
        }

        if (lastPausedSceneIndex === currentSceneIndex) {
            return;
        }

        lastPausedSceneIndex = currentSceneIndex;
        isProgressPaused = true;
        clearTimeout(pauseResumeTimer);
        pauseResumeTimer = setTimeout(() => {
            sceneCopy.classList.remove("scene-hold");
            revealSceneCopy();
            isProgressPaused = false;
        }, scene.pausedMoment.duration ?? 2000);
    }

    function revealSceneCopy() {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sceneCopy.classList.remove("scene-enter");
            });
        });
    }

    function renderGallery() {
        config.gallery.forEach((item, index) => {
            const photo = document.getElementById(`gallery-photo-${index + 1}`);
            const caption = document.getElementById(`gallery-caption-${index + 1}`);

            if (!photo) {
                return;
            }

            if (caption) {
                caption.textContent = item.caption || item.label || `Foto ${index + 1}`;
            }

            if (item.image) {
                photo.style.backgroundImage = `linear-gradient(rgba(8, 11, 18, 0.18), rgba(8, 11, 18, 0.42)), url("${item.image}")`;
                photo.textContent = "";
            } else {
                photo.textContent = item.label;
            }
        });
    }

    function queuePostCreditsAdvance(panelId) {
        return;
    }

    function updateCounter() {
        const startDate = new Date(config.relationshipStartDate);
        const now = new Date();
        const diff = now - startDate;

        if (Number.isNaN(startDate.getTime()) || diff < 0) {
            sinceDate.textContent = "Atualize a data de inicio no arquivo js/script.js";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        counter.days.textContent = String(days);
        counter.hours.textContent = String(hours);
        counter.minutes.textContent = String(minutes);
        counter.seconds.textContent = String(seconds);
        sinceDate.textContent = `Contando desde ${formatDate(startDate)}.`;
    }

    function toClock(totalSeconds) {
        const safeSeconds = Math.max(totalSeconds, 0);
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function formatDate(date) {
        return new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }).format(date);
    }

    window.addEventListener("beforeunload", () => {
        clearInterval(progressTimer);
        clearInterval(counterTimer);
        clearTimeout(sceneTransitionTimer);
        clearTimeout(postCreditsTimer);
        clearTimeout(pauseResumeTimer);
        clearInterval(sceneSlideshowTimer);
        clearTimeout(worldTypingTimer);
    });
});
