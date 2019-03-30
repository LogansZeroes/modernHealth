import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SectionDetail extends Component {
    constructor(){
        super();
        this.state = {
            sectionDetail: null,
            loaded: false,
            orderIndexMap: {
                1: 'One',
                2: 'Two',
                3: 'Three',
                4: 'Four',
                5: 'Five',
                6: 'Six',
                7: 'Seven',
                8: 'Eight',
                9: 'Nine',
                10: 'Ten'
            }
        };
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: `/api/sections/${this.props.match.params.program_id}/${this.props.match.params.id}`
        })
        .then(data => {
            this.setState({
                sectionDetail: data.data.section[0],
                loaded: true
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
        })
    }

    renderContent(){
        const {content} = this.state.sectionDetail;

        return content.slice(1).map( item => (
            <li className="card-text" key={item}>{item}</li>
        ));
    }

    renderSectionDetail(){
        const {loaded, orderIndexMap, sectionDetail} = this.state;
        
        if(loaded){
            const {program_id, name, img, order_index, content} = sectionDetail;

            return (
                <div className="section-card">
                    <div className="section-header">
                        <h5 className="section-name">Part {orderIndexMap[order_index]}: {name}</h5>
                        <hr className="section-break"/>
                    </div>
                    <div className="card-body section-body">
                        <div className="left-section">
                            <span className="card-text" key={content[0]}>{content[0]}</span>
                            <ul>
                                {this.renderContent()}
                            </ul>
                        </div>
                        <div className="right-section">
                            <img className="card-img" src={img} />
                        </div>
                    </div>
                    <Link to={`/program/${program_id}`} className="back-button">Back</Link>
                </div>
            );
        } else {
            return <p>Loading...</p>
        }
    }

    render(){
        return (
            <div>
                {this.renderSectionDetail()}
            </div>
        );
    }
}

export default SectionDetail;
