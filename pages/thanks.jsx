import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'We love you buddy',
        'Thanks dude',
        'Thank you for choosing our bot'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;
