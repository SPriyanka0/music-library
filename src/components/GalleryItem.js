import { useState } from "react";
import { Link } from "react-router-dom";

function GalleryItem(props){
    let [view, setView] = useState(false)
    const simpleView = () => {
        return (
            <div>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div >
                <h2>{props.item.trackName}</h2>
                <h3>
                    <a href={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </a>
                </h3>
                <h3>
                    <a href={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </a>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )

}

export default GalleryItem