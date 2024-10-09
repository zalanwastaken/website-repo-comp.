const express = require("express")
const app = express()
const port = 5005
const blog1 = `
    <h1 id="Helping the needy">Helping the needy</h1>
            <p>By Mudit Mishra(VIII-B)</p>
            <div class="content">
                <h1>Understanding the "Why" Behind Needs: A Guide to Helping Others Effectively</h1>

                <p>
                    When we set out to help someone, it's important to go beyond just addressing the surface problem.
                    The real key to making a lasting impact is understanding <em>why</em> the need exists in the first
                    place. If we focus on the root cause, we can offer better, more meaningful support.
                </p>

                <p>Here’s how you can approach it:</p>

                <h2>1. Listen Carefully</h2>
                <p>
                    Before jumping to solutions, take the time to listen. Often, the true need isn’t immediately
                    obvious. People might share their frustrations or symptoms of a bigger issue, but if you listen
                    closely, you can pick up on what’s really going on. Giving someone the space to talk and express
                    themselves helps them feel heard and can reveal deeper insights.
                </p>

                <h2>2. Ask Questions That Dig Deeper</h2>
                <p>
                    Sometimes, the first thing someone asks for isn’t actually what they need most. Asking open-ended
                    questions like “What’s been going on?” or “How does this affect you?” encourages the person to
                    reflect and explain the bigger picture. This can help uncover the underlying causes of their
                    problem, leading to a more effective solution.
                </p>

                <h2>3. Offer Solutions That Address Both Immediate and Long-Term Needs</h2>
                <p>
                    Once you’ve identified the "why," you can provide help that’s more targeted. For example, someone
                    might need money to pay a bill, but their larger issue could be unemployment or financial planning.
                    By addressing both the short-term need and offering guidance or resources for long-term stability,
                    you’re helping in a way that lasts beyond the moment.
                </p>

                <h2>4. Be Ready to Adjust</h2>
                <p>
                    Life changes, and so do people’s needs. After helping, it’s a good idea to follow up and see how
                    things are going. Maybe your initial solution worked, or maybe new challenges have popped up. Being
                    flexible and offering continued support shows you care and are invested in the person’s well-being.
                </p>

                <p>
                    Understanding the "why" behind someone’s need can make your support more impactful. It’s not just
                    about solving problems, but about creating lasting, positive change in their life.
                </p>
`
const blog2 = `
    <h1 id="Nature & Us">Nature & Us</h1>
            <p>By Mudit Mishra(VIII-B)</p>
            <div class="content">
                <h1>Nature & Us: A Delicate Balance</h1>

                <p>
                    Nature has always been a fundamental part of human existence. From the air we breathe to the food we
                    eat, our lives are deeply intertwined with the natural world. Yet, as we advance in technology and
                    urbanization, it's easy to forget how vital our connection to nature truly is.
                </p>

                <p>
                    Throughout history, human survival depended on understanding and respecting natural cycles. However,
                    as modern society has developed, this connection has weakened. We’ve distanced ourselves from the
                    natural processes that sustain life, often taking resources without considering the long-term impact
                    on the environment.
                </p>

                <h2>1. The Importance of Balance</h2>
                <p>
                    Nature operates on a delicate balance. Every ecosystem, from forests to oceans, works in harmony,
                    with each element playing a critical role. When we disrupt this balance—through deforestation,
                    pollution, or overconsumption—the effects ripple through the entire system. It’s essential for us to
                    recognize that our well-being is directly linked to the health of the planet.
                </p>

                <h2>2. How We Impact Nature</h2>
                <p>
                    Our actions, whether big or small, have consequences. The choices we make every day, from the
                    products we buy to the energy we use, affect the environment. Climate change, loss of biodiversity,
                    and resource depletion are direct results of human activity. By understanding how we contribute to
                    these problems, we can begin to take steps towards solutions.
                </p>

                <h2>3. Reconnecting with Nature</h2>
                <p>
                    It’s easy to feel disconnected from nature in the hustle and bustle of modern life. But reconnecting
                    doesn’t require grand gestures. Simple actions like spending time outdoors, reducing waste, or
                    supporting sustainable practices can help rebuild that bond. When we take the time to appreciate
                    nature’s beauty and importance, we’re more likely to protect it.
                </p>

                <h2>4. Our Role in Conservation</h2>
                <p>
                    Every individual has a role to play in conserving the environment. By making conscious choices—like
                    using renewable energy, reducing plastic use, and supporting conservation efforts—we can help
                    protect the natural world for future generations. It’s not just about what we take from nature, but
                    what we give back.
                </p>

                <p>
                    Our relationship with nature is a partnership. For humans to thrive, the planet must thrive too.
                    It’s up to us to restore the balance, recognizing that we are part of the natural world, not
                    separate from it.
                </p>
`
const blog3 = `
    <h1 id="Sustainable Change">Sustainable Development</h1>
            <p>By Dev Araya(VIII-B)</p>
            <div class="content">
                <h1>Embracing Sustainable Development: A Path to a Brighter Future</h1>
                <p>
                    Sustainable development is the practice of meeting our current needs while ensuring that future generations can meet theirs. It balances economic growth, social equity, and environmental health.
                </p>
                <h2>1. Economic Growth</h2>
                <p>
                    Sustainable economic growth encourages job creation through green technologies and renewable energy. By investing in sustainable industries, we foster innovation that leads to efficient resource use. A resilient economy not only benefits businesses but also communities, reducing poverty and improving quality of life.
                </p>
                <h2>2. Social Inclusion</h2>
                <p>
                    Ensuring equal access to education and healthcare empowers marginalized communities, helping to break the cycle of poverty. When everyone has a voice and opportunities, social cohesion improves, leading to a more stable society. This inclusivity drives progress and innovation, benefiting society as a whole.
                </p>
                <h2>3. Environmental Protection</h2>
                <p>
                    Protecting natural resources is vital for sustaining life and combating climate change. Sustainable practices like recycling, conservation, and responsible consumption promote ecosystem health. By preserving biodiversity, we secure essential services that our planet provides, ensuring a healthier environment for future generations.
                </p>
                <h2>4. Collective Action</h2>
                <p>
                    Addressing global challenges requires collaborative efforts between governments, businesses, and individuals. By supporting local initiatives and advocating for sustainable policies, we can create meaningful change. Each small action contributes to a larger impact, fostering a culture of sustainability.
                </p>
                <p>
                    Embracing sustainable development is essential for a healthier planet and a more equitable society. Together, we can build a sustainable future that benefits everyone.
                </p>

`
// Middleware to allow CORS for all routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    res.send("Root(/) access is blocked");
});

app.get("/blog1", (req, res) => {
    res.send(blog1);
    console.log(res);
});

app.get("/blog2", (req, res) => {
    res.send(blog2);
    console.log(res);
});

app.get("/blog3", (req, res) => {
    res.send(blog3);
    console.log(res);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
