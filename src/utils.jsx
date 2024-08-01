import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiHome } from 'react-icons/hi';
import { ImHeartBroken, ImPhoneHangUp } from 'react-icons/im';
import { FaDog, FaCat } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

export const links = [
    { id: 1, text: 'Home', url: '/', icon: <HiHome /> },
    { id: 2, text: 'Browse Pets', url: '/browse-pets', icon: <HiMagnifyingGlass /> },
    { id: 3, text: 'Find a Pet', url: '/find-pet', icon: <MdPets /> },
    { id: 4, text: 'Dog Care', url: '/dog-care', icon: <FaDog /> },
    { id: 5, text: 'Cat Care', url: '/cat-care', icon: <FaCat /> },
    { id: 6, text: 'Give Away', url: '/give-away', icon: <ImHeartBroken /> },
    { id: 7, text: 'Contact Us', url: '/contact', icon: <ImPhoneHangUp /> },
];
