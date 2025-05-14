/* 
    props = read-only properties that are shared between components.
            A parent component can send data to a child component.
            <Component key=value/>>
*/


import PropTypes from 'prop-types';

function Card({src, alt='Default image', title='Default', desc='Default'}){
    return(
        //with jsx, use 'className'
        <a href="http://">
            <div className="card">
                <img className='card-img' src={src} alt={alt}/>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text'>{desc}</p>
            </div>
        </a>

    );
}

//stating prop types helps with debugging by displaying errors in the console
Card.PropTypes={
    alt: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default Card