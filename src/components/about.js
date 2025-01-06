
const pageContent = `<section id="about">
            <div class="center-container">
                <div class="about-us">
                    <h1>about us</h1>
                    <article>
                        <h2>the company</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, rem necessitatibus. Fugit ratione animi nesciunt! Delectus, debitis. Eum quia ducimus corporis reprehenderit, nisi itaque dignissimos molestiae vel in numquam maiores!</p>
                    </article>
                    <article>
                        <h2>about me</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam non nesciunt laborum praesentium animi autem ad nisi laudantium officia in cumque laboriosam incidunt, provident nostrum repudiandae. Aut, architecto reprehenderit.</p>
                    </article>
                </div>
            </div>
        </section>`;
function aboutPage() {
    const page = document.querySelector('#content');
    page.innerHTML = pageContent;
}


export default aboutPage;