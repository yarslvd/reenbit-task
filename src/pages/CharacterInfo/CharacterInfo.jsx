import { useNavigate, useParams } from 'react-router-dom';

import { useGetCharacterInfoQuery } from "../../store/fetchApi";
import Layout from '../../components/Layout/Layout';

import './CharacterInfo.scss';

const CharacterInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoading, data, error } = useGetCharacterInfoQuery(id);

    return (
        <Layout>
            <div className="back" onClick={() => navigate(-1)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
                </svg>
                <span>Go back</span>
            </div>
            {!isLoading && !error &&
                <div className="info">
                    <div className="main-info">
                        <img src={data.image} alt={data.name} />
                        <h2>{data.name}</h2>
                    </div>
                    <div className="detailed-description">
                        <h3>Informations</h3>
                        <div className="wrapper">
                            <div className="el">
                                <span className='option'>Gender</span>
                                <span className='value'>{data.gender}</span>
                            </div>
                            <div className="el">
                                <span className='option'>Status</span>
                                <span className='value'>{data.status}</span>
                            </div>
                            <div className="el">
                                <span className='option'>Specie</span>
                                <span className='value'>{data.species}</span>
                            </div>
                            <div className="el">
                                <span className='option'>Origin</span>
                                <span className='value'>{data.origin.name}</span>
                            </div>
                            <div className="el">
                                <span className='option'>Type</span>
                                <span className='value'>{data.type || 'Unknown'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {error && error.data.error}
        </Layout>
    );
};

export default CharacterInfo;