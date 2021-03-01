import UseStateArray from "./database/gallery"


function GalleryContent(){
    return(
        <section>
            <div className="titleText">
                <h1>Gallery</h1>
            </div>
            <UseStateArray />
        </section>
    )
}

export default GalleryContent;