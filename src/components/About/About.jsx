import Nav from "../Nav/Nav";
import "../styles.css"

export default function About() {
    return(
        <div>
            <Nav />
            <main>
                <h1>Myself</h1>

                <div>
                    I am a computer science student and a software engineer at a startup!
                    <br />
                    Suffer from imposter syndrome most of the time.
                    <br />
                    I only know how to work hard, that is what is liked about me by my employer and instructors (and that is the only thing I am confident about - that I can work hard).
                    <br />
                </div>

                <div>

                    <span class="miniHeading"> Interesting fact: </span>
                    <br />
                    One thing which I have noticed in my CS groups is that people are very cocky and TRY to sound very intelligent, they feel themselves on the 7th cloud because they are in CS major at UBC. 
                    <br />
                    However, the actual software engineers who work in big companies, I find them very humble and down to earth.
                </div>

                <div>
                    <span class="miniHeading"> About the Project: </span>
                    <br />
                    I have found a team for the project. We are planning to make a sports website, more like Tinder for sports where a person will be matched with the sports club around him/her.
                    <br />
                    I am excited!
                </div>

        </main>
        </div>
    )
  }
  