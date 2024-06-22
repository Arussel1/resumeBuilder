import { Fragment } from "react";
import emailIcon from './../images/email.svg';
import phoneIcon from './../images/phone.svg';
import githubIcon from './../images/github.svg';
import linkedinIcon from './../images/linkedin.svg';

export default function Title({ name, email, phone, linkedin, github }) {
    return (
        <div className="mb-4 mt-10">
            <h1 className="text-center text-3xl pb-4">{name}</h1>
            <div className="flex justify-center items-center">
                <div className="mx-1 flex items-center">
                    <img src={emailIcon} alt="email icon" className="w-4 h-4 mr-1" />
                    <p className="mb-2">{email}</p>
                    </div>
                <div className="mx-1 flex items-center">
                <img src={phoneIcon} alt="phone icon" className="w-4 h-4 mr-1" />
                    <p className="mb-2">{phone}</p>
                    </div>
                <div className="mx-1 flex items-center">
                    <img src={linkedinIcon} alt="linkedin icon" className="w-4 h-4 mr-1" />
                    <p className="mb-2">{linkedin}</p>
                </div>
            </div>
        </div>
    );
}