import React from 'react'
import styles from './FooterClient.module.scss';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { logoPath, logoWhiteFullPath, logoWhitePath } from '../../../constant/client';

const FooterClient = () => {
    return (
        <>
            <div className="container mx-auto">
                <footer>
                    <div className={`${styles['top']} rounded-3xl p-6 flex`}>
                        <div className={`${styles['left']} space-y-4`}>
                            <div className={`${styles['heading']}`}>
                                <h3>
                                    Join our KicksPlus Club & get 15% off
                                </h3>
                            </div>

                            <div className="script">
                                <p>
                                    Sign up for free! Join the community.
                                </p>
                            </div>

                            <div className="pb-16">
                                <form>
                                    <div className="space-x-2">
                                        <input type="text" placeholder='Email address' />

                                        <button>SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className={`${styles['right']} flex items-center justify-center`}>
                            <img src={logoWhiteFullPath} alt="logo" />
                        </div>
                    </div>

                    <div className={`${styles['bot']} rounded-3xl p-6 flex flex-col`}>
                        <div className="flex space-x-6">
                            <div className={`${styles['footCol']}`}>
                                <div className={`${styles['heading']}`}>
                                    <h3 className='text-2xl'>About us</h3>
                                </div>

                                <div className=''>
                                    <p className='text-justify'>
                                        We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles['footCol']}`}>
                                <div className={`${styles['heading']}`}>
                                    <h3 className='text-2xl'>Categories</h3>
                                </div>

                                <div className=''>
                                    <ul>
                                        <li>
                                            <Link to={''}>Runners</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Sneakers</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Basketball</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Outdoor</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Golf</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Hiking</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${styles['footCol']}`}>
                                <div className={`${styles['heading']}`}>
                                    <h3 className='text-2xl'>Company</h3>
                                </div>

                                <div className=''>
                                    <ul>
                                        <li>
                                            <Link to={''}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Basketball</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Blogs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${styles['footCol']}`}>
                                <div className={`${styles['heading']}`}>
                                    <h3 className='text-2xl'>Follow us</h3>
                                </div>

                                <div className=''>
                                    <ul className='flex space-x-6'>
                                        <li>
                                            <Link to={''} className='text-2xl'><FacebookOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-2xl'><TwitterOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-2xl'><InstagramOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-2xl'><YoutubeOutlined /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <img src={logoWhitePath} alt='logo' />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default FooterClient