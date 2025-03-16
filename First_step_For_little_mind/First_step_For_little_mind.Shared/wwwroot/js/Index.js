function selectClass(className) {
    var subjects = [];

    if (className === "Nursery") {
        subjects = [
            { title: "English", link: "/English Syallabus" },
            { title: "Hindi", link: "/AiseHi" },
            { title: "Poem Story", link: "/alphabets" },
            { title: "Game Zone", link: "/matching" }
        ];
    } else if (className === "LKG") {
        subjects = [
            { title: "English", link: "/English Syallabus" },
            { title: "Hindi", link: "/AiseHi" },
            { title: "Maths", link: "/counter" },
            { title: "Basic Learning", link: "chapter.html" },
            { title: "Poem Story", link: "/alphabets" },
            { title: "Game Zone", link: "/matching" }
        ];
    } else if (className === "UKG") {
        subjects = [
            { title: "English", link: "/English Syallabus" },
            { title: "Hindi", link: "/AiseHi" },
            { title: "Maths", link: "/counter" },
            { title: "Basic Learning", link: "chapter.html" },
            { title: "Poem Story", link: "/alphabets" },
            { title: "Game Zone", link: "/matching" }
        ];
    } else if (className === "class 1" || className === "class 2" || className === "class 3") {
        subjects = [
            { title: "English", link: "/English Syallabus" },
            { title: "Hindi", link: "/AiseHi" },
            { title: "Maths", link: "/counter" },
            { title: "Basic Learning", link: "chapter.html" },
            { title: "Poem Story", link: "/alphabets" },
            { title: "Game Zone", link: "/matching" }
        ];
    }

    var subjectContainer = document.getElementById("subjectContainer");
    subjectContainer.innerHTML = "";

    subjects.forEach(sub => {
        var div = document.createElement("div");
        div.classList.add("card", "card-hover", "shadow", "mb-4");
        div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${sub.title}</h5>
                    <a href="${sub.link}" class="stretched-link"></a>
                </div>
            `;
        subjectContainer.appendChild(div);
    });

    var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'));
    carousel.next();
}
