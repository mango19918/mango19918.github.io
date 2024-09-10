(() => {
    "use strict";
    var e = {
        d: (t, i) => {
            for (var n in i) e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: i[n]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    e.d({}, {
        Do: () => Te,
        oG: () => Ae,
        YO: () => Ce,
        id: () => Me,
        CV: () => ke,
        IW: () => Se,
        WK: () => be
    });
    let t = {
        level: 1,
        skipIntro: !1,
        costume: "none",
        lastLogin: Date.now(),
        inGame: !1,
        sfx: !0,
        music: !0,
        minigameMusic: !0,
        minigameCostumes: !0,
        drinksFed: 0,
        lemonsFed: 0,
        totalSlaps: 0,
        lastFridgePage: 0,
        HQSprites: !1,
        language: "en-US",
        temporaryInGameTime: 0,
        musicVolume: 1,
        sfxVolume: 1,
        HDrecommendation: !1,
        introMode: !1,
        gameStartDate: 0,
        saveFileWarning: !1,
        levelUpCostumes: !0
    };

    function i(e = "", t = 16, i = "left", n = "top", a) {
        let o = "MenuShag";
        1 == a && (o = "ShagBlack"), 2 == a && (o = "ShagBlueNumber");
        let r = new PIXI.BitmapText(e, {
            fontSize: t,
            fontName: o,
            align: i
        });
        return "center" == i && r.anchor.set(.5, .5), "middle" == n && r.anchor.set(0, .5), r
    }
    let n = {
            settings: {
                HQSprites: "Sprite'y HD",
                music: "Muzyka",
                minigameMusic: "Muzyka do minigry",
                minigameCostumes: "Kostiumy do minigier",
                sfx: "SFX",
                enableReload: "Włączenie tej opcji wymaga przeładowania gry!",
                disableReload: "Wyłączenie tej funkcji wymaga przeładowania gry!"
            },
            intro: {
                mail: "Masz pocztę! Kliknij/stuknij w nią.",
                hey: "HEJ!",
                who: "Kto to był?"
            },
            dialogue: {
                greet: "Hej, jestem teardrop! Dziękuję że opiekowałeś się moją paczką! Przepraszam jeśli cię zaskoczyłem! ",
                greet2: "Co za niezły start! Jestem Teardrop. Miło Cię poznać!",
                yoyleberryinvitation: "Zjedzmy trochę zwykłego ciasta!",
                fridgeHelp: "Połóż jedzenie na talerzu udając się do lodówki!",
                wheelHelp: "Naciśnij i przytrzymaj przycisk szczęścia, aby uruchomić koło rogatości 😈"
            },
            food: {
                regularcake: "Zwykłe Ciasto",
                icecreamcake: "Ciasto Lodowe",
                icycake: "Lodowe Ciasto",
                limecake: "Limonkowe Ciasto",
                blueberry: "Jagoda",
                strawberry: "Truskawka",
                strawberrycake: "Truskawkowe Ciasto",
                candy: "Batonik",
                sleeppotion: "Eliksir Przebudzenia",
                maxpotion: "Eliksir Max",
                sourlemon: "Cytryna",
                fries: "Frytki",
                donut: "Pączek",
                burntTaco: "Spalony Taco"
            },
            ui: {
                shop: "SKLEP",
                fridge: "LODÓWKA",
                owned: "POSIADANE",
                preview: "PRZEGLĄD",
                get: "GET",
                wear: "NOŚ TO",
                wearing: "NOSZENIE TEGO",
                continue: "Kontynuuj",
                mph: "mk/h",
                score: "Wynik",
                skipIntro: "Pomiń wprowadzenie",
                gameOver: "Koniec Gry!",
                gamePaused: "Gra Wstrzymana",
                comingsoon: "więcej wkrótce..",
                info: "INFORMACJA",
                artist: "Artysta",
                achievements: "Osiągnięcia",
                games: "Gry",
                wardrobe: "Szafa",
                settings: "Ustawienia",
                reload: "Uruchom ponownie",
                cancel: "Anuluj",
                home: "Strona główna",
                play: "Grać",
                newLevel: "Nowy poziom",
                continueUpperCase: "KONTYNUUJ",
                notEnoughCoins: "Za mało monet!",
                notEnoughSpace: "Za mało miejsca!",
                altitude: "wysokość",
                accuracy: "Dokładność",
                leave: "Urlop",
                next: "Następny",
                average: "Średnia",
                ignore: "Ignorować",
                translator: "Tłumacz",
                language: "Język"
            },
            message: {
                obtainCostume: "Aby zdobyć ten kostium, ukończ osiągnięcie {achievement}.",
                hungry: "Teardrop jest naprawdę głodna! Nakarmmy ją.",
                sleepy: "Teardrop is feeling a little sleepy. Let her get some rest!",
                sleeping: "Teardrop jest trochę senna. Pozwól jej trochę odpocząć!",
                updateWarning: "Pojawiła się nowa aktualizacja! \nAktualna wersja: {currentVersion}\nNajnowsza wersja: {{latest}}\nGra zostanie automatycznie zaktualizowana po przeładowaniu."
            },
            crashHandler: {
                whoops: "Whoops! \nmyTeardrop napotkał problem...",
                description: "Gra może działać poprawnie, jeśli będziesz kontynuować, ale i tak zalecam ponowne wczytanie. Jeśli problem nadal występuje, zgłoś błąd, kopiując tekst błędu i wysyłając go na serwer Discord.",
                copyErrorText: "Kopiuj tekst błędu"
            },
            games: {
                gtttatint: "GTTTATINT101",
                dropdodge: "Drop Dodge",
                tennis: "Drop Tenis",
                match: "Mecz Twarzy",
                cakewalk: "PIEKARNIA"
            },
           costumes: {
               none: "BRAK",
               uglysweater: "Brzydki sweter",
               uglysweater2: "tenisowy sweter",
               _td_costume1: "Wodny Ćma",
               _td_costume2: "Kropla Marudera",
               _td_costume3: "Łza",
               _td_costume4: "Kropla Wina",
               _td_costume5: "Kropla Krwi",
               honeydrop: "Kropla Miodu",
               orangedrop: "Pomarańczowa Kropla",
               drippydrop: "Kapująca Kropla",
               glassdrop: "Szklana Kropla",
               classic: "Cichy Typ",
               golden: "Złota Kropla",
               light: "Lekka Łza",
               magician: "Magiczna Kropla",
               oyuidrop: "Kropla Oyui",
               lemon: "Lemoniada",
               sportsdrop: "Sportowa Kropla",
               limedrop: "Limonkowa Kropla",
               jockdrop: "Kropla Zawodnika",
               energydrink: "Napój Energetyczny"
            },
            get2763intennis: {
                title: "Drop Tenisie",
                description: "Uzyskaj wynik 2763 pkt w minigrze Drop Tennis"
            },
            winagameoftennis: {
                title: "Drop Tenisie",
                name: "Zwycięstwo w Drop Tenisie",
                description: "Wygraj grę Drop Tennis"
            },
            get2763gtttatint: {
                title: "GTTTATINT",
                description: "Uzyskaj wynik 2763 punktów w GTTTATINT"
            },
            slapTD2763: {
                title: "Ostateczny Slapper",
                description: "Slap Teardrop 2763 razy"
            },
            get2763: {
                title: "2763...",
                description: "Ukończ wszystkie osiągnięcia związane z liczbą 2763"
            },
            lemons: {
                title: "Fabryka cytryn",
                name: "Fabryka cytryn",
                description: "Feed Teardrop 100 cytryn"
            },
            get10perfectsCAKEWALK: {
                title: "Łatwe jak ciasto!",
                description: "Zdobądź 10 doskonałych wyników z rzędu w PIEKARNIA"
            },
            "2763lemons": {
                title: "Zepsuł się!",
                name: "Zepsuł się!",
                description: "Pasza Teardrop 2763 cytryny"
            },
            perfectfacematch: {
                title: "Bez różnicy",
                name: "Bez różnicy",
                description: "Zdobądź 100% w meczu twarzą w twarz"
            },
            "10energydrinks": {
                title: "No sleep",
                name: "Bezsenność",
                description: "Nakarmić Łzę 10 Eliksir Przebudzenia"
            },
            "5minuteGTTTATINT": {
                title: "Leg Day",
                name: "Dzień nóg",
                description: "Spędź 2 minuty z prędkością 2 km/h lub wyższą w GTTTATINT w jednej grze."
            },
            score: {
                perfect: "PERFEKT",
                good: "Dobrze!",
                nice: "Nieźle!",
                meh: "Meh",
                bad: "ZŁY"
            }
        },
        a = (window.innerWidth, window.innerWidth / window.innerHeight * 640 >= 360),
        o = window.innerHeight / 640,
        r = window.innerWidth / window.innerHeight * 640,
        s = 640;
    0 == a && (r = 360, s = window.innerHeight / window.innerWidth * 360, o = window.innerWidth / 360), r = Math.min(1500, r), s = Math.min(1e3, s);
    const l = new PIXI.Application({
        background: "#00000000",
        width: r,
        height: s,
        resolution: o * window.devicePixelRatio
    });
    window.onresize = function() {
        a = window.innerWidth / window.innerHeight * 640 >= 360, o = window.innerHeight / 640, r = window.innerWidth / window.innerHeight * 640, s = 640, 0 == a && (r = 360, s = window.innerHeight / window.innerWidth * 360, o = window.innerWidth / 360), l.renderer.resolution = o, r = Math.min(1500, r), s = Math.min(1e3, s), l.renderer.resize(r, s), Te && (pe.width = l.screen.width, pe.height = l.screen.height, me.width = l.screen.width, me.height = l.screen.height)
    };
    let d = {
            _linear: function(e, t, i, n) {
                return e * (1 - i) + t * i
            },
            linear: function(e, t, i, n = 1) {
                if (1 == n) return d._linear(e, t, i);
                let a = n,
                    o = 1 - i;
                return d._linear(e, t, 1 - Math.pow(o, a))
            }
        },
        c = [],
        h = 0,
        u = {
            get2763intennis: {
                title: "Drop Tennis",
                description: "Uzyskaj wynik 2763 pkt w minigrze Drop Tennis",
                icon: 29
            },
            winagameoftennis: {
                title: "Drop Tennis",
                name: "Zwycięstwo w Drop Tenisie",
                description: "Wygraj grę Drop Tennis",
                icon: 29
            },
            get2763gtttatint: {
                title: "GTTTATINT",
                description: "Uzyskaj wynik 2763 punktów w GTTTATINT",
                icon: 30
            },
            slapTD2763: {
                title: "Ostateczny Slapper",
                description: "Slap Teardrop 2763 razy",
                icon: 37,
                getProgress: function() {
                    let e = t.totalSlaps + " / 2763";
                    return t.totalSlaps > 2763 && (e = t.totalSlaps), e
                }
            },
            get2763: {
                title: "2763...",
                description: "Ukończ wszystkie osiągnięcia związane z liczbą 2763",
                icon: 35,
                getProgress: function() {
                    let e = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"],
                        t = 0;
                    for (let i = 0; i < e.length; i++) u[e[i]].done && t++;
                    return t + " / " + e.length
                }
            },
            lemons: {
                title: "Fabryka cytryn",
                name: "Fabryka cytryn",
                description: "Feed Teardrop 100 cytryn",
                icon: 36,
                getProgress: function() {
                    let e = t.lemonsFed + " / 100";
                    return t.lemonsFed > 100 && (e = t.lemonsFed), e
                }
            },
            get10perfectsCAKEWALK: {
                title: "Easy as Cake!",
                description: "Zdobądź 10 doskonałych wyników z rzędu w PIEKARNIA",
                icon: 38
            },
            "2763lemons": {
                title: "Daj mi moją limonkę!",
                name: "Daj mi moją limonkę!",
                description: "Feed Teardrop 2763 lemons",
                icon: 40,
                getProgress: function() {
                    let e = t.lemonsFed + " / 2763";
                    return t.lemonsFed > 2763 && (e = t.lemonsFed), e
                }
            },
            perfectfacematch: {
                title: "Bez różnicy",
                name: "Bez różnicy",
                description: "Zdobądź 100% w meczu twarzą w twarz",
                icon: 39
            },
            "10energydrinks": {
                title: "Bezsenność",
                name: "Bezsenność",
                description: "Nakarmić Łzę 10 Napój Energetyczny",
                icon: 6,
                getProgress: function() {
                    let e = t.drinksFed + " / 10";
                    return t.drinksFed > 10 && (e = t.drinksFed), e
                }
            },
            "5minuteGTTTATINT": {
                title: "Dzień nóg",
                name: "Leg Day",
                description: "Spędź 2 minuty z prędkością 2 km/h lub wyższą w GTTTATINT w jednej grze.",
                icon: 30
            },
            tauntLogo: {
                title: "Niejasna złośliwość",
                description: "Taunt logo widoczne w menu ustawień",
                icon: 37,
                secret: !0
            }
        };
    for (let e in u) null != n[e] && (u[e].title = n[e].title, u[e].name = n[e].name, u[e].description = n[e].description);
    let p = {
        teardrop: {
            name: "tear_drop_bfb"
        },
        jacknjellify: {
            name: "jacknjellify"
        },
        vendormint: {
            name: "vendormint"
        },
        stevencrack: {
            name: "stevencrack"
        },
        thinking909: {
            name: "Oyui"
        },
        briteideajuni: {
            name: "Juniper/Noelle"
        },
        bluesky: {
            name: "BlueSky"
        },
        cringeindividual: {
            name: "Roxamations"
        },
        jampu: {
            name: "Jampu"
        },
        kyle: {
            name: "kyle9341"
        },
        tyblade: {
            name: "tyblade9"
        },
        maple2: {
            name: "maple_two"
        },
        dialup: {
            name: "dialup"
        }
    };

    function m(e, t, i = 1) {
        let n = [];
        for (let e = 0; e < G["Sprites/Bodies"].length; e++) n.push(G["Sprites/Bodies"][e]);
        n[47] = G["Sprites/BodiesCostume_" + i][t], n[48] = G["Sprites/BodiesCostume_" + i][t + 1];
        let a = e.currentFrame;
        e.textures = n, e.gotoAndStop(a)
    }
    let y = {
            none: {
                name: n.costumes.none,
                sprite: 0,
                cost: 0,
                owned: !0,
                apply: function(e, t = 0) {
                    let i;
                    switch (t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        f(t, "Sprites/" + n)
                    }
                }
            },
            uglysweater: {
                name: n.costumes.uglysweater,
                sprite: 2,
                artist: p.jacknjellify,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 0), f(e.a.j, "Sprites/LimbsCostume1"), f(e.a.k, "Sprites/LimbsCostume1")
                }
            },
            uglysweater2: {
                name: "tennis sweater",
                sprite: 2,
                artist: p.jacknjellify,
                cost: 0,
                owned: !1,
                hidden: !0,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 4), f(e.a.j, "Sprites/LimbsCostume1"), f(e.a.k, "Sprites/LimbsCostume1")
                }
            },
            _td_costume1: {
                name: n.costumes._td_costume1,
                sprite: 3,
                artist: p.teardrop,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    y.none.apply(e, t), f(e.a.d, "Sprites/Empty"), m(e.a.i, 2)
                }
            },
            _td_costume2: {
                name: n.costumes._td_costume2,
                artist: p.teardrop,
                sprite: 4,
                cost: 600,
                owned: !1,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 6)
                }
            },
            _td_costume3: {
                name: n.costumes._td_costume3,
                artist: p.teardrop,
                sprite: 5,
                cost: 500,
                owned: !1,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 8)
                }
            },
            _td_costume4: {
                name: n.costumes._td_costume4,
                sprite: 10,
                cost: 500,
                owned: !1,
                color: 16753054,
                artist: p.teardrop,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 18), f(e.a.d, "Sprites/MouthsCostume10")
                }
            },
            _td_costume5: {
                name: n.costumes._td_costume5,
                sprite: 19,
                cost: 1600,
                owned: !1,
                color: 16739174,
                artist: p.teardrop,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 39);
                    let i = new PIXI.Sprite(G["Sprites/BodiesCostume_1"][41]);
                    g(i, e.a, 0, .95, 20), i.x = 15, i.y = 120, i.zIndex = -1, i.scale.x = -1;
                    let n = new PIXI.Sprite(G["Sprites/BodiesCostume_1"][41]);
                    g(n, e.a, 0, .95, 20), n.x = 110.5, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        n.destroyPhysics(), i.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 42)
                }
            },
            honeydrop: {
                name: n.costumes.honeydrop,
                sprite: 11,
                cost: 700,
                owned: !1,
                color: 16772979,
                artist: p.briteideajuni,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 20)
                }
            },
            orangedrop: {
                name: n.costumes.orangedrop,
                sprite: 12,
                cost: 500,
                owned: !1,
                color: 16768184,
                artist: p.thinking909,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 22)
                }
            },
            drippydrop: {
                name: n.costumes.drippydrop,
                sprite: 14,
                cost: 500,
                owned: !1,
                artist: p.bluesky,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 24)
                }
            },
            glassdrop: {
                name: n.costumes.glassdrop,
                sprite: 13,
                cost: 300,
                owned: !1,
                color: 12113151,
                artist: p.cringeindividual,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 26)
                }
            },
            classic: {
                name: n.costumes.classic,
                sprite: 1,
                artist: p.jacknjellify,
                cost: 200,
                owned: !1,
                apply: function(e, t = 0) {
                    let i;
                    switch (t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        f(t, "oldiesCostume/" + n)
                    }
                }
            },
            golden: {
                name: n.costumes.golden,
                sprite: 6,
                cost: 5e4,
                owned: !1,
                color: 16774556,
                artist: p.vendormint,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 10)
                }
            },
            light: {
                name: n.costumes.light,
                sprite: 8,
                cost: 200,
                owned: !1,
                artist: p.stevencrack,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 14)
                }
            },
            magician: {
                name: n.costumes.magician,
                sprite: 16,
                cost: 300,
                owned: !1,
                artist: p.kyle,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 30)
                }
            },
            oyuidrop: {
                name: n.costumes.oyuidrop,
                sprite: 18,
                cost: 1600,
                color: 13369246,
                owned: !1,
                artist: p.thinking909,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 34), f(e.a.j, "Sprites/Empty"), f(e.a.k, "Sprites/Empty");
                    let i = new PIXI.Sprite(G["Sprites/BodiesCostume_1"][37]);
                    g(i, e.a, 0, .95, 10), i.x = 100, i.y = 20;
                    let n = new PIXI.Sprite(G["Sprites/BodiesCostume_1"][36]);
                    g(n, e.a, 0, .95, 15), n.x = 90, n.y = 120, n.zIndex = -1, e.a.sortableChildren = !0, e.destroyCostume = function() {
                        i.destroyPhysics(), n.destroyPhysics()
                    }
                },
                applyMinigame: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 38), f(e.a.j, "Sprites/Empty"), f(e.a.k, "Sprites/Empty")
                }
            },
            chocodrop: {
                name: "Choco-Drop",
                sprite: 21,
                cost: 800,
                owned: !1,
                color: 14917741,
                artist: p.vendormint,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 45)
                }
            },
            pineapple: {
                name: "Pineapple",
                sprite: 22,
                cost: 1e3,
                owned: !1,
                color: 16766369,
                artist: {
                    name: p.thinking909.name + ", " + p.dialup.name
                },
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 47)
                }
            },
            mintdrop: {
                name: "Minty Drop",
                sprite: 23,
                cost: 600,
                owned: !1,
                color: 12779497,
                artist: p.vendormint,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 49)
                }
            },
            giant: {
                name: "Giant",
                sprite: 1,
                artist: p.bluesky,
                cost: 0,
                owned: !1,
                secret: !0,
                applyMinigame: function() {},
                apply: function(e, t = 0) {
                    let i;
                    switch (e.size = 1.25, e.scale.x *= 1.25, e.scale.y *= 1.25, e.destroyCostume = function() {
                            e.size = 1, e.scale.x /= 1.25, e.scale.y /= 1.25
                        }, t) {
                        case 0:
                            i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                            break;
                        case 1:
                            i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                    }
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            n = t.symbol.split("/")[1];
                        console.log("Sprites/" + n + "Costume21"), f(t, "Sprites/" + n + (n.includes("Mouth") ? "s" : "") + "Costume21")
                    }
                }
            },
            lemon: {
                name: n.costumes.lemon,
                sprite: 7,
                cost: -1,
                achievement: "lemons",
                owned: !1,
                color: 16770969,
                artist: p.vendormint,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 12)
                }
            },
            sportsdrop: {
                name: n.costumes.sportsdrop,
                sprite: 9,
                cost: -1,
                achievement: "winagameoftennis",
                owned: !1,
                artist: p.vendormint,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 16)
                }
            },
            limedrop: {
                name: n.costumes.limedrop,
                sprite: 15,
                cost: -1,
                achievement: "2763lemons",
                owned: !1,
                color: 5234769,
                artist: p.jampu,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 28)
                }
            },
            jockdrop: {
                name: n.costumes.jockdrop,
                sprite: 17,
                cost: -1,
                achievement: "5minuteGTTTATINT",
                owned: !1,
                artist: p.maple2,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 32), f(e.a.j, "Sprites/LimbsCostume17"), f(e.a.k, "Sprites/LimbsCostume17")
                }
            },
            energydrink: {
                name: n.costumes.energydrink,
                sprite: 20,
                cost: -1,
                achievement: "10energydrinks",
                owned: !1,
                artist: p.tyblade,
                apply: function(e, t) {
                    y.none.apply(e, t), m(e.a.i, 43)
                }
            }
        },
        g = function(e, t, i, n, a) {
            e.anchor.set(.5, .5), t.addChild(e), e.actualAngle = 0, e.angleVelocity = 0;
            let o = function() {
                e.rotation = -t.rotation + i, e.actualAngle += e.angleVelocity, e.rotation += e.actualAngle, e.angleVelocity += (t.rotation + i - e.actualAngle) / a, e.angleVelocity *= n
            };
            l.ticker.add(o), e.destroyPhysics = function() {
                l.ticker.remove(o), e.destroy()
            }
        };

    function f(e, t) {
        let i = e.currentFrame;
        e.textures = G[t], e.gotoAndStop(i)
    }
    let x = {
            coins: 20,
            fridge: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        },
        w = {
            happiness: 15,
            hunger: 20,
            sleep: 20,
            sleeping: !1,
            progress: 0,
            progressNeeded: 200
        };

    function v(e) {
        return e.split("").reverse().join("")
    }

    function I(e) {
        return v(btoa(JSON.stringify(e)))
    }
    let S = !1;

    function C(e, t) {
        try {
            return null == e ? t : JSON.parse(atob(v(e)))
        } catch (e) {
            return alert("Błąd przy zapisywaniu pliku. Możliwe uszkodzenie!"), S = !0, 0
        }
    }

    function b() {
        if (t.introMode) return;
        let e = [];
        e.push(I(x.coins)), e.push(I(x.fridge)), e.push(I(w.happiness)), e.push(I(w.hunger)), e.push(I(w.sleep)), e.push(I(t.skipIntro)), e.push(I(t.costume));
        let i = {};
        for (let e in y) i[e] = y[e].owned;
        e.push(I(i)), e.push(I(t.lastLogin)), e.push(I(w.sleeping)), e.push(I(t.sfx)), e.push(I(t.music)), e.push(I(t.minigameMusic)), e.push(I(w.progress)), e.push(I(w.progressNeeded)), e.push(I(t.level));
        let n = {};
        for (let e in u) n[e] = u[e].done;
        e.push(I(n)), e.push(I(t.lemonsFed)), e.push(I(t.totalSlaps)), e.push(I(t.minigameCostumes)), e.push(I(t.lastFridgePage)), e.push(I(t.drinksFed)), e.push(I(t.HQSprites)), e.push(I(t.language)), e.push(I(t.sfxVolume)), e.push(I(t.musicVolume)), e.push(I(t.HDrecommendation)), 0 == t.gameStartDate && (t.gameStartDate = Date.now()), e.push(I(t.gameStartDate)), e.push(I(t.saveFileWarning)), e.push(I(t.levelUpCostumes)), localStorage.setItem("myTeardrop", I(JSON.stringify(e)))
    }
    let P = setInterval((function() {
        b()
    }), 1e4);

    function M(e) {
        S = !1;
        let t = JSON.parse(C(e));
        return {
            coins: C(t[0]),
            fridge: C(t[1]),
            happiness: C(t[2]),
            hunger: C(t[3]),
            sleep: C(t[4]),
            skipIntro: C(t[5]),
            costume: C(t[6]),
            boughtCostumes: C(t[7]),
            lastLogin: C(t[8]),
            sleeping: C(t[9]),
            sfx: C(t[10], !0),
            music: C(t[11], !0),
            minigameMusic: C(t[12], !0),
            progress: C(t[13], 0),
            progressNeeded: C(t[14], 200),
            level: C(t[15], 1),
            completedAchievements: C(t[16], {}),
            lemonsFed: C(t[17], 0),
            totalSlaps: C(t[18], 0),
            minigameCostumes: C(t[19], !0),
            lastFridgePage: C(t[20], 0),
            drinksFed: C(t[21], 0),
            HQSprites: !1,
            language: C(t[23], "en-US"),
            sfxVolume: C(t[24], 1),
            musicVolume: C(t[25], 1),
            HDrecommendation: C(t[26], !1),
            gameStartDate: C(t[27], Date.now()),
            saveFileWarning: C(t[28], !1),
            levelUpCostumes: C(t[29], !0)
        }
    }
    if (null == localStorage.getItem("myTeardrop")) b();
    else {
        let e = M(localStorage.getItem("myTeardrop"));
        x.coins = e.coins, x.fridge = e.fridge, w.happiness = e.happiness, w.hunger = e.hunger, w.sleep = e.sleep, t.skipIntro = e.skipIntro, t.lastLogin = e.lastLogin, w.sleeping = e.sleeping, "string" == typeof e.costume && (Object.keys(y).includes(e.costume) || (e.costume = "none"), t.costume = e.costume);
        for (let t in y) {
            let i = !1;
            null != e.boughtCostumes[t] && (i = e.boughtCostumes[t]), y[t].owned = i
        }
        t.sfx = e.sfx, t.music = e.music, t.minigameMusic = e.minigameMusic, t.minigameCostumes = e.minigameCostumes, w.progress = e.progress, w.progressNeeded = e.progressNeeded, t.level = e.level, t.lemonsFed = e.lemonsFed, t.drinksFed = e.drinksFed, t.totalSlaps = e.totalSlaps, t.lastFridgePage = e.lastFridgePage, t.HQSprites = e.HQSprites, t.language = e.language, t.sfxVolume = e.sfxVolume, t.musicVolume = e.musicVolume, t.HDrecommendation = e.HDrecommendation, t.gameStartDate = e.gameStartDate, t.saveFileWarning = e.saveFileWarning, t.levelUpCostumes = e.levelUpCostumes;
        for (let t in u) {
            let i = !1;
            null != e.completedAchievements[t] && (i = e.completedAchievements[t]), u[t].done = i
        }
    }
    if (null != localStorage.getItem(t.language)) {
        let e = JSON.parse(localStorage.getItem(t.language).replaceAll("\n", "\\n"));
        for (let t in e)
            for (let i in e[t]) "version" != t && (n[t][i] = e[t][i]);
        for (let e in n.costumes) y[e].name = n.costumes[e]
    } else t.language = "en-US";
    let k = n.message.obtainCostume;
    n.message.obtainCostume = function(e) {
        return k.replace("{achievement}", '"' + e + '"')
    };
    let T = n.message.updateWarning;
    n.message.updateWarning = function(e, t) {
        return T.replace("{currentVersion}", e).replace("{latest}", t)
    }, window.innerWidth, window.devicePixelRatio;
    let A = 0,
        X = 0;

    function E(e, i) {
        A++, N || (document.getElementById("bar").style.width = A / X * 100 + "%"), A == X && (N || (document.getElementById("loader").style.color = "white", document.getElementById("loader").innerHTML += "<p>Tap/Click to play</p>"), N || (N = !0, R.music = new Pizzicato.Group(R.music), R.sfx = new Pizzicato.Group(R.sfx), R.sfx.volume = t.sfxVolume, R.music.volume = t.musicVolume, Ae()))
    }
    let L, N = !1,
        G = {},
        D = {},
        R = {
            music: [],
            sfx: []
        };

    function U(e, t, i) {
        X++, PIXI.Assets.load("./Sprites/" + e + ".json").then((e => {
            G[i] = [];
            for (let n = 0; n < e._frameKeys.length; n++) {
                let e = t + (n + 1e4).toString().slice(1);
                G[i].push(PIXI.Texture.from(e))
            }
            E()
        }))
    }

    function B(e, i, n) {
        let a = {},
            o = i;
        G[n] = [];
        for (let r = 0; r < i; r++) {
            a[r] = 0, X++;
            let s = (r + 10001).toString().slice(1);
            1 == i && (s = ""), PIXI.Assets.load("./Sprites/" + e + s + ".png").then((e => {
                a[r] = e, t.HQSprites && e.baseTexture.setResolution(2), o--, 0 == o && (G[n] = a), E()
            }))
        }
    }

    function F(e) {
        X++, PIXI.Assets.load("./Fonts/" + e + ".fnt").then((e => {
            E()
        }))
    }

    function O(e, t) {
        X++, PIXI.Assets.load("./Animations/" + e + ".json").then((e => {
            D[t] = e, E()
        }))
    }

    function _(e, t, i = 0) {
        X++, R[t] = new Pizzicato.Sound("./Audio/" + e + ".mp3", (function() {
            R[t].volume = 1, R[t].loaded = !0, null != R[t].onloadAudio && R[t].onloadAudio(), E()
        })), R[t].loaded = !1, 0 == i ? R.music.push(R[t]) : R.sfx.push(R[t])
    }
    console.warn = function() {};
    let z = {
            loadAttempts: 0
        },
        W = localStorage.getItem("loaderData");
    if (null == W) L = {
        loadAttempts: 0
    };
    else try {
        L = JSON.parse(W)
    } catch (e) {
        L = z
    }

    function j() {
        localStorage.setItem("loaderData", JSON.stringify(L))
    }
    L.loadAttempts++, L.loadAttempts >= 3 && (t.HQSprites = !1), j();
    let Q = "",
        V = "";
    "en-US" != t.language && (V = "Unicode"), t.HQSprites && (Q = "hd/"), F("MenuShag" + V), F("arial"), F("ShagBlueNumber"), F("ShagBlack" + V), F("IndieFlower"), O("Teardrop", "Teardrop"), O("bfb", "bfb"), O("TeardropTired", "TeardropTired"), O("tearDropWatch", "tearDropWatch"), O("tearDropLevelUp", "tearDropLevelUp"), O("faceMinigame", "faceMinigame"), O("tearDropTennis", "tearDropTennis"), O("oddDroplet", "oddDroplet"), O("GTTTATINT", "GTTTATINT"), O("Box", "Box"), O("SkewMatrix", "SkewMatrix"), U(Q + "GameThumbnails", "GameThumbnails", "Sprites/GameThumbnails"), U("tennisBall", "tennisBall", "Sprites/tennisBall"), U("BGLayer", "BGLayer", "BGLayer"), B(Q + "Rooms/Rooms", 19, "Sprites/Rooms"), B("Logo", 1, "Logo"), U(Q + "Food", "Food", "Sprites/Food"), U("Empty", "Empty", "Sprites/Empty"), _("wave", "wave", 1), _("yeah", "yeah"), _("15countdown", "countdown"), _("clouddancer", "clouddancer"), _("faceMatchScores", "faceMatchScores"), _("brittlerille", "brittlerille"), _("Pamgaea", "Pamgaea"), _("LevelUp", "levelup"), _("Achievement", "achievement"), _("switchoff", "switchoff", 1), _("switchon", "switchon", 1), _("purchase", "purchase", 1), _("fail", "fail", 1), _("coinlarge", "coinlarge", 1), _("coinmedium", "coinmedium", 1), _("coinsmall", "coinsmall", 1), _("Radio Martini", "radiomartini"), _("Shiny Tech", "shinytech"), _("consume", "consume", 1), _("slap1", "slap1", 1), _("slap2", "slap2", 1), _("slap3", "slap3", 1), _("slap4", "slap4", 1), _("collect", "collect", 1), U("Oldies/Bodies/1", "Bodies", "oldiesCostume/Bodies"), U("Oldies/Mouths", "Mouth", "oldiesCostume/Mouth"), U("Oldies/Limbs", "Limbs", "oldiesCostume/Limbs"), U("Oldies/Eyes", "Eyes", "oldiesCostume/Eyes"), U(Q + "Bodies/1", "Bodies", "Sprites/Bodies"), U(Q + "Bodies/BodiesCostume_1", "BodiesCostume_1", "Sprites/BodiesCostume_1"), U("MouthsCostume10", "MouthsCostume10", "Sprites/MouthsCostume10"), U("MouthsCostume21", "MouthsCostume21", "Sprites/MouthsCostume21"), U("LimbsCostume17", "LimbsCostume17", "Sprites/LimbsCostume17"), U("LimbsCostume21", "LimbsCostume21", "Sprites/LimbsCostume21"), U("Bodies/BodiesCostume21", "BodiesCostume21", "Sprites/BodiesCostume21"), U(Q + "Mouths", "Mouth", "Sprites/Mouth"), U(Q + "Limbs", "Limbs", "Sprites/Limbs"), U("LimbsCostume1", "LimbsCostume1", "Sprites/LimbsCostume1"), U(Q + "Eyes", "Eyes", "Sprites/Eyes"), U("EyesCostume21", "EyesCostume21", "Sprites/EyesCostume21"), U("CakeSlicePlane", "CakeSlicePlane", "Sprites/CakeSlicePlane"), U("Clouds", "Clouds", "Sprites/Clouds"), U(Q + "Poses", "Poses", "Sprites/Poses"), U("Blur", "Blur", "Sprites/Blur"), U("Box", "Box", "Sprites/Box"), U(Q + "GameUI", "GameUI", "Sprites/GameUI"), U("Placeholders", "Placeholders", "Sprites/Placeholders"), U("Starfield", "Starfield", "Backgrounds/Starfield"), U("RepeatingUI", "RepeatingUI", "Sprites/RepeatingUI"), U(Q + "inputNineSlice", "inputNineSlice", "inputNineSlice");

    function H(e, t = 0) {
        return {
            scale: {
                x: Math.sqrt(e.a ** 2 + e.b ** 2),
                y: Math.sqrt(e.c ** 2 + e.d ** 2)
            },
            skew: {
                x: 180 / Math.PI * Math.atan2(e.d, e.c) - 90,
                y: 180 / Math.PI * Math.atan2(e.b, e.a)
            },
            rotation: t,
            skewing: null == t
        }
    }

    function Y(e, t) {
        let i = 0,
            n = new PIXI.Container;
        n.idle = -1, n.frameCount = e.frameCount, n.customs = [];
        let a = {};
        for (let t in e.layers) e.layers[t].isCustom ? (a[t] = Y(e.symbols[e.layers[t].symbol]), a[t].symbol = e.layers[t].symbol, n.customs.push(a[t])) : a[t] = new PIXI.AnimatedSprite(G[e.layers[t].symbol]), a[t].symbol = e.layers[t].symbol, n.addChild(a[t]), n[t] = a[t], "FireyFlame" == e.layers[t].symbol && (a[t].gotoAndPlay(0), a[t].animationSpeed = .4);

        function o(t, i = !0) {
            let n = a[t].curframe == e.layers[t].frames.length - 1 ? 0 : e.layers[t].frames[a[t].curframe + 1],
                o = e.layers[t].frames[a[t].curframe];
            if (a[t].inactive = null == o[1], a[t].inactive) a[t].alpha = 0;
            else {
                if (a[t].pivot.x = o[8], a[t].pivot.y = o[9], a[t].alpha = 1, 0 != n && -2 != o[12] && i) {
                    let e = a[t].frameProgress - 1,
                        i = new PIXI.Matrix(o[3], o[4], o[5], o[6], 0, 0),
                        r = new PIXI.Matrix(n[3], n[4], n[5], n[6], 0, 0),
                        s = H(i, o[7]),
                        l = H(r, n[7]),
                        d = l.rotation - s.rotation;
                    d > 180 && (d = -180 - (180 - d)), d < -180 && (d = 180 + (180 + d));
                    let c = l.skew.x - s.skew.x;
                    c > 180 && (c = -180 - (180 - c)), c < -180 && (c = 180 + (180 + c));
                    let h = l.skew.y - s.skew.y;
                    h > 180 && (h = -180 - (180 - h)), h < -180 && (h = 180 + (180 + h));
                    let u = {
                        skew: {
                            x: ease[o[12] + 1](e, s.skew.x, c, o[0]),
                            y: ease[o[12] + 1](e, s.skew.y, h, o[0])
                        },
                        scale: {
                            x: ease[o[12] + 1](e, s.scale.x, l.scale.x - s.scale.x, o[0]),
                            y: ease[o[12] + 1](e, s.scale.y, l.scale.y - s.scale.y, o[0])
                        },
                        rotation: ease[o[12] + 1](e, s.rotation, d, o[0])
                    };
                    s.skewing || l.skewing ? u.rotation = 0 : (u.skew.x = 0, u.skew.y = 0), a[t].transform.setFromMatrix(function(e) {
                        let t = e.rotation * (Math.PI / 180),
                            i = e.skew.x * (Math.PI / 180),
                            n = e.skew.y * (Math.PI / 180);
                        isNaN(i) && (i = 0), isNaN(n) && (n = 0);
                        let a = e.scale.x,
                            o = e.scale.y,
                            r = new PIXI.Matrix(1, 0, 0, 1, 0, 0);
                        return r.a *= Math.cos(n), r.b = Math.sin(n), r.c = -Math.sin(i), r.d *= Math.cos(i), r.a *= Math.cos(t), r.b += Math.sin(t), r.c -= Math.sin(t), r.d *= Math.cos(t), r.a *= a, r.b *= a, r.c *= o, r.d *= o, r
                    }(u)), a[t].scale.x = u.scale.x, a[t].scale.y = u.scale.y, a[t].x = ease[o[12] + 1](e, o[1], n[1] - o[1], o[0]), a[t].y = ease[o[12] + 1](e, o[2], n[2] - o[2], o[0]);
                    let p = o[13],
                        m = n[13];
                    a[t].alpha != m && (a[t].alpha = ease[o[12] + 1](e, p, m - p, o[0]))
                } else {
                    let e = new PIXI.Matrix(o[3], o[4], o[5], o[6], 0, 0);
                    a[t].transform.setFromMatrix(e), a[t].x = o[1], a[t].y = o[2], a[t].alpha = o[13]
                }
                if (e.layers[t].isCustom || (o[10] = o[10] % a[t].textures.length), !e.layers[t].isCustom && "FireyFlame" != e.layers[t].symbol) {
                    let e = o[10];
                    null != a[t].overrideSprite && null != a[t].overrideSprite[e] && (e = a[t].overrideSprite[e]), a[t].gotoAndStop(e)
                }
            }
        }

        function r(t, i) {
            let n = i.frames,
                a = 0;
            t = Math.min(e.frameCount - 1, t);
            for (let e = 0; e < n.length; e++) {
                if (t >= a && a + n[e][0] > t) return [e, t - a];
                a += n[e][0]
            }
        }
        new PIXI.Transform;
        let s = !1;
        return n.fps = 0, n.onAnimationEnd = function() {}, n.gotoAndStop = function(e) {
            n.goto(e), n.stop()
        }, n.gotoAndPlay = function(e, t) {
            n.goto(e), n.play(t)
        }, n.parts = t, n.currentPart = -1, n.gotoPart = function(e) {
            null != n.parts[e] && n.currentPart != e && (n.currentPart = e, n.goto(n.parts[e].start), n.firstFrame = n.parts[e].start, n.playUntil = n.parts[e].end, n.loop = n.parts[e].loop)
        }, n.goto = function(t) {
            s = !1, null == t && (t = 0), i = t;
            for (let i in a) {
                let n = r(t, e.layers[i]);
                a[i].curframe = n[0], a[i].frameProgress = n[1] + 1, e.layers[i].isCustom && null != e.layers[i].frames[a[i].curframe][10] && (a[i].goto(e.layers[i].frames[a[i].curframe][10] + (2 == e.layers[i].frames[a[i].curframe][11] ? 0 : a[i].frameProgress - 1)), a[i].l = e.layers[i].frames[a[i].curframe][11]), o(i, !1), o(i)
            }
        }, n.animationData = e, n.destroyAnimation = function() {
            n.stop();
            for (let e in a) a[e].parent.removeChild(a[e]), null != a[e].destroyAnimation ? a[e].destroyAnimation() : a[e].destroy({
                children: !0
            });
            null != n.parent && n.parent.removeChild(n), n.destroy({
                children: !0
            })
        }, n.onNextFrame = -1, n.play = function(e = 60) {
            n.fps = e, clearInterval(n.interval), -1 != n.onNextFrame ? n.interval = setInterval((function() {
                n.nextFrame(), n.onNextFrame(n)
            }), 1e3 / e) : n.interval = setInterval((function() {
                n.nextFrame()
            }), 1e3 / e)
        }, n.playUntil = -1, n.firstFrame = 0, n.stop = function(e) {
            clearInterval(n.interval)
        }, n.getCurFrame = function() {
            return i
        }, n.goto(0), n.nextFrame = function() {
            let t = n.playUntil;
            if (-1 == n.playUntil && (t = e.frameCount - 1), i++, t < i) return n.loop && n.goto(n.firstFrame), void(0 == s && (s = !0, -1 != n.idle && n.gotoPart(n.idle), n.onAnimationEnd()));
            for (let t in a) {
                if (a[t].inactive = !1, null == a[t].curframe && (a[t].curframe = 0), null == a[t].frameProgress) a[t].frameProgress = 1;
                else {
                    let i = e.layers[t].frames[a[t].curframe];
                    e.layers[t].isCustom && 2 != i[11] && a[t].nextFrame(), a[t].frameProgress >= e.layers[t].frames[a[t].curframe][0] && (a[t].frameProgress = 0, a[t].curframe < e.layers[t].frames.length - 1 ? (a[t].curframe++, e.layers[t].isCustom && (a[t].goto(e.layers[t].frames[a[t].curframe][10]), a[t].l = i[11])) : a[t].inactive = !0), a[t].frameProgress++
                }
                o(t)
            }
        }, n.switchData = function(t) {
            e = t;
            for (let e = 0; e < n.customs.length; e++) n.customs[e].switchData(t.symbols[n.customs[e].symbol])
        }, n.switchParts = function(e) {
            n.parts = e
        }, n
    }
    let K = function(e, t, i, n) {
            return Math.sqrt((e - i) ** 2 + (t - n) ** 2)
        },
        J = function(e, t, i) {
            return e.x + e.width >= t.x && e.x <= t.x + t.width && e.y + e.height >= t.y && e.y <= t.y + t.height
        },
        q = {},
        Z = 0;

    function $(e, t, i = !0) {
        e.originalSize = {
            x: e.scale.x,
            y: e.scale.y
        }, e.animate = i, e.animationSize = e.originalSize, e.destinationSize = e.originalSize, e.animationTime = 0, e.on("pointerover", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }), e.animationTime = 0, e.hover = !0
        })), e.on("pointerout", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.animationTime = 0, e.destinationSize = {
                x: 1 * e.originalSize.x,
                y: 1 * e.originalSize.y
            }), e.hover = !1
        })), e.on("pointerdown", (function() {
            e.disableTrigger = !1, i && (e.destinationSize = {
                x: .95 * e.originalSize.x,
                y: .95 * e.originalSize.y
            }, e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }), e.animationTime = 0, e.pressing = !0
        })), e.disableTrigger = !1, e.resetSize = function() {
            e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: e.originalSize.x,
                y: e.originalSize.y
            }, e.animationTime = 0
        }, e.on("pointerup", (function() {
            e.pressing && 0 == e.disableTrigger && t(), e.interactive && (e.pressing = !1, i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }, e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }), e.animationTime = 0)
        }))
    }

    function ee(e, t = new PIXI.Rectangle(-100, -100, 200, 200), i, n = 0) {
        e.canDrag = !0, e.hitArea = t, e.dragScale = n, e.originalHitArea = t, i && (e.x2 = e.x, e.y2 = e.y), e.on("pointerdown", (function(t) {
            e.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), e.dragging = !0, e.originalPosition = {
                x: e.x,
                y: e.y
            };
            let i = t.clientX / o,
                n = t.clientY / o;
            0 != e.dragScale && (i /= e.dragScale, n /= e.dragScale), e.dragOffset = {
                x: i - e.x,
                y: n - e.y
            }
        })), e.on("pointermove", (function(t) {
            let n = t.clientX / o,
                a = t.clientY / o;
            0 != e.dragScale && (n /= e.dragScale, a /= e.dragScale), e.dragging && (i ? (e.x2 = n - e.dragOffset.x, e.y2 = a - e.dragOffset.y) : (e.x = n - e.dragOffset.x, e.y = a - e.dragOffset.y), K(e.originalPosition.x, e.originalPosition.y, e.x, e.y) > 1 && (e.disableTrigger = !0))
        })), e.on("pointerup", (function() {
            e.dragging = !1, e.hitArea = e.originalHitArea
        }))
    }
    class te {
        constructor(e, t, i, n = !1, a = !0) {
            this.buttonContainer = new PIXI.Container, this.selected = new PIXI.Sprite(G["Sprites/GameUI"][8]), this.selected.anchor.set(.5, .5), this.buttonContainer.addChild(this.selected), this.selected.blendMode = PIXI.BLEND_MODES.ADD, this.empty = new PIXI.Sprite(e), this.empty.anchor.set(.5, .5), this.buttonContainer.addChild(this.empty), this.size = e.trim.width, this.fullMask = new PIXI.Graphics, this.fullMask.beginFill(16777215), this._offset = Math.min(1, Math.max(0, i)), this.pieChart = n, n || this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset), this.fullMask.endFill(), this.empty.addChild(this.fullMask), this.full = new PIXI.Sprite(t), this.full.anchor.set(.5, .5), this.empty.addChild(this.full), this.full.mask = this.fullMask, this.percentage = new PIXI.BitmapText(Math.round(100 * this._offset) + "%", {
                fontSize: 16,
                fontName: "MenuShag"
            }), this.percentage.y = this.size / 2 + 10, this.percentage.anchor.set(.5, .5), a && this.buttonContainer.addChild(this.percentage), this.buttonContainer.hitArea = new PIXI.Rectangle(-this.size / 2, -this.size / 2, this.size, this.size), this.buttonContainer.interactive = !0, this.id = Z, q[Z++] = this.buttonContainer
        }
        set offset(e) {
            if (this.fullMask.clear(), this._offset = Math.min(1, Math.max(0, e)), this.fullMask.beginFill(16777215), this.pieChart && this._offset < .99) {
                let e = this.size,
                    t = [0, 0, 0, -e];
                this._offset > .125 && (t.push(e), t.push(-e)), this._offset > .25 && (t.push(e), t.push(0)), this._offset > .375 && (t.push(e), t.push(e)), this._offset > .5 && (t.push(0), t.push(e)), this._offset > .625 && (t.push(-e), t.push(e)), this._offset > .75 && (t.push(-e), t.push(0)), this._offset > .875 && (t.push(-e), t.push(-e)), t.push(e * Math.cos(this._offset * Math.PI * 2 - Math.PI / 2)), t.push(e * Math.sin(this._offset * Math.PI * 2 - Math.PI / 2)), this.fullMask.drawPolygon(...t)
            } else this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset);
            this.fullMask.endFill(), this.percentage.text = Math.round(100 * this._offset) + "%"
        }
        destroy() {
            this.selected.destroy(), this.empty.destroy(), this.fullMask.destroy(), this.full.destroy(), this.percentage.destroy(), this.buttonContainer.destroy(), delete q[this.id]
        }
    }
    let ie = null;
    class ne {
        constructor(e, t, i, n, a, o, r, s) {
            this.ninesliceplane = new PIXI.NineSlicePlane(G.inputNineSlice[0], 15, 15, 15, 15), this.ninesliceplane.width = i, this.ninesliceplane.height = n, this.ninesliceplane.x = e, this.ninesliceplane.y = t, this.ninesliceplane.interactive = !0, this.ninesliceplane.on("click", (() => {
                ie = this.inputText, this.inputText.alpha = 1, this.inputText.text = this.inputText.value, document.addEventListener("keydown", this.type), document.addEventListener("pointerdown", this.disable)
            })), this.type = e => {
                " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?\"'".includes(e.key) && o > this.inputText.value.length && (this.inputText.value += e.key), "Backspace" == e.key && (this.inputText.value = this.inputText.value.slice(0, -1)), "Enter" != e.key ? (this.inputText.scale.x = 1, this.inputText.text = this.inputText.value, this.inputText.width > this.ninesliceplane.width - 2 * this.inputText.x && (this.inputText.width = this.ninesliceplane.width - 2 * this.inputText.x), this.inputText.scale.y = this.inputText.scale.x) : this.confirmation()
            }, this.disabled = !1, this.disable = () => {
                "" == this.inputText.value && (this.inputText.text = a, this.inputText.alpha = .5), ie = -1, document.removeEventListener("keydown", this.type), document.removeEventListener("pointerdown", this.disable)
            }, this.inputText = new PIXI.BitmapText(a, {
                fontSize: n - 7,
                fontName: "ShagBlack"
            }), this.inputText.value = "", this.inputText.alpha = .5, this.inputText.anchor.set(0, .5), this.inputText.x = n / 2 - 2, this.inputText.y = this.ninesliceplane.height / 2, this.ninesliceplane.addChild(this.inputText), this.ninesliceplane.pivot.x = i * r, this.ninesliceplane.pivot.y = n * s, this.element = this.ninesliceplane, this.confirmation = function() {}
        }
        _destroy() {
            this.ninesliceplane.interactive = !1, this.disable(), this.inputText.parent.removeChild(this.inputText), this.inputText.destroy(), this.ninesliceplane.destroy(), this.ninesliceplane.removeAllListeners()
        }
        destroy() {
            this._destroy()
        }
    }
    class ae extends ne {
        constructor(e = function() {}, t, i, n, a, o, r, s, l, d = 1, c = "left") {
            super(t, i, n, a, o, r, .5, .5), this.ninesliceplane.texture = G.inputNineSlice[d], this.inputText.fontName = "MenuShag", this.inputText.fontSize = a - 7, this.inputText.x = a / 2 - 2, "center" == c && (this.inputText.x = n / 2, this.inputText.anchor.set(.5, .5)), this.inputText.alpha = 1, this.type = function() {}, this.ninesliceplane.removeAllListeners(), this.id = Z, q[Z++] = this.element, this.ninesliceplane.x += .5 * n - n * s, this.ninesliceplane.y += .5 * a - a * l, $(this.element, e)
        }
        destroy() {
            delete q[this.id], this._destroy()
        }
    }
    class oe {
        constructor(e = function() {}, t, i) {
            this.sprite = new PIXI.Sprite(t);
            let n = 100;
            null != this.sprite.texture.trim && (n = this.sprite.texture.trim.width, this.sprite.hitArea = new PIXI.Rectangle(-n / 2, -n / 2, n, n)), this.sprite.interactive = !0, this.sprite.anchor.set(.5, .5);
            for (let e in i) this.sprite[e] = i[e];
            this.id = Z, q[Z++] = this.sprite, $(this.sprite, e, !0)
        }
        destroy() {
            delete q[this.id], this.sprite.interactive = !1, this.sprite.destroy(), this.sprite.removeAllListeners()
        }
    }

    function re() {
        return Z++
    }
    let se = {
            tearDropWatch: {
                Idle: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                percent90: {
                    start: 240,
                    end: 319,
                    loop: !1
                },
                percent75: {
                    start: 320,
                    end: 399,
                    loop: !1
                },
                percent50: {
                    start: 400,
                    end: 479,
                    loop: !1
                },
                percent10: {
                    start: 480,
                    end: 559,
                    loop: !1
                },
                Laugh: {
                    start: 560,
                    end: 803,
                    loop: !1
                },
                percent100: {
                    start: 805,
                    end: 887,
                    loop: !1
                }
            },
            Box: {
                Jump: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                Click1: {
                    start: 240,
                    end: 299,
                    loop: !1
                },
                Click2: {
                    start: 300,
                    end: 351,
                    loop: !1
                },
                Steal: {
                    start: 359,
                    end: 376,
                    loop: !1
                }
            },
            Teardrop: {
                Eat: {
                    start: 1001,
                    end: 1123,
                    loop: !1
                },
                Wave: {
                    start: 0,
                    end: 328,
                    loop: !1
                },
                Slap: {
                    start: 329,
                    end: 453,
                    loop: !1
                },
                BookOpen: {
                    start: 509,
                    end: 730,
                    loop: !1
                },
                Write: {
                    start: 731,
                    end: 857,
                    loop: !0
                },
                SendMessage: {
                    start: 858,
                    end: 1e3,
                    loop: !1
                },
                Nope: {
                    start: 1125,
                    end: 1198,
                    loop: !1
                },
                Look: {
                    start: 1199,
                    end: 1336,
                    loop: !1
                },
                Look2: {
                    start: 1337,
                    end: 1468,
                    loop: !1
                },
                Pat: {
                    start: 1468,
                    end: 1511,
                    loop: !1
                },
                PatStop: {
                    start: 1512,
                    end: 1545,
                    loop: !1
                },
                Idle: {
                    start: 315,
                    end: 328,
                    loop: !0
                },
                Realize: {
                    start: 1546,
                    end: 1685,
                    loop: !1
                },
                EatSour: {
                    start: 1686,
                    end: 1869,
                    loop: !1
                }
            },
            TeardropTired: {
                Sleep: {
                    start: 441,
                    end: 474,
                    loop: !1
                },
                Sleepy: {
                    start: 350,
                    end: 440,
                    loop: !1
                },
                Eat: {
                    start: 1001,
                    end: 1123,
                    loop: !1
                },
                Wave: {
                    start: 0,
                    end: 328,
                    loop: !1
                },
                Idle: {
                    start: 0,
                    end: 239,
                    loop: !0
                },
                Slap: {
                    start: 240,
                    end: 349,
                    loop: !1
                },
                BookOpen: {
                    start: 509,
                    end: 730,
                    loop: !1
                },
                Write: {
                    start: 731,
                    end: 857,
                    loop: !0
                },
                SendMessage: {
                    start: 858,
                    end: 1e3,
                    loop: !1
                },
                Nope: {
                    start: 1125,
                    end: 1198,
                    loop: !1
                },
                Look: {
                    start: 1199,
                    end: 1336,
                    loop: !1
                },
                Look2: {
                    start: 1337,
                    end: 1468,
                    loop: !1
                },
                Pat: {
                    start: 483,
                    end: 527,
                    loop: !1
                },
                PatStop: {
                    start: 528,
                    end: 577,
                    loop: !1
                }
            },
            Needle: {
                0: {
                    start: 0,
                    end: 20,
                    loop: !0
                },
                1: {
                    start: 57,
                    end: 193,
                    loop: !1
                },
                2: {
                    start: 331,
                    end: 440,
                    loop: !1
                }
            },
            Leafy: {
                0: {
                    start: 0,
                    end: 20,
                    loop: !0
                },
                1: {
                    start: 57,
                    end: 193,
                    loop: !1
                },
                2: {
                    start: 331,
                    end: 440,
                    loop: !1
                }
            },
            Coiny: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Spongy: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Pin: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            Rocky: {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            "Ice Cube": {
                0: {
                    start: 0,
                    end: 39,
                    loop: !0
                },
                1: {
                    start: 40,
                    end: 221,
                    loop: !1
                },
                2: {
                    start: 222,
                    end: 329,
                    loop: !1
                }
            },
            tearDropTennis: {
                prepare: {
                    start: 0,
                    end: 11,
                    loop: !1
                },
                hit: {
                    start: 12,
                    end: 65,
                    loop: !1
                }
            }
        },
        le = {
            "en-US": {
                lang: "English",
                button: ["DOWNLOAD", "USE", "UPDATE"],
                downloaded: !0
            },
            "tr-TR": {
                lang: "Türkçe",
                translator: p.vendormint,
                file: "./Languages/tr-TR",
                available: !1,
                button: ["INDIR", "KULLAN", "GUNCELLE"]
            },
            "fr-FR": {
                lang: "Français",
                translator: p.teardrop,
                file: "./Languages/fr-FR",
                button: ["TELECHARGER", "UTILISER", "MISE À JOUR"]
            },
            "es-ES": {
                lang: "Türkçe",
                translator: {
                    name: p.stevencrack.name + ", " + p.thinking909.name
                },
                file: "./Languages/es-ES",
                available: !1,
                button: ["DESCARGAR", "USAR", "ACTUALIZAR"]
            }
        };
    for (let e in le) e in localStorage && (le[e].downloaded = !0);
    let de, ce, he, ue, pe, me, ye = {
            0: {
                name: "Match",
                id: 0,
                available: !1
            },
            1: {
                name: "Pencil",
                id: 1,
                available: !1
            },
            2: {
                name: "Bubble",
                id: 2,
                available: !1
            },
            5: {
                width: 100,
                height: 100,
                name: "Ice Cube",
                id: 5,
                available: !0
            },
            6: {
                width: 100,
                height: 100,
                name: "Leafy",
                id: 6,
                available: !0
            },
            9: {
                width: 100,
                height: 100,
                name: "Rocky",
                id: 9,
                available: !0
            },
            13: {
                name: "Woody",
                id: 13,
                available: !1
            },
            19: {
                width: 300,
                height: 200,
                name: "Spongy",
                id: 19,
                available: !0
            },
            22: {
                name: "Tennis Ball",
                id: 22,
                available: !1
            },
            23: {
                name: "Pen",
                id: 23,
                available: !1
            },
            31: {
                width: 75,
                height: 100,
                name: "Coiny",
                id: 31,
                available: !0
            },
            32: {
                width: 75,
                height: 100,
                name: "Pin",
                id: 32,
                available: !0
            },
            33: {
                name: "Firey",
                id: 33,
                available: !1
            },
            34: {
                width: 60,
                height: 100,
                name: "Needle",
                id: 34,
                available: !0
            },
            39: {
                name: "Golf Ball",
                id: 39,
                available: !1
            },
            44: {
                name: "Blocky",
                id: 44,
                available: !1
            },
            51: {
                name: "Eraser",
                id: 51,
                available: !1
            },
            54: {
                name: "Flower",
                id: 54,
                available: !1
            },
            57: {
                name: "Snowball",
                id: 57,
                available: !1
            },
            62: {
                name: "Teardrop",
                id: 62,
                available: !1
            }
        },
        ge = [{
            name: n.settings.music,
            value: t.music,
            enable: function() {
                t.music = !0, R.brittlerille.volume = .5, R.brittlerille.play()
            },
            disable: function() {
                R.brittlerille.pause(), t.music = !1
            }
        }, {
            name: n.settings.minigameMusic,
            value: t.minigameMusic,
            enable: function() {
                t.minigameMusic = !0
            },
            disable: function() {
                t.minigameMusic = !1
            }
        }, {
            name: n.settings.sfx,
            value: t.sfx,
            enable: function() {
                t.sfx = !0
            },
            disable: function() {
                t.sfx = !1
            }
        }, {
            name: n.settings.minigameCostumes,
            value: t.minigameCostumes,
            enable: function() {
                t.minigameCostumes = !0
            },
            disable: function() {
                t.minigameCostumes = !1
            }
        }, {
            name: "Kostiumy eksperymentalne",
            value: t.levelUpCostumes,
            enable: function() {
                t.levelUpCostumes = !0
            },
            disable: function() {
                t.levelUpCostumes = !1
            }
        }, {
            name: "Kredyty",
            type: "button",
            flash: !0,
            enable: function() {
                clearTimeout(de),
                    function(e = function() {}) {
                        let n = function() {
                            t.music && R.clouddancer.play()
                        };
                        t.music && (R.brittlerille.pause(), R.clouddancer.play(), R.clouddancer.volume = .5, R.clouddancer.release = 1, R.clouddancer.on("end", n));
                        let a = new PIXI.Sprite(G["Sprites/Rooms"][18]);
                        l.stage.addChild(a), a.tint = 8818106, a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1.5, a.scale.y = 1.5;
                        let r = new PIXI.Container;
                        l.stage.addChild(r);
                        let s = {},
                            c = 0,
                            h = 0,
                            u = [],
                            m = i("", 32, "center");
                        m.x = l.screen.width / 2, m.y = l.screen.height - 150, t.costume;
                        let y = new PIXI.Container;
                        y.hitArea = new PIXI.Rectangle(-5e3, -5e3, 1e4, 1e4);
                        let g = new PIXI.Graphics;
                        y.mask = g, l.stage.addChild(y), y.x = 0, y.y = 0;
                        let f = l.screen.width,
                            x = l.screen.height;
                        g.beginFill(0), g.drawRect(y.x, y.y, f, x), g.endFill(), y.interactive = !0, y.on("pointerdown", (function(e) {
                            let t = e.clientY / o;
                            y.dragOffset = {
                                y: t - y.y
                            }, y.prevY = y.y, y.vy = 0, y.scrolling = !0
                        }));
                        let w = function(e) {
                                if (!y.scrolling) return;
                                let t = e.clientY / o;
                                y.prevY = y.y, y.y = t - y.dragOffset.y
                            },
                            v = function() {
                                y.scrolling = !1
                            };
                        document.addEventListener("pointermove", w), document.addEventListener("pointerup", v), y.vy = 0;
                        let I = function() {
                            let e = 80 - C - 50 + x;
                            y.vy = d.linear(y.vy, -.5, .05, ke), y.scrolling ? y.vy = y.y - y.prevY : y.y += y.vy, S.targetAlpha = 1, y.y >= 0 && (y.y = 0, y.vy = 0), y.y <= e && (S.targetAlpha = 0, y.y = e, y.vy = 0), S.alpha = d.linear(S.alpha, S.targetAlpha, .1, ke), a.y = d.linear(a.y, y.y / 40 + 80 + 50, .1, ke)
                        };
                        l.ticker.add(I);
                        let S = new PIXI.Sprite(G["Sprites/Rooms"][11]);
                        S.x = y.x, S.y = y.y + x - 90, S.width = f, S.height = 100;
                        let C = 0,
                            b = {
                                "User Interface": ["VENDORMINT"],
                                Characters: [],
                                "Early Supporters": ["semihasem142", "albertito9736", "leafsterzx", "rat_real.", "yourgurllucy", "infected_came_back.", "generalbonnie", "riverplayerone", "jampu", "tear_drop_bfb / pilowd", "alexpple", "donutmations", "orphan / cherryjrtheorphan_.", "coiny68617"],
                                "Beta Testers": ["tear_drop_bfb / pilowd", "oyui / thinking909", "NOOB / tyblade9", "BlueSky", "freesmart", "stevencrack", "ultimate1duck", "flanimations", "kenzie._kenz", "kyl9341", "veetheglaceon", "donutmations", p.thinking909.name, "anni_on_ayanna", "beetlebrick_", p.cringeindividual.name, "tawnypawzz", "geebweezer", "fridgethewhat123", "lufafa13", "infationtoons", "mationsBOMB", "lach15bro", "NOOB / tyblade9", "ricol3", "maple_two", "jampu", "mizosis", p.briteideajuni.name],
                                "Costume Artists": [],
                                Animation: ["VENDORMINT", "jacknjellify"],
                                "Graphic Design": ["VENDORMINT"],
                                "Original Games": ["Cary Huang - GTTTATINT101"],
                                Music: ["Kevin Macleod - New Friendly", "Kevin Macleod - Radio Martini", "Kevin Macleod - Brittle Rille", "Kevin Macleod - Shiny Tech", "Kevin Macleod - Pamgaea", "Kevin Macleod - Cloud Dancer"]
                            };
                        for (let e in ye) b.Characters.push("jacknjellify - " + ye[e].name);
                        for (let e in p) b["Costume Artists"].push(p[e].name);
                        C += 200;
                        let P = new PIXI.Sprite(G.Logo[0]);
                        P.width = 200, P.scale.y = P.scale.x, P.x = l.screen.width / 2, P.y = 100, u.push(P), P.anchor.set(.5, .5), y.addChild(P);
                        for (let e in b) {
                            let t = i(e, 32, "center");
                            t.y = C, C += 48, y.addChild(t);
                            for (let t = 0; t < b[e].length; t++) {
                                let n = i(b[e][t], 16, "center");
                                n.y = C, C += 32, y.addChild(n), n.x = l.screen.width / 2, b[e][t].toLowerCase().includes("teardrop") && (n.tint = 6737151)
                            }
                            C += 30, t.x = l.screen.width / 2
                        }
                        C += 100;
                        let M = Ie.exitButton((function() {
                            e(), Ie.flash(!1, A)
                        }), l.screen.width - 40, 40, .4, 0);
                        l.stage.addChild(M.sprite), r.origX = 0, r.time = 50;
                        let k = !1,
                            T = function() {
                                k || (r.x = 0, c > .01 && (r.x += Math.cos(h) * c * 5, h += .5 * ke, c = d.linear(c, 0, .1, ke)), m.alpha > 0 && (m.alpha -= .04))
                            };

                        function A() {
                            t.music && (R.brittlerille.play(), R.clouddancer.stop(), R.clouddancer.off("end", n)), l.ticker.remove(I), document.removeEventListener("pointermove", w), document.removeEventListener("pointerup", v);
                            for (let e in s) null != s[e].destroy && s[e].destroy(), delete s[e];
                            m.destroy(), M.destroy(), a.destroy();
                            for (let e = 0; e < u.length; e++) u[e].destroyed || u[e].destroy();
                            l.ticker.remove(T), k = !0
                        }
                        l.ticker.add(T), l.stage.addChild(m), u.push(S), u.push(y), u.push(g)
                    }()
            }
        }, {
            name: "Głośność SFX",
            type: "slider",
            enable: function(e) {
                t.sfxVolume = e, R.sfx.volume = e
            },
            value: t.sfxVolume,
            preview: function() {
                clearTimeout(de), t.music && (R.brittlerille.pause(), de = setTimeout((function() {
                    t.music && R.brittlerille.play()
                }), 2e3)), R.consume.stop(), R.consume.play()
            }
        }, {
            name: "Głośność muzyki",
            type: "slider",
            preview: function() {
                R.faceMatchScores.stop(), clearTimeout(de), t.music && (R.brittlerille.pause(), de = setTimeout((function() {
                    t.music && R.brittlerille.play()
                }), 2e3)), R.faceMatchScores.play(0, Math.min(8, 4 * Math.floor(3 * t.musicVolume))), clearTimeout(ce), ce = setTimeout((function() {
                    R.faceMatchScores.stop()
                }), 2200), R.faceMatchScores.sourceNode.playbackRate.value = 1.1
            },
            enable: function(e) {
                t.musicVolume = e, R.music.volume = e
            },
            value: t.musicVolume
        }, {
            name: "Zapisz plik Narzędzia",
            type: "button",
            flash: !0,
            enable: function() {
                let e = -1;
                fe((function() {
                    -1 != e && document.body.removeChild(e)
                }), [{
                    name: "Pobierz",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        let e = document.createElement("a"),
                            t = localStorage.myTeardrop;
                        e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", "myTeardrop.txt"), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }
                }, {
                    name: "Przesyłanie",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        Ie.message("Spowoduje to nadpisanie bieżącego pliku zapisu i jest działaniem nieodwracalnym.", G["Sprites/GameUI"][24], (function() {
                            let t = function(t = document.createElement("button"), i = document.createElement("input")) {
                                return t.innerText = "Upload", i.type = "file", i.style.display = "none", t.style = "position:fixed;z-index: 100;top:0px;left:0px;", e = t, t.onclick = function() {
                                    i.click(), i.onchange = function() {
                                        let e = new FileReader;
                                        e.onload = function(e) {
                                            M(e.currentTarget.result), S ? Ie.message("Not genuine save file. Action cancelled", G["Sprites/GameUI"][24], (function() {})) : (Ie.message("Success! Reloading game...", G["Sprites/GameUI"][24], (function() {})), localStorage.setItem("myTeardrop", e.currentTarget.result), setTimeout((function() {
                                                window.location = window.location
                                            }), 500))
                                        }, e.readAsText(i.files[0])
                                    }
                                }, document.body.appendChild(i), t
                            }();
                            t.onclick(), document.body.appendChild(t)
                        }), (function() {}), ["Upload", "Cancel"])
                    }
                }, {
                    name: "Wyczyść",
                    type: "button",
                    flash: !1,
                    enable: function() {
                        Ie.message("Ta czynność jest nieodwracalna i całkowicie wyczyści zapisany plik!", G["Sprites/GameUI"][24], (function() {
                            setTimeout((function() {
                                Ie.message("Naprawdę jesteś pewien??", G["Sprites/GameUI"][24], (function() {
                                    clearInterval(P), localStorage.removeItem("myTeardrop"), setTimeout((function() {
                                        window.location = window.location
                                    }), 500)
                                }), (function() {}), ["Kontynuować", "Anuluj"])
                            }), 500)
                        }), (function() {}), ["Kontynuować", "Anuluj"])
                    }
                }], "Narzędzia do zapisywania plików")
            }
        }],
        fe = function(e = function() {}, t = ge, n = Ce + (be ? "(release, offline)" : "(release)")) {
            let a = new PIXI.Sprite(G["Sprites/Rooms"][13]);
            l.stage.addChild(a), a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1, a.scale.y = 1;
            let r = new PIXI.Container;
            l.stage.addChild(r);
            let s = Ie.exitButton((function() {
                e(), b(), Ie.flash(!1, v)
            }), l.screen.width - 40, 40, .4, 0);
            l.stage.addChild(s.sprite), r.origX = 0, r.time = 50;
            let d = !1,
                c = function() {
                    d || (r.x = 0)
                },
                h = 0,
                p = 10;
            l.ticker.add(c);
            let m = [],
                g = new PIXI.Sprite(G.Logo[0]);
            g.width = 200, g.scale.y = g.scale.x, g.x = 80, g.y = 20, g.id = re(), $(g, (function() {
                if (p--, 0 == p) {
                    if (u.tauntLogo.done) return Ie.message("GET OUT!", -1), void setTimeout((function() {
                        setInterval((function() {
                            let e = Y(D.Teardrop, se.Teardrop),
                                t = [];
                            for (let e in y) y[e].owned && t.push(y[e]);
                            t[Math.floor(Math.random() * t.length)].apply(e), e.x = l.screen.width * Math.random(), e.y = l.screen.height * Math.random(), e.rotation = Math.random() * Math.PI * 4, e.play(60);
                            let i = Object.keys(se.Teardrop);
                            e.gotoPart(i[Math.floor(Math.random() * i.length)]), l.stage.addChild(e)
                        }), 1e3 / 60), setTimeout((function() {
                            window.location = window.location
                        }), 1e3)
                    }), 500);
                    switch (h) {
                        case 0:
                            p = 10, Ie.message("nie robić.", -1);
                            break;
                        case 1:
                            p = 10, Ie.message("nie.", -1);
                            break;
                        case 2:
                            p = 5, Ie.message("przestań...", -1);
                            break;
                        case 3:
                            p = 20, Ie.message("PRZESTAŃ!!", -1);
                            break;
                        case 4:
                        case 6:
                            p = 10, Ie.message("...", -1);
                            break;
                        case 5:
                            p = 10, Ie.message("Zostawisz mnie w spokoju, jeśli dam ci kostium?", -1, (function() {
                                setTimeout((function() {
                                    Ie.message("Zastanowię się nad tym.", -1, (function() {})), p = 10
                                }), 500)
                            }), (function() {
                                setTimeout((function() {
                                    Ie.message("wyjść.", -1, (function() {
                                        e(), Ie.flash(!1, v)
                                    }))
                                }), 1e3)
                            }), ["Tak", "Nie"]);
                            break;
                        case 7: {
                            function t() {
                                setTimeout((function() {
                                    Ie.message("Tylko żartowałem! Albo ja... ok, teraz proszę zostaw mnie w spokoju, oto twój kostium", -1, (function() {
                                        Ie.blurPan(l.stage, (function() {
                                            v(), Ie.achievementQueue("tauntLogo"), y.giant.owned = !0
                                        }))
                                    })), p = 10
                                }), 500)
                            }
                            p = 10, Ie.message("OSTRZEŻENIE: TA CZYNNOŚĆ CAŁKOWICIE USUNIE ZAPISANY PLIK!", -1, t, t, ["Kontynuuj", "Kontynuuj"])
                        }
                    }
                    h++
                }
            })), q[g.id] = g, g.interactive = !0, m.push(g), l.stage.addChild(g), g.anchor.set(.5, .5), g.x += g.width / 2, g.y += g.height / 2;
            let f = i(n, 16);
            f.x = 90, f.y = g.y + g.height / 2, m.push(f), l.stage.addChild(f);
            let x = 80,
                w = 0;
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                if (null == n.type) {
                    let e = new oe((function() {
                        e.activated = !e.activated, e.activated ? (e.sprite.texture = G["Sprites/GameUI"][26], n.enable(e)) : (e.sprite.texture = G["Sprites/GameUI"][25], n.disable(e))
                    }), n.value ? G["Sprites/GameUI"][26] : G["Sprites/GameUI"][25], {
                        scale: {
                            x: .75,
                            y: .75
                        }
                    });
                    e.sprite.x = x, e.sprite.y = 150 + w, l.stage.addChild(e.sprite), e.activated = n.value;
                    let t = i(n.name, 24, "left", "middle");
                    t.x = 110, t.y = 148 + w, t.width > l.screen.width - x - t.x && (t.width = l.screen.width - x - t.x, t.scale.y = t.scale.x), l.stage.addChild(t), m.push(e), m.push(t), w += 50
                } else if ("button" == n.type) {
                    let e = new ae((function() {
                        n.flash ? Ie.flash(!1, n.enable) : n.enable()
                    }), x, 150 + w, 200, 30, n.name, 0, 0, .5, 1, "center");
                    l.stage.addChild(e.element), m.push(e), w += 50
                } else if ("slider" == n.type) {
                    let e = 200,
                        t = 10,
                        a = x,
                        r = i(n.name, 24, "left", "middle");
                    r.x = x, r.y = 148 + w - 10, l.stage.addChild(r);
                    let s = 150 + w + 20;
                    w += 60;
                    let d = new PIXI.NineSlicePlane(G.inputNineSlice[17], 25, 25, 25, 25);
                    d.width = e + 5 + t, d.height = t + 5, l.stage.addChild(d), d.x = a - 2.5 - t / 2, d.y = s - 2.5 - t / 2;
                    let c = new PIXI.NineSlicePlane(G.inputNineSlice[15], 25, 25, 25, 25);
                    c.width = e + t, c.height = t, l.stage.addChild(c), c.x = a - t / 2, c.y = s - t / 2;
                    let h = new PIXI.NineSlicePlane(G.inputNineSlice[16], 25, 25, 25, 25);
                    h.width = e / 2 - 4 + t, h.height = t - 4, l.stage.addChild(h), h.x = a + 2 - t / 2, h.y = s + 2 - t / 2;
                    let u = new oe((function() {}), G["Sprites/GameUI"][43], {
                        scale: {
                            x: .5,
                            y: .5
                        }
                    });
                    u.sprite.x = a, u.sprite.y = s, l.stage.addChild(u.sprite), u.sprite.originalHitArea = u.sprite.hitArea, u.sprite.on("pointerdown", (function(e) {
                        u.sprite.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), u.sprite.dragging = !0;
                        let t = e.clientX / o,
                            i = e.clientY / o;
                        u.sprite.dragOffset = {
                            x: t - u.sprite.x,
                            y: i - u.sprite.y
                        }
                    })), u.sprite.on("pointermove", (function(t) {
                        let i = t.clientX / o;
                        t.clientY, u.sprite.dragging && (u.sprite.x = Math.min(a + e, Math.max(a, i - u.sprite.dragOffset.x)), h.width = u.sprite.x - h.x, n.enable((u.sprite.x - a) / e))
                    })), u.sprite.on("pointerup", (function() {
                        u.sprite.dragging = !1, u.sprite.hitArea = u.sprite.originalHitArea, n.preview()
                    })), m.push(u), m.push(h), m.push(c), m.push(d), n.set = function(i) {
                        h.width = e * i - 4 + t, u.sprite.x = a + e * i
                    }, n.set(n.value), m.push(r)
                }
            }

            function v() {
                b();
                for (let e = 0; e < m.length; e++) m[e].destroy();
                s.destroy(), a.destroy(), r.destroy(), l.ticker.remove(c), d = !0, delete q[g.id]
            }
        },
        xe = function(e) {
            let t = Math.floor(e / 1e3),
                i = t % 60 + "s",
                n = Math.floor(t / 60) % 60 + "m";
            return Math.floor(t / 3600) + "h " + n + " " + i
        },
        we = [],
        ve = {
            regularcake: {
                name: n.food.regularcake,
                texture: 1,
                cost: 15,
                adds: 40
            },
            icecreamcake: {
                name: n.food.icecreamcake,
                texture: 5,
                cost: 20,
                adds: 60
            },
            icycake: {
                name: n.food.icycake,
                texture: 4,
                cost: 1,
                adds: 1
            },
            limecake: {
                name: n.food.limecake,
                texture: 6,
                cost: 10,
                adds: 20
            },
            blueberry: {
                name: n.food.blueberry,
                texture: 7,
                cost: 2,
                adds: 10
            },
            strawberry: {
                name: n.food.strawberry,
                texture: 8,
                cost: 1,
                adds: 8
            },
            strawberrycake: {
                name: n.food.strawberrycake,
                texture: 9,
                cost: 8,
                adds: 15
            },
            candy: {
                name: n.food.candy,
                texture: 10,
                cost: 5,
                adds: 12
            },
            cherrypan: {
                name: "cherrypan",
                texture: 11,
                cost: 1e3,
                adds: 100,
                hidden: !0
            },
            sleeppotion: {
                name: n.food.sleeppotion,
                texture: 12,
                cost: 100,
                adds: 5,
                hidden: !1
            },
            maxpotion: {
                name: n.food.maxpotion,
                texture: 13,
                cost: 300,
                adds: 0,
                hidden: !0
            },
            sourlemon: {
                name: n.food.sourlemon,
                texture: 14,
                cost: 3,
                adds: -4
            },
            donut: {
                name: n.food.donut,
                texture: 16,
                cost: 12,
                adds: 30,
                requiredLevel: 5
            },
            fries: {
                name: n.food.fries,
                texture: 15,
                cost: 50,
                adds: 75,
                requiredLevel: 10
            },
            burntTaco: {
                name: n.food.burntTaco,
                texture: 17,
                cost: 100,
                adds: 90,
                requiredLevel: 20
            }
        };
    t.hideFridgeExit = !0;
    const Ie = {
        language: function(e = function() {}) {
            let a = new PIXI.Sprite(G["Sprites/Rooms"][12]);
            l.stage.addChild(a), a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1, a.scale.y = 1;
            let r = new PIXI.Container;
            l.stage.addChild(r);
            let s = 0,
                d = {},
                c = [],
                h = i("", 32, "center");
            h.x = l.screen.width / 2, h.y = l.screen.height - 150, t.costume;
            let u = {},
                p = new PIXI.Container,
                m = new PIXI.Graphics;
            p.mask = m, l.stage.addChild(p), p.x = 40, p.y = 80;
            let y = l.screen.width - 80,
                g = l.screen.height - 80;
            m.beginFill(0), m.drawRect(p.x, p.y, y, g), m.endFill(), p.interactive = !0, p.on("pointerdown", (function(e) {
                let t = e.clientY / o;
                p.dragOffset = {
                    y: t - p.y
                }, p.prevY = p.y, p.vy = 0, p.scrolling = !0
            })), p.vy = 0;
            let f = new PIXI.Sprite(G["Sprites/Rooms"][11]);
            f.alpha = 0, l.stage.addChild(f), f.x = p.x, f.y = p.y + g - 100, f.width = y, f.height = 100;
            for (let e in le) {
                let a = le[e];
                if (a.hidden) continue;
                let o = !1;
                a.owned || -1 != a.cost || (o = !0);
                let r = new ae((function() {
                    h.text = ""
                }), 0, 0 + 84 * s, y, 80, "", 0, 0, 0, 2);
                u[e] = r, r.element.interactive = !1, p.addChild(r.element), new PIXI.Rectangle(0, 0, 0, 0);
                let l, d = new PIXI.BitmapText(a.lang, {
                    fontSize: 24,
                    fontName: "arial"
                });
                if (d.x = 20, d.y = 5, r.element.addChild(d), null != a.translator) {
                    let e = i(n.ui.translator + ": " + a.translator.name, 12, "left", "middle", 1);
                    e.x = 20, e.y = 50, r.element.addChild(e)
                }
                d.width > y - 50 && (d.width = y - 50), d.scale.y = d.scale.x, -1 == a.sprite && (l.x -= 80, d.x -= 80), console.log(a);
                let m = new ae((function() {
                        if (a.downloaded) return void Ie.message(n.settings.enableReload, G["Sprites/GameUI"][24], (function() {
                            t.language = e, b(), setTimeout((function() {
                                window.location = window.location
                            }), 500)
                        }), (function() {}), [n.ui.reload, n.ui.cancel]);
                        let i = Ie.message("Downloading...", G["Sprites/GameUI"][24]);
                        PIXI.Assets.load(a.file + ".json").then((n => {
                            setTimeout((function() {
                                i.exit(), n.version = g, localStorage.setItem(e, JSON.stringify(n)), t.language = e, b(), setTimeout((function() {
                                    window.location = window.location
                                }), 500)
                            }), 2e3)
                        }))
                    }), y - 10, 70, 100, 20, a.button[a.downloaded ? 1 : 0], 0, 1, 1, 1, "center"),
                    g = "";
                PIXI.Assets.load(a.file + "-version.json").then((t => {
                    if (g = t.version, null != localStorage.getItem(e)) try {
                        let i = JSON.parse(localStorage.getItem(e));
                        t.version != i.version && (m.inputText.text = a.button[2], a.downloaded = !1)
                    } catch (t) {}
                })), r.element.addChild(m.element), c.push(d), c.push(r), s++
            }
            let x = Ie.exitButton((function() {
                e(), b(), Ie.flash(!1, v)
            }), l.screen.width - 40, 40, .4, 0);
            l.stage.addChild(x.sprite);
            let w = !1;

            function v() {
                for (let e in d) null != d[e].destroy && d[e].destroy(), delete d[e];
                h.destroy(), x.destroy(), a.destroy();
                for (let e = 0; e < c.length; e++) c[e].destroyed || c[e].destroy();
                w = !0
            }
            l.stage.addChild(h), c.push(f), c.push(p), c.push(m)
        },
        oddDroplet: function() {
            let e = new PIXI.Sprite(G["Sprites/RepeatingUI"][3]);
            e.interactive = !0, l.stage.addChild(e), e.width = l.screen.width, e.height = l.screen.height;
            let t = !1,
                i = -1;

            function n() {
                t = !t, a.changePause(t), t ? (i = -Date.now(), tearDropSettings.inGame = !1, l.ticker.remove(ticker), Ie.message("Game paused", G["Sprites/GameUI"][32], (function() {
                    n()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        a.destroyPause(), e.destroy(), Ie.gameList(), Ie.results(0, 0, "what", "what")
                    }))
                }), ["Play", "Home"], !1)) : (tearDropSettings.inGame = !0, l.ticker.add(ticker))
            }
            let a = Ie.pauseButton((function() {
                n()
            }), .4);
            l.stage.addChild(a), a.x = l.screen.width - 40, a.y = 40
        },
        setUpTints: function() {
            ue = new PIXI.Sprite(G["Sprites/Blur"][1]), pe = new PIXI.Sprite(G["Sprites/RepeatingUI"][2]), me = new PIXI.Sprite(G["Sprites/RepeatingUI"][3])
        },
        achievementQueue: function(e, t = !1) {
            0 == c.length && (h = 0), t && 0 != c.length && (h++, Ie.achievement(e, (function() {
                c.shift(), Ie.achievementQueue(c[0], !0)
            }))), t || u[e].done || (c.push(e), u[e].done = !0, 1 == c.length && Ie.achievement(e, (function() {
                c.shift(), Ie.achievementQueue(c[0], !0)
            })))
        },
        achievement: function(e, i = function() {}) {
            let n = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"],
                a = 0;
            for (let e = 0; e < n.length; e++) u[n[e]].done && a++;
            a == n.length && Ie.achievementQueue("get2763"), t.sfx && (R.achievement.stop(), R.achievement.play(), R.achievement.sourceNode.playbackRate.value = 1 + h / 16);
            let o = u[e],
                r = new PIXI.NineSlicePlane(G.inputNineSlice[2]);
            r.width = 320, r.x = l.screen.width / 2, r.y = -500, l.stage.addChild(r);
            let s = new PIXI.BitmapText(o.title, {
                fontName: "ShagBlack",
                fontSize: 24
            });
            r.height = s.height + 50, s.anchor.set(0, .5), s.x = 80, s.y = 20, r.addChild(s);
            let d = new PIXI.BitmapText(o.description, {
                fontName: "ShagBlack",
                fontSize: 16,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: r.width - 80,
                whiteSpace: "normal"
            });
            d.anchor.set(0, 0), r.height += d.height, d.anchor.set(0, .5), d.x = 80, d.y = 35 + d.height / 2, r.addChild(d), r.pivot.set(r.width / 2, r.height / 2), null == o.icon && (o.icon = 11);
            let c = G["Sprites/GameUI"][o.icon],
                p = new PIXI.Sprite(c);
            r.addChild(p), p.anchor.set(.5, .5), p.y = r.height / 2 - 5, p.x = 40, p.scale.x = .5, p.scale.y = .5;
            let m = 0,
                y = Math.random() - .5;
            setTimeout((function() {
                g.x = r.x, g.y = r.y, g.rotation = r.rotation, g.scale = r.scale, r.closing = !0, m = 0
            }), 2500);
            let g = {
                x: l.screen.width / 2,
                y: -r.height / 2,
                rotation: y,
                scale: .5
            };
            r.onDestroyed = function() {}, r.destroyBook = function() {
                r.onDestroyed(), l.ticker.remove(f), s.destroy(), p.destroy(), r.destroy({
                    children: !0
                }), i()
            };
            let f = function() {
                if (r.closing) {
                    if (r.y = ease[16](Math.min(40, m), g.y, -g.y - r.height, 40), r.rotation = ease[1](Math.min(70, m), g.rotation, y, 70), m > 40) return void r.destroyBook()
                } else r.x = ease[17](Math.min(80, m), g.x, 0, 80), r.y = ease[8](Math.min(70, m), g.y, r.height + 20, 70);
                r.scale.y = r.scale.x, m += ke
            };
            return l.ticker.add(f), r
        },
        updateWarning: function() {
            Ie.message(n.message.updateWarning(Ce, Se), G["Sprites/GameUI"][24], (function() {
                window.location = window.location
            }), (function() {}), [n.ui.reload, n.ui.ignore]), console.log(n.ui)
        },
        exitButton: function(e = function() {}, t, i, n = 1, a = 0) {
            let o = !1,
                r = new oe((function() {
                    o || (o = !0, e())
                }), G["Sprites/GameUI"][11], {
                    scale: {
                        x: n,
                        y: n
                    },
                    x: t,
                    y: i
                }, !0);
            return r.sprite.on("pointerover", (function() {
                r.sprite.texture = G["Sprites/GameUI"][12]
            })), r.sprite.on("pointerout", (function() {
                r.sprite.texture = G["Sprites/GameUI"][11]
            })), r
        },
        pauseButton: function(e = function() {}, t = 1) {
            let i = new PIXI.Sprite(G["Sprites/GameUI"][32]);
            i.anchor.set(.5, .5), i.interactive = !0;
            let n = G["Sprites/GameUI"][32].trim;
            return i.scale.x = t, i.scale.y = t, i.hitArea = new PIXI.Rectangle(-n.width / 2, -n.height / 2, n.width, n.height), i.id = Z, q[re()] = i, $(i, e), i.destroyPause = function() {
                delete q[i.id], i.destroy()
            }, i.changePause = function(e) {
                i.texture = e ? G["Sprites/GameUI"][34] : G["Sprites/GameUI"][32]
            }, i
        },
        skew: function() {
            let e = Y(D.SkewMatrix);
            e.play(20), l.stage.addChild(e), e.x = 180, e.y = 320, setInterval((function() {}), 1e3 / 60)
        },
        fade: function(e, t = 20, i = 20) {
            l.stage.children.includes(pe) && l.stage.removeChild(pe), pe.interactive = !0, l.stage.addChild(pe), pe.alpha = 0;
            let n = 1 / t,
                a = !1;
            l.ticker.add((function t() {
                pe.alpha += n * ke, pe.alpha >= 1 && (pe.alpha = 1, a || (a = !0, e()), l.stage.removeChild(pe), l.stage.addChild(pe), n = -1 / i), pe.alpha < 0 && (l.ticker.remove(t), l.stage.removeChild(pe))
            }))
        },
        flash: function(e = !1, t = function() {}, i = !1) {
            let n = new PIXI.Sprite(G["Sprites/RepeatingUI"][3]);
            n.width = l.screen.width, n.height = l.screen.height, l.stage.addChild(n), n.alpha = e ? 1 : 0;
            let a = e ? -1 / 60 : 1 / 8;
            i ? (n.interactive = !0, a /= 4) : n.interactive = !1;
            let o = !1;
            l.ticker.add((function i() {
                n.alpha += a * ke, n.alpha >= 1 && !e && (n.alpha = 1, o || (o = !0, t(), n.interactive = !1), l.stage.removeChild(n), l.stage.addChild(n), a = -1 / 60), n.alpha < 0 && (l.ticker.remove(i), n.destroy())
            }))
        },
        blackTint: function(e = .5, t = !0) {
            let i = new PIXI.Sprite(G["Sprites/RepeatingUI"][3]);

            function n() {
                i.alpha += o * ke, i.alpha >= e && (i.alpha = e, o = 0), i.alpha < 0 && (i.alpha = 0, i.delete && (l.ticker.remove(n), l.stage.removeChild(i)))
            }
            i.interactive = !0, i.width = l.screen.width, i.height = l.screen.height, t ? (i.blendMode = PIXI.BLEND_MODES.SUBTRACT, i.tint = 16777215) : (i.blendMode = PIXI.BLEND_MODES.NORMAL, i.tint = 0), l.stage.children.includes(i) && l.stage.removeChild(i), l.stage.addChild(i);
            let a = !1;
            i.start = function() {
                o = 1 / 60, a || (a = !0, l.ticker.add(n))
            }, i.end = function() {
                o = -1 / 60
            }, i.delete = !0, i.alpha = 0;
            let o = 1 / 60;
            return i
        },
        book: function(e, t = function() {}, i = 30) {
            let n = Ie.blackTint(.2);
            n.start();
            let a = new PIXI.Sprite(G["Sprites/GameUI"][10]);
            a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), l.stage.addChild(a);
            let o = [],
                r = 0,
                s = 0,
                d = [],
                c = e.split(" "),
                h = "",
                u = new PIXI.BitmapText(e, {
                    fontName: "IndieFlower",
                    fontSize: 24
                });
            for (let e = 0; e < c.length; e++) {
                let t = h;
                h += c[e] + " ", u.text = h, u.width > 200 && (d.push(t), e--, h = "")
            }
            "" != h && d.push(h), u.destroy();
            let p = 0,
                m = 2 * Math.round(Math.random()) - 1,
                y = d;
            for (let e = 0; e < y.length; e++) {
                let t = new PIXI.BitmapText("", {
                    fontName: "IndieFlower",
                    fontSize: 24
                });
                t.x = -70, t.y = 29.5 * e - 195, a.addChild(t), o.push(t)
            }
            let g, f = function() {
                o[s].text += y[s][r], r >= y[s].length - 1 && (s++, r = -1), r++, s == o.length && clearInterval(g)
            };
            setTimeout((function() {
                g = setInterval(f, 1e3 / i)
            }), 500);
            let x = Ie.exitButton((function() {
                x.interactive = !1, w.x = a.x, w.y = a.y, w.rotation = a.rotation, w.scale = a.scale, a.closing = !0, p = 0
            }), 150, -220, .4, .1);
            x.sprite.alpha = 0, a.addChild(x.sprite), x.sprite.interactive = !1, x.show = !1, setTimeout((function() {
                x.show = !0, x.sprite.interactive = !0
            }), 1500);
            let w = {
                x: 0,
                y: l.screen.height + 500,
                rotation: m,
                scale: .5
            };
            a.onDestroyed = function() {}, a.destroyBook = function() {
                a.onDestroyed(), l.ticker.remove(v);
                for (let e = 0; e < o.length; e++) o[e].parent.removeChild(o[e]), o[e].destroy();
                x.destroy(), a.destroy({
                    children: !0
                }), t()
            };
            let v = function() {
                if (x.show && (x.sprite.alpha += .05), x.sprite.alpha >= 1 && (x.sprite.alpha = 1, x.show = !1), a.closing) {
                    if (a.y = ease[16](Math.min(40, p), w.y, -w.y + l.screen.height + 500, 40), a.rotation = ease[1](Math.min(70, p), w.rotation, m, 70), p > 40) return n.end(), void a.destroyBook()
                } else a.x = ease[17](Math.min(80, p), w.x, l.screen.width / 2, 80), a.y = ease[8](Math.min(70, p), w.y, -l.screen.height / 2 - 29.5 * (y.length + 5), 70), a.rotation = ease[17](Math.min(90, p), w.rotation, -m, 90), a.scale.x = ease[17](Math.min(90, p), w.scale, .5, 90);
                a.scale.y = a.scale.x, p += ke
            };
            return l.ticker.add(v), a
        },
        blurPan: function(e, t = function() {}) {
            ue.visible = !0, ue.x = 4 * -ue.texture.orig.width / 2, ue.y = l.screen.height / 2, ue.scale.x = 4, ue.scale.y = 4, ue.anchor.set(.5, .5), e.addChild(ue);
            let i = !1,
                n = function() {
                    ue.x += 300 * ke, ue.x > l.screen.width / 2 && !i && (t(), i = !0, e.addChild(ue)), ue.x > l.screen.width + 4 * ue.texture.orig.width / 2 && (l.ticker.remove(n), e.removeChild(ue), ue.visible = !1)
                };
            l.ticker.add(n)
        },
        animationSelector: function() {
            let e = 0,
                t = [];

            function i() {
                for (let e = 0; e < t.length; e++) t[e].destroy()
            }
            for (let n in D) {
                let a = new ae((function() {
                    let e = {};
                    null != se[n] && (e = se[n]), i(), Ie.animationTester(D[n], e)
                }), 20, 20 + 28 * e, l.screen.width - 40, 24, n, 10, 0, 0);
                l.stage.addChild(a.element), t.push(a), e++
            }
            return {
                destroy: i
            }
        },
        animationTester: function(e, t) {
            let n = Y(e, t),
                a = new PIXI.Sprite(PIXI.Texture.from("./Sprites/anchor.png"));
            a.anchor.set(.5, .5), n.addChild(a), l.stage.addChild(n), n.x = l.screen.width / 2, n.y = l.screen.height / 2, n.onNextFrame = function() {
                r.value = n.getCurFrame()
            };
            let o = 0,
                r = new class {
                    constructor(e, t) {
                        this._value = t, this.info = e, this.text = i(this.info + ": " + this._value, 12, "left"), this.text.x = 20, this.text.y = l.screen.height - 60 - 16 * o, o++, l.stage.addChild(this.text)
                    }
                    set value(e) {
                        this._value = e, this.text.text = this.info + ": " + this._value
                    }
                }("Frame", "0");
            n.play(60), n.interactive = !0, ee(n);
            let s = new ne(20, l.screen.height - 20, 150, 20, "FPS", 10, 0, 1);
            s.confirmation = function() {
                n.play(parseInt(s.inputText.value))
            }, l.stage.addChild(s.element);
            let d = 0,
                c = new ae((function() {
                    n.currentPart = -1, n.playUntil = -1, n.loop = !0
                }), 20, 20 + 20 * d, 90, 18, "none", 10, 0, 0);
            l.stage.addChild(c.element), d++;
            for (let e in t) {
                let t = new ae((function() {
                    n.gotoPart(e)
                }), 20, 20 + 20 * d, 90, 18, e, 10, 0, 0);
                l.stage.addChild(t.element), d++
            }
        },
        intro: function(e = !1) {
            if (0 == e) return loadAudio("plodder", "plodder"), void(onresourceload = function() {
                Ie.intro(!0)
            });
            let i = 0;
            doubleanimation(D.bfb), D.bfb.frameCount *= 2;
            for (let e in D.bfb.layers) {
                for (let t = 0; t < D.bfb.layers[e].frames.length; t++) {
                    let n = D.bfb.layers[e].frames[t];
                    n[fE.firstFrame] = i, n[fE.loopMode] = 2, n[fE.tween] = 0
                }
                i += 5
            }
            D.bfb.symbols.Test = D.faceMinigame;
            let n = t.music;
            setTimeout((function() {
                t.music = !1, R.brittlerille.stop(), R.plodder.play(), R.plodder.sourceNode.playbackRate.value = 1, R.plodder.on("end", (function() {
                    o.destroyAnimation(), a.destroy(), t.music = n, n && R.brittlerille.play()
                }))
            }), 10 / 24 * 1e3);
            let a = new PIXI.Sprite(G["Sprites/RepeatingUI"][3]);
            a.width = l.screen.width + 80, a.height = l.screen.height + 80, a.tint = 13421772, a.x = -40, a.y = -40, l.stage.addChild(a);
            let o = Y(D.bfb);
            l.stage.addChild(o), o.play(48), o.scale.x = 1 / .56, o.scale.y = 1 / .56, o.x = -2762, o.y = -1736
        },
        myTeardrop: function() {
            let e = Math.floor((Date.now() - t.lastLogin) / 1e3),
                a = 288;
            if (w.happiness -= e / 180, w.hunger -= e / 108, w.sleeping) {
                let C = w.sleep;
                w.sleep += e / a * 8, w.sleep > 100 && (w.sleep = 100), w.progress += 4 * (w.sleep - C)
            }
            w.sleep >= 100 && (w.sleeping = !1), w.happiness = Math.max(0, w.happiness), w.hunger = Math.max(0, w.hunger), w.sleep = Math.max(0, w.sleep);
            let r = function() {},
                s = new PIXI.Container;
            l.stage.addChild(s), s.x = l.screen.width / 2, s.y = l.screen.height / 2;
            let c = "livingRoom",
                h = new PIXI.Sprite(G["Sprites/Rooms"][8]);
            s.addChild(h), h.x = 0, h.y = -100, h.anchor.set(.5, .5), h.scale.x = 1, h.scale.y = 1;
            let p = new PIXI.Sprite(G["Sprites/Rooms"][8]);
            s.addChild(p), p.x = 0, p.y = 0, p.anchor.set(.5, .5), p.scale.x = 1, p.scale.y = 1;
            let m = new PIXI.Sprite(G["Sprites/Rooms"][0]);
            m.x = 0, m.y = 0, m.anchor.set(.5, .5), m.scale.x = 1, m.scale.y = 1;
            let g = t.skipIntro,
                f = 1,
                v = 0,
                I = new PIXI.BitmapText(n.intro.mail, {
                    fontSize: 24,
                    fontName: "MenuShag"
                });

            function S() {
                setInterval((function() {
                    t.inGame ? (w.happiness += .2, w.progress += 1) : w.happiness -= 1 / 180;
                    let e = 1 / 108;
                    t.inGame && (e *= 8), w.hunger -= e;
                    let i = .003472222222222222;
                    t.inGame && (i *= 16, t.temporaryInGameTime++), w.sleeping ? (w.sleep += .027777777777777776, w.progress += .1111111111111111) : t.introMode || (w.sleep -= i), t.lastLogin = Date.now(), w.happiness = Math.max(0, w.happiness), w.hunger = Math.max(0, w.hunger), w.sleep = Math.max(0, w.sleep), w.happiness = Math.min(100, w.happiness), w.hunger = Math.min(100, w.hunger), w.sleep = Math.min(100, w.sleep), w.sleeping || (w.sleep < 20 && !he.tired && (he.tired = !0, he.switchData(D.TeardropTired), he.switchParts(se.TeardropTired), he.gotoPart("Sleepy")), w.sleep > 20 && he.tired && (he.tired = !1, he.switchData(D.Teardrop), he.switchParts(se.Teardrop), he.gotoPart("Realize")), w.progress > w.progressNeeded && !t.inGame && t.canLevelUp && (Ie.flash(!1, (function() {
                        t.level++, O.text = t.level, w.progress = w.progress - w.progressNeeded, w.progressNeeded = 200 + (t.level - 1) ** 1.25 * 20, F.offset = w.progress / w.progressNeeded, Ie.levelUp(), b()
                    })), t.canLevelUp = !1), w.progress < 0 && (w.progress = 0))
                }), 1e3), t.canLevelUp = !0;
                let e = new PIXI.Sprite(G["Sprites/GameUI"][19]);
                e.anchor.set(.5, .5), e.scale.x = .1, e.scale.y = .1, e.rotation = -1;
                let a = new oe((function() {
                        e.active = !1, Ie.flash(!1, (function() {
                            Ie.wardrobe((function() {
                                B.updateCounter(x.coins), null != he.destroyCostume && (he.destroyCostume(), he.destroyCostume = void 0), y[t.costume].apply(he)
                            }))
                        }))
                    }), G["Sprites/GameUI"][17], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .6,
                            y: .6
                        }
                    }),
                    h = new oe((function() {
                        e.active = !1, Ie.flash(!1, (function() {
                            Ie.gameList((function() {
                                B.updateCounter(x.coins)
                            }))
                        }))
                    }), G["Sprites/GameUI"][20], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .6,
                            y: .6
                        }
                    }),
                    f = new oe((function() {
                        e.active = !1, Ie.flash(!1, (function() {
                            Ie.settings()
                        }))
                    }), G["Sprites/GameUI"][33], {
                        x: 100,
                        y: 100,
                        scale: {
                            x: .4,
                            y: .4
                        }
                    });
                f.sprite.title = [n.ui.settings, 32], h.sprite.title = [n.ui.games, 24], a.sprite.title = [n.ui.wardrobe, 24];
                let I = new oe((function() {
                    e.active = !1, Ie.flash(!1, (function() {
                        Ie.achievements()
                    }))
                }), G["Sprites/GameUI"][35], {
                    x: 100,
                    y: 100,
                    scale: {
                        x: .6,
                        y: .6
                    }
                });
                I.sprite.title = [n.ui.achievements, 24];
                let S = [a.sprite, h.sprite, I.sprite],
                    C = [f.sprite];
                for (let t = 0; t < S.length; t++) {
                    let n = S[t],
                        a = i(n.title[0], n.title[1], "center");
                    n.addChild(a), a.y = -80;
                    let o = Math.cos((t + .5 - 2) / 8 * Math.PI * 2),
                        r = Math.sin((t + .5 - 2) / 8 * Math.PI * 2);
                    n.x = 100 * o, n.y = 100 * r, n.original = {
                        x: n.x,
                        y: n.y
                    }, e.addChild(n), n.speed = .05
                }
                for (let t = 0; t < C.length; t++) {
                    let n = C[t];
                    S.push(n), n.speed = .03;
                    let a = i(n.title[0], n.title[1], "center");
                    n.addChild(a), a.y = -80;
                    let o = Math.cos((t + 1 - 2) / 8 * Math.PI * 2),
                        r = Math.sin((t + 1 - 2) / 8 * Math.PI * 2);
                    n.x = 160 * o, n.y = 160 * r, n.original = {
                        x: n.x,
                        y: n.y
                    }, e.addChild(n)
                }
                l.stage.addChild(e);
                let P = function(a, h = !1) {
                    if (c == a && "livingRoom" == a ? (e.x = E.buttonContainer.x, e.y = E.buttonContainer.y, t.introMode || (e.active = !e.active)) : e.active = !1, c == a) return;
                    c = a, p.interactive = !1, p.removeAllListeners();
                    let f = function() {
                        if (w.sleeping && (he.visible = !1), r(), E.selected.visible = !1, L.selected.visible = !1, N.selected.visible = !1, he.rotation = 0, "livingRoom" == a && (p.texture = G["Sprites/Rooms"][8], m.texture = G["Sprites/Rooms"][0], m.visible = !1, he.x = 0, he.y = 100, E.selected.visible = !0), "kitchen" == a) {
                            function e() {
                                for (let e = 0; e < 3; e++) "" != x.fridge[20 + e] && null != x.fridge[20 + e] ? (h[e].eated = !1, h[e].x = c.x - 50 + 50 * e, h[e].interactive = !0, h[e].y = c.y, h[e].alpha = 1, h[e].eating = !1, h[e].visible = !0, h[e].food = x.fridge[20 + e], h[e].foodId = 20 + e, h[e].texture = G["Sprites/Food"][ve[x.fridge[20 + e]].texture]) : h[e].visible = !1
                            }
                            g || (M = 1.5), p.interactive = !0, p.hitArea = new PIXI.Rectangle(100, -290, 300, 350), p.on("pointerdown", (function() {
                                p.interactive = !1, 2 == M && (M = 3), Ie.flash(!1, (function() {
                                    Ie.fridge((function() {
                                        B.updateCounter(x.coins), e(), t.introMode && (B.visible = !0)
                                    })), p.interactive = !0
                                }))
                            })), m.visible = !0, p.texture = G["Sprites/Rooms"][1], m.texture = G["Sprites/Rooms"][2], s.addChild(m), he.x = -10, he.y = 100, L.selected.visible = !0;
                            let c = new PIXI.Sprite(G["Sprites/Food"][0]);
                            c.anchor.set(.5, .5), c.x = 0, c.y = 70, s.addChild(c);
                            let h = [];
                            for (let S = 0; S < 3; S++) {
                                let C = new PIXI.Sprite(G["Sprites/Food"][1]);
                                C.visible = !0, C.x = c.x - 50 + 50 * S, C.y = c.y, C.x2 = C.x, C.y2 = C.y, C.anchor.set(.5, .5), s.addChild(C), C.interactive = !0, C.hitArea = new PIXI.Rectangle(-C.texture.trim.width / 2, -C.texture.trim.height, 2 * C.texture.trim.width, 2 * C.texture.trim.height), C.on("pointerdown", (function(e) {
                                    C.hitArea = new PIXI.Rectangle(-3e3, -3e3, 6e3, 6e3), C.dragging = !0;
                                    let t = e.clientX / o,
                                        i = e.clientY / o;
                                    C.dragOffset = {
                                        x: t - C.x,
                                        y: i - C.y
                                    };
                                    for (let e = 0; e < h.length; e++) h[e].interactive = !1;
                                    C.interactive = !0
                                })), C.on("pointermove", (function(e) {
                                    let t = e.clientX / o,
                                        i = e.clientY / o;
                                    C.dragging && (C.x2 = t - C.dragOffset.x, C.y2 = i - C.dragOffset.y)
                                })), C.eated = !1, C.on("pointerup", (function(e) {
                                    t.introMode && M <= 3 && setTimeout((function() {
                                        w.sleep = 19, M = 4, U.alpha = 0, U.rotation = 0, N.buttonContainer.alpha = 0, N.buttonContainer.visible = !0
                                    }), 2e3), C.hitArea = new PIXI.Rectangle(-C.texture.trim.width / 2, -C.texture.trim.height, 2 * C.texture.trim.width, 2 * C.texture.trim.height), C.dragging = !1;
                                    for (let e = 0; e < h.length; e++) h[e].interactive = !0;
                                    if (C.x2 = c.x - 50 + 50 * S, C.y2 = c.y, w.sleeping) return;
                                    if (C.eated) return;
                                    C.eated = !0;
                                    let i = ve[C.food].adds;
                                    if ("lemon" == t.costume && ("sourlemon" == C.food ? i = 12 : i /= 3), !C.food.includes("potion")) {
                                        if (he.tired) return;
                                        if (w.hunger + i / 2 >= 100) return C.eated = !1, he.gotoPart("Nope"), void(he.currentPart = -1)
                                    }
                                    C.eating = !0, he.interactive = !1, setTimeout((function() {
                                        "sleeppotion" == C.food && (w.sleep = 100, t.drinksFed += 1, 10 == t.drinksFed && (Ie.achievementQueue("10energydrinks"), y.energydrink.owned = !0)), "maxpotion" == C.food && (w.sleep = 100, w.happiness = 100, w.hunger = 100), he.food.textures = [C.texture], "sourlemon" == C.food && "lemon" != t.costume ? (t.lemonsFed += 1, t.lemonsFed >= 2763 && !u["2763lemons"].done && Ie.flash(!1, (function() {
                                            y.limedrop.apply(he), y.limedrop.owned = !0, t.costume = "limedrop", b(), Ie.achievementQueue("2763lemons")
                                        }), !0), t.lemonsFed >= 100 && !u.lemons.done && Ie.flash(!1, (function() {
                                            y.lemon.apply(he), y.lemon.owned = !0, t.costume = "lemon", b(), Ie.achievementQueue("lemons")
                                        }), !0), b(), he.gotoPart("EatSour")) : he.gotoPart("Eat"), t.sfx && (R.consume.stop(), R.consume.play()), x.fridge[C.foodId] = "", setTimeout((function() {
                                            w.hunger += i, w.progress += 20 + ve[C.food].adds / 4, w.happiness += Math.round(Math.max(0, (40 - w.happiness) / 2)), w.hunger >= 100 && (w.hunger = 100), he.currentPart = -1
                                        }), 400), he.onAnimationEnd = function() {
                                            he.interactive = !0, he.onAnimationEnd = function() {}
                                        }
                                    }), 100)
                                })), h.push(C)
                            }
                            e();
                            let f = function() {
                                    if (!I)
                                        for (let e = 0; e < h.length; e++) {
                                            let t = h[e];
                                            t.dragging ? (t.x = d.linear(t.x, t.x2, .4, ke), t.y = d.linear(t.y, t.y2, .4, ke)) : t.eating ? (t.x = d.linear(t.x, he.x - 75, .2, ke), t.y = d.linear(t.y, he.y - 100, .3, ke), t.alpha = d.linear(t.alpha, 0, .2, ke), t.interactive = !1) : (t.x = d.linear(t.x, t.x2, .2, ke), t.y = d.linear(t.y, t.y2, .3, ke)), t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100, t.scale.x = 1 + (t.y - c.y) / 600 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100, t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100
                                        }
                                },
                                I = !1;
                            l.ticker.add(f), r = function() {
                                I = !0, l.ticker.remove(f);
                                for (let e = 0; e < h.length; e++) {
                                    let t = h[e];
                                    t.parent.removeChild(t), t.destroy()
                                }
                                c.parent.removeChild(c), c.destroy(), p.removeAllListeners(), r = function() {}
                            }
                        }
                        if ("bedroom" == a) {
                            he.visible = !0, m.visible = !0, p.texture = G["Sprites/Rooms"][3], m.texture = G["Sprites/Rooms"][4], p.hitArea = new PIXI.Rectangle(-160, -140, 100, 150), p.interactive = !0, p.lit = !w.sleeping;
                            let k = new PIXI.ColorMatrixFilter;
                            k.matrix = [.2, 0, 0, 0, 0, 0, .2, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0], p.lit || (s.filters = [k]), p.on("pointerdown", (function() {
                                t.introMode && Ie.fade((function() {
                                    ! function(e = function() {}) {
                                        let t = new PIXI.Sprite(G["Sprites/Rooms"][15]);
                                        t.tint = 0, t.x = l.screen.width / 2, t.y = l.screen.height / 2, t.anchor.set(.5, .5), l.stage.addChild(t), t.interactive = !0;
                                        let a = new PIXI.BitmapText("Open the Wheel of Fun by holding down the happiness button.", {
                                            fontSize: 24,
                                            fontName: "MenuShag",
                                            breakWords: !0,
                                            wordWrap: !0,
                                            wordWrapWidth: 300,
                                            maxWidth: 300,
                                            whiteSpace: "normal",
                                            align: "center"
                                        });
                                        l.stage.addChild(a), a.anchor.set(.5, .5), a.x = l.screen.width / 2, a.y = l.screen.height / 2;
                                        let o = 0,
                                            r = new PIXI.Sprite(G["Sprites/GameUI"][19]);
                                        r.anchor.set(.5, .5), r.scale.x = .1, r.scale.y = .1, r.rotation = -1, r.visible = !1, l.stage.addChild(r);
                                        let s = new PIXI.Sprite(G["Sprites/GameUI"][17]),
                                            c = new PIXI.Sprite(G["Sprites/GameUI"][20]),
                                            h = new PIXI.Sprite(G["Sprites/GameUI"][33]);
                                        h.title = [n.ui.settings, 32], c.title = [n.ui.games, 24], s.title = [n.ui.wardrobe, 24];
                                        let u = new PIXI.Sprite(G["Sprites/GameUI"][35]);
                                        u.title = [n.ui.achievements, 24];
                                        let p = [s, c, u],
                                            m = [h];
                                        for (let e = 0; e < p.length; e++) {
                                            let t = p[e];
                                            t.anchor.set(.5, .5), t.scale.x = .6, t.scale.y = .6;
                                            let n = i(t.title[0], t.title[1], "center");
                                            t.addChild(n), n.y = -80;
                                            let a = Math.cos((e + .5 - 2) / 8 * Math.PI * 2),
                                                o = Math.sin((e + .5 - 2) / 8 * Math.PI * 2);
                                            t.x = 100 * a, t.y = 100 * o, t.original = {
                                                x: t.x,
                                                y: t.y
                                            }, r.addChild(t), t.speed = .05
                                        }
                                        for (let e = 0; e < m.length; e++) {
                                            let t = m[e];
                                            t.anchor.set(.5, .5), t.scale.x = .4, t.scale.y = .4, p.push(t), t.speed = .03;
                                            let n = i(t.title[0], t.title[1], "center");
                                            t.addChild(n), n.y = -80;
                                            let a = Math.cos((e + 1 - 2) / 8 * Math.PI * 2),
                                                o = Math.sin((e + 1 - 2) / 8 * Math.PI * 2);
                                            t.x = 160 * a, t.y = 160 * o, t.original = {
                                                x: t.x,
                                                y: t.y
                                            }, r.addChild(t)
                                        }
                                        let y = new PIXI.Sprite(G["Sprites/GameUI"][0]);
                                        l.stage.addChild(y), y.anchor.set(.5, .5), y.x = l.screen.width / 2, y.y = l.screen.height / 2, y.alpha = 0;
                                        let g = !1,
                                            f = new ae((function() {
                                                g || (g = !0, Ie.blurPan(l.stage, (function() {
                                                    ! function() {
                                                        t.destroy();
                                                        for (let e = 0; e < p.length; e++) p[e].destroy();
                                                        r.destroy(), y.destroy(), f.destroy(), a.destroy(), l.ticker.remove(x)
                                                    }(), e()
                                                })))
                                            }), l.screen.width / 2, l.screen.height / 2 + 200, 180, 40, n.ui.continueUpperCase, 0, .5, .5, 1, "center");
                                        f.element.visible = !1, l.stage.addChild(f.element);
                                        let x = function() {
                                            if (o += ke, o >= 130) {
                                                let e = o - 130;
                                                y.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20), y.scale.x = window.eases.easeOutElastic(Math.min(100, e), .1, .9, 100)
                                            }
                                            if (o >= 230) {
                                                let e = o - 230;
                                                y.scale.x = window.eases.easeOutBack(Math.min(30, e), 1, -.1, 30)
                                            }
                                            if (o >= 260) {
                                                let e = o - 260;
                                                y.scale.x = window.eases.easeOutBack(Math.min(30, e), .9, .1, 30), r.x = y.x, r.y = y.y, r.scale.x = d.linear(r.scale.x, 1, .05, ke), r.rotation = d.linear(r.rotation, 12, .05, ke), r.scale.y = r.scale.x, r.visible = !0, a.y = d.linear(a.y, l.screen.height / 2 - 250, .05, ke);
                                                for (let e = 0; e < p.length; e++) p[e].rotation = -r.rotation, p[e].x = d.linear(p[e].x, p[e].original.x, p[e].speed, ke), p[e].y = d.linear(p[e].y, p[e].original.y, p[e].speed, ke)
                                            }
                                            if (o >= 320) {
                                                let e = o - 320;
                                                f.element.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20), f.element.visible = !0
                                            }
                                            if (y.scale.y = y.scale.x, o >= 100 && o < 260) {
                                                let e = o - 100;
                                                a.y = l.screen.height / 2 + window.eases.easeInOutQuad(Math.min(60, e), 0, -100, 60)
                                            }
                                        };
                                        l.ticker.add(x)
                                    }((function() {
                                        p.lit = !1, he.tired = !1, he.switchData(D.Teardrop), he.switchParts(se.Teardrop), w.sleeping = !1, he.gotoPart("Wave"), w.happiness = 20, w.hunger = 50, w.sleep = 80, E.offset = w.happiness / 100, L.offset = w.hunger / 100, N.offset = w.sleep / 100, s.filters = [], P("livingRoom", !0), v = 0, t.skipIntro = !0, setTimeout((function() {
                                            0 == v && t.sfx && R.wave.play()
                                        }), 2e3), t.music && R.brittlerille.play(), t.introMode = !1, b()
                                    }))
                                }), 120, 30), p.lit = !p.lit, p.lit ? (t.sfx && (R.switchon.attack = 0, R.switchon.stop(), R.switchon.play()), s.filters = []) : (he.idle = -1, w.sleeping = !0, R.brittlerille.pause(), he.canPat = !1, he.tired ? he.gotoPart("Sleep") : (he.tired = !0, he.switchData(D.TeardropTired), he.switchParts(se.TeardropTired), he.gotoPart("Sleepy"), he.onAnimationEnd = function() {
                                    he.gotoPart("Sleep")
                                }), s.filters = [k], t.sfx && (R.switchoff.attack = 0, R.switchoff.stop(), R.switchoff.play())), b()
                            })), r = function() {
                                s.filters = [], p.removeAllListeners(), r = function() {}
                            }, s.addChild(m), he.x = 20, he.y = 80, he.rotation = .2, N.selected.visible = !0
                        }
                    };
                    h ? f() : Ie.blurPan(l.stage, f)
                };
                he = Y(D.Teardrop, se.Teardrop), he.size = 1, "none" != t.costume && y[t.costume].apply(he), he.write = function(e = !0, t = 1, i = "Book Text") {
                    he.interactive = !1, e ? he.gotoPart("BookOpen") : (t--, he.gotoPart("Write")), he.onAnimationEnd = function() {
                        t--, he.gotoPart("Write"), -1 == t && (he.gotoPart("SendMessage"), he.onAnimationEnd = function() {}, setTimeout((function() {
                            he.interactive = !0, Ie.book(i)
                        }), 750))
                    }
                }, s.addChild(he), he.play(60), w.sleep < 20 ? (he.tired = !0, he.switchData(D.TeardropTired), he.switchParts(se.TeardropTired), he.gotoPart("Idle")) : (he.tired = !1, he.gotoPart("Wave")), w.sleeping ? (R.brittlerille.pause(), he.visible = !1, he.tired = !0, he.switchData(D.TeardropTired), he.switchParts(se.TeardropTired), he.idle = -1, he.gotoPart("Sleep")) : he.idle = "Idle", he.canPat = !1, setTimeout((function() {
                    0 == v && (w.sleeping || w.sleep < 20 || t.sfx && R.wave.play())
                }), 2e3), g && setTimeout((function() {
                    w.sleeping || (he.canPat = !0)
                }), 4e3);
                let M = -1;

                function k() {
                    L.buttonContainer.visible = !0, L.buttonContainer.alpha = 0, M = 0, he.canPat = !0;
                    let e = 0;
                    U.visible = !0, U.alpha = 0, l.ticker.add((function t() {
                        if (e += ke, 2 == M && U.alpha <= 1 && (U.alpha += 1 / 30), 0 == M) L.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16, L.empty.scale.y = L.empty.scale.x, U.alpha <= 1 && (U.alpha += 1 / 30), e > 30 * Math.PI && (M = 1);
                        else if (1 == M || 1.5 == M) {
                            if (L.empty.scale.x = 1, L.empty.scale.y = L.empty.scale.x, U.alpha < 0) return 1.5 == M && (M = 2), e = 0, void(U.rotation = -Math.PI / 2);
                            U.alpha -= 1 / 30
                        }
                        if (0 != M && 1 != M || (U.x = l.screen.width / 2, U.y = L.buttonContainer.y - 100 + 5 * Math.sin(e / 10)), 4 == M) N.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16, N.empty.scale.y = N.empty.scale.x, U.alpha <= 1 && (U.alpha += 1 / 30), e > 30 * Math.PI && (M = 5);
                        else if (5 == M) {
                            if (N.empty.scale.x = 1, N.empty.scale.y = N.empty.scale.x, U.alpha < 0) return e = 0, void l.ticker.remove(t);
                            U.alpha -= 1 / 30
                        }
                        4 != M && 5 != M || (U.x = N.buttonContainer.x, U.y = N.buttonContainer.y - 100 + 5 * Math.sin(e / 10)), 2 != M && 3 != M || (U.x = l.screen.width / 2 + 5 * Math.sin(e / 10), U.y = 100), 2 == M && e > 30 * Math.PI && (M = 3), 3 == M && (U.alpha < 0 && (e = 0), U.alpha -= 1 / 30), U.alpha >= 1 && (U.alpha = 1)
                    }))
                }

                function T() {
                    g || (he.gotoPart("SendMessage"), setTimeout((function() {
                        Ie.book(n.dialogue.yoyleberryinvitation, k), he.interactive = !0
                    }), 750), he.onAnimationEnd = function() {})
                }
                g || (t.introMode = !0, he.onAnimationEnd = function() {
                    he.interactive = !1, he.gotoPart("BookOpen"), he.onAnimationEnd = function() {
                        he.gotoPart("Write"), he.onAnimationEnd = function() {
                            he.gotoPart("Write"), he.onAnimationEnd = function() {
                                he.gotoPart("SendMessage"), setTimeout((function() {
                                    v < 5 ? Ie.book(n.dialogue.greet, T) : (w.happiness -= 10, Ie.book(n.dialogue.greet2, T))
                                }), 750), he.onAnimationEnd = function() {
                                    he.gotoPart("BookOpen"), he.onAnimationEnd = function() {
                                        he.gotoPart("Write")
                                    }
                                }
                            }
                        }
                    }
                }), he.x = 0, he.y = 100;
                let A = new PIXI.Rectangle(-60, -160, 120, 180);
                he.hitArea = A, he.interactive = !0, he.pointerPressing = !1, he.pointer = {}, he.pointerDistance = {}, he.patting = !1;
                let X = 0;
                he.on("pointerdown", (function(e) {
                    he.pointer = {
                        x: e.clientX / o,
                        y: e.clientY / o
                    }, he.pointerPressing = !0, X = Date.now()
                })), he.on("pointermove", (function(e) {
                    let t = {
                        x: e.clientX / o,
                        y: e.clientY / o
                    };
                    K(he.pointer.x, he.pointer.y, t.x, t.y) > 10 && he.pointerPressing && he.canPat && (he.patting ? (w.happiness += .02, w.progress += .02, he.patAnimationForce += .05, he.patAnimationForce > .2 && (he.patAnimationForce = .2)) : (he.hitArea = new PIXI.Rectangle(-90, -200, 180, 220), he.patAnimationForce = .1, he.idle = -1, he.patting = !0, he.patAnimation = 0, he.gotoPart("Pat"), he.pointer = {
                        x: e.clientX / o,
                        y: e.clientY / o
                    })), he.pointerDistance = {
                        x: t.x - he.pointer.x,
                        y: t.y - he.pointer.y
                    }
                })), he.on("pointerout", (function(e) {
                    1 == he.patting && (he.gotoPart("PatStop"), he.patting = !1, he.hitArea = A, he.idle = "Idle"), he.pointerPressing = !1
                })), he.on("pointerup", (function() {
                    if (1 == he.patting && (he.gotoPart("PatStop"), he.patting = !1, he.idle = "Idle", he.hitArea = A), he.pointerPressing = !1, Date.now() - X < 200) {
                        he.canPat = !0, t.totalSlaps++, v++, 2763 == t.totalSlaps && (Ie.achievementQueue("slapTD2763"), b());
                        let e = 1 + Math.floor(4 * Math.random());
                        R.wave.stop(), t.sfx && (R["slap" + e].attack = 0, R["slap" + e].stop(), R["slap" + e].play()), he.gotoPart("Slap"), w.sleeping && t.music && R.brittlerille.play(), p.lit = !0, s.filters = [], he.idle = "Idle", w.sleeping = !1, he.currentPart = -1
                    }
                }));
                let E = new te(G["Sprites/GameUI"][1], G["Sprites/GameUI"][0], w.happiness / 100);
                E.buttonContainer.x = 60, E.buttonContainer.y = l.screen.height - 60 + 0, E.buttonContainer.scale.x = .8, E.buttonContainer.scale.y = .8, l.stage.addChild(E.buttonContainer), e.x = E.buttonContainer.x, e.y = E.buttonContainer.y, $(E.buttonContainer, (function() {
                    E.holding && P("livingRoom")
                })), E.holding = !1, E.buttonContainer.on("pointerdown", (function() {
                    E.holding = !0, setTimeout((function() {
                        E.holding && (E.holding = !1, E.buttonContainer.emit("pointerup"), t.introMode || (e.active = !e.active))
                    }), 250)
                })), E.buttonContainer.on("pointerup", (function() {
                    E.holding = !1
                }));
                let L = new te(G["Sprites/GameUI"][4], G["Sprites/GameUI"][3], w.hunger / 100);
                L.buttonContainer.x = l.screen.width / 2, L.buttonContainer.y = l.screen.height - 60 + 0, L.buttonContainer.scale.x = .8, L.buttonContainer.scale.y = .8, l.stage.addChild(L.buttonContainer), $(L.buttonContainer, (function() {
                    P("kitchen")
                })), L.selected.visible = !1;
                let N = new te(G["Sprites/GameUI"][6], G["Sprites/GameUI"][5], w.sleep / 100);
                N.buttonContainer.x = l.screen.width - 60, N.buttonContainer.y = l.screen.height - 60 + 0, N.buttonContainer.scale.x = .8, N.buttonContainer.scale.y = .8, l.stage.addChild(N.buttonContainer), $(N.buttonContainer, (function() {
                    P("bedroom")
                })), N.selected.visible = !1;
                let U = new PIXI.Sprite(G["Sprites/GameUI"][7]);
                U.x = 100, U.y = 100, U.visible = !1, U.anchor.set(.5, .5), l.stage.addChild(U);
                let B = Ie.coinCounter();
                B.x = 20, B.y = 20, l.stage.addChild(B);
                let F = new te(G["Sprites/GameUI"][28], G["Sprites/GameUI"][27], w.progress / w.progressNeeded, !0, !1);
                F.buttonContainer.x = l.screen.width - 60, F.buttonContainer.y = 60, l.stage.addChild(F.buttonContainer), F.selected.visible = !1, $(F.buttonContainer, (function() {}));
                let O = i(t.level, 32, "center", void 0, 2);
                O.y = -2, F.buttonContainer.addChild(O);
                let _ = new oe((function() {
                    Ie.flash(!1, (function() {
                        Ie.settings((function() {}))
                    }))
                }), G["Sprites/GameUI"][24]);
                _.sprite.x = l.screen.width - 20 + B.pivot.y, _.sprite.y = 20 - B.pivot.y, g || (N.buttonContainer.visible = !1, L.buttonContainer.visible = !1, B.visible = !1), l.ticker.add((function() {
                    if (he.patting) {
                        let e = Math.sin(Math.abs(he.pointerDistance.x) / 100) / 4 + Math.cos(he.patAnimation) / 50,
                            t = Math.sin(-he.pointerDistance.y / 100) / 4 + Math.sin(he.patAnimation) / 50;
                        he.scale.x = d.linear(he.scale.x, (1 + e - t) * he.size, .1, ke), he.scale.y = d.linear(he.scale.y, (1 + t - e) * he.size, .1, ke), he.skew.x = d.linear(he.skew.x, -he.pointerDistance.x / 500, .1, ke), he.patAnimation += he.patAnimationForce, he.patAnimationForce = d.linear(he.patAnimationForce, 0, .01, ke)
                    } else he.skew.x = d.linear(he.skew.x, 0, .1, ke), he.scale.x = d.linear(he.scale.x, he.size, .1, ke), he.scale.y = d.linear(he.scale.y, he.size, .1, ke);
                    e.active ? (L.buttonContainer.x = d.linear(L.buttonContainer.x, l.screen.width / 2 + 35, .05, ke), e.scale.x = d.linear(e.scale.x, E.buttonContainer.scale.x, .05, ke), e.rotation = d.linear(e.rotation, 12, .05, ke), e.scale.y = e.scale.x) : (e.scale.x = d.linear(e.scale.x, .1, .05, ke), e.rotation = d.linear(e.rotation, -1, .05, ke), e.scale.y = e.scale.x, L.buttonContainer.x = d.linear(L.buttonContainer.x, l.screen.width / 2, .05, ke));
                    for (let t = 0; t < S.length; t++) S[t].rotation = -e.rotation, e.active ? (S[t].x = d.linear(S[t].x, S[t].original.x, S[t].speed, ke), S[t].y = d.linear(S[t].y, S[t].original.y, S[t].speed, ke)) : (S[t].x = d.linear(S[t].x, 0, .01, ke), S[t].y = d.linear(S[t].y, 0, .01, ke));
                    E.offset = d.linear(E._offset, w.happiness / 100, .04, ke), 0 == w.happiness ? E.empty.texture = G["Sprites/GameUI"][2] : E.empty.texture = G["Sprites/GameUI"][1], L.offset = d.linear(L._offset, w.hunger / 100, .04, ke), N.offset = d.linear(N._offset, w.sleep / 100, .04, ke), B.updateCounter(d.linear(B.getCounterAmount(), x.coins, .05, ke)), F.offset = d.linear(F._offset, w.progress / w.progressNeeded, .04, ke), g || -1 == M || (L.buttonContainer.alpha = d.linear(L.buttonContainer.alpha, 1, .05, ke)), t.introMode && M >= 4 && (N.buttonContainer.alpha = d.linear(N.buttonContainer.alpha, 1, .05, ke))
                })), new ae((function() {
                    let e = Ie.book("This will absolutely \nerase any user data \nfrom localStorage.\nPROCEED WITH \nCAUTION!\n \n \n \n(exit this page to\ncancel)", (function() {}), 60);
                    e.onDestroyed = function() {
                        t.destroy()
                    };
                    let t = new ae((function() {
                        setInterval((function() {
                            let e = Y(D.Teardrop, se.Teardrop);
                            e.x = l.screen.width * Math.random(), e.y = l.screen.height * Math.random(), e.rotation = Math.random() * Math.PI * 4, e.play(60), e.gotoPart("Wave"), l.stage.addChild(e)
                        }), 1e3 / 60), setInterval((function() {
                            let e = Y(D.Box, se.Box);
                            e.x = l.screen.width * Math.random(), e.y = l.screen.height * Math.random(), e.rotation = Math.random() * Math.PI * 4, e.play(60), e.gotoPart("Jump"), l.stage.addChild(e)
                        }), 1e3 / 60), setTimeout((function() {
                            localStorage.clear(), window.location = window.location
                        }), 500)
                    }), -75, 0, 200, 40, "CONTINUE", 0, 0, 0, 2, "center");
                    e.addChild(t.element)
                }), l.screen.width - 20, 20, 80, 30, "RESET", 0, 1, 0, 1, "center"), window.addEventListener("resize", (function() {
                    e.y = E.buttonContainer.y, s.x = l.screen.width / 2, s.y = l.screen.height / 2, E.buttonContainer.y = l.screen.height - 60 + 0, L.buttonContainer.y = l.screen.height - 60 + 0, N.buttonContainer.x = l.screen.width - 60, N.buttonContainer.y = l.screen.height - 60 + 0, _.sprite.x = l.screen.width - 20 + B.pivot.y, F.buttonContainer.x = l.screen.width - 60
                }))
            }
            if (I.anchor.set(.5, .5), g) S();
            else {
                let P;
                P = new ae((function() {
                    g = !0, P.destroy(), I.destroy(), l.ticker.remove(k), M.destroyAnimation(), f = 1, p.scale.x = 1, p.scale.y = 1, S(), Ie.flash(!0), t.skipIntro = !0, b()
                }), 20, l.screen.height - 20, 100, 20, n.ui.skipIntro, 0, 0, 1, 2, "center"), P.element.alpha = .5, l.stage.addChild(I), I.x = l.screen.width / 2, I.y = l.screen.height / 2 - 100, I.fade = 1, I.alpha = 0;
                let M = Y(D.Box, se.Box);

                function k() {
                    P.dissapear && (P.element.hover ? P.element.alpha = d.linear(P.element.alpha, .5, .1, ke) : P.element.alpha = d.linear(P.element.alpha, 0, .1, ke)), I.alpha = d.linear(I.alpha, I.fade, .1, ke), null != I.shake && 0 != I.shake && null != I.orig && (I.x = I.orig.x + (Math.random() - .5) * I.shake, I.y = I.orig.y + (Math.random() - .5) * I.shake, I.rotation = (Math.random() - .5) * I.shake / 50, I.shake = d.linear(I.shake, 0, .1, ke)), I.go && (I.x += I.vx * ke, I.vx += 5 * ke), f = d.linear(f, M.timesBeforeSteal <= 0 ? 1 : 1.5, .05, ke), M.scale.x = f, M.scale.y = f, p.scale.x = d.linear(1 * f, 1, .2), p.scale.y = d.linear(1 * f, 1, .2)
                }
                M.timesBeforeSteal = 10, s.addChild(M), M.play(60), M.gotoPart("Jump"), M.pivot.y = -100, M.x = 0, M.y = 0, M.interactive = !0, M.hitArea = new PIXI.Rectangle(-100, -160, 200, 180), M.on("pointerdown", (function() {
                    P.dissapear = !0, M.timesBeforeSteal <= 0 || (M.timesBeforeSteal--, 0 == M.timesBeforeSteal ? (I.fade = 1, I.text = n.intro.hey, I.orig = {
                        x: l.screen.width / 2,
                        y: l.screen.height / 2 + 50
                    }, setTimeout((function() {
                        I.shake = void 0, I.go = !0, I.vx = 0, I.fade = 0
                    }), 1e3), setTimeout((function() {
                        I.go = !1, I.x = l.screen.width / 2, I.y = l.screen.height / 2, I.text = n.intro.who, I.fade = 1
                    }), 2e3), setTimeout((function() {
                        I.destroy(), l.ticker.remove(k), M.destroyAnimation(), Ie.flash(!1, S), b()
                    }), 4e3), I.y = l.screen.height / 2 + 50, I.shake = 10, I.fontSize = 48, M.gotoPart("Steal")) : (I.fade = 0, "Click1" == M.currentPart ? M.gotoPart("Click2") : M.gotoPart("Click1")))
                })), l.ticker.add(k)
            }
            Ie.flash(!0)
        },
        levelUp: function() {
            t.minigameMusic && (R.levelup.stop(), R.levelup.play(), R.brittlerille.pause());
            let e = 6737151;
            null != y[t.costume].color && t.levelUpCostumes && (e = y[t.costume].color);
            let a = new PIXI.Sprite(G["Sprites/Rooms"][15]);
            a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), l.stage.addChild(a), a.interactive = !0;
            let o = new PIXI.Sprite(G["Sprites/Rooms"][17]);
            o.x = l.screen.width / 2, o.y = l.screen.height / 2 - 100, o.alpha = .3, o.anchor.set(.5, .5), o.tint = e, l.stage.addChild(o);
            let r = new PIXI.Sprite(G["Sprites/Rooms"][15]);
            r.tint = e, r.x = l.screen.width / 2, r.y = l.screen.height / 2, r.anchor.set(.5, 0), l.stage.addChild(r);
            let s = new PIXI.Sprite(G["Sprites/Bodies"][68]);
            s.x = l.screen.width / 2, s.y = l.screen.height / 2, s.anchor.set(.5, .5), l.stage.addChild(s);
            let d = new PIXI.Sprite(G["Sprites/Bodies"][68]);
            d.tint = e, d.anchor.set(.5, .5), s.addChild(d), d.scale.x = .8, d.scale.y = .8, d.alpha = .8;
            let c = new PIXI.Sprite(G["Sprites/Rooms"][16]);
            c.x = l.screen.width / 2, c.y = l.screen.height / 2, c.anchor.set(.5, .5), l.stage.addChild(c), c.blendMode = PIXI.BLEND_MODES.ADD, c.alpha = 0;
            let h = i(n.ui.newLevel + ": " + t.level, 48, "center");
            h.x = l.screen.width / 2, h.y = l.screen.height / 2 - 200, h.visible = !1, l.stage.addChild(h);
            let u = !1,
                p = new ae((function() {
                    u || (u = !0, Ie.blurPan(l.stage, (function() {
                        p.destroy(), o.destroy(), h.destroy(), t.music && R.brittlerille.play(), t.canLevelUp = !0, a.destroy(), r.destroy(), m.destroyAnimation(), d.destroy(), s.destroy(), c.destroy(), l.ticker.remove(x)
                    })))
                }), l.screen.width / 2, l.screen.height / 2 + 150, 180, 40, n.ui.continueUpperCase, 0, .5, .5, t.levelUpCostumes ? 2 : 10, "center");
            l.stage.addChild(p.element), p.element.alpha = 0, setTimeout((function() {
                p.animationOffset = f, p.visible = !0
            }), 3e3);
            let m = Y(D.tearDropLevelUp);
            l.stage.addChild(m);
            let g = !0;
            if ("uglysweater" != t.costume && "_td_costume1" != t.costume || (g = !1), t.levelUpCostumes && g) {
                let e = {
                    a: {
                        d: m.a.d,
                        e: m.a.e,
                        f: m.a.f,
                        g: m.a.g,
                        h: m.a.h,
                        i: m.a.i2,
                        j: m.a.j,
                        k: m.a.k
                    },
                    c: m.c,
                    b: m.b
                };
                null != y[t.costume].applyMinigame ? (y[t.costume].applyMinigame(m), y[t.costume].applyMinigame(e)) : (y[t.costume].apply(m), y[t.costume].apply(e))
            }
            m.play(), m.x = l.screen.width / 2, m.y = l.screen.height / 2;
            let f = 0,
                x = function() {
                    if (p.visible) {
                        let e = f - p.animationOffset;
                        p.element.alpha = eases.easeOutQuint(Math.min(60, e), 0, 1, 60)
                    }
                    if (f > 107) {
                        let e = f - 107;
                        h.visible = !0, h.y = l.screen.height / 2 - eases.easeOutQuint(Math.min(30, e), 150, 50, 30), h.scale.x = eases.easeOutElastic(Math.min(75, e), .5, .5, 75), h.scale.y = eases.easeOutElastic(Math.min(90, e), .5, .5, 90)
                    }
                    m.y = l.screen.height / 2 - eases.easeInOutQuad(Math.min(150, f), -100, 50, 150), r.y = l.screen.height / 2 + eases.easeInOutQuad(Math.min(150, f), 0, -25, 150), m.scale.x = eases.easeInOutQuad(Math.min(120, f), .4, .6, 120), m.scale.y = m.scale.x, s.y = m.y, s.scale.x = m.scale.x, s.scale.y = m.scale.y / eases.easeInOutQuad(Math.min(150, f), 2, 2, 150), d.y = eases.easeInOutQuad(Math.min(150, f), 16, 16, 150), o.y = l.screen.height / 2 + eases.easeInOutQuad(Math.min(150, f), -100, -30, 150), o.scale.x = 1 + eases.easeInOutQuad(Math.min(150, f), 0, .025, 150), o.scale.y = o.scale.x, c.y = m.y - 75 * m.scale.x;
                    let e = Math.max(0, f - 90);
                    c.alpha = eases.easeInQuint(Math.min(30, e), 0, .1, 30), f += ke
                };
            l.ticker.add(x)
        },
        coinCounter: function() {
            let e = new PIXI.Sprite(G["Sprites/GameUI"][9]),
                t = G["Sprites/GameUI"][9].trim;
            e.pivot.x = -t.width / 2, e.pivot.y = -t.height / 2, e.anchor.set(.5, .5), l.stage.addChild(e);
            let i = new PIXI.BitmapText(x.coins, {
                fontSize: 24,
                fontName: "MenuShag"
            });
            i.anchor.set(0, .5), i.width > 140 && (i.width = 140, i.scale.y = i.scale.x), i.x = -t.width / 2 + 60, i.y = -t.height / 2 + 22, e.addChild(i);
            let n = x.coins;
            return e.getCounterAmount = function() {
                return n
            }, e.updateCounter = function(e) {
                i.text = Math.floor(e), i.scale.x = 1, i.width > 140 && (i.width = 140), i.scale.y = i.scale.x, n = e
            }, e.destroyCounter = function() {
                e.removeChild(i), i.destroy(), e.destroy()
            }, e
        },
        fridge: function(e = function() {}) {
            let a = new PIXI.Sprite(G["Sprites/Rooms"][5]);
            a.scale.x = 1.1, a.scale.y = 1.1, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), l.stage.addChild(a), a.interactive = !0;
            let r = new PIXI.Container;
            l.stage.addChild(r);
            let s = 0,
                c = 0,
                h = l.screen.width / 2 - 20,
                u = Ie.coinCounter();
            r.addChild(u);
            let p = x.coins;
            u.x = 20, u.y = 20;
            let m = {},
                y = 0,
                g = 0,
                f = 0,
                w = [],
                v = t.introMode ? new PIXI.BitmapText("", {
                    fontSize: 24,
                    fontName: "MenuShag",
                    breakWords: !0,
                    wordWrap: !0,
                    wordWrapWidth: 300,
                    maxWidth: 300,
                    whiteSpace: "normal",
                    align: "center"
                }) : i("", 32, "center");
            v.anchor.set(.5, .5), v.x = l.screen.width / 2, v.y = l.screen.height - 150;
            let I = new PIXI.Container,
                S = new PIXI.Graphics,
                C = !t.introMode;
            C && (I.mask = S), r.addChild(I), r.addChild(v), I.x = 5, I.y = 80;
            let P, M, k, T = l.screen.width - 10,
                A = l.screen.height - 170;
            S.beginFill(0), S.drawRect(I.x, I.y, T, A), S.endFill(), I.interactive = !0, C && (I.on("pointerdown", (function(e) {
                let t = e.clientY / o;
                I.dragOffset = {
                    y: t - I.y
                }, I.prevY = I.y, I.vy = 0, I.scrolling = !0, I.origY = I.y
            })), M = function(e) {
                if (!I.scrolling) return;
                let t = e.clientY / o;
                if (Math.abs(I.origY - I.y) > 10)
                    for (let e = 0; e < I.children.length; e++) I.children[e].emit("pointerout"), I.children[e].interactive = !1;
                I.prevY = I.y, I.y = t - I.dragOffset.y
            }, k = function() {
                for (let e = 0; e < I.children.length; e++) I.children[e].interactive = !0;
                I.scrolling = !1
            }, document.addEventListener("pointermove", M), document.addEventListener("pointerup", k), I.vy = 0, P = function() {
                let e = 95 * Math.ceil(-X / 2) + 80 + A;
                I.vy = d.linear(I.vy, 0, .05, ke), I.scrolling ? I.vy = I.y - I.prevY : I.y += I.vy, I.y >= 80 && (I.y = 80, I.vy = 0), I.y <= e && (I.y = e, I.vy = 0)
            }, l.ticker.add(P));
            let X = 0;
            v.targetAlpha = 0;
            for (let e in ve) {
                if ("regularcake" != e && t.introMode) continue;
                X++;
                let a = new ae((function() {
                        if (o.requiredLevel > t.level) Ie.message("You need atleast level " + o.requiredLevel + " to buy this item!", G["Sprites/GameUI"][35]);
                        else {
                            if (v.text = "", t.introMode && (v.alpha = v.targetAlpha, v.targetAlpha = 1, v.y = l.screen.height / 2 + 100, v.text = "Go to the fridge using the button below, drag a food item to the plate!"), o.cost > p) return t.sfx && (R.fail.stop(), R.fail.play()), g < .01 && (f = 0), g = 2, void(v.text = n.ui.notEnoughCoins);
                            for (let i = 0; i < z.length; i++)
                                if (!z[i].full) {
                                    let n = new PIXI.Sprite(G["Sprites/Food"][o.texture]);
                                    return n.anchor.set(.5, .5), n.y = -n.texture.trim.height, n.vr = Math.random() - .5, n.vy = 2 + 2 * Math.random(), n.x = Math.random() * l.screen.width, l.stage.addChild(n), m[y++] = n, p -= o.cost, t.sfx && (R.purchase.stop(), R.purchase.play()), x.coins = p, Q(e, i), void(x.fridge[i] = e)
                                } g < .01 && (f = 0), g = 2, v.text = n.ui.notEnoughSpace, t.sfx && (R.fail.stop(), R.fail.play())
                        }
                    }), l.screen.width / 2 - h + c % 2 * (h + 5) - 2.5, 95 * Math.floor(c / 2), h, 90, "", 0, 0, 0, 2),
                    o = ve[e];
                1 != o.hidden && (I.addChild(a.element), c++);
                let r = new PIXI.Sprite(G["Sprites/Food"][o.texture]),
                    s = new PIXI.Rectangle(0, 0, 0, 0);
                r.hitArea = s, a.element.addChild(r), r.anchor.set(.5, .5), r.x = 40, r.y = 40;
                let d = i(o.name, 16, "left", "middle");
                d.x = 70, d.y = 20, a.element.addChild(d), d.width > 80 && (d.width = 80), d.scale.y = d.scale.x;
                let u = i(o.cost, 16);
                u.x = 100, u.width > 60 && (u.width = 60), u.scale.y = u.scale.x, u.y = 40 + (16 * -u.scale.y + 16) / 2, a.element.addChild(u);
                let S = new PIXI.Sprite(G["Sprites/GameUI"][14]);
                if (a.element.addChild(S), S.x = 80, S.y = 50, S.scale.x = .75, S.scale.y = .75, S.anchor.set(.5, .5), S.hitArea = s, w.push(S), w.push(u), w.push(d), w.push(a), o.requiredLevel > t.level) {
                    let e = new PIXI.NineSlicePlane(G.inputNineSlice[14]);
                    e.width = a.element.width, e.height = a.element.height, a.element.addChild(e), e.alpha = .8, e.hitArea = s;
                    let t = new PIXI.Sprite(G["Sprites/GameUI"][41]);
                    t.x = a.element.height / 2, t.y = a.element.height / 2, t.anchor.set(.5, .5), t.scale.x = .75, t.scale.y = .75, a.element.addChild(t), t.hitArea = s;
                    let n = i("LEVEL " + o.requiredLevel, 24, "left", "middle");
                    n.x = a.element.height / 2 + 40, n.y = a.element.height / 2 - 2, n.width > a.element.width - n.x - 20 && (n.width = a.element.width - n.x - 20, n.scale.y = n.scale.x), a.element.addChild(n)
                }
            }
            let E = Ie.exitButton((function() {
                e(), b(), Ie.flash(!1, V)
            }), l.screen.width - 40, 40, .4, 0);
            t.introMode && t.hideFridgeExit ? (E.sprite.targetAlpha = 0, E.sprite.visible = !1) : E.sprite.targetAlpha = 1, l.stage.addChild(E.sprite);
            let L = 50;
            r.origX = 0, r.time = 50;
            let N = !1,
                D = function() {
                    if (!N) {
                        u.updateCounter(d.linear(u.getCounterAmount(), p, .1, ke));
                        for (let e in m) {
                            let t = m[e];
                            t.y += t.vy * ke, t.x = d.linear(t.x, l.screen.width / 2, .025), t.vy += .5 * ke, t.rotation += t.vr / 10 * ke, t.y > l.screen.height + 200 && (t.destroy(), delete m[e])
                        }
                        r.x = window.eases.easeInOutQuad(L, r.origX, -s * l.screen.width - r.origX, r.time), g > .01 && (r.x += Math.cos(f) * g * 5, f += .5 * ke, g = d.linear(g, 0, .1, ke)), L += ke, r.time <= L && (r.time = 50, L = 50), a.x = l.screen.width / 2 + r.x / 50;
                        for (let e = 0; e < W.length; e++) {
                            let t = W[e];
                            t.dragging ? (t.x = d.linear(t.x, t.x2, .4, ke), t.y = d.linear(t.y, t.y2, .4, ke), t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100, t.scale.x = 1 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100, t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100) : (t.x = d.linear(t.x, t.x2, .2, ke), t.y = d.linear(t.y, t.y2, .3, ke), t.scale.x = d.linear(t.scale.x, 1, .2, ke), t.scale.y = d.linear(t.scale.y, 1, .2, ke), t.rotation = d.linear(t.rotation, 0, .3, ke))
                        }
                        t.introMode && (v.alpha = d.linear(v.alpha, v.targetAlpha, .1, ke), E.sprite.alpha = d.linear(E.sprite.alpha, E.sprite.targetAlpha, .1, ke))
                    }
                };
            l.ticker.add(D);
            let U = new ae((function() {
                0 != s && (s = 0, r.origX = r.x, r.time = Math.min(50, L), L = 0)
            }), l.screen.width / 2 - 2.5, l.screen.height - 80, 120, 30, n.ui.shop, 0, 1, 0, 1, "center");
            l.stage.addChild(U.element);
            let B = function() {
                    1 != s && (s = 1, r.origX = r.x, r.time = Math.min(50, L), L = 0)
                },
                F = new ae(B, l.screen.width / 2 + 2.5, l.screen.height - 80, 120, 30, n.ui.fridge, 0, 0, 0, 1, "center");
            l.stage.addChild(F.element), 1 == t.lastFridgePage && (B(), L = r.time);
            let O = new PIXI.Container;
            O.x = l.screen.width, r.addChild(O);
            let _ = new PIXI.Sprite(G["Sprites/Food"][0]);
            _.anchor.set(.5, .5), _.x = l.screen.width / 2, _.y = l.screen.height - 130, O.addChild(_);
            let z = [],
                W = [];
            new Array(23).fill("");
            for (let e = 0; e < 20; e++) {
                let t = new PIXI.Sprite(G["Sprites/GameUI"][15]);
                z.push(t), t.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), t.x = 32 + e % 4 * 79 + (l.screen.width / 2 - 158) + 7.5, t.y = 100 + 79 * Math.floor(e / 4), t.anchor.set(.5, .5), t.full = !1, O.addChild(t)
            }
            for (let e = 0; e < 3; e++) {
                let t = new PIXI.Sprite(G["Sprites/GameUI"][15]);
                z.push(t), t.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), t.x = _.x - 50 + 50 * e, t.y = _.y, t.anchor.set(.5, .5), t.full = !1, O.addChild(t), t.visible = !1
            }
            let j = 0;

            function Q(e, i) {
                let n = z[i];
                if ("" != e && null != e) {
                    let a = new PIXI.Sprite(G["Sprites/Food"][ve[e].texture]);
                    a.scale.x = 1, a.scale.y = a.scale.x, a.box = i, a.item = e, n.food = j, n.full = !0, a.on("pointerdown", (function() {
                        for (let e = 0; e < W.length; e++) W[e].interactive = !1;
                        for (let e = 0; e < z.length; e++) z[e].interactive = !1;
                        a.interactive = !0, O.addChild(a)
                    })), a.on("pointerup", (function() {
                        for (let e = 0; e < W.length; e++) W[e].interactive = !0;
                        let i = !1;
                        null != a.originalPosition && K(a.x, a.y, a.originalPosition.x, a.originalPosition.y) < 20 && (i = !0);
                        let n = -1;
                        if (i) {
                            n = 20;
                            for (let e = 0; e < 3; e++)
                                if (1 != z[e + 20].full) {
                                    n = 20 + e;
                                    break
                                }
                        } else
                            for (let e = 0; e < z.length; e++) K(z[e].x, z[e].y, a.x, a.y) < 40 && (n = e);
                        let o = n;
                        if (-1 != n)
                            if (n >= 20 && t.introMode && !E.sprite.visible && (E.sprite.alpha = 0, E.sprite.visible = !0, E.sprite.targetAlpha = 1, t.hideFridgeExit = !1), 0 == z[o].full) a.x2 = z[o].x, a.y2 = z[o].y, z[a.box].full = !1, z[a.box].food = -1, x.fridge[a.box] = "", a.box = o, z[a.box].food = a.id, x.fridge[a.box] = e, z[a.box].full = !0;
                            else {
                                let t = W[z[o].food];
                                t.x2 = z[a.box].x, t.y2 = z[a.box].y, z[a.box].food = z[o].food, t.box = a.box, x.fridge[a.box] = t.item, z[o].food = a.id, a.x2 = z[o].x, a.y2 = z[o].y, a.box = o, x.fridge[a.box] = e
                            } a.x2 = z[a.box].x, a.y2 = z[a.box].y, a.interactive = !0
                    })), a.anchor.set(.5, .5), a.x = n.x, a.y = n.y, W.push(a), a.id = j, j++, O.addChild(a), a.interactive = !0, ee(a, new PIXI.Rectangle(-30, -30, 60, 60), !0)
                }
            }
            for (let e = 0; e < x.fridge.length; e++) Q(x.fridge[e], e);

            function V() {
                C && (l.ticker.remove(P), document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", k)), t.lastFridgePage = s;
                for (let e in m) null != m[e].destroy && m[e].destroy(), delete m[e];
                v.destroy(), E.destroy(), a.destroy();
                for (let e = 0; e < W.length; e++) W[e].destroy();
                for (let e = 0; e < z.length; e++) z[e].destroy();
                for (let e = 0; e < w.length; e++) w[e].destroy();
                u.destroyCounter(), _.destroy(), U.destroy(), F.destroy(), l.ticker.remove(D), N = !0
            }
            w.push(I), w.push(S)
        },
        gameList: function() {
            let e = {},
                a = function(t) {
                    e[t.key] = !0
                },
                o = function(t) {
                    e[t.key] = !1
                };
            document.addEventListener("keydown", a), document.addEventListener("keyup", o), t.inGame = !1, t.music && R.brittlerille.play();
            let r = new PIXI.Sprite(G["Sprites/Rooms"][9]);
            l.stage.addChild(r), r.interactive = !0, r.x = l.screen.width / 2, r.y = l.screen.height / 2, r.anchor.set(.5, .5), r.scale.x = 1, r.scale.y = 1;
            let s = Ie.coinCounter();
            l.stage.addChild(s), s.x = 20, s.y = 20;
            let c = Ie.exitButton((function() {
                b(), h = !0, Ie.flash(!1, u)
            }), l.screen.width - 40, 40, .4, 0);
            l.stage.addChild(c.sprite);
            let h = !1;

            function u() {
                window.removeEventListener("resize", S), c.destroy(), r.destroy();
                for (let e = 0; e < p.length; e++) p[e].destroy();
                if (s.destroyCounter(), l.ticker.remove(I), document.removeEventListener("keydown", a), document.removeEventListener("keyup", o), h) {
                    let e = -1;
                    t.temporaryInGameTime > 600 ? e = ["That was tiring. But I had fun!", "How long until the next minigame?"] : t.temporaryInGameTime > 120 && Math.random() > .8 ? e = ["I saw something weird!", "I had so much fun!", "Finally.. home!", "I missed my notebook!", "The grass is so squishy!"] : t.temporaryInGameTime > 10 && Math.random() > .95 ? e = [""] : t.temporaryInGameTime > 2 && Math.random() > .98 && (e = ["Couldn't we play for more?", "That's it?", "Go back!! I saw something in that minigame", "Only if we played for " + (2763 - t.temporaryInGameTime) + " seconds more.."]), t.temporaryInGameTime = 0
                }
            }
            let p = [],
                m = {
                    gtttatint: {
                        name: n.games.gtttatint,
                        texture: 0,
                        run: Ie.gtttatint,
                        runDebug: function() {
                            let e = prompt("ENTER SEED: ");
                            Ie.gtttatint(e, !0)
                        }
                    },
                    tennis: {
                        name: n.games.tennis,
                        texture: 2,
                        run: Ie.tennis
                    },
                    match: {
                        name: n.games.match,
                        texture: 3,
                        run: Ie.match
                    },
                    cakewalk: {
                        name: n.games.cakewalk,
                        texture: 5,
                        run: Ie.cakewalk
                    }
                },
                y = 0,
                g = -1,
                f = new PIXI.Container;
            for (let a in m) {
                let o = new oe((function() {
                    if (-1 == g)
                        if (w.sleeping) Ie.message(n.message.sleeping, G["Sprites/GameUI"][5]);
                        else if (w.sleep < 20) Ie.message(n.message.sleepy, G["Sprites/GameUI"][6]);
                    else if (0 == w.hunger && x.coins > 8 && "cakewalk" != a) Ie.message(n.message.hungry, G["Sprites/GameUI"][4]);
                    else {
                        for (let e = 0; e < p.length; e++) p[e].interactive = !1;
                        o.sprite.original = {
                            x: o.sprite.x,
                            y: o.sprite.y,
                            scale: o.sprite.scale.x
                        }, o.sprite.animate = !1, g = o.sprite, g.zIndex = 100, Ie.flash(!1, (function() {
                            u(), t.inGame = !0, R.brittlerille.pause(), e.Shift ? null != m[a].runDebug && m[a].runDebug() : m[a].run()
                        }))
                    }
                }), G["Sprites/GameThumbnails"][m[a].texture], {
                    width: 144,
                    height: 144
                });
                o.sprite.interactive = !0, o.sprite.x = y % 2 * 154 - 82 + 5, o.sprite.y = 200 + 154 * Math.floor(y / 2), f.addChild(o.sprite);
                let r = i(m[a].name, 32, "center");
                o.sprite.addChild(r), r.y = 144 / o.sprite.scale.x / 2 - 25, p.push(r), p.push(o), y++
            }
            f.x = l.screen.width / 2, f.sortableChildren = !0, l.stage.addChild(f), p.push(f);
            let v = 0,
                I = function() {
                    -1 != g && (g.x = g.original.x + eases.easeOutQuad(v, 0, -g.original.x, 20), g.y = g.original.y + eases.easeInQuad(v, 0, l.screen.height / 2 - g.original.y, 20), g.scale.x = g.original.scale + eases.easeInQuad(v, 0, 24, 60), g.scale.y = g.scale.x, v += ke), s.updateCounter(d.linear(s.getCounterAmount(), x.coins, .05, ke))
                };
            l.ticker.add(I);
            let S = function() {
                r.x = l.screen.width / 2, r.y = l.screen.height / 2, f.x = l.screen.width / 2, c.sprite.x = l.screen.width - 40
            };
            window.addEventListener("resize", S)
        },
        faceMatch: function() {
            let e = new PIXI.Sprite(G["Sprites/Rooms"][14]);
            l.stage.addChild(e), e.interactive = !0, e.x = l.screen.width / 2, e.y = l.screen.height / 2, e.scale.x = 1.5, e.scale.y = 1.5, e.anchor.set(.5, .5);
            let a = Y(D.faceMinigame);
            l.stage.addChild(a), a.x = l.screen.width / 2, a.y = l.screen.height - 200;
            let o = Y(D.faceMinigame);
            l.stage.addChild(o), o.x = l.screen.width / 2, o.y = 200;
            let r = {
                mouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                eye1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            };
            r.eye2 = r.eye1;
            let s = {
                    eye1: o.eye1,
                    eye2: o.eye2,
                    mouth: o.mouth
                },
                c = -1;

            function h() {
                for (let e in s) s[e].dragging = !1, s[e].emit("pointerup")
            }
            let u = -Date.now(),
                p = 1;

            function m() {
                a.gotoAndStop(Math.floor(140 * Math.random())), o.gotoAndStop(a.getCurFrame());
                let e = l.screen.height / 3 / a.body.texture.trim.height;
                e = Math.min(1, e), a.scale.x = e, a.scale.y = e, o.scale.x = e, o.scale.y = e;
                let t = [0, 1, 2];
                ! function(e) {
                    for (let t = e.length - 1; t > 0; t--) {
                        let i = Math.floor(Math.random() * (t + 1)),
                            n = e[t];
                        e[t] = e[i], e[i] = n
                    }
                }(t);
                let i = 0;
                for (let n in s) {
                    let a = s[n],
                        d = 1;
                    "mouth" == n && (d = 2);
                    let u = Math.floor((a.textures.length - d) * Math.random());
                    "mouth" == n && u++, a.gotoAndStop(u), a.originalSize = {
                        x: a.scale.x,
                        y: a.scale.y
                    }, a.destinationSize = {
                        x: a.scale.x,
                        y: a.scale.y
                    }, a.interactive = !0;
                    let p = a.texture.trim,
                        m = new PIXI.Rectangle(p.x - 2, p.y - 2, p.width + 4, p.height + 4);
                    1 != a.canDrag && (ee(a, m, !1, o.scale.x), $(a, (function() {
                        function e() {
                            h(), t.end();
                            for (let e = 0; e < o.length; e++) delete q[o[e].id], o[e].item.destroy(), o[e].destroy();
                            c = -1, M = 5
                        }
                        c = e;
                        let t = Ie.blackTint(.2);
                        t.start();
                        let i = 4;
                        l.screen.width > 400 && (i = 5);
                        let o = [];
                        for (let t = 0; t < r[n].length; t++) {
                            let s = new PIXI.Sprite(G["Sprites/GameUI"][31]);
                            o.push(s), s.interactive = !0, s.hitArea = new PIXI.Rectangle(-32, -32, 64, 64), s.x = 32 + t % i * 79 - 79 * i / 2 + l.screen.width / 2 + 7.5, s.y = 79 * Math.floor(t / i), s.y += l.screen.height / 2 - 79 * Math.floor((r[n].length - 1) / i) / 2, s.anchor.set(.5, .5), l.stage.addChild(s);
                            let d = new PIXI.Sprite(a.textures[r[n][t]]),
                                c = d.texture.trim;
                            d.x = -c.x - c.width / 2, d.y = -c.y - c.height / 2, s.addChild(d), s.item = d, s.id = Z, q[re()] = s, $(s, (function() {
                                a.gotoAndStop(r[n][t]);
                                let i = a.texture.trim,
                                    o = new PIXI.Rectangle(i.x - 2, i.y - 2, i.width + 4, i.height + 4);
                                a.originalHitArea = o, a.hitArea = o, e()
                            }))
                        }
                    }), !1), a.id = Z, q[re()] = a), a.originalHitArea = m, a.dragScale = e, a.hitArea = m, a.x = 100 * (t[i] - 1), a.y = -120, a.on("pointerdown", (function() {
                        for (let e in s) s[e].interactive = !1;
                        a.interactive = !0
                    })), a.on("pointerup", (function() {
                        for (let e in s) s[e].interactive = !0
                    })), i++
                }
            }
            m();
            let g = 1e3 * Math.random(),
                f = 1,
                x = function() {
                    (u + Date.now()) / 1e3 * f > p && (p++, I()), T.alpha -= .02, T.scale.x = d.linear(T.scale.x, 1.5, .05, ke), T.scale.y = T.scale.x, g += ke, e.scale.x = d.linear(e.scale.x, 1.5, .05, ke), e.scale.y = e.scale.x, e.rotation = Math.cos(g / 100) / 10, e.x = l.screen.width / 2 + 20 * Math.cos(g / 90), e.y = l.screen.width / 2 + 20 * Math.cos(g / 110)
                },
                w = 15,
                v = 0;
            t.minigameMusic && (R.countdown.attack = 1, R.countdown.release = 1, R.countdown.play(0, 0));
            let I = function() {
                    -1 != w && (e.scale.x = 1.52, e.scale.y = 1.52, 1 == w && R.countdown.pause(), 0 == w ? (w = -1, k(), T.text = 15) : (w--, T.text = w, T.scale.x = 1, T.scale.y = 1, T.alpha = 1))
                },
                S = function() {
                    let e = 100,
                        t = !1,
                        i = K(a.eye1.x, a.eye1.y, o.eye1.x, o.eye1.y),
                        n = K(a.eye2.x, a.eye2.y, o.eye1.x, o.eye1.y),
                        r = K(a.eye1.x, a.eye1.y, o.eye2.x, o.eye2.y),
                        l = K(a.eye2.x, a.eye2.y, o.eye2.x, o.eye2.y);
                    i > n && i > n && (t = !0), 0 != o.eye1.alpha && 0 != o.eye2.alpha || (t = !1), t ? (a.eye1.currentFrame != o.eye2.currentFrame && (e -= 10), a.eye2.currentFrame != o.eye1.currentFrame && (e -= 10), e -= n / 3, e -= r / 3) : (0 != o.eye1.alpha && (a.eye1.currentFrame != o.eye1.currentFrame && (e -= 10), e -= i / 3), 0 != o.eye2.alpha && (a.eye2.currentFrame != o.eye2.currentFrame && (e -= 10), e -= l / 3));
                    for (let t in s) t.includes("eye") || 0 != o.mouth.alpha && (a[t].currentFrame != o[t].currentFrame && (e -= 10), e -= K(a[t].x, a[t].y, o[t].x, o[t].y) / 3);
                    return e
                };

            function C() {
                -1 != c && c(), e.destroy(), l.ticker.remove(x);
                for (let e in s) delete q[s[e].id];
                if (a.destroyAnimation(), o.destroyAnimation(), A.destroyAnimation(), T.destroy(), N.destroyPause(), U.destroy(), Ie.gameList(), 0 == b.length) return;
                let t = 0;
                for (let e = 0; e < b.length; e++) t += b[e];
                t /= b.length, Ie.results(Math.round(t) + "%", Math.floor(P), void 0, n.ui.average), window.onblur = function() {}
            }
            let b = [],
                P = 0,
                M = 0;

            function k() {
                M++, E = !0, h(), -1 != c && c();
                let e = S(),
                    i = Math.max(0, Math.round(e));
                b.push(i), P += ((10 + i) / (51 - i / 2) + i / 4) / 2;
                let a = function() {
                    if (2 == M) return M++, void setTimeout((function() {
                        Ie.message("Click/Tap on an eye or mouth to switch it to another!", G["Sprites/Mouth"][10], (function() {
                            a()
                        }))
                    }), 500);
                    R.countdown.attack = 1, v++, v > 3 && (f += .05, v = 0), t.minigameMusic && (R.countdown.play(0, 16 * v), R.countdown.sourceNode.playbackRate.value = f), w = 15, u = -Date.now(), p = 1, Ie.blurPan(l.stage, (function() {
                        m(), E = !1, A.gotoPart("Idle")
                    }))
                };
                Ie.message(n.ui.accuracy + ": " + i + "%", G["Sprites/GameUI"][26], a, (function() {
                    Ie.blurPan(l.stage, (function() {
                        C()
                    }))
                }), [n.ui.next, n.ui.leave]), 100 == Math.round(e) ? (Ie.achievementQueue("perfectfacematch"), R.faceMatchScores.play(0, 0), R.faceMatchScores.stop(), R.yeah.play(), A.gotoPart("percent100")) : e > 90 ? (R.faceMatchScores.play(0, 8), A.gotoPart("percent90")) : e > 75 ? (R.faceMatchScores.play(0, 4), A.gotoPart("percent75")) : e > 50 ? (R.faceMatchScores.play(0, 0), A.gotoPart("percent50")) : e > 10 ? A.gotoPart("percent10") : A.gotoPart("Laugh"), e > 50 && (R.faceMatchScores.sourceNode.playbackRate.value = f, R.faceMatchScores.attack = 0, R.faceMatchScores.release = 1 / f), setTimeout((function() {
                    R.faceMatchScores.stop()
                }), 2e3 / f)
            }
            l.ticker.add(x);
            let T = i(w, 32, "center", void 0, 2);
            l.stage.addChild(T), T.x = l.screen.width / 2, T.y = l.screen.height / 2;
            let A = Y(D.tearDropWatch, se.tearDropWatch);
            A.play(), A.gotoPart("Idle"), A.y = l.screen.height, A.x = l.screen.width / 2 + 120, l.stage.addChild(A), t.minigameCostumes && (null != y[t.costume].applyMinigame ? y[t.costume].applyMinigame(A, 1) : y[t.costume].apply(A, 1));
            let X = 0,
                E = !1;

            function L() {
                E = !E, N.changePause(E), E ? (X = -Date.now(), t.inGame = !1, R.countdown.pause(), l.ticker.remove(x), A.stop(), Ie.message(n.ui.gamePaused, G["Sprites/GameUI"][32], (function() {
                    L()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        C()
                    }))
                }), [n.ui.play, n.ui.home], !1)) : (X += Date.now(), u -= X, t.inGame = !0, A.play(), t.minigameMusic && R.countdown.play(), l.ticker.add(x))
            }
            window.onblur = function() {
                E || L()
            };
            let N = Ie.pauseButton((function() {
                L()
            }), .4);
            l.stage.addChild(N), N.x = l.screen.width - 40, N.y = 40;
            let U = new oe((function() {
                w = -1, R.countdown.stop(), k(), T.text = 15
            }), G["Sprites/GameUI"][42], {
                scale: {
                    x: .4,
                    y: .4
                }
            });
            U.sprite.x = l.screen.width - 90, U.sprite.y = 40, l.stage.addChild(U.sprite)
        },
        tennis: function() {
            t.minigameMusic ? R.shinytech.volume = 1 : R.shinytech.volume = 0, R.shinytech.play();
            let e = new PIXI.Container;
            e.x = l.screen.width / 2, e.y = l.screen.height / 2, e.pivot.x = l.screen.width / 2, e.pivot.y = l.screen.height / 2;
            let a = new PIXI.Sprite(G["Sprites/Rooms"][12]);
            e.addChild(a), a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.scale.x = 1, a.scale.y = 1, a.anchor.set(.5, .5);
            let o = Y(D.tearDropTennis, se.tearDropTennis),
                r = {
                    a: {
                        d: o.e,
                        e: o.d,
                        f: o.c,
                        g: o.g,
                        h: o.f,
                        i: o.h,
                        j: o.j,
                        k: o.i
                    },
                    c: o.a,
                    b: o.b
                };
            t.minigameCostumes && ("uglysweater" == t.costume ? y.uglysweater2.apply(r) : null != y[t.costume].applyMinigame ? y[t.costume].applyMinigame(r) : y[t.costume].apply(r), "_td_costume1" == t.costume && (o.sortableChildren = !0, o.i.zIndex = 10, o.j.zIndex = 10)), o.play(), o.gotoPart("hit"), e.addChild(o), o.x = l.screen.width / 2, o.y = l.screen.height / 2;
            let s = 0,
                c = l.screen.width / 2 + 30,
                h = l.screen.height / 2 - 180;
            l.stage.addChild(e);
            let u = i("0", 16, "center");
            u.x = l.screen.width / 2, u.y = 20, l.stage.addChild(u);
            let p = {},
                m = 0,
                g = function() {
                    let t = new PIXI.AnimatedSprite(G["Sprites/tennisBall"]);
                    t.x = l.screen.width / 2 + 30, t.y = l.screen.height / 2 - 180, t.anchor.set(.5, .5), t.play(), e.addChild(t), t.towards = 1, t.animationTimer = 0, t.interactive = !0, t.mouseTransform = {
                        x: 0
                    }, t.timerCache = 0, t.on("pointerdown", (function() {
                        t.animationTimer > 140 && 1 == t.towards && (t.towards *= -1, t.vy = -10, t.mouseTransform = {
                            x: t.x
                        }, t.randomX = l.screen.width * (Math.random() - .5), t.timerCache = t.animationTimer, t.animationSpeed = 2)
                    })), t.rotation = 0, t.randomX = 0, t.r = 0, t.id = m, p[m++] = t
                };
            g();
            let f = 1,
                x = i(n.score.perfect, 32, "center", "middle");
            x.anchor.set(.5, .5), x.x = l.screen.width / 2, x.y = l.screen.height / 2 + 200, l.stage.addChild(x);
            let w = Date.now();
            e.sortableChildren = !0;
            let v = function() {
                    let t = (Date.now() - w) / (6e4 / 138) / 4;
                    t > I && (I += 4, g()), t > 4 && (e.scale.x = eases.easeOutQuad((t + .25) % .5, 1.02, -.02, .5), e.scale.y = e.scale.x), x.alpha > 0 && (x.scale.x += .02 * ke, x.scale.y = x.scale.x, x.alpha -= .04 * ke, x.rotation += x.rotationAmount);
                    for (let e in p) {
                        let i = p[e];
                        if (i.animationTimer < 0) {
                            x.rotation = 0, x.rotationAmount = (Math.random() - .5) / 100, x.scale.x = 1, x.scale.y = 1, x.text = n.score.bad;
                            let e = 5,
                                i = t % .5;
                            (i < .2 || i > .4) && (x.text = n.score.meh, e = 20), (i < .125 || i > .375) && (x.text = n.score.nice, e = 50), (i < .05 || i > .45) && (x.text = n.score.perfect, e = 100), s += e, u.text = s
                        }
                        i.animationTimer <= 0 && (o.gotoPart("hit"), i.towards = 1, i.randomX = l.screen.width / 2 * (Math.random() - .5), x.alpha = 1), i.animationTimer < 50 && 1 != i.towards && o.gotoPart("prepare"), i.animationTimer += 4 * i.towards * f * ke, i.scale.x = 1 + window.eases.easeOutQuad(i.animationTimer, 0, 2, 300), i.scale.y = i.scale.x, i.y = h - window.eases.easeOutQuad(i.animationTimer, 0, 100, 100), i.rotation = i.r / 60, i.zIndex = i.scale.x, 1 == i.towards ? i.x = c + window.eases.easeOutQuad(i.animationTimer, 0, i.randomX, 100) : i.x = i.mouseTransform.x + window.eases.easeInOutQuad(Math.min(i.timerCache, i.timerCache - i.animationTimer), 0, c - i.mouseTransform.x, i.timerCache), i.animationSpeed = d.linear(i.animationSpeed, .5, .01, ke), i.r += i.animationSpeed, i.y > l.screen.height + 300 && (s -= 10, u.text = s, p[e].destroy(), delete p[e])
                    }
                    f += 5e-5 * ke, 0 == Object.keys(p).length && C()
                },
                I = 4;
            R.shinytech.release = 1, l.ticker.add(v);
            let S = !1;

            function C(t = !1) {
                S || (S = !0, R.shinytech.stop(), l.ticker.remove(v), T.destroyPause(), x.destroy(), Ie.fade((function() {
                    for (let e in p) p[e].destroy(), delete p[e];
                    o.destroyAnimation(), e.destroy(), a.destroy(), u.destroy(), Ie.gameList(), t ? (Ie.results(s, Math.floor(s / 75), "Completed!"), y.sportsdrop.owned = !0, Ie.achievementQueue("winagameoftennis"), b()) : Ie.results(s, Math.max(0, Math.floor(s / 100))), s >= 2763 && Ie.achievementQueue("get2763intennis")
                })), window.onblur = function() {})
            }
            R.shinytech.on("end", (function() {
                C(!0)
            }));
            let P = 0;
            window.onblur = function() {
                M || k()
            };
            let M = !1;

            function k() {
                M = !M, T.changePause(M), M ? (P = -Date.now(), t.inGame = !1, R.shinytech.pause(), l.ticker.remove(v), o.stop(), Ie.message(n.ui.gamePaused, G["Sprites/GameUI"][32], (function() {
                    k()
                }), (function() {
                    C()
                }), [n.ui.play, n.ui.home], !1)) : (P += Date.now(), w += P, t.inGame = !0, o.play(), R.shinytech.play(), l.ticker.add(v))
            }
            let T = Ie.pauseButton((function() {
                k()
            }), .4);
            l.stage.addChild(T), T.x = l.screen.width - 40, T.y = 40
        },
        gtttatint: function(e = "", a = !1) {
            let o = function() {
                t.minigameMusic && R.radiomartini.play()
            };
            R.radiomartini.stopWithStyle = function() {
                if (!t.minigameMusic) return;
                let e = function() {
                    R.radiomartini.volume -= 1 / 60 * ke, R.radiomartini.sourceNode.playbackRate.value -= 1 / 120 * ke, R.radiomartini.volume <= .01 && (R.radiomartini.stop(), l.ticker.remove(e))
                };
                l.ticker.add(e), R.radiomartini.off("end", o)
            }, t.minigameMusic && (R.radiomartini.play(), R.radiomartini.sourceNode.playbackRate.value = 1, R.radiomartini.volume = 1), R.radiomartini.on("end", o);
            let r = new PIXI.Sprite(G["Sprites/Rooms"][10]);
            r.interactive = !0, r.x = l.screen.width / 2, r.anchor.set(.5, 0);
            let s = new PIXI.Sprite(G["Backgrounds/Starfield"][0]);
            l.stage.addChild(r), l.stage.addChild(s), s.anchor.set(.5, .5), s.x = l.screen.width / 2 - 50, s.y = l.screen.height / 2 - 100, s.alpha = 0, s.scale.x = 1.25, s.scale.y = 1.25;
            let c = new PIXI.Container,
                h = {},
                u = 0;
            l.stage.addChild(c), r.x = l.screen.width / 2 - 180, r.height = 20 * l.screen.height;
            let p = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 30,
                    acceleration: 0
                },
                m = [];
            m.push(r), m.push(s), m.push(p.box);
            let g = new PIXI.Container;
            l.stage.addChild(g), m.push(g);
            let f = {},
                x = d.linear(l.screen.width - 60, 300, .75),
                w = 0,
                v = x / 2 - 60,
                I = 0;

            function S(e, t, i, n) {
                let a = function() {
                    let a = 5 * t;
                    return a = 9 * (a << 7 | a >>> 25), n ^= t, t ^= i ^= e, e ^= n, n = n << 11 | n >>> 21, (a >>> 0) / 2 ** 32
                };
                for (let e = 0; e < 100; e++) a();
                return a
            }
            let C = function(e) {
                let t = [];
                for (let i = 0; i < 4; i++) {
                    let n = 2 ** 32;
                    for (let t = 0; t < 4; t++) n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                    t.push(n)
                }
                return t
            };
            if ("" == e) {
                let t = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                e = t() + t() + t() + t()
            }
            if (e.length < 16) {
                let t = "";
                for (let i = 0; i < 16; i++) t += e, e.length / 2 == Math.floor(e.length / 2) && (t += "}");
                e = t
            }
            let b = C(e),
                P = S(b[0], b[1], b[2], b[3]);
            for (let e = 0; e < 30; e++) {
                let t = new PIXI.Sprite(G["Sprites/Clouds"][Math.floor(3 * P())]);
                c.addChild(t), t.anchor.set(.5, .5), t.y = l.screen.height / 2 + (P() - .5) * l.screen.height - 1200 * P(), t.orig = {
                    y: t.y
                }, t.scale.x = .2 + e / 150, t.scale.y = .2 + e / 150, t.x = l.screen.width / 2 + (P() - .5) * x * d.linear(t.scale.x, 1, .5), P() > .5 && (t.scale.x *= -1);
                let i = t.texture.trim;
                null == i && (i = t.texture._frame), t.pivot.y = -i.height, h[u++] = t
            }
            let M = 0,
                k = 0;

            function T(t = !1, i = -1) {
                50 * Math.floor(I / 50) == I && 0 != I && (e = function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) t += 0 == i ? e[e.length - 1] : e[i - 1];
                    return t
                }(e), b = C(e), P = S(b[0], b[1], b[2], b[3]));
                let n = 120;
                n *= (Math.cos(I / 10) / 2 + .5 + 1) / 2;
                let a = (P() - .5) * w;
                I > 200 && P() > .998 && (k = 10 + Math.floor(40 * P())), k > 0 && (a = 60 * Math.round(a / 60), M = M > 1 ? 1 : 0), M > 0 && (a /= 10, n = 70);
                let o = v + a;
                (o < 0 || o > x - n) && (o = v - a), o < 0 && (o = 0), 100 * Math.floor(I / 100) == I && (t = !0), t && (n = x, o = 0), o > x - n && (o = x - n), t && M > 1 && (M = 1), k > 0 && (n = 60);
                let r = {
                    x: o,
                    y: -60 * I,
                    width: n,
                    height: 40,
                    id: I,
                    transparent: !1,
                    ladder: M > 1
                };
                t || (v = r.x), w < x && (w += 12);
                let s = P() < .01 || 1 == M;
                1 == M && (r.y += 30), r.boost = s;
                let d = s ? G.inputNineSlice[7] : G.inputNineSlice[6];
                M > 1 && (d = G.inputNineSlice[8]);
                let c = new PIXI.NineSlicePlane(d, 15, 15, 15, 15);
                c.width = r.width, c.height = 0 == I ? l.screen.height : r.height / 4, k > 0 && (c.height = 60), M > 1 && (c.height *= 4), c.pivot.x = r.width / 2, c.pivot.y = c.height / 2, c.x = r.x + c.pivot.x, c.y = r.y + c.pivot.y, c.vy = 0, c.vx = 0, (P() < .01 + I / 1e3 && !t || r.ladder && !t) && (c.rotation = P() > .5 ? .1 : -.1, r.broken = !0), g.addChild(c), r.sprite = c, c.zIndex = 0, f[I] = r, I++, M--, k--, P() < .005 && (M = 20 + Math.floor(P() * P() * 50))
            }
            T(), p.x = f[0].x + f[0].width / 2 - p.width / 2, p.y = f[0].y - p.height, p.zIndex = 1e4;
            let A = {},
                X = function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), A[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                },
                E = function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), A[t] = !1
                },
                L = 0,
                N = 10;
            for (let e = 0; e < 10; e++) T();
            let U = Y(D.GTTTATINT);
            if (t.minigameCostumes) {
                let e = {
                    a: {
                        d: U.a_.c,
                        e: U.a_.e,
                        f: U.a_.d,
                        g: U.a_.e,
                        h: U.a_.d,
                        i: U.a_.f,
                        j: U.d,
                        k: U.c
                    },
                    c: U.b.b,
                    b: U.b.a
                };
                null != y[t.costume].applyMinigame ? y[t.costume].applyMinigame(e) : y[t.costume].apply(e)
            }
            let B = !1,
                F = function() {
                    B = !0
                },
                O = function() {
                    B = !1
                };
            document.addEventListener("keydown", X), document.addEventListener("keyup", E), document.addEventListener("pointerdown", F), document.addEventListener("pointerup", O), U.onNextFrame = function(e) {
                e.a_.gotoAndStop(Math.min(59, Math.max(0, Math.round(30 - 30 * p.acceleration)))), e.b.scale.x = p.acceleration < 0 ? -1 : 1, e.c.rotation += -1.5 + Math.abs(2 * p.acceleration) + Math.abs(p.vy / 4), 0 == p.vy && e.a_.c.gotoAndStop(1), A.a || A.d || (e.b.gotoAndStop(20), e.b.a.rotation = -Math.abs(p.vy / 4), e.b.b.rotation = -Math.abs(p.vy / 4)), e.d.rotation = -e.c.rotation
            }, U.play(), U.loop = !0, U.scale.x = .4, U.scale.y = .4;
            let _ = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
            _.width = (l.screen.width - x) / 2, _.height = l.screen.height, _.x = 0, _.y = 0, l.stage.addChild(_);
            let z = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);

            function W(e, t, i, n) {
                let a = new oe((function() {}), G["Sprites/GameUI"][i], {
                    x: e,
                    y: t
                });
                a.sprite.on("pointerdown", (function() {
                    A[n] = !0
                })), a.sprite.on("pointermove", (function() {
                    B && a.sprite.emit("pointerdown")
                })), a.sprite.on("pointerout", (function() {
                    a.sprite.emit("pointerup")
                })), a.sprite.on("pointerup", (function() {
                    A[n] = !1
                })), l.stage.addChild(a.sprite), m.push(a)
            }
            z.width = (l.screen.width - x) / 2, z.height = l.screen.height, z.x = l.screen.width - z.width, z.y = 0, l.stage.addChild(z), l.touchScreen && (W(l.screen.width - 150, l.screen.height - 50, 21, "a"), W(l.screen.width - 50, l.screen.height - 50, 22, "d"), W(100, l.screen.height - 50, 23, " ")), g.y = 300;
            let j = Date.now(),
                Q = -1,
                V = function() {
                    -1 != Q && (Date.now() - j) / 1e3 > Q && Q++, t.minigameMusic && (R.radiomartini.sourceNode.playbackRate.value = d.linear(R.radiomartini.sourceNode.playbackRate.value, 1 - p.vy / 400 + L / 80, .01, ke)), r.y = -r.height + l.screen.height, r.y += g.y, s.alpha = (g.y - 8e3) / 1e3, r.y > 0 && (r.y = 0), r.y < -r.height + l.screen.height && (r.y = -r.height + l.screen.height), I - 640 / 60 < -p.y / 60 && T();
                    for (let e in f) parseInt(e) < Math.floor((g.y - l.screen.height) / 60) && (q.add(Math.max(1, L)), f[e].sprite.destroy(), delete f[e]);
                    p.isOnGround = !1, U.x = p.x + p.width / 2, U.y = p.y + p.height, A.d && (p.acceleration += .075 * ke), A.a && (p.acceleration -= .075 * ke), p.vy += .4 * ke, p.acceleration = d.linear(p.acceleration, 0, 1 - .95, ke), p.vx += p.acceleration * ke, p.vx = d.linear(p.vx, 0, 1 - .8, ke), p.y += p.vy * ke, p.x += p.vx * ke;
                    let e = Math.abs(p.vx / 40),
                        i = Math.abs(p.vy / 40);
                    U.scale.x = .4 * (1 + e - i), U.scale.y = .4 * (1 + i - e), (p.x < 0 || p.x > x - p.width) && (p.vx /= -1, p.acceleration /= -1), p.x < 0 && (p.x = 0), p.x > x - p.width && (p.x = x - p.width);
                    for (let e in f) {
                        let t = f[e];
                        if (t.transparent && (t.sprite.rotation += (t.rotateTo < 0 ? -.1 : .1) * ke, t.sprite.x += t.sprite.vx * ke, t.sprite.y += t.sprite.vy * ke, t.sprite.vy += .2 * ke, t.sprite.vx = d.linear(t.sprite.vx, 0, .05)), J(p, t) && !t.transparent && (t.ladder || p.vy > 0 && p.y < t.y - p.height + (4 + p.vy) * ke)) {
                            if (t.broken && (t.sprite.vy = p.vy / 2, t.transparent = !0, t.rotateTo = p.x + p.width / 2 - t.sprite.x, t.sprite.vx = 10 * (Math.random() - .5)), t.ladder || (p.y = t.y - p.height, p.isOnGround = !0), p.vy = 0, p.max < t.id && !t.ladder) {
                                let e = t.id - p.max;
                                q.add(10 * (e - 1)), N--, 0 == N && (L++, 2 == L && (j = Date.now(), Q = 0), Z.text = n.ui.mph + ": " + L, N = 10)
                            }
                            p.max = t.id;
                            let e = 7;
                            L >= 7 && (e *= 2), L >= 10 && (e *= 1.5), L >= 16 && (e *= 1.5), L >= 20 && (e *= 2), t.boost && (e *= 2), (A[" "] || t.boost || t.ladder) && (t.ladder ? (p.y -= 2 * ke, p.vy -= 10) : p.vy -= e + Math.abs(1.5 * p.vx))
                        }
                    }
                    g.x = l.screen.width / 2 - x / 2, p.y < l.screen.height / 2 - g.y - 200 && (g.y = d.linear(g.y, l.screen.height / 2 - p.y - 200, .1, ke)), -g.y + l.screen.height < p.y && !H && (H = !0, R.radiomartini.stopWithStyle(), Ie.blurPan(l.stage, (function() {
                        $()
                    }))), g.y += L / 2 * ke;
                    for (let e in h) h[e].y = h[e].orig.y + g.y * h[e].scale.y / 2, h[e].y > l.screen.height && (h[e].destroy(), delete h[e])
                },
                H = !1;
            l.ticker.add(V);
            let K = 0,
                q = i(K, 32);
            q.add = function(e) {
                K += e, a ? (q.text = "Set seed", q.alpha = .2) : q.text = K
            }, q.add(0), q.anchor.set(1, 0), q.x = l.screen.width - 20 - 50, q.y = 20, l.stage.addChild(q);
            let Z = i(n.ui.mph + ": 0", 32);
            Z.anchor.set(0, 0), Z.x = 20, Z.y = 20, l.stage.addChild(Z), m.push(Z), m.push(q), m.push(z), m.push(_), g.addChild(U), g.sortableChildren = !0, U.zIndex = 1e3, m.push(U);
            let $ = function() {
                for (let e in f) f[e].sprite.destroy();
                for (let e in h) h[e].destroy(), delete h[e];
                for (let e = 0; e < m.length; e++) m[e].destroy();
                document.removeEventListener("keydown", X), document.removeEventListener("keyup", E), document.removeEventListener("pointerdown", F), document.removeEventListener("pointerup", O), l.ticker.remove(V), Ie.gameList(), ne.destroyPause(), a || setTimeout((function() {
                    Ie.results(K, Math.floor(K / 50))
                }), 100), Q >= 120 && (Ie.achievementQueue("5minuteGTTTATINT"), y.jockdrop.owned = !0), K >= 2763 && Ie.achievementQueue("get2763gtttatint"), window.onblur = function() {}
            };
            window.onblur = function() {
                ee || ie()
            };
            let ee = !1,
                te = 0;

            function ie() {
                ee = !ee, ne.changePause(ee), ee ? (t.inGame = !1, R.radiomartini.pause(), l.ticker.remove(V), U.stop(), te = -Date.now(), Ie.message(n.ui.gamePaused, G["Sprites/GameUI"][32], (function() {
                    ie()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        $()
                    }))
                }), [n.ui.play, n.ui.home], !1)) : (te += Date.now(), j += te, t.inGame = !0, U.play(), t.minigameMusic && R.radiomartini.play(), l.ticker.add(V))
            }
            let ne = Ie.pauseButton((function() {
                ie()
            }), .4);
            l.stage.addChild(ne), ne.x = l.screen.width - 40, ne.y = 40
        },
        cakewalk: function(e = "", a = !1) {
            let o = function() {
                t.minigameMusic && (R.Pamgaea.play(), R.Pamgaea.sourceNode.playbackRate.value = 1.15)
            };
            t.minigameMusic && (R.Pamgaea.play(), R.Pamgaea.sourceNode.playbackRate.value = 1.15, R.Pamgaea.on("end", o));
            let r = new PIXI.Sprite(G["Sprites/Rooms"][10]);
            r.interactive = !0, r.x = l.screen.width / 2, r.anchor.set(.5, 0);
            let s = new PIXI.Sprite(G["Backgrounds/Starfield"][0]);
            l.stage.addChild(r), l.stage.addChild(s), s.anchor.set(.5, .5), s.x = l.screen.width / 2 - 50, s.y = l.screen.height / 2 - 100, s.alpha = 0, s.scale.x = 1.25, s.scale.y = 1.25;
            let c = new PIXI.Container,
                h = {},
                u = 0;
            l.stage.addChild(c), r.x = l.screen.width / 2 - 180, r.height = 20 * l.screen.height;
            let p = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 30,
                    acceleration: 0
                },
                m = [];
            m.push(r), m.push(s), m.push(p.box);
            let y = new PIXI.Container;
            l.stage.addChild(y), m.push(y);
            let g = 360;
            if ("" == e) {
                let t = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                e = t() + t() + t() + t()
            }
            if (e.length < 16) {
                let t = "";
                for (let i = 0; i < 16; i++) t += e, e.length / 2 == Math.floor(e.length / 2) && (t += "}");
                e = t
            }
            let f = function(e) {
                    let t = [];
                    for (let i = 0; i < 4; i++) {
                        let n = 2 ** 32;
                        for (let t = 0; t < 4; t++) n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                        t.push(n)
                    }
                    return t
                }(e),
                x = function(e, t, i, n) {
                    let a = function() {
                        let a = 5 * t;
                        return a = 9 * (a << 7 | a >>> 25), n ^= t, t ^= i ^= e, e ^= n, n = n << 11 | n >>> 21, (a >>> 0) / 2 ** 32
                    };
                    for (let e = 0; e < 100; e++) a();
                    return a
                }(f[0], f[1], f[2], f[3]);
            for (let e = 0; e < 30; e++) {
                let t = new PIXI.Sprite(G["Sprites/Clouds"][Math.floor(3 * x())]);
                c.addChild(t), t.anchor.set(.5, .5), t.y = l.screen.height / 2 + (x() - .5) * l.screen.height - 1200 * x(), t.orig = {
                    y: t.y
                }, t.scale.x = .2 + e / 150, t.scale.y = .2 + e / 150, t.x = l.screen.width / 2 + (x() - .5) * g * d.linear(t.scale.x, 1, .5), x() > .5 && (t.scale.x *= -1);
                let i = t.texture.trim;
                null == i && (i = t.texture._frame), t.pivot.y = -i.height, h[u++] = t
            }
            p.zIndex = 1e4;
            let v = {},
                I = function(e) {
                    v[e.key.toLowerCase()] = !0
                },
                S = function(e) {
                    v[e.key.toLowerCase()] = !1
                },
                C = !1,
                b = function() {
                    C = !0
                },
                P = function() {
                    C = !1
                };
            document.addEventListener("keydown", I), document.addEventListener("keyup", S), document.addEventListener("pointerdown", b), document.addEventListener("pointerup", P);
            let M = new PIXI.NineSlicePlane(G.inputNineSlice[12], 2, 2, 2, 2);
            M.width = (l.screen.width - g) / 2, M.height = l.screen.height, M.x = 0, M.y = 0, l.stage.addChild(M);
            let k = new PIXI.NineSlicePlane(G.inputNineSlice[12], 2, 2, 2, 2);
            k.width = (l.screen.width - g) / 2, k.height = l.screen.height, k.x = l.screen.width - k.width, k.y = 0, l.stage.addChild(k), y.y = 300;
            let T = {},
                A = 0,
                X = -1,
                E = -1,
                L = !0;

            function N() {
                let e = {
                    x: 0,
                    y: -1 == X ? 0 : X.y - 100,
                    width: -1 == X ? 200 : X.width,
                    height: 50,
                    speed: 1,
                    scaleTimer: 0
                };
                L && (e.x = g - e.width, e.speed *= -1), e.width <= 100 && (e.x = L ? X.x + X.width + 40 : X.x - e.width - 40), e.x < 0 && (e.x = 0), e.x > g + e.width && (e.x = g + e.width), L = !L, e.original = {
                    y: e.y
                }, -1 == X && (e.scaleTimer = 110, e.x = 80), e.previous = X, X = e, e.container = new PIXI.Container, e.container.x = e.x, e.container.y = e.y, y.addChild(e.container), e.setWidth = function(t, o) {
                    i.width = t, i.tilePosition.x += o, e.width = t, a.width = t, n.width = t, n.tilePosition.x += o, i.pivot.x = e.width / 2, i.pivot.y = e.height / 2, i.x = i.pivot.x, i.y = i.pivot.y
                }, e.destroy = function() {
                    n.destroy(), a.destroy(), i.destroy(), e.container.destroy(), delete T[e.id]
                };
                let t = 3 * Math.floor(3 * Math.random());
                e.texture = t;
                let i = new PIXI.TilingSprite(G["Sprites/CakeSlicePlane"][1 + t]);
                i.pivot.x = e.width / 2, i.pivot.y = e.height / 2, i.x = i.pivot.x, i.y = i.pivot.y, i.clampMargin = 1, i.width = e.width, i.height = 50, e.container.addChild(i), e.sprite = i;
                let n = new PIXI.TilingSprite(G["Sprites/CakeSlicePlane"][2 + t]);
                n.y = -90, n.clampMargin = 1, e.container.roundPixels = !0, n.width = e.width, n.height = 90, i.addChild(n);
                let a = new PIXI.NineSlicePlane(G["Sprites/CakeSlicePlane"][0 + t]);
                i.addChild(a), a.width = e.width, a.height = 50, e.id = A, T[A] = e, E = A, A++
            }
            let D = new PIXI.NineSlicePlane(G.inputNineSlice[13]);
            y.addChild(D), D.x = -20, D.y = 50, D.width = 400, D.height = l.screen.height, r.on("pointerdown", (function() {
                T[E].dropping || (T[E].dropping = !0, T[E].speed = 0, T[E].animationTimer = 0)
            })), N(), N();
            let U = !1,
                B = 0,
                F = {},
                O = 0,
                _ = 0,
                z = function() {
                    if (T[E].x += T[E].speed * ke, (T[E].x > g - T[E].width || T[E].x < 0) && (T[E].speed *= -1), T[E].x > g - T[E].width && (T[E].x = g - T[E].width), T[E].x < 0 && (T[E].x = 0), T[E].container.x = T[E].x, T[E].dropping) {
                        T[E].y = T[E].original.y + eases.easeInQuad(T[E].animationTimer, 0, 50, 24), T[E].container.y = T[E].y, T[E].animationTimer += ke;
                        let e = T[E],
                            t = T[E].previous;
                        if ((e.x - t.x > t.width || t.x - e.x > e.width) && (T[E].sprite.rotation = eases.easeInQuad(T[E].animationTimer, 0, 8, 100), U || (U = !0, q.interactive = !1, setTimeout((function() {
                                Ie.blurPan(l.stage, (function() {
                                    Y()
                                }))
                            }), 500))), T[E].animationTimer > 24)
                            if (e.x - t.x > t.width || t.x - e.x > e.width);
                            else {
                                T[E].sprite.scale.x = 1, T[E].sprite.scale.y = 1, T[E].y = T[E].original.y + 50, T[E].container.y = T[E].y;
                                let i = 0;
                                Math.abs(t.x - e.x) < 30 && (i = n.score.nice), Math.abs(t.x - e.x) < 10 && (i = n.score.good);
                                let a = {
                                        x: e.x,
                                        y: e.y,
                                        width: 100,
                                        height: 50,
                                        vy: 0,
                                        vx: 0,
                                        vr: 0
                                    },
                                    o = 4;
                                if (e.width < 8 && (o = 2), Math.abs(t.x - e.x) < o ? (a = -1, i = n.score.perfect, e.x = t.x, V.add(100), B++, _++, O < _ && (O = _), B >= 3 && e.width <= 200 && (e.x -= 20, e.width += 40, e.setWidth(e.width, 20), e.container.x = e.x, B = 1)) : (B = 0, _ = 0, V.add(Math.max(10, 100 - Math.floor(Math.abs(t.x - e.x)))), t.x < e.x && (e.width -= e.x - t.x, e.setWidth(e.width, 0), e.x = t.x + t.width - e.width, a.width = e.x - t.x, a.x = e.x + e.width, a.vx = 2 + 2 * Math.random(), a.vr = 5 + 5 * Math.random()), t.x > e.x && (a.width = -(e.x - t.x), e.width -= t.x - e.x, e.setWidth(e.width, e.x - t.x), e.x = t.x, a.x = e.x - a.width, a.vx = 2 * -Math.random() - 2, a.vr = -5 - 5 * Math.random()), a.vy = 2 * -Math.random() - 2), w.hunger += e.width / 1200, e.container.x = e.x, H.text = n.ui.altitude + ": " + A, -1 != a) {
                                    let t = new PIXI.Container;
                                    t.x = a.x, t.y = a.y, y.addChild(t);
                                    let i = new PIXI.TilingSprite(G["Sprites/CakeSlicePlane"][1 + e.texture]);
                                    i.clampMargin = 1, i.width = a.width, i.height = a.height, i.pivot.x = a.width / 2, i.pivot.y = a.height / 2, i.x = i.pivot.x, i.y = i.pivot.y, t.addChild(i);
                                    let n = new PIXI.NineSlicePlane(G["Sprites/CakeSlicePlane"][0 + e.texture]);
                                    i.addChild(n), n.width = a.width, n.height = 50, a.sprite = i, a.container = t, a.id = E, F[E] = a, a.destroy = function() {
                                        delete F[a.id], n.destroy(), i.destroy(), t.destroy()
                                    }
                                }
                                N(), W.text = i, 0 != i && (W.animationTimer = 0, W.rotateTo = L ? 1 : -1)
                            }
                    }
                    W.alpha = eases.easeInQuad(Math.min(100, W.animationTimer), 1, -1, 50), W.scale.x = eases.easeOutQuad(Math.min(100, W.animationTimer), 1, .5, 30), W.scale.y = eases.easeOutQuad(Math.min(110, W.animationTimer), 1, .5, 30), W.rotation = eases.easeInQuad(Math.min(110, W.animationTimer), 0, .1 * W.rotateTo, 40), W.animationTimer += ke;
                    for (let e in T) {
                        let t = T[e];
                        T[e].sprite.scale.x = eases.easeOutElastic(Math.min(90, T[e].scaleTimer), .1, .9, 90), T[e].sprite.scale.y = eases.easeOutElastic(Math.min(80, T[e].scaleTimer), .1, .9, 80), T[e].scaleTimer += ke, t.container.transform.worldTransform.ty > l.screen.height && t.destroy()
                    }
                    for (let e in F) {
                        let t = F[e];
                        t.x += t.vx, t.y += t.vy, t.sprite.rotation += t.vr / 100, t.vy += .4, t.vx = d.linear(t.vx, 0, .02, ke), t.container.x = t.x, t.container.y = t.y, t.container.transform.worldTransform.ty > l.screen.height + 100 && t.destroy()
                    }
                    r.y = -r.height + l.screen.height, r.y += y.y, s.alpha = (y.y - 8e3) / 1e3, r.y > 0 && (r.y = 0), r.y < -r.height + l.screen.height && (r.y = -r.height + l.screen.height), y.x = l.screen.width / 2 - 180, y.y = d.linear(y.y, l.screen.height / 2 - T[E].original.y - 100, .05, ke);
                    for (let e in h) h[e].y = h[e].orig.y + y.y * h[e].scale.y / 2, h[e].y > l.screen.height && (h[e].destroy(), delete h[e]);
                    j.offset = d.linear(j._offset, w.hunger / 100, .04, ke)
                },
                W = i("Bruh", 32, "center");
            l.stage.addChild(W), W.x = l.screen.width / 2, W.y = l.screen.height / 2 + 200;
            let j = new te(G["Sprites/GameUI"][4], G["Sprites/GameUI"][3], w.hunger / 100);
            j.buttonContainer.x = 60, j.buttonContainer.y = l.screen.height - 60, j.buttonContainer.scale.x = .8, j.buttonContainer.scale.y = .8, l.stage.addChild(j.buttonContainer), $(j.buttonContainer, (function() {})), j.selected.visible = !1, l.ticker.add(z);
            let Q = 0,
                V = i(Q, 32);
            V.add = function(e) {
                Q += e, a ? (V.text = "Set seed", V.alpha = .2) : V.text = Q
            }, V.add(0), V.anchor.set(1, 0), V.x = l.screen.width - 20 - 50, V.y = 20, l.stage.addChild(V);
            let H = i(n.ui.altitude + ": 1", 32);
            H.anchor.set(0, 0), H.x = 20, H.y = 20, l.stage.addChild(H), m.push(H), m.push(V), m.push(k), m.push(M), y.sortableChildren = !0;
            let Y = function() {
                W.destroy(), j.destroy(), R.Pamgaea.release = .5, t.minigameMusic && R.Pamgaea.off("end", o), R.Pamgaea.stop();
                for (let e in T) T[e].destroy();
                for (let e in F) F[e].destroy();
                for (let e in h) h[e].destroy(), delete h[e];
                for (let e = 0; e < m.length; e++) m[e].destroy();
                document.removeEventListener("keydown", I), document.removeEventListener("keyup", S), document.removeEventListener("pointerdown", b), document.removeEventListener("pointerup", P), l.ticker.remove(z), Ie.gameList(), q.destroyPause(), a || setTimeout((function() {
                    Ie.results(Q, Math.floor(Q / 50)), O >= 10 && Ie.achievementQueue("get10perfectsCAKEWALK")
                }), 100), window.onblur = function() {}
            };
            window.onblur = function() {
                K || J()
            };
            let K = !1;

            function J() {
                K = !K, q.changePause(K), K ? (t.inGame = !1, l.ticker.remove(z), t.minigameMusic && (R.Pamgaea.release = .2, R.Pamgaea.pause()), Ie.message(n.ui.gamePaused, G["Sprites/GameUI"][32], (function() {
                    J()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        Y()
                    }))
                }), [n.ui.play, n.ui.home], !1)) : (t.minigameMusic && (R.Pamgaea.play(), R.Pamgaea.sourceNode.playbackRate.value = 1.15), t.inGame = !0, l.ticker.add(z))
            }
            let q = Ie.pauseButton((function() {
                J()
            }), .4);
            l.stage.addChild(q), q.x = l.screen.width - 40, q.y = 40
        },
        dropdodge: function() {
            let e = new PIXI.Sprite(G["Sprites/RepeatingUI"][3]);
            e.interactive = !0, l.stage.addChild(e), e.width = l.screen.width, e.height = l.screen.height;
            let t = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    box: new PIXI.Graphics,
                    width: 30,
                    height: 50,
                    acceleration: 0
                },
                n = [];
            n.push(e), n.push(t.box);
            let a = new PIXI.Container;
            l.stage.addChild(a), n.push(a);
            let o = {},
                r = 3e3;
            t.x = 0, t.y = 0, t.zIndex = 1e4;
            let s = {},
                c = function(e) {
                    s[e.key] = !0
                },
                h = function(e) {
                    s[e.key] = !1
                },
                u = 0,
                p = 15;
            for (let e = 0; e < 1e4; e++);
            let m = Y(D.GTTTATINT),
                y = !1,
                g = function() {
                    y = !0
                },
                f = function() {
                    y = !1
                };
            document.addEventListener("keydown", c), document.addEventListener("keyup", h), document.addEventListener("pointerdown", g), document.addEventListener("pointerup", f), m.onNextFrame = function(e) {
                s.w || s.a || s.s || s.d || (e.goto(0), e.b.gotoAndStop(20)), e.a_.gotoAndStop(Math.min(59, Math.max(0, Math.round(30 - 30 * t.acceleration)))), e.b.scale.x = t.acceleration < 0 ? -1 : 1, e.c.rotation += -1.5 + Math.abs(2 * t.acceleration), 0 == t.vy && e.a_.c.gotoAndStop(1), e.d.rotation = -e.c.rotation
            }, m.play(), m.loop = !0, m.scale.x = .4, m.scale.y = .4;
            let x = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
            x.width = 100, x.height = r, x.x = r, x.y = 0, a.addChild(x);
            let w = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
            w.width = 100, w.height = r, w.x = -100, w.y = 0, a.addChild(w);
            let v = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
            v.width = r, v.height = 100, v.x = 0, v.y = -100, a.addChild(v);
            let I = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
            I.width = r, I.height = 100, I.x = 0, I.y = r, a.addChild(I);
            let S = function() {
                    t.y;
                    for (let e in o) parseInt(e) < Math.floor((a.y - 640) / 1) && (P.add(Math.max(1, u)), o[e].sprite.destroy(), delete o[e]);
                    t.isOnGround = !1, m.x = t.x + t.width / 2, m.y = t.y + t.height;
                    let e = .4;
                    s.d && (t.vx += e), s.a && (t.vx -= e), s.w && (t.vy -= e), s.s && (t.vy += e), t.acceleration = d.linear(t.acceleration, t.vx / 5, .5, ke), t.vx *= .9, t.vy *= .9, t.y += t.vy, t.x += t.vx;
                    let i = Math.abs(t.vx / 40 / 4),
                        n = Math.abs(t.vy / 40 / 4);
                    m.scale.x = .4 * (1 + i - n), m.scale.y = .4 * (1 + n - i), (t.x < 0 || t.x > r - t.width) && (t.vx /= -1, t.acceleration /= -1), (t.y < 0 || t.y > r - t.height) && (t.vy /= -1), t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), t.x > r - t.width && (t.x = r - t.width), t.y > r - t.height && (t.y = r - t.height);
                    for (let e in o) {
                        let i = o[e];
                        if (J(t, i) && t.vy > 0 && t.y < i.y - t.height + 4 + t.vy) {
                            if (t.y = i.y - t.height, t.isOnGround = !0, t.vy = 0, t.max < i.id) {
                                let e = i.id - t.max;
                                P.add(10 * (e - 1)), p--, 0 == p && (u++, M.text = "mph: " + u, p = 10)
                            }
                            t.max = i.id;
                            let e = 7;
                            u >= 7 && (e *= 2), u >= 10 && (e *= 1.5), u >= 16 && (e *= 1.5), u >= 20 && (e *= 2), s[" "] && (t.vy -= e + Math.abs(1.5 * t.vx))
                        }
                    }
                    a.x = d.linear(a.x, l.screen.width / 2 - t.x, .2, ke), a.y = d.linear(a.y, l.screen.height / 2 - t.y, .2, ke), -a.y + l.screen.height < t.y && !C && (C = !0, Ie.blurPan(l.stage, (function() {
                        k()
                    }))), a.y += u / 2
                },
                C = !1;
            l.ticker.add(S);
            let b = 0,
                P = i(b, 32);
            P.add = function(e) {
                b += e, P.text = b
            }, P.anchor.set(1, 0), P.x = l.screen.width - 20, P.y = 20, l.stage.addChild(P);
            let M = i("mph: 0", 32);
            M.anchor.set(0, 0), M.x = 20, M.y = 20, l.stage.addChild(M), n.push(M), n.push(P), n.push(I), n.push(x), a.addChild(m), n.push(m);
            let k = function() {
                for (let e in o) o[e].sprite.destroy();
                for (let e = 0; e < n.length; e++) n[e].destroy();
                document.removeEventListener("keydown", c), document.removeEventListener("keyup", h), document.removeEventListener("pointerdown", g), document.removeEventListener("pointerup", f), l.ticker.remove(S), Ie.gameList(), Ie.results(b, Math.floor(b / 50))
            }
        },
        results: function(e = 10, a = 50, o = -1, r = n.ui.score) {
            let s = Ie.blackTint(.2);
            s.start();
            let c = new PIXI.NineSlicePlane(G.inputNineSlice[2]);
            c.width = 200, c.height = 200, c.x = l.screen.width / 2, c.y = l.screen.height / 2, c.pivot.set(c.width / 2, c.height / 2), l.stage.addChild(c);
            let h = new PIXI.BitmapText(-1 == o ? n.ui.gameOver : o, {
                fontName: "ShagBlack",
                fontSize: 24
            });
            h.anchor.set(.5, 0), h.x = c.width / 2, h.y = 30, c.addChild(h);
            let u = c.width / 2,
                p = i(r + ": " + e, 20, "center", void 0, 1);
            p.x = u, p.y = h.y + 70, -1 == o && c.addChild(p), [].push(p);
            let m = 0,
                y = new PIXI.Container,
                g = new PIXI.Sprite(G["Sprites/GameUI"][14]);
            y.addChild(g), g.x = 0, g.y = 0, g.scale.x = .75, g.scale.y = .75, g.anchor.set(.5, .5), m += g.texture.trim.width / 2 * g.scale.x;
            let f = i(a, 20, "left", "center", 1);
            f.anchor.set(0, .5), f.x = m + 10, f.y = -2, m += f.width, y.addChild(f), y.x = u - m / 2, y.y = h.y + 50, c.addChild(y);
            let w = {},
                v = 0,
                I = Math.min(1e4, a),
                S = !1,
                C = new ae((function() {
                    S || (S = !0, a > 0 && t.sfx && (R.collect.stop(), R.collect.play()), function() {
                        for (let e = 0; e < I; e++) {
                            let e = new PIXI.Sprite(G["Sprites/GameUI"][14]);
                            e.scale.x = .4 + .5 * Math.random(), e.scale.y = e.scale.x, e.anchor.set(.5, .5), e.y = g.transform.worldTransform.ty, e.vr = Math.random() - .5, e.facing = Math.random() * Math.PI * 2;
                            let t = 1 + 8 * Math.random();
                            e.vx = t * Math.cos(e.facing), e.vy = t * Math.sin(e.facing), e.x = g.transform.worldTransform.tx, l.stage.addChild(e), w[v++] = e
                        }
                        0 != I && (g.visible = !1), setTimeout((function() {
                            x.coins += a, b()
                        }), 500), k()
                    }())
                }), 20, c.height - 20, c.width - 40, 30, n.ui.continue, 0, 0, 1, 1, "center");
            c.addChild(C.element);
            let P = 0,
                M = Math.random() - .5,
                k = function() {
                    C.interactive = !1, T.x = c.x, T.y = c.y, T.rotation = c.rotation, T.scale = c.scale, c.closing = !0, P = 0
                },
                T = {
                    x: l.screen.width / 2,
                    y: l.screen.height / 2,
                    rotation: M,
                    scale: .5
                };
            c.onDestroyed = function() {}, c.destroyBook = function() {
                c.onDestroyed(), l.ticker.remove(X), C.destroy(), g.destroy(), f.destroy(), c.destroy({
                    children: !0
                })
            };
            let A = function() {
                    for (let e in w) {
                        let t = w[e];
                        t.y += t.vy * ke, t.x += t.vx * ke;
                        let i = 50,
                            n = 50;
                        t.facing = Math.atan2(n - t.y, i - t.x);
                        let a = 8,
                            o = K(t.x, t.y, i, n);
                        o < 50 ? (t.vx = a * Math.cos(t.facing), t.vy = a * Math.sin(t.facing)) : (t.vx = d.linear(t.vx, a * Math.cos(t.facing), .02, ke), t.vy = d.linear(t.vy, a * Math.sin(t.facing), .02, ke)), t.rotation += t.vr / 10 * ke, o < 5 * ke && (t.destroy(), I--, delete w[e]), I <= 0 && l.ticker.remove(A)
                    }
                },
                X = function() {
                    if (c.closing) {
                        if (c.y = ease[16](Math.min(40, P), T.y, -T.y + l.screen.height + 500, 40), c.rotation = ease[1](Math.min(70, P), T.rotation, M, 70), P > 40) return s.end(), void c.destroyBook()
                    } else c.x = ease[17](Math.min(80, P), T.x, 0, 80), c.y = ease[8](Math.min(70, P), T.y, -20, 70), c.rotation = window.eases.easeOutElastic(Math.min(100, P), T.rotation, -M, 100), c.scale.x = window.eases.easeOutElastic(Math.min(90, P), T.scale, .5, 90);
                    c.scale.y = c.scale.x, P += ke
                };
            return l.ticker.add(X), l.ticker.add(A), c
        },
        message: function(e, t = -1, i = function() {}, n = -1, a, o = !0) {
            let r = Ie.blackTint(.2, o);
            r.start();
            let s = new PIXI.NineSlicePlane(G.inputNineSlice[2]);
            s.width = Math.max(320, l.screen.width / 2), s.x = l.screen.width / 2, s.y = l.screen.height / 2, l.stage.addChild(s);
            let d = 0; - 1 == t && (d += -70);
            let c, h = new PIXI.BitmapText(e, {
                fontName: "ShagBlack",
                fontSize: 24,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: s.width - 90 - 30 - d,
                whiteSpace: "normal"
            });
            s.height = h.height + 90, h.anchor.set(0, .5), h.x = 110 + d, h.y = s.height / 2 - 10, s.addChild(h), -1 != t && (c = new PIXI.Sprite(t), s.addChild(c), c.anchor.set(.5, .5), c.y = s.height / 2 - 10, c.x = 60, c.scale.x = .8, c.scale.y = .8);
            let u = 0; - 1 != n && (s.height += 40), s.pivot.set(s.width / 2, s.height / 2);
            let p, m, y, g = Math.random() - .5,
                f = function() {
                    s.closing || (w.x = s.x, w.y = s.y, w.rotation = s.rotation, w.scale = s.scale, s.closing = !0, u = 0)
                }; - 1 == n ? (p = Ie.exitButton(f, s.width - 20, 20, .3, .1), p.sprite.alpha = 0, s.addChild(p.sprite), p.interactive = !1, p.show = !1, setTimeout((function() {
                p.show = !0, p.sprite.interactive = !0
            }), 500)) : (m = new ae((function() {
                x = 0, f()
            }), 15, s.height - 15, s.width / 2 - 20, 30, a[0], 0, 0, 1, 1, "center"), s.addChild(m.element), y = new ae((function() {
                i = n, f()
            }), s.width - 15, s.height - 15, s.width / 2 - 20, 30, a[1], 0, 1, 1, 1, "center"), s.addChild(y.element));
            let x = 0,
                w = {
                    x: l.screen.width / 2,
                    y: l.screen.height / 2,
                    rotation: g,
                    scale: .5
                };
            s.onDestroyed = function() {}, s.destroyBook = function() {
                s.onDestroyed(), l.ticker.remove(v), -1 == n ? p.destroy() : (m.destroy(), y.destroy()), h.destroy(), -1 != t && c.destroy(), s.destroy({
                    children: !0
                }), i()
            };
            let v = function() {
                if (-1 == n && (p.show && (p.sprite.alpha += .05), p.sprite.alpha >= 1 && (p.sprite.alpha = 1, p.show = !1)), s.closing) {
                    if (s.y = ease[16](Math.min(40, u), w.y, -w.y + l.screen.height + 500, 40), s.rotation = ease[1](Math.min(70, u), w.rotation, g, 70), u > 40) return r.end(), void s.destroyBook()
                } else s.x = ease[17](Math.min(80, u), w.x, 0, 80), s.y = ease[8](Math.min(70, u), w.y, -20, 70), s.rotation = window.eases.easeOutElastic(Math.min(100, u), w.rotation, -g, 100), s.scale.x = window.eases.easeOutElastic(Math.min(90, u), w.scale, .5, 90);
                s.scale.y = s.scale.x, u += ke
            };
            return l.ticker.add(v), s.exit = f, s
        },
        wardrobe: function(e = function() {}) {
            let a = new PIXI.Sprite(G["Sprites/Rooms"][7]);
            l.stage.addChild(a), a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1, a.scale.y = 1;
            let r = new PIXI.Container;
            l.stage.addChild(r);
            let s = 0,
                c = Ie.coinCounter();
            r.addChild(c);
            let h = x.coins;
            c.x = 20, c.y = 20;
            let p = {},
                m = 0,
                g = 0,
                f = 0,
                v = [],
                I = i("", 32, "center");
            I.x = l.screen.width / 2, I.y = l.screen.height - 150;
            let S = t.costume,
                C = {},
                P = new PIXI.Container,
                M = new PIXI.Graphics;
            P.mask = M, l.stage.addChild(P), P.x = 40, P.y = 80;
            let k = l.screen.width - 80,
                T = l.screen.height - 300;
            M.beginFill(0), M.drawRect(P.x, P.y, k, T), M.endFill(), P.interactive = !0, P.on("pointerdown", (function(e) {
                let t = e.clientY / o;
                P.dragOffset = {
                    y: t - P.y
                }, P.prevY = P.y, P.vy = 0, P.scrolling = !0
            }));
            let A = function(e) {
                    if (!P.scrolling) return;
                    let t = e.clientY / o;
                    P.prevY = P.y, P.y = t - P.dragOffset.y
                },
                X = function() {
                    P.scrolling = !1
                };
            document.addEventListener("pointermove", A), document.addEventListener("pointerup", X), P.vy = 0;
            let E = 0,
                L = function() {
                    let e = 124 * -E + 80 - 50 + T;
                    P.vy = d.linear(P.vy, 0, .05, ke), P.scrolling ? P.vy = P.y - P.prevY : P.y += P.vy, N.targetAlpha = 1, P.y >= 80 && (P.y = 80, P.vy = 0), P.y <= e && (N.targetAlpha = 0, P.y = e, P.vy = 0), N.alpha = d.linear(N.alpha, N.targetAlpha, .1, ke)
                };
            l.ticker.add(L);
            let N = new PIXI.Sprite(G["Sprites/Rooms"][11]);
            l.stage.addChild(N), N.x = P.x, N.y = P.y + T - 90, N.width = k, N.height = 100;
            for (let e in y) {
                let a = y[e];
                if (a.hidden) continue;
                if (a.secret && !a.owned) continue;
                let o = !1;
                null != Me.costumes[e] && Me.costumes[e].expiry > Date.now() && 0 == a.owned && (o = !0, a.discount = Me.costumes[e]), E++;
                let r = !1;
                a.owned || -1 != a.cost || (r = !0);
                let d = new ae((function() {
                    I.text = ""
                }), 0, 0 + 124 * s, k, 120, "", 0, 0, 0, r ? 11 : 3);
                C[e] = d, d.element.interactive = !1, P.addChild(d.element);
                let b = new PIXI.Rectangle(0, 0, 0, 0);
                if (-1 != a.sprite) {
                    let e = new PIXI.Sprite(G["Sprites/Poses"][a.sprite]);
                    if (e.scale.x = .5, e.scale.y = .5, e.hitArea = b, d.element.addChild(e), e.anchor.set(.5, .5), e.x = 50, e.y = 60, r) {
                        let t = new PIXI.ColorMatrixFilter;
                        t.matrix = [.5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0], t.blackAndWhite(1), e.filters = [t]
                    }
                }
                let M, T, A = i(a.name, 24, "left", "middle");
                if (r && (A.text = "???"), A.x = 100, A.y = 20, d.element.addChild(A), null != a.artist) {
                    let e = i(n.ui.artist + ": " + a.artist.name, 12, "left", "middle");
                    e.x = 100, e.y = 50, d.element.addChild(e)
                }
                if (A.width > k - 50 && (A.width = k - 50), A.scale.y = A.scale.x, a.owned || r) M = i(n.ui.owned, 16), r && (M.text = ""), M.x = 100, M.scale.y = M.scale.x, M.y = 50 + (16 * -M.scale.y + 16) / 2 + (null == a.artist ? 0 : 15), d.element.addChild(M);
                else {
                    if (M = i(a.cost, 16), M.x = 130, M.width > 60 && (M.width = 60), M.scale.y = M.scale.x, M.y = 50 + (16 * -M.scale.y + 16) / 2 + (null == a.artist ? 0 : 15), d.element.addChild(M), v.push(M), o) {
                        let e = new PIXI.NineSlicePlane(G.inputNineSlice[18], 15, 15, 15, 15);
                        e.x = M.x - 3, e.y = M.y + 7, e.width = M.width + 6, e.height = M.height - 11, d.element.addChild(e), v.push(e);
                        let t = i(a.cost * a.discount.price, 16);
                        t.x = 130, t.width > 60 && (t.width = 60), t.scale.y = t.scale.x, t.y = M.y + 20, d.element.addChild(t), v.push(t);
                        let n = i(xe(a.discount.expiry - Date.now()), 16);
                        n.y = 100, n.x = 20;
                        let r = setInterval((function() {
                            o && (n.text = xe(a.discount.expiry - Date.now()), Date.now() > a.discount.expiry && (o = !1, t.destroy(), n.destroy(), e.destroy()))
                        }), 1e3);
                        M.destroyDiscount = function() {
                            t.destroy(), n.destroy(), e.destroy()
                        }, we.push(r), d.element.addChild(n)
                    }
                    T = new PIXI.Sprite(G["Sprites/GameUI"][14]), d.element.addChild(T), T.x = 110, T.y = 60 + (null == a.artist ? 0 : 15), T.scale.x = .75, T.scale.y = .75, T.anchor.set(.5, .5), T.hitArea = b, v.push(T), -1 == a.sprite && (T.x -= 80), 0 == a.cost && (M.text = "FREE", M.x = 100, T.visible = !1)
                }
                if (-1 == a.sprite && (M.x -= 80, A.x -= 80), !a.owned) {
                    let e = new ae((function() {
                        if (-1 == a.cost) return void Ie.message(n.message.obtainCostume(u[a.achievement].name), G["Sprites/GameUI"][u[a.achievement].icon]);
                        let i = a.cost;
                        if (o && (i = a.cost * a.discount.price), i > h) return g < .01 && (f = 0), g = 2, I.text = "Not enough coins!", I.alpha = 2, void(t.sfx && (R.fail.stop(), R.fail.play()));
                        o && M.destroyDiscount();
                        let r = Math.floor(Math.max(600, i) / 6);
                        w.happiness += 40 - i / 100, w.progress += 50;
                        let s = Math.floor(i / 10),
                            d = s / r;
                        setTimeout((function() {
                            if (t.sfx) {
                                if (0 == i) return;
                                i > 500 ? R.coinlarge.play() : i > 100 ? R.coinmedium.play() : R.coinsmall.play()
                            }
                        }), 750);
                        let y = setInterval((function() {
                            if (d <= 0 || O) clearInterval(y);
                            else {
                                d--;
                                for (let e = 0; e < (d <= 0 ? s % r : r); e++) {
                                    let e = new PIXI.Sprite(G["Sprites/GameUI"][14]);
                                    e.scale.x = .4 + .5 * Math.random(), e.scale.y = e.scale.x, e.anchor.set(.5, .5), e.y = c.y + 20, e.vr = Math.random() - .5, e.vy = 20 * (Math.random() - .6), e.vx = 20 * (Math.random() - .1), e.x = c.x + 20, l.stage.addChild(e), p[m++] = e
                                }
                            }
                        }), 1e3 / 24);
                        a.owned = !0, t.sfx && (R.purchase.stop(), R.purchase.play()), e.destroy(), L.element.y += 30, L.inputText.text = n.ui.wear, h -= i, x.coins = h, T.destroy(), M.text = n.ui.owned, a.owned = !0, 0 != a.cost && (M.x -= 30), X()
                    }), k - 10, 110, 80, 20, r ? n.ui.info : n.ui.get, 0, 1, 1, 4, "center");
                    d.element.addChild(e.element)
                }
                let X = function() {
                        if (S != e && ("Look" == W.currentPart ? W.onAnimationEnd = function() {
                                W.gotoPart("Look2"), W.onAnimationEnd = function() {
                                    W.currentPart = -1
                                }
                            } : (W.gotoPart("Look2"), W.onAnimationEnd = function() {
                                W.currentPart = -1
                            }), F = 0, S = e, null != W.destroyCostume && (W.destroyCostume(), W.destroyCostume = void 0), a.apply(W), _ = 1, a.owned)) {
                            for (let e in C) C[e].wear.inputText.text == n.ui.wearing && (C[e].wear.inputText.text = n.ui.wear);
                            t.costume = e, L.inputText.text = n.ui.wearing
                        }
                    },
                    L = new ae(X, k - 10, 110 - (a.owned ? 0 : 30), 80, 20, a.owned ? t.costume == e ? n.ui.wearing : n.ui.wear : n.ui.preview, 0, 1, 1, 4, "center");
                d.wear = L, r || d.element.addChild(L.element), v.push(A), v.push(d), s++
            }
            let U = i(n.ui.comingsoon, 24, "center");
            P.addChild(U), U.x = k / 2, U.y = 124 * E + 20;
            let B = Ie.exitButton((function() {
                e(), b(), Ie.flash(!1, V)
            }), l.screen.width - 40, 40, .4, 0);
            l.stage.addChild(B.sprite);
            let F = 50;
            r.origX = 0, r.time = 50;
            let O = !1,
                _ = 0,
                z = function() {
                    for (let e in p) {
                        let t = p[e];
                        t.y += t.vy * ke, t.x += t.vx * ke, t.vy += .5 * ke, t.vx = d.linear(t.vx, 0, .05, ke), t.rotation += t.vr / 10 * ke, t.y > l.screen.height + 200 && (t.destroy(), delete p[e])
                    }
                    Q.matrix = [1 - _, 0, 0, 0, _, 0, 1 - _, 0, 0, _, 0, 0, 1 - _, 0, _, 0, 0, 0, 1, 0], Q.resolution = o, _ = d.linear(_, 0, .05, ke), F < 180 && F++, W.scale.x = window.eases.easeOutElastic(F, .9, -.15, 180), W.scale.y = window.eases.easeOutElastic(F, .7, .05, 180), O || (c.updateCounter(d.linear(c.getCounterAmount(), h, .1, ke)), r.x = 0, g > .01 && (r.x += Math.cos(f) * g * 5, f += .5 * ke, g = d.linear(g, 0, .1, ke)), I.alpha > 0 && (I.alpha -= .04))
                };
            l.ticker.add(z);
            let W = Y(D.Teardrop, se.Teardrop),
                j = new PIXI.Rectangle(-60, -160, 120, 180);
            W.hitArea = j, W.interactive = !0, W.on("pointerup", (function() {
                t.totalSlaps++, 2763 == t.totalSlaps && (Ie.achievementQueue("slapTD2763"), b());
                let e = 1 + Math.floor(4 * Math.random());
                R.wave.stop(), t.sfx && (R["slap" + e].attack = 0, R["slap" + e].stop(), R["slap" + e].play()), W.gotoPart("Slap"), W.currentPart = -1
            })), W.onAnimationEnd = function() {
                W.currentPart = -1
            }, w.sleep < 20 && (W.visible = !1), y[t.costume].apply(W), l.stage.addChild(W), W.x = l.screen.width / 2, W.y = l.screen.height / 2 + 250, W.scale.x = .8, W.scale.y = .8, W.play(60), W.gotoPart("Look");
            let Q = new PIXI.ColorMatrixFilter;

            function V() {
                for (let e = 0; e < we.length; e++) clearInterval(we[e]);
                l.ticker.remove(L), document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", X);
                for (let e in p) null != p[e].destroy && p[e].destroy(), delete p[e];
                I.destroy(), B.destroy(), a.destroy();
                for (let e = 0; e < v.length; e++) v[e].destroyed || v[e].destroy();
                c.destroyCounter(), null != W.destroyCostume && (W.destroyCostume(), W.destroyCostume = void 0), W.destroyAnimation(), l.ticker.remove(z), O = !0
            }
            Q.matrix = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], W.filters = [Q], l.stage.addChild(I), v.push(N), v.push(P), v.push(M)
        },
        achievements: function(e = function() {}) {
            let a = new PIXI.Sprite(G["Sprites/Rooms"][18]);
            l.stage.addChild(a), a.interactive = !0, a.x = l.screen.width / 2, a.y = l.screen.height / 2, a.anchor.set(.5, .5), a.scale.x = 1, a.scale.y = 1;
            let r = new PIXI.Container;
            l.stage.addChild(r);
            let s = {},
                c = 0,
                h = 0,
                p = [],
                m = 0;
            for (let e in u) u[e].done && m++;
            let y = new PIXI.BitmapText(n.ui.achievements + ": " + m + "/" + Object.keys(u).length, {
                fontSize: 32,
                fontName: "arial"
            });
            y.x = 40, y.y = 20, y.width > l.screen.width - 130 && (y.width = l.screen.width - 130, y.scale.y = y.scale.x), l.stage.addChild(y);
            let g = i("", 32, "center");
            g.x = l.screen.width / 2, g.y = l.screen.height - 150, t.costume;
            let f = new PIXI.Container,
                x = new PIXI.Graphics;
            f.mask = x, l.stage.addChild(f), f.x = 40, f.y = 80;
            let w = l.screen.width - 80,
                v = l.screen.height - 80;
            x.beginFill(0), x.drawRect(f.x, f.y, w, v), x.endFill(), f.interactive = !0, f.on("pointerdown", (function(e) {
                let t = e.clientY / o;
                f.dragOffset = {
                    y: t - f.y
                }, f.prevY = f.y, f.vy = 0, f.scrolling = !0
            }));
            let I = function(e) {
                    if (!f.scrolling) return;
                    let t = e.clientY / o;
                    f.prevY = f.y, f.y = t - f.dragOffset.y
                },
                S = function() {
                    f.scrolling = !1
                };
            document.addEventListener("pointermove", I), document.addEventListener("pointerup", S), f.vy = 0;
            let C = function() {
                let e = 80 - P - 50 + v;
                f.vy = d.linear(f.vy, 0, .05, ke), f.scrolling ? f.vy = f.y - f.prevY : f.y += f.vy, b.targetAlpha = 1, f.y >= 80 && (f.y = 80, f.vy = 0), f.y <= e && (b.targetAlpha = 0, f.y = e, f.vy = 0), b.alpha = d.linear(b.alpha, b.targetAlpha, .1, ke)
            };
            l.ticker.add(C);
            let b = new PIXI.Sprite(G["Sprites/Rooms"][11]);
            b.x = f.x, b.y = f.y + v - 90, b.width = w, b.height = 100;
            let P = 0;
            for (let e in u) {
                let t = u[e];
                if (t.secret && !t.done) continue;
                let n = new PIXI.NineSlicePlane(G.inputNineSlice[2]);
                n.width = w, n.x = 0, n.y = P, f.addChild(n);
                let a = new PIXI.BitmapText(t.title, {
                    fontName: "ShagBlack",
                    fontSize: 24
                });
                n.height = a.height + 50, a.anchor.set(0, .5), a.x = 80, a.y = 20, n.addChild(a);
                let o = new PIXI.BitmapText(t.description, {
                    fontName: "ShagBlack",
                    fontSize: 16,
                    breakWords: !0,
                    wordWrap: !0,
                    wordWrapWidth: 200,
                    maxWidth: n.width - 140,
                    whiteSpace: "normal"
                });
                o.anchor.set(0, 0), n.height += o.height, o.anchor.set(0, .5), o.x = 80, o.y = 35 + o.height / 2, n.addChild(o), null == t.icon && (t.icon = 11);
                let r = G["Sprites/GameUI"][t.icon],
                    s = new PIXI.Sprite(r);
                n.addChild(s), s.anchor.set(.5, .5), s.y = n.height / 2 - 5, s.x = 40, s.scale.x = .5, s.scale.y = .5, p.push(n);
                let l = t.done ? 26 : 25,
                    d = new PIXI.Sprite(G["Sprites/GameUI"][l]);
                if (d.anchor.set(.5, .5), n.addChild(d), d.x = w - 40, d.y = n.height / 2 - 5, null != t.getProgress) {
                    let e = i(t.getProgress(), 12, "center", void 0, 1);
                    e.x = w - 40, e.y = d.y + 25, n.addChild(e)
                }
                P += n.height + 4
            }
            p.push(y);
            let M = Ie.exitButton((function() {
                e(), Ie.flash(!1, A)
            }), l.screen.width - 40, 40, .4, 0);
            l.stage.addChild(M.sprite), r.origX = 0, r.time = 50;
            let k = !1,
                T = function() {
                    k || (r.x = 0, c > .01 && (r.x += Math.cos(h) * c * 5, h += .5 * ke, c = d.linear(c, 0, .1, ke)), g.alpha > 0 && (g.alpha -= .04))
                };

            function A() {
                l.ticker.remove(C), document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", S);
                for (let e in s) null != s[e].destroy && s[e].destroy(), delete s[e];
                g.destroy(), M.destroy(), a.destroy();
                for (let e = 0; e < p.length; e++) p[e].destroyed || p[e].destroy();
                l.ticker.remove(T), k = !0
            }
            l.ticker.add(T), l.stage.addChild(g), p.push(b), p.push(f), p.push(x)
        },
        settings: fe,
        cargame: function() {
            let e = new PIXI.TilingSprite(G["Sprites/RepeatingUI"][0]);
            l.stage.addChild(e), e.interactive = !0, e.x = 0, e.y = 0, e.width = l.screen.width, e.height = l.screen.height, e.clampMargin = 1;
            let i = 0,
                n = !1;
            window.onblur = function() {
                n || g()
            };
            let a = new PIXI.Container;
            l.stage.addChild(a), a.pivot.x = -l.screen.width / 2, a.pivot.y = -l.screen.height / 2;
            let o = Matter.Engine.create(),
                r = {},
                s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            })), document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !1
            })), document.addEventListener("pointerdown", (function() {
                s = !0
            })), document.addEventListener("pointerup", (function() {
                s = !1
            }));
            let c = [],
                h = [],
                u = {
                    box: Matter.Bodies.rectangle(0, -400, 100, 100),
                    sprite: function() {
                        let e = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
                        return e.width = 100, e.height = 100, a.addChild(e), e.pivot.x = 50, e.pivot.y = 50, e
                    }()
                };
            c.push(u), h.push(u.box);
            for (let e = 0; e < 500; e++) {
                let t = {},
                    i = .1 + Math.random() / 2,
                    n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let o = new PIXI.Sprite(G["Sprites/GameUI"][Math.round(6 * Math.random())]);
                o.scale.x = i, o.scale.y = i, o.anchor.set(.5, .5), a.addChild(o), t.sprite = o, c.push(t), h.push(n), t.sprite.tint = 16777215 * Math.random()
            }
            let p = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(o.world, [p, ...h]);
            let m = Y(D.faceMinigame);
            a.addChild(m);
            let y = function(t) {
                for (let e = 0; e < c.length; e++) {
                    let t = c[e].sprite,
                        i = c[e].box;
                    t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity - .01 * ke), r[" "] && null != Matter.Collision.collides(p, u.box) && Matter.Body.setVelocity(u.box, {
                    x: u.box.velocity.x,
                    y: u.box.velocity.y - 20
                }), r.d && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity + .01 * ke), m.x = u.sprite.x, m.y = u.sprite.y, m.rotation = u.sprite.rotation, a.x = d.linear(a.x, -c[0].sprite.x, .05, ke), e.tilePosition.x = a.x / 2, Matter.Engine.update(o, t * (1e3 / 60))
            };

            function g() {
                n = !n, f.changePause(n), n ? (i = -Date.now(), t.inGame = !1, l.ticker.remove(y), Ie.message("Game paused", G["Sprites/GameUI"][32], (function() {
                    g()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        ! function() {
                            f.destroyPause(), Matter.World.clear(o.world), Matter.Engine.clear(o);
                            for (let e = 0; e < c.length; e++) c[e].sprite.destroy();
                            m.destroyAnimation(), e.destroy()
                        }(), Ie.gameList(), Ie.results(0, 0, "what", "what")
                    }))
                }), ["Play", "Home"], !1)) : (t.inGame = !0, l.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())), u.sprite.visible = !1, l.ticker.add(y);
            let f = Ie.pauseButton((function() {
                g()
            }), .4);
            l.stage.addChild(f), f.x = l.screen.width - 40, f.y = 40
        },
        cargame2: function() {
            let e = new PIXI.TilingSprite(G["Sprites/RepeatingUI"][0]);
            l.stage.addChild(e), e.interactive = !0, e.x = 0, e.y = 0, e.width = l.screen.width, e.height = l.screen.height, e.clampMargin = 1;
            let i = 0,
                n = !1;
            window.onblur = function() {
                n || g()
            };
            let a = new PIXI.Container;
            l.stage.addChild(a), a.pivot.x = -l.screen.width / 2, a.pivot.y = -l.screen.height / 2;
            let o = Matter.Engine.create(),
                r = {},
                s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !0, ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            })), document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"), "ArrowRight" == e.key && (t = "d"), "ArrowUp" == e.key && (t = " "), "w" == e.key && (t = " "), r[t] = !1
            })), document.addEventListener("pointerdown", (function() {
                s = !0
            })), document.addEventListener("pointerup", (function() {
                s = !1
            }));
            let c = [],
                h = [],
                u = {
                    box: Matter.Bodies.rectangle(0, -400, 100, 100),
                    sprite: function() {
                        let e = new PIXI.NineSlicePlane(G.inputNineSlice[5], 15, 15, 15, 15);
                        return e.width = 100, e.height = 100, a.addChild(e), e.pivot.x = 50, e.pivot.y = 50, e
                    }()
                };
            c.push(u), h.push(u.box);
            for (let e = 0; e < 500; e++) {
                let t = {},
                    i = .1 + Math.random() / 2,
                    n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let o = new PIXI.Sprite(G["Sprites/GameUI"][Math.round(6 * Math.random())]);
                o.scale.x = i, o.scale.y = i, o.anchor.set(.5, .5), a.addChild(o), t.sprite = o, c.push(t), h.push(n), t.sprite.tint = 16777215 * Math.random()
            }
            let p = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(o.world, [p, ...h]);
            let m = Y(D.faceMinigame);
            a.addChild(m);
            let y = function(t) {
                for (let e = 0; e < c.length; e++) {
                    let t = c[e].sprite,
                        i = c[e].box;
                    t.rotation = i.angle, t.x = i.position.x, t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity - .01 * ke), r[" "] && null != Matter.Collision.collides(p, u.box) && Matter.Body.setVelocity(u.box, {
                    x: u.box.velocity.x,
                    y: u.box.velocity.y - 20
                }), r.d && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity + .01 * ke), m.x = u.sprite.x, m.y = u.sprite.y, m.rotation = u.sprite.rotation, a.x = d.linear(a.x, -c[0].sprite.x, .05, ke), e.tilePosition.x = a.x / 2, Matter.Engine.update(o, t * (1e3 / 60))
            };

            function g() {
                n = !n, f.changePause(n), n ? (i = -Date.now(), t.inGame = !1, l.ticker.remove(y), Ie.message("Game paused", G["Sprites/GameUI"][32], (function() {
                    g()
                }), (function() {
                    Ie.blurPan(l.stage, (function() {
                        ! function() {
                            f.destroyPause(), Matter.World.clear(o.world), Matter.Engine.clear(o);
                            for (let e = 0; e < c.length; e++) c[e].sprite.destroy();
                            m.destroyAnimation(), e.destroy()
                        }(), Ie.gameList(), Ie.results(0, 0, "what", "what")
                    }))
                }), ["Play", "Home"], !1)) : (t.inGame = !0, l.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())), u.sprite.visible = !1, l.ticker.add(y);
            let f = Ie.pauseButton((function() {
                g()
            }), .4);
            l.stage.addChild(f), f.x = l.screen.width - 40, f.y = 40
        },
        crashHandler: function(e, t = -1) {
            let a = "Unknown";
            e.message.includes("(reading 'off')") && (a = "ERR_PIXI_DESTROYOBJECT"), e.message.includes("(reading 'stop')") && (a = "ERR_PIZZICATO_FAILURETOSTOPAUDIO"), e.message.includes("(reading 'buffer')") && (a = "ERR_PIZZICATO_AUDIOBUFFER"), e.message.includes("getRawSourceNode") && (a = "ERR_PIZZICATO_NOTLOADED"), e.message.includes("(setting 'x')") && (a = "ERR_FOODSYSTEM_FAILURETOSETPOSITION"), -1 != t && (a = t);
            const r = new PIXI.Application({
                background: "#000011",
                width: l.screen.width,
                height: l.screen.height,
                resolution: o * window.devicePixelRatio
            });
            document.body.appendChild(r.view);
            let s = new PIXI.Sprite(G["Sprites/GameThumbnails"][4]);
            s.x = r.screen.width / 2, s.y = r.screen.height / 2 - 100, s.scale.x = .5, s.scale.y = .5, s.anchor.set(.5, .5), r.stage.addChild(s);
            let d = i(n.crashHandler.whoops, 16, "center");
            d.x = l.screen.width / 2, d.y = l.screen.height / 2 - 200, r.stage.addChild(d);
            let c = i(a, 16, "center");
            c.x = l.screen.width / 2, c.y = l.screen.height / 2 + 175, r.stage.addChild(c);
            let h = i(n.crashHandler.description, 16, "center");
            h.x = l.screen.width / 2, h.y = l.screen.height / 2 - 30, h.anchor.set(.5, 0), r.stage.addChild(h);
            let u = new ae((function() {
                ! function() {
                    c.destroy(), h.destroy(), u.destroy(), p.destroy(), m.destroy(), r.destroy(!0);
                    for (let e in R) R[e].volume = R[e].defaultVolume
                }()
            }), l.screen.width / 2 - 80, l.screen.height / 2 + 100, 150, 30, n.ui.continue, 0, .5, .5, 1, "center");
            r.stage.addChild(u.element);
            let p = new ae((function() {
                window.location = window.location, setTimeout((function() {
                    p.inputText.text = "Couldn't reload", p.inputText.scale.set(.9, .9)
                }), 100)
            }), l.screen.width / 2 + 80, l.screen.height / 2 + 100, 150, 30, n.ui.reload, 0, .5, .5, 1, "center");
            r.stage.addChild(p.element);
            let m = new ae((async function() {
                1 == await async function(e) {
                    try {
                        return await navigator.clipboard.writeText(e), 1
                    } catch (e) {
                        return 0
                    }
                }(JSON.stringify({
                    message: e.message,
                    lineno: e.lineno,
                    colno: e.colno
                })) && (m.inputText.text = "Copied", m.element.resetSize(), m.element.interactive = !1, m.element.texture = G.inputNineSlice[9])
            }), l.screen.width / 2, l.screen.height / 2 + 100 + 40, 310, 30, n.crashHandler.copyErrorText, 0, .5, .5, 1, "center");
            r.stage.addChild(m.element);
            for (let e in R) R[e].defaultVolume = R[e].volume, R[e].volume = 0
        }
    };
    let Se, Ce = "1.2.2",
        be = !0,
        Pe = !1,
        Me = {
            costumes: {},
            foods: {}
        };
    PIXI.Assets.load("/discount.json?nocache=" + Date.now()).then((e => {
        Me = e
    })), PIXI.Assets.load("./latest.json?nocache=" + Date.now()).then((e => {
        e.latestVersion != Ce && (Pe = !0, Se = e.latestVersion), be = !1
    }));
    let ke = 2;
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), window.addEventListener("error", (function(e) {
        setTimeout((function() {
            Ie.crashHandler(e)
        }), 100)
    }));
    let Te = !1;

    function Ae() {
        Ie.setUpTints(), PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.OFF, "ontouchstart" in document.documentElement && (l.touchScreen = !0, ontouchstart = function(e) {
            e.returnValue = !1
        }, ontouchend = function(e) {
            e.returnValue = !1
        }, ontouchmove = function(e) {
            e.returnValue = !1
        }, ontouchcancel = function(e) {
            e.returnValue = !1
        }), window.book = Ie.book, l.ticker.add((function() {
            ke = l.ticker.deltaTime;
            for (let e in q) {
                let t = q[e];
                q[e].animate && (t.animationTime += ke, t.scale.x = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.x, t.destinationSize.x - t.animationSize.x, 24), t.scale.y = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.y, t.destinationSize.y - t.animationSize.y, 24))
            }
        })), Te = !0;
        let e = function() {
            t.music && R.brittlerille.play(), R.brittlerille.volume = .5, R.brittlerille.pausing = !1, R.brittlerille.attack = 2, R.brittlerille.release = 3, R.brittlerille.on("end", (function() {
                t.music && R.brittlerille.play()
            })), window.brittlerille = R.brittlerille
        };
        0 == R.brittlerille.loaded ? R.brittlerille.onloadAudio = function() {
            e()
        } : e(), window.setFps = function(e) {
            l.ticker.maxFPS = e
        }, document.body.appendChild(l.view), me.blendMode = PIXI.BLEND_MODES.SUBTRACT, me.interactive = !0, pe.width = l.screen.width, pe.height = l.screen.height, me.width = l.screen.width, me.height = l.screen.height, Ie.myTeardrop();
        let i = "";
        onkeydown = function(e) {
            i += e.key, "bfdibfdiaidfbbfbtpot".includes(i.toLowerCase()) && i.toLowerCase().startsWith("b") ? "bfdibfdiaidfbbfbtpot" == i && (Ie.intro(), i = "") : i = ""
        }, Pe && Ie.updateWarning(), t.lastLogin = Date.now(), b(), (Date.now() - t.gameStartDate) / 1e3 / 60 / 60 / 24 > .5 && !t.saveFileWarning && setTimeout((function() {
            t.saveFileWarning = !0, Ie.message("Your save file is over 2 days old now! Since this is a web game, there's a high chance of your browser removing the game data after 7 days of inactivity. To prevent this, regularly backup/download your save file!", -1, (function() {
                Ie.flash(!1, (function() {
                    Ie.settings()
                }))
            }), (function() {}), ["Settings", "Ignore"])
        }), 500), L.loadAttempts = 0, j()
    }
})();