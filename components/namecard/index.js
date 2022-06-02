import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {FaInstagram, FaGithub, FaLinkedin,} from 'react-icons/fa';

export default function Namecard({name, position, cover, dp, github, insta, linkedin, club}){

            return(
                <>
                   <div className="max-w-2xl shadow-md mb-5 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900">
                    <div className="rounded-t-lg h-32 overflow-hidden">
                      <img className="object-cover object-top w-full" src="./about2.png" alt='cover photo'></img>
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                      <img className="object-cover object-center " src={'./'+dp} alt='Woman looking front'></img>
                    </div>
                    <div className="text-center mt-2">
                      <h2 className="font-semibold">{name}</h2>
                      <p className="text-gray-500">{position}</p>
                    </div>
                    <div className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                      <a href={"https://linkedin.com/in/" + linkedin} target="_blank"><FaLinkedin/></a>
                      <a href={"https://github.com/" + github} target="_blank"><FaGithub/></a>
                      <a href={"https://instagram.com/" + insta} target="_blank"><FaInstagram/></a>
                    </div>
                    <div className="p-4 border-t mx-8 mt-2">
                      <div className="w-3/4 block mx-auto text-center rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">{club}</div>
                    </div>
                  </div>
                </>
            )

    }