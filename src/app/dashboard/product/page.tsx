import { Form } from './components/form'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'

export default async function Product() {
  try {
    const token = await getCookieServer();

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.get("/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return <Form categories={response.data} />
  } catch (err) {
    console.error("Erro ao buscar categorias:", err);
    return <p>Erro ao carregar categorias.</p>;
  }
}
