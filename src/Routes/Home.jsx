import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';
import styles from '/src/styles/Home.module.scss';
import cover from '/src/assets/img/cover-c.jpg';

const Home = () => {
    const { state } = useGlobalStates();
    return (
        <main>
            <div className={styles.hero}>
                <div>
                    <h1>Proper care of your teeth for life</h1>
                    <p>
                        Don’t wait any longer. Visit Dr. Sparkling&apos;s Dental Clinic today and
                        discover why we are the best dental clinic for you. Your smile is our
                        priority.
                    </p>
                    <button type="button">Get Appointment Now</button>
                </div>
                <img src={cover} alt="Cover" />
            </div>
            <div className={styles.stats}>
                <article>
                    <h2>15+</h2>
                    <p>Experts</p>
                </article>
                <div className={styles.divisor}></div>
                <article>
                    <h2>3k+</h2>
                    <p>Happy Patients</p>
                </article>
                <div className={styles.divisor}></div>

                <article>
                    <h2>50+</h2>
                    <p>Award Winners</p>
                </article>
                <div className={styles.divisor}></div>

                <article>
                    <h2>100+</h2>
                    <p>Specialized Tooling</p>
                </article>
            </div>
            <article className={styles.intro}>
                <h2>
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Meet our Specialists
                </h2>
                <p>
                    Are you looking for a dental clinic that can provide you with the best care for
                    your oral health? Look no further than Dr. Sparkling&apos;s Dental Clinic, the
                    clinic that has it all. Dr. Sparkling&apos;s Dental Clinic is a modern and
                    innovative dental clinic that offers a wide range of services with all the
                    specialists you need. Whether you need a simple check-up, a root canal, a dental
                    implant, or a complex surgery, we have the right professional for you.
                </p>
            </article>
            <div className={styles.home}>
                {state.data.map((dentist) => (
                    <Card dentist={dentist} key={dentist.id} />
                ))}
            </div>
            <div className={styles.subscribe}>
                <p>Subscribe to our newsletter to receive the best tips of the month!</p>
                <form>
                    <input
                        type="email"
                        placeholder="Your email here"
                        aria-label="Type your email here"
                    />
                    <button type="button" aria-label="Submit email">
                        <i className="fa-solid fa-check"></i>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Home;
