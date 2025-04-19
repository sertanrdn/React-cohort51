function Person ({ person }) {
    if (!person) return <p>Loading data...</p>;

    const { first_name, last_name, email } = person;

    return (
        <ul>
            <li>First name: {first_name}</li>
            <li>Last name: {last_name}</li>
            <li>Email: {email}</li>
        </ul>
    );
}

export default Person;