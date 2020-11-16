import React, { useState } from 'react';
import Card from "./components/Card";

export default () => {
    const [type, setType] = useState('Grid');
    return <Card type={type} onChange={setType} />
}