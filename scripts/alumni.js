function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}

async function buildAlumniList() {
    const alumniListContainer = document.querySelector("#alumni-list__cards");
    const cardTemplate = document.querySelector("#card");

    const data = await fetch(alumniListContainer.dataset.jsonFile).then((res) =>
        res.json()
    );
    const alumniData = data.data;

    alumniData.forEach((alumnus) => {
        const cardClone = cardTemplate.content.cloneNode(true);
        const nameSlug = slugify(alumnus.name);

        cardClone.querySelector(".card").classList.add(`card--${nameSlug}`);
        cardClone.querySelector(".card__photo").src = alumnus.photo;
        cardClone.querySelector(".card__name").textContent = alumnus.name;
        cardClone.querySelector(".card__role").textContent = alumnus.role;
        const portfolioLink = cardClone.querySelector(".card__cta-link");
        if (alumnus.portfolio_link && alumnus.portfolio_link.trim() !== "") {
            portfolioLink.href = alumnus.portfolio_link.trim();
        } else {
            portfolioLink.remove();
        }
        cardClone.querySelector(".card__link--github").href = alumnus.github;
        cardClone.querySelector(".card__link--linkedin").href =
            alumnus.linkedin;
        cardClone.querySelector(".card__description").textContent =
            alumnus.description;

        alumniListContainer.appendChild(cardClone);
    });
}

buildAlumniList();
