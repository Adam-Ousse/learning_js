


```jsx
export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>)
}
```

```jsx
function App() {

    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            </div>)
```

using .map()

```jsx
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
```
important to use key={} to something unique to each time like the id, so that react can optimize rendering