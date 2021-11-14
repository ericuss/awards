import { FC, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { VoteDetail } from './VoteDetail';
import 'react-tabs/style/react-tabs.css';
import SettingsJson from '../../config/settings.json';
import { Vote } from '../../types';
import './index.css'
export const Awards: FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [vote, setVote] = useState<Vote>();

    const decrementIndex = () => {
        if (index != 0) {
            setIndex(index - 1)
        }
    };

    const incrementIndex = () => {
        if (index != SettingsJson.books.length - 1) {
            setIndex(index + 1);
        }
    };

    useEffect(() => {
        setVote(undefined);
        setVote(SettingsJson.books[index]);
    }, [index])

    return (<>
        <h1>Awards</h1>
        <div className="navigation">
            <button className="button vertical-middle" onClick={decrementIndex}>{'<< Anterior'}</button>
            <h2>Número de votos: {vote?.votes}</h2>
            <button className="button vertical-middle" onClick={incrementIndex}>{'Siguiente >>'}</button>
        </div>
        <div>
            {
                vote && <VoteDetail vote={vote} ></VoteDetail>
            }
        </div>
    </>
    );
}

