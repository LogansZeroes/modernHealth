import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Programs extends Component {
    constructor(){
        super();
        this.state = {
            programs: [],
            loaded: false
        };
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: '/api/programs'
        })
        .then(data => {
            this.setState({
                programs: data.data.programs,
                loaded: true
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
        })
    }

    renderSections(){
        const {sections, orderIndexMap} = this.state;

        const jsxSections = sections.map( section => (
            <div className="card shadow p-3 mb-5 bg-white rounded col-8" key={section.id}>
                <Link to={`/program/${section.program_id}/${section.id}`}>
                    <img className="card-img-top" src={section.img} />
                    <div className="card-body">
                        <p className="card-text">Part {orderIndexMap[section.order_index]}</p>
                        <h5 className="card-title">{section.name}</h5>
                    </div>
                </Link>
            </div>
        ));

        return jsxSections;
    }

    renderPrograms(){
        const {loaded, programs} = this.state;

        if(loaded){
            return programs.map( ({id, name, img, description}) => (
                <div className="card shadow p-3 mb-5 bg-white rounded col-8" key={id}>
                    <h5 className="card-title">{name} Program</h5>
                    <Link to={`/program/${id}`}>
                        <img className="card-img-top" src={img} />
                        <div className="card-body program-body">
                            <p className="card-text">{description}</p>
                        </div>
                    </Link>
                </div>
            ));
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        return (
            <div className="programs">
                <div className="program-header col-10 mx-auto">
                    <h3 className="program-name">All Programs</h3>
                </div>
                <div className="card-deck col-10 mx-auto">
                    {this.renderPrograms()}
                </div>
            </div>
        );
    }
}

export default Programs;
