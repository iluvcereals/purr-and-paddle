import { HiHome } from 'react-icons/hi';
import { ImHeartBroken, ImPhoneHangUp } from 'react-icons/im';
import { FaDog, FaCat, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

export const links = [
    { id: 1, text: 'Home', url: '/', icon: <HiHome /> },
    { id: 2, text: 'Find a Pet', url: '/find-pet', icon: <MdPets /> },
    { id: 3, text: 'Dog Care', url: '/dog-care', icon: <FaDog /> },
    { id: 4, text: 'Cat Care', url: '/cat-care', icon: <FaCat /> },
    { id: 5, text: 'Give Away', url: '/give-pet', icon: <ImHeartBroken /> },
    { id: 6, text: 'Login', url: '/login', icon: <FaSignInAlt /> },
    { id: 7, text: 'Signup', url: '/signup', icon: <FaUserPlus /> },
    { id: 9, text: 'Contact Us', url: '/contact', icon: <ImPhoneHangUp /> },
];

export const dogCareDescriptions = [
    {
        title: 'Feeding',
        description:
            'Keeping your dog well-fed is key to their happiness. Feed them high-quality dog food twice a day, and always have fresh water available. Each dog has unique needs, so check with your vet to tailor their diet just right. ',
    },
    {
        title: 'Exercise',
        description:
            'Every dog loves to play! Aim for at least 30 minutes of exercise each day. Whether it’s a brisk walk, a game of fetch, or some playtime with their favorite toy, regular activity keeps your dog fit and happy. ',
    },
    {
        title: 'Grooming',
        description:
            'A clean dog is a happy dog! Regular grooming helps keep their coat shiny and their skin healthy. Brush them often, bathe as needed, and don’t forget to trim their nails and check their ears. ',
    },
    {
        title: 'Veterinary Care',
        description:
            'routine vet visits are essential for your dog’s health. schedule regular check-ups and vaccinations to keep them healthy. dental care is also important—discuss with your vet how often your dog needs a dental check. ',
    },
    {
        title: 'Nutrition',
        description:
            'Feed your dog a balanced diet that suits their age, size, and health. Quality dog food is a must, and while it might be tempting to share your snacks, stick to dog-friendly treats. ',
    },
    {
        title: 'Training',
        description:
            'Training is more than just commands; it’s about building a strong bond with your dog. Start with basic commands like "sit" and "stay," and use positive reinforcement to encourage good behavior. ',
    },
];

export const catCareDescriptions = [
    {
        title: 'Feeding',
        description:
            'Give your cat a balanced diet tailored to their age, size, and health needs. Feed them high-quality cat food and make sure they always have fresh water. Consult your vet for the best dietary plan. ',
    },
    {
        title: 'Exercise',
        description:
            'Keep your cat active with playtime! Interactive toys, climbing trees, and laser pointers can help satisfy their natural hunting instincts and keep them healthy. Aim for regular play sessions each day.',
    },
    {
        title: 'Grooming',
        description:
            'Regular grooming keeps your cat’s coat clean and reduces shedding. Brush their fur as needed, especially for long-haired breeds, and trim their nails to prevent them from getting too sharp. ',
    },
    {
        title: 'Veterinary Care',
        description:
            'Schedule routine vet visits to monitor your cat’s health and ensure they receive necessary vaccinations. Regular check-ups help catch any health issues early. Don’t forget dental care! ',
    },
    {
        title: 'Nutrition',
        description:
            'Provide a nutritious diet with high-quality cat food suitable for their life stage. Avoid giving them human food, as some can be harmful. Regular feeding and monitoring their weight are key. ',
    },
    {
        title: 'Training',
        description:
            'While cats may not need the same training as dogs, basic training like litter box use and scratching post habits can be helpful. Use positive reinforcement and patience to guide them. ',
    },
];
