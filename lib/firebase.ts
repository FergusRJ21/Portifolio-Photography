// Documentação: Configuração e Inicialização do Firebase
// src/lib/firebase.ts

// 1. Importamos as funções necessárias do Firebase
// initializeApp: Inicia a conexão com o Firebase
// getApps / getApp: Verificam se a conexão já existe
import { getApp, getApps, initializeApp } from "firebase/app";
// getStorage: Importa o módulo de armazenamento (onde ficarão as fotos)
import { getStorage } from "firebase/storage";

// 2. Buscamos as chaves seguras que guardamos no arquivo .env.local
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 3. Encapsulamento e Otimização (Singleton)
// O Next.js recarrega partes do código constantemente. 
// Para evitar que o Firebase seja iniciado várias vezes (o que causaria um erro de memória),
// verificamos se ele já existe (!getApps().length). Se não, iniciamos. Se sim, pegamos o existente.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 4. Preparamos o serviço de armazenamento (Storage)
const storage = getStorage(app);

// 5. Exportamos para podermos usar em outras partes do nosso portfólio
export { app, storage };
