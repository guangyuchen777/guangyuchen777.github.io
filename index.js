function Nav() {
    return (
        <div className="Nav_layout">
            <h4 className="Nav_logo"><a href="index.html">GUANG</a></h4>
            <div className="Nav_item">
                <h4><a href="index.html">HOME</a></h4>
                <h4><a href="#Work">WORK</a></h4>
                <h4><a href="PDP.html">PDP</a></h4>
            </div>
        </div>
    )
}

function Head() {
    return (
        <div id="Home" className ="Head">
            <div className="Head_introduce">
            <h1>Hello,</h1>
            <h2>My name is Guang,</h2>
            <h3>an <span className="purple">Engineering Designer</span> who</h3>
            <h3>is passionate about <span className="underline">development</span>,</h3>
            <h3>and love to design for <span className="underline">aging population</span>.</h3>
            </div>
            <span class="Sphere"></span>
        </div>
    )
}

const cards= card_data.map(item => 
    <WorkCard 
        {...item}
        // title={item.title}
        // time={item.time}
        // num={item.num}
    />
    )

function WorkCard(props) {
    let numLayout;
    if (props.num ===1 ) {
        numLayout = "indi_card_layout"
    } else if (props.num === 2) {
        numLayout= "indi_card_layout_alter"
    }

    return (
        <a className={numLayout} href={props.url}>
            <img src={props.img} className="card_img"/>
            {/* <div className="card_img"></div> */}
            <div className="overlay">
                
            </div>
            <h2 className="card_title">{props.title}</h2>
                <h4 className="card_time">{props.time}</h4>
            
        </a>
    )
}

function Work() {
    return (
        <div id="Work" className="Work">
            <h1> </h1>
            <h1>WORK</h1>
            <div className="card_layout">
                {cards}
            </div>
        </div>
    )
}


function Contact() {
    return (
        <div id="Contact">
            <h1>Guangyu Chen </h1>
            <h3>g.chen@student.tue.nl</h3>
        </div>
    )
}

function Foot() {
    return (
        <div>
            <h4>@ Guangyu Chen 2022</h4>
        </div>
    )
}

function IndexPage() {
    return (
        <div>
            <Nav />
            <div className="MainBody">
                <Head />
                <Work />
                <Contact />
                <Foot />
            </div>
            
        </div>
    )
} 

ReactDOM.render(<IndexPage />, document.getElementById("root"));