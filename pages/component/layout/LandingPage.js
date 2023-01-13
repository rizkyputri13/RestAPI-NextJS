import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Popover, Menu, Transition } from '@headlessui/react';
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux';
import { doPushSignoutRequest } from '../../redux-saga/Action/UsrAction'
import { GetJoblistRequest } from '../../redux-saga/Action/JobListAction';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LandingPage(props) {
    const { children } = props
    const dispatch = useDispatch();
    const router = useRouter()
    const [user, setUser] = useState({})
    const { UserProfile } = useSelector(state => state.usrStated)
    const {Jobs} = useSelector(state  => state.joblistStated)
    useEffect(() => {
       dispatch(GetJoblistRequest());;     
    }, [])
    const onSignout = () => {
        dispatch(doPushSignoutRequest());
        router.reload()
    }
    useEffect(() => {
        setUser(UserProfile)
    },[])
    //console.log(user);
    return (
        <div className='bg-white'>
            <header>
                <Popover className="relative bg-white">
                    {({ open }) => (
                        <>
                            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>

                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    {
                                        user ?
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterhref="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leavehref="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href="#"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 divide-y')}
                                                                    >
                                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Hi, {user.username}!</dd>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>


                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Notifications
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            {/* <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href="/app"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        My App
                                                                    </Link>
                                                                )}
                                                            </Menu.Item> */}
                                                        </div>

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    href="#"
                                                                    onClick={onSignout}
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Sign out
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu> :
                                            <>
                                                <Link href="signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                                    Sign in
                                                </Link>
                                            </>

                                    }

                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterhref="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leavehref="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            <div className="mt-6">
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing account?
                                                    <Link href="signin" className="text-gray-900">
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </header>
            <main>
            {/* {
                Jobs && Jobs.map(job => (
                    <td>{job.company}</td>
                ))
            } */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
