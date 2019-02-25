import React , {Component} from 'react'

export default class Article extends Component {
    render(){
        const {article} = this.props;
        return (<div>
                <h3>{article.title}</h3>
                <section>{article.text}</section>
            </div>
        )
    }
}

// export default function Article(props) {
//     const {article} = props;
//     return (<div>
//         <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }
