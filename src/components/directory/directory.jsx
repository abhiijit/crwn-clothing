import React, { Component } from 'react'
import './directory.scss'
import Menuitem from '../menu-item/menuitem'

export class directory extends Component {
    constructor(){
        super();

        this.state ={
         sections: [
            {
            title: 'Hats',
            imageURL : "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            size:'large',
            linkUrl: 'hats'
            },
            {
                title: 'Jackets',
                imageURL : "https://i.ibb.co/px2tCc3/jackets.png",
                id: 2,
                size:'large',
                linkUrl: ''
                },
                {
                    title: 'Sneakers',
                    imageURL : "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                    size:'large',
                    linkUrl: ''
                    },
                    {
                        title: 'Womens',
                        imageURL : "https://i.ibb.co/GCCdy8t/womens.png",
                        id: 4,
                        size:'large',
                        linkUrl: ''
                        },
                        {
                            title: 'Mens',
                            imageURL : "https://i.ibb.co/R70vBrQ/men.png",
                            id: 5,
                            size:'large',
                            linkUrl: ''
                            },
        ]
    }
    }
  render() {
    return (
      <>
        {this.state.sections.map(({id, ...otherSectionsProps}) => (
            <Menuitem key={id} {...otherSectionsProps}/>
        ))}
      </>
    )
  }
}

export default directory