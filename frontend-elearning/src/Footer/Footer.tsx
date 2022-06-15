import React from 'react'
import Button from '../Button/Button';
import './Footer.css';

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='pageColor'>
            <span className='text--footer'>You are logged in as Vlad-Cristian MATEI (Log out)</span>
            <span className='text--footer'>Reset user tour on this page</span>
            <span className='text--footer'>03-ACS-L-A3-S2-BD1-CC</span>
            <span className='text--footer'>Data retention summary</span>
            <span className='text--footer'>Get the mobile app</span>
            <span className='text--footer'>Acest site este hostat pe platforma hardware achiziționată din proiectul nr. 154/323 cod SMIS - 4428, "Platforma de e-learning si curricula e-content pentru invatamantul superior tehnic". Pentru mai multe detalii vezi http://www.curs.pub.ro.</span>
        </div>
    )
}
