// import React, { createContext, useCallback } from 'react'
// import { Outlet } from 'react-router-dom';
// import { setCadastro } from '.././controllers/rgetCadastro';

// type FormData = {
//     nome: string;
//     sobrenome: string;
//     cpf: string;
//     idade: string;
// };

// type FormContextType = {
//     formData: FormData;
//     setFormData: React.Dispatch<React.SetStateAction<FormData>>;
//     sendToFormtoDB: () => void,
// };

// export const FormContext = createContext<FormContextType>({
//     formData: {
//         nome: "",
//         sobrenome: "",
//         cpf: "",
//         idade: "",
//     },
//     setFormData: () => { },
//     sendToFormtoDB: () => { },
// });


// const RootInicio: React.FC = () => {
//     const [formData, setFormData] = React.useState<FormData>({
//         nome: "",
//         sobrenome: "",
//         cpf: "",
//         idade: "",
//     });

//     const sendToFormtoDB = useCallback(async () => {
//         await setCadastro(formData);
//     }, [formData]);

//     return (
//         <FormContext.Provider value={{ formData, setFormData, sendToFormtoDB }}>
//             <div style={{ height: '100vh', width: '100vw' }}>
//                 <Outlet />
//             </div>
//         </FormContext.Provider >
//     );
// }

// export default RootInicio;