const hello = (req, res) => {
    console.log('Hello bitches');
    res.json({ message: "Hello bitches"});
};

export default hello;