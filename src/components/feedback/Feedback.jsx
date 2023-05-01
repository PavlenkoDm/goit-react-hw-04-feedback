import React, { useState } from 'react';
import { Section } from 'components/index';
import { FeedbackOptions } from 'components/index';
import { Statistics } from 'components/index';

export function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    
    const arrFromState = ['good', 'neutral', 'bad'];


    const hanndleButtonClick = name => {
        switch (name) {
            case 'good':
                return setGood(prevGood => prevGood + 1);

            case 'neutral':
                return setNeutral(prevNeutral => prevNeutral + 1);

            case 'bad':
                return setBad(prevBad => prevBad + 1);

            default:
                console.log('Ooops something wrong!!!');
                break;
        }
    };


    const countTotalFeedback = () => {
        return good + neutral + bad;
    };
    const total = countTotalFeedback();


    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / total) * 100) || 0;
    };
    const positivePercentage = countPositiveFeedbackPercentage();


    return (
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={arrFromState}
                onLeaveFeedback={hanndleButtonClick}
            />

            {total >= 1 && (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                />
            )}
        </Section>
    );
}