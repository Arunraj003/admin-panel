import { ArrowTopRightOnSquareIcon, BellIcon, CreditCardIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import { ChartBarIcon, DocumentMagnifyingGlassIcon, HomeIcon } from '@heroicons/react/16/solid';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
            <div className='h-20 items-center flex'>
                <HomeIcon width={40} id='home'
                    className='text-gray-300 w-6 h-6 left-3 sm:left-6 fixed' />
            </div>
            <div className='fixed left-3 sm:left-6 top-[100px]'>
                <ChartBarIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />

                <DocumentMagnifyingGlassIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />

                <EnvelopeIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />

                <CreditCardIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />

                <BellIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
            </div>

            <div className='fixed bottom-4 left-3 sm:left-6'>
                <a href='#top'>
                    <ArrowUpIcon 
                    width={40}
                        className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
                    />
                </a>
                <ArrowTopRightOnSquareIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
                />
                <UserCircleIcon width={40}
                    className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
                />
            </div>
        </div>
    );
};

export default Sidebar;
