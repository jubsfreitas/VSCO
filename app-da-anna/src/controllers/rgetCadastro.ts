// import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// // import Filters from "../components/pesquisa/Filters/Filters";
// // import { useState } from "react";

// const db = getFirestore();

// type Optional<T> = { [K in keyof T]?: T[K] | undefined };

// export default interface Cadastro {
//     nome: string;
//     sobrenome: string;
//     cpf: string;
//     idade: string;
// }

// export const getCadastroByID = async (id: string) => {
//     console.log("getCadastroByID");
//     const ref = doc(collection(db, 'cadastros'), id);
//     const listCadastros = await getDoc(ref);
//     return listCadastros;
// }

// export const setCadastroByID = async (id: string, cadastro: Optional<Cadastro>) => {
//     console.log("setCadastroByID");
//     const ref = doc(collection(db, 'cadastros'), id);
//     await setDoc(ref, cadastro);
// }

// export const setCadastro = async (cadastro: Cadastro) => {
//     console.log("setCadastro");
//     const ref = doc(collection(db, 'cadastros'));
//     await setDoc(ref, cadastro);
// }