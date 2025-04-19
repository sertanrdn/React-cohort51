import { useState, useEffect } from "react";
import Person from "./Person";

function PersonController () {
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
        try {
        const response = await fetch('https://www.randomuser.me/api?results=1');

        if (!response.ok) throw new Error(`HTTP error: ${response.status}. ${response.statusText}`);

        const data = await response.json();

        const person = data.results[0];

        setPerson({
            first_name: person.name.first,
            last_name: person.name.last,
            email: person.email
        });

        } catch (error) {
        console.error('Error fetching data: ', error);
        }
    }

    useEffect(() => {
        getPerson();
    }, []);

    return <Person person={person} />;
}

export default PersonController;