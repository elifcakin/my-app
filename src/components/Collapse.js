//ilk constructor çalıştırılıyor. state ilk durum oluşuyor.
//render methodu ilk defa çalıştı
//onClick eventi çalıştı
//setState state nesnesini güncelledi--> triggered render metod
//render metodu güncel jsx i sayfada gösteriyor

import React from "react";

class Collapse extends React.Component {

    state = { showContent: false }

    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }

    // componentDidMount() {
    //     console.log('component olusturuldu')
    // }

    // componentDidUpdate() {
    //     console.log('component guncellendi')
    // }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore } >
                     {/* {this.props.children.props.cardTitle}   */}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {/* {this.props.children} */}
                            {React.Children.map(this.props.children, children => children)}
                        </div> 
                    ) : null
                }
            </div>
        );
    }
}

export default Collapse;