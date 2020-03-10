import React from 'react';
import { Link } from 'react-router-dom';

import utdLogo from '../Resources/images/logos/manchesr_united.png';

export const UtdLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${utdLogo}) no-repeat`
        }}
    ></div>

    //if the logo has the link, will be clickable and redirct to the link
    //if not, will just be a static logo
    if(props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }

}