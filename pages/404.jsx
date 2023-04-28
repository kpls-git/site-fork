import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Have you lost your way, kiddo?',
        'Stop dodging the real website!',
        'Damn it! This dead-end road.',
        'if only this was a real place.',
        'Are you a bot? wrong way!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

