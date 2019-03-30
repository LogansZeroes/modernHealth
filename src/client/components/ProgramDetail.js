import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Modal from './Modal';

class ProgramDetail extends Component {
    constructor(){
        super();
        this.state = {
            programDetail: null,
            sections: null,
            loaded: false,
            modalVisible: false,
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
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
        const promiseProgram = axios({
            method: 'GET',
            url: `/api/programs/${this.props.match.params.id}`
        })

        const promiseSections = axios({
            method: 'GET',
            url: `/api/sections/${this.props.match.params.id}`
        })

        Promise.all([promiseProgram, promiseSections])
                .then( values => {
                    const [programData, sectionsData] = values;
                    
                    this.setState({
                        programDetail: programData.data.program,
                        sections: sectionsData.data.sections,
                        loaded: true
                    });
                })
                .catch(err => {
                    console.log(`ERROR: ${err}`);
                })
    }

    renderSections(){
        const {sections, orderIndexMap} = this.state;

        return sections.map( section => (
            <div className="card shadow p-3 mb-5 bg-white rounded col-8" key={section.id}>
                <div className="form-check d-flex flex-row-reverse">
                    <label className="form-check-label">
                        {
                            section.completed ?
                                <input readOnly type="checkbox" className="form-check-input" checked />
                            :
                                <input readOnly type="checkbox" className="form-check-input" />
                        }
                    </label>
                </div>
                <Link to={`/program/${section.program_id}/${section.id}`}>
                    <img className="card-img-top" src={section.img} />
                    <div className="card-body">
                        <p className="card-text">Part {orderIndexMap[section.order_index]}</p>
                        <h5 className="card-title">{section.name}</h5>
                    </div>
                </Link>
            </div>
        ));
    }

    renderProgramDetail(){
        const {loaded, programDetail, modalVisible} = this.state;

        if(loaded){
            return (
                <div className="program-card">
                    <div className="program-header col-10 mx-auto">
                        <h3 className="program-name">{programDetail.name} Program</h3>
                        <button onClick={this.showModal}>Learn More</button>
                    </div>
                    <div className="card-deck col-10 mx-auto">
                        {this.renderSections()}
                    </div>
                    <Modal 
                        show={modalVisible} 
                        handleClose={this.closeModal} 
                        description={programDetail.description}
                        title={programDetail.name}
                    />
                    <Link to="/" className="back-button">Back to All Programs</Link>
                </div>
            );
        } else {
            return <p>Loading...</p>
        }
    }

    showModal() {
        this.setState({
            modalVisible: true
        });
    }

    closeModal() {
        this.setState({
            modalVisible: false
        });
    }

    render(){
        return (
            <div>
                {this.renderProgramDetail()}
            </div>
        );
    }
}

export default ProgramDetail;
