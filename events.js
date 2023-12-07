import {EventEmitter } from "events"

const eventEmitter = new EventEmitter();

eventEmitter.on("MeuCodigo", obj => {
    console.log(obj);
});

export default eventEmitter;