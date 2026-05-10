# 🚀 Zent - Plataforma de Gestão de Eventos

O **Zent 2.0** é uma solução Full Stack moderna para criação, organização e participação em eventos. 

Neste projeto, **desenvolvi toda a API do zero**, desenhando a arquitetura de dados e regras de negócio para garantir segurança e performance. Já o **frontend foi construído utilizando o Lovable**, resultando em uma interface ágil, responsiva e com foco na experiência do usuário (UX).

## 🛠️ Stack Tecnológico
- **Backend (API):** Node.js, Express, TypeScript, Prisma ORM, PostgreSQL (Supabase), Autenticação JWT e Zod.
- **Frontend (Web):** React, Tailwind CSS, Vite (gerado via Lovable).

## 📸 Imagens do projeto

- <img width="1893" height="906" alt="image" src="https://github.com/user-attachments/assets/7d07dfa7-190d-4a9e-9a7f-9a04e8a63e5f" />
- <img width="1898" height="907" alt="image" src="https://github.com/user-attachments/assets/273701de-e194-4281-8960-1afce4ea38dc" />
- <img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/a02840c5-ac3c-432e-984e-de3fcddc068c" />
- <img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/e23658c3-5eb2-4151-9001-17017da675ff" />
- <img width="1898" height="898" alt="image" src="https://github.com/user-attachments/assets/29e4d33f-cefe-4127-b349-e79c2b599102" />

## 📚 Endpoints Principais (API REST)
| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :---: |
| **POST** | `/register` | Criação de novo usuário | ❌ |
| **POST** | `/login` | Autenticação e retorno do token JWT | ❌ |
| **POST** | `/event` | Criação de um novo evento | ✅ |
| **GET** | `/event` | Listagem dos eventos disponíveis | ✅ |
| **DELETE** | `rota em desenvolvimento` | Exclusão definitiva da conta | ✅ |

## 🌍 Links do Projeto
- **Frontend (Deploy):** https://eventozent.lovable.app/
- **API (Backend):** https://zentapi-2gaw.onrender.com/ *(Nota: Como a API está em um serviço gratuito, a primeira requisição pode levar cerca de 50s para "acordar" o servidor).*

---
👨‍💻 **Desenvolvido por Daniel Kayque** 

https://www.linkedin.com/in/daniel-kayque/ | https://github.com/DanielKayque
