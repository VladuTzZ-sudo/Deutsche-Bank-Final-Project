import React from 'react'
import Button from '../Button/Button';
import styles from './Footer.module.css';

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className={`${styles["pageColor"]}`}>
            <span className={`${styles["text--footer"]}`}>You are logged in as Vlad-Cristian MATEI (Log out)</span>
            <span className={`${styles["text--footer"]}`}>Reset user tour on this page</span>
            <span className={`${styles["text--footer"]}`}>03-ACS-L-A3-S2-BD1-CC</span>
            <span className={`${styles["text--footer"]}`}>Data retention summary</span>
            <span className={`${styles["text--footer"]}`}>Get the mobile app</span>
            <span className={`${styles["text--footer"]}`}>Acest site este hostat pe platforma hardware achiziționată din proiectul nr. 154/323 cod SMIS - 4428, "Platforma de e-learning si curricula e-content pentru invatamantul superior tehnic". Pentru mai multe detalii vezi http://www.curs.pub.ro.</span>
        </div>
    )
}
