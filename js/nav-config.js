// Stillingar fyrir alla kafla og kennslustundir
// Breyttu BARA þessari skrá þegar þú bætir við nýjum kafla eða kennslustund!

const NAV_CONFIG = {
    chapters: [
        {
            id: 1,
            icon: "⚙️",
            title: "Kafli 1: Uppsetning vélar",
            folder: "kafli1",
            lessons: [
                { id: "1-1", title: "1.1 IP tala stillingar", file: "1-1-ip-tala.html" },
                { id: "1-2", title: "1.2 Einingar raðaðar saman", file: "1-2-einingar.html" },
                { id: "1-3", title: "1.3 Online og Download", file: "1-3-tenging.html" }
            ]
        },
        {
            id: 2,
            icon: "⚡",
            title: "Kafli 2: SET/RESET aðferð",
            folder: "kafli2",
            lessons: [
                { id: "2-1", title: "2.1 Hvað er SET?", file: "2-1-set.html" },
                { id: "2-2", title: "2.2 Hvað er RESET?", file: "2-2-reset.html" },
                { id: "2-3", title: "2.3 SET og RESET saman", file: "2-3-saman.html" },
                { id: "2-4", title: "2.4 Æfingar", file: "2-4-aefingar.html" }
            ]
        },
        {
            id: 3,
            icon: "🧮",
            title: "Kafli 3: Blokkir",
            folder: "kafli3",
            lessons: [
                { id: "3-1", title: "3.1 LS - Gildissköl", file: "3-1-ls-blokk.html" },
                { id: "3-2", title: "3.2 CP - Samanburður", file: "3-2-cp-blokk.html" },
                { id: "3-3", title: "3.3 Markerar (M, MW, MD)", file: "3-3-markerar.html" },
                { id: "3-4", title: "3.4 A - Analog samanburður", file: "3-4-a-blokk.html" },
                { id: "3-5", title: "3.5 C - Teljari", file: "3-5-c-blokk.html" },
                { id: "3-6", title: "3.6 T - Tímarafli", file: "3-6-t-blokk.html" },
                { id: "3-7", title: "3.7 MX - Multiplexer", file: "3-7-mx-blokk.html" }
            ]
        },
        {
            id: 4,
            icon: "📚",
            title: "Upprifjun",
            folder: "upprifjun",
            lessons: [
                { id: "4-1", title: "Blokkayfirlit", file: "blokkir.html" }
            ]
        },
        {
            id: 5,
            icon: "🔧",
            title: "Verkfæri",
            folder: "",
            lessons: [
                { id: "5-1", title: "LADDER Builder", file: "ladder-builder.html", isRoot: true }
            ]
        }
    ]
};

// Reikna heildarfjölda kennslustunda
NAV_CONFIG.totalLessons = NAV_CONFIG.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
