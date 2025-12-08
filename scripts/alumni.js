function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}

async function buildAlumniList() {
    const data = await fetch("/data/profile_card_data.json").then((res) =>
        res.json()
    );
    const alumniData = data.tfsAlum122025;
    const alumniListContainer = document.querySelector("#alumni-list__cards");
    const cardTemplate = document.querySelector("#card");

    alumniData.forEach((alumnus) => {
        const cardClone = cardTemplate.content.cloneNode(true);
        const nameSlug = slugify(alumnus.name);

        cardClone.querySelector(".card").classList.add(`card--${nameSlug}`);
        cardClone.querySelector(".card__photo").src = alumnus.photo;
        cardClone.querySelector(".card__name").textContent = alumnus.name;
        cardClone.querySelector(".card__role").textContent = alumnus.role;
        cardClone.querySelector(".card__cta-link").href =
            alumnus.portfolio_link;
        cardClone.querySelector(".card__link--github").href = alumnus.github;
        cardClone.querySelector(".card__link--linkedin").href =
            alumnus.linkedin;
        cardClone.querySelector(".card__description").textContent =
            alumnus.description;

        alumniListContainer.appendChild(cardClone);
    });
}

buildAlumniList();
