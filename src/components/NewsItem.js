import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{ left: '85%', zIndex: '1' }}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEMiDWtfT3tgMfKhM37oJg9vthWl3dkmI8Q&usqp=CAU"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p> */}
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem