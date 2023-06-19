width = $(document).width();
var num_nb;
    if (width>768){
        num_nb = Math.round(Math.sqrt(width * 15));
    }else{
        num_nb = Math.round(Math.sqrt(width * 6));
    }
    console.log(num_nb)

    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: num_nb
            },
            color: {
                value: "random",
                animation: {
                    enable: true,
                    speed: 50,
                    sync: false
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: 1.5,
                random: true,
                animation: {
                    enable: true,
                    speed: 16,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 100,
                color: "#fff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
            },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: false,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 200
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,
    });