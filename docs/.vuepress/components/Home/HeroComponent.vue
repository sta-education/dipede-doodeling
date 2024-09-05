<template>
    <section class="hero hero--home img--cover" v-cloak>
        <div class="hero__body">
            <h1><span class="highlight">A</span>lexander <span class="highlight">B</span>ösch</h1>
            <h2>Web-Developer interested in art</h2>
        </div>
    </section>
</template>

<style scoped>
.hero h1, .hero h2 {
    text-decoration: none;
    border: none;
    color: var(--vp-c-accent-text);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
}

.hero h1 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 0.5rem;
}

.hero h2 {
    font-size: 1rem;
    line-height: 1.4rem;

}

.hero .highlight {
    color: var(--vp-c-accent);
    font-size: 3rem;
}

.hero {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    min-height: calc(33vh - var(--navbar-height));
}

.hero__body {
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (min-width: 719px) {
    .hero {
        min-height: calc(66vh - var(--navbar-height));
    }

    .hero h1 {
        font-size: 3rem;
        line-height: 4.5rem;
        margin-bottom: 1rem;
    }

    .hero h2 {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .hero .highlight {
        font-size: 4.5rem;
    }
}

@media (min-width: 	1280px) {
    .hero {
        min-height: calc(80vh - var(--navbar-height));
    }

    .hero h1 {
        font-size: 3.5rem;
        line-height: 5.5rem;
        margin-bottom: 1rem;
    }

    .hero h2 {
        font-size: 2rem;
        line-height: 2.5rem;
    }

    .hero .highlight {
        font-size: 5.5rem;
    }
}
</style>
