import UseStateArray from "./database/gallery"


function GalleryContent(){
    return(
        <section>
            <h1 className="titleText">Gallery</h1>
            <UseStateArray />
        </section>
    )
}

export default GalleryContent;