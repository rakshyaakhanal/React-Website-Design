import React from 'react';
import Image from '../../Images/values.jpg';
import SectionHead from '../SectionHead/SectionHead';
import Card from '../../UI/Card';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../../data';

const Values = () => {
    return (
        <section className='values'>
            <div className='container values-container'>
                <div className='values-left'>
                    <div className='values-image'>
                        <img src={Image} alt='Values Image' />
                    </div>
                </div>

                <div className='values-right'>
                    <SectionHead icon={<GiCutDiamond />} title='Values' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sit ex adipisci cumque autem
                        id at doloribus neque. Totam amet qui, quae repellendus excepturi non error ipsum nisi cum modi!
                    </p>
                    <div className='values-wrapper'>
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return (
                                    <Card className='values-value' key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;