"use client";

import { useState } from "react";

export function Button() {
    const [nome, setNome] = useState("Fernando");

    function changeName() {
        setNome("João");
    }

    return (
        <div>
            <button onClick={changeName}>
                Alterar nome
            </button>
            <h3>Nome: {nome}</h3>
        </div>
    );
}