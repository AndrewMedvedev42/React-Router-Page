let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."


function HomeContent(){
    return(
        <section className="sectionStyle">
            <div className="titleText">
                <h1>Home page</h1>
            </div>
            <p>{paragraph}</p>
        </section>
        
    )
}

export default HomeContent;